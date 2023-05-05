import { Injectable, inject } from '@angular/core';
import { IAuthService } from '../../domain/ports/IAuthService';
import { User as AppUser } from '../../domain/Entities/User';
import { UserCredentials as AppUserCredentials } from '../../domain/Entities/UserCredentials';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, first, from, map, of, switchMap, tap } from 'rxjs';
import { IGenericRepository } from '@businessLogic/share/Domain/ports/IGenericRepository';
import * as firebase from 'firebase/compat';
import { GoogleAuthProvider, OAuthProvider } from '@angular/fire/auth';
import { DataModelsEnum } from '@businessLogic/share/infraestructure/enums/DataModelsEnum';
import { IFileSotrageService } from '@businessLogic/share/Domain/ports/IFileSotrageService';
import { BaseFilePathEnum } from '@businessLogic/share/infraestructure/enums/BaseFilePathEnum';

const defaultAvatar = 'avatar-0.svg';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService extends IAuthService {
  private _auth = inject(AngularFireAuth);
  private _repository = inject(IGenericRepository<AppUser>)
  private _fileStorage = inject(IFileSotrageService);

  constructor() {
    super();
    this._repository.setDataModel(DataModelsEnum.user);
    this._fileStorage.setBaseFilePath(BaseFilePathEnum.appAvatars);
  }

  override login(userCredentials: AppUserCredentials): Observable<AppUser> {
    return from(this._auth.signInWithEmailAndPassword(userCredentials.email, userCredentials.password)).pipe(
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
    return from(this._auth.createUserWithEmailAndPassword(user.email, password)).pipe(
      switchMap((r: firebase.default.auth.UserCredential) => {
        return this._fileStorage.getUrlFile(defaultAvatar).pipe(
          switchMap((imgUrl:string) => {
            user.avatarUrl = imgUrl;
            user.id = r.user?.uid;
            user.emailVerified = r.user?.emailVerified;
            return this._repository.create(user);
          })
        );
      }),
      first()
    );
  }

  override loginWithGoogle(): Observable<AppUser> {
    return from(this._auth.signInWithPopup(new GoogleAuthProvider())).pipe(
      switchMap((r: firebase.default.auth.UserCredential) => {
        return this._repository.getById(r.user?.uid ?? '').pipe(
          switchMap((userResponse: AppUser | undefined) => {
            if (userResponse?.email) {
              return of(userResponse);
            } else {
              const profileInfo: any = r.additionalUserInfo?.profile;
              return this._fileStorage.getUrlFile(defaultAvatar).pipe(
                switchMap((imgUrl:string) => {
                  return this._repository.create({
                    id: r.user?.uid,
                    email: r.user?.email,
                    username: '',
                    name: profileInfo?.given_name,
                    lastName: profileInfo.family_name,
                    emailVerified: r.user?.emailVerified,
                    avatarUrl: imgUrl
                  });
                })
              );
            }
          })
        );
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

  override sendEmailVerification(): Observable<void> {
    return from((async () => {
      const user = await this._auth.currentUser;
      if (user) {
        return user.sendEmailVerification();
      }
    })()).pipe(
      first()
    );
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

  override sendPasswordResetEmail(email: string): Observable<void> {
    return from(this._auth.sendPasswordResetEmail(email)).pipe(
      first()
    );
  }
  override logout(): void {
    this._auth.signOut();
  }
}