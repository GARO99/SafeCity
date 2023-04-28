import { Injectable, inject } from '@angular/core';
import { IAuthService } from '../../domain/ports/IAuthService';
import { User as AppUser } from '../../domain/Entities/User';
import { UserCredentials as AppUserCredentials } from '../../domain/Entities/UserCredentials';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, first, from, map, of, switchMap } from 'rxjs';
import { IGenericRepository } from '@businessLogic/share/Domain/ports/IGenericRepository';
import * as firebase from 'firebase/compat';
import { sha256 } from 'js-sha256';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService extends IAuthService {
  private _auth = inject(AngularFireAuth);
  private _repository = inject(IGenericRepository<AppUser>)

  override login(userCredentials: AppUserCredentials): Observable<AppUser> {
    return from(this._auth.signInWithEmailAndPassword(userCredentials.email, sha256(userCredentials.password))).pipe(
      switchMap((r: firebase.default.auth.UserCredential) => {
        return this._repository.getById(r.user?.uid ?? '').pipe(
          map((userResponse: AppUser) => {
            if (userResponse.emailVerified !== r.user?.emailVerified) {
              userResponse.emailVerified = r.user?.emailVerified
              this._repository.update(userResponse);
            }
            return userResponse;
          })
        );
      }),
      first()
    );

  }

  override signUp(user: AppUser, password: string): Observable<AppUser> {
    return from(this._auth.createUserWithEmailAndPassword(user.email, sha256(password))).pipe(
      switchMap((r: firebase.default.auth.UserCredential) => {
        user.id = r.user?.uid;
        user.emailVerified = r.user?.emailVerified;
        return this._repository.create(user);
      }),
      first()
    );
  }

  override hasSession(): Observable<AppUser | null> {
    return this._auth.authState.pipe(
      switchMap((r: firebase.default.User | null) => {
        if (r != null) {
          return this._repository.getById(r.uid).pipe(
            map((userResponse: AppUser) => {
              if (userResponse.emailVerified !== r.emailVerified) {
                userResponse.emailVerified = r.emailVerified
                this._repository.update(userResponse);
              }
              return userResponse;
            })
          );
        }
        return of(null);
      })
    );
  }

  override async sendEmailVerification(): Promise<void> {
    (await this._auth.currentUser)?.sendEmailVerification();
  }

  override checkEmailVerification(): Observable<boolean> {
    return from(this._auth.currentUser).pipe(
      switchMap((user: firebase.default.User | null) => {
        if (user) {
          return from(user.reload()).pipe(
            switchMap(() => {
              return this._auth.user.pipe().pipe(
                map((updateUser: firebase.default.User | null) => {
                  if (updateUser) {
                    return updateUser.emailVerified;
                  }
                  return false
                })
              )
            }),
            first()
          )
        }
        return of(false)
      }),
      first()
    )
  }

  override logout(): void {
    this._auth.signOut();
  }
}