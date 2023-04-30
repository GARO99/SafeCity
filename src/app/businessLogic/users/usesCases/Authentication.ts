import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IAuthService } from '../domain/ports/IAuthService';
import { UserCredentials } from '../domain/Entities/UserCredentials';
import { User } from '../domain/Entities/User';
import { StorageService } from '@businessLogic/share/Domain/Services/StorageService';

@Injectable({
  providedIn: 'root'
})
export class Authentication {
  private _authService = inject(IAuthService);
  private _storageServices = inject(StorageService);

  login(userCredentials: UserCredentials): Observable<User> {
    return this._authService.login(userCredentials).pipe(
      map((r: User) => {
        this._storageServices.setSession(r);
        if (!r.emailVerified) {
          console.log(r);
          this._authService.sendEmailVerification();
        }
        return r;
      }
    ));
  }

   loginWithGoogle(): Observable<User> {
    return this._authService.loginWithGoogle().pipe(
      map((r: User) => {
        this._storageServices.setSession(r);
        return r;
      }
    ));
   }

  signUp(user: User, password: string): Observable<User> {
    return this._authService.signUp(user, password);
  }

  isLoggedIn(): Observable<User | null> {
    return this._authService.hasSession().pipe(
      map((r: User | null) => {
        this._storageServices.setSession(r);
        return r;
      })
    );
  }

  checkEmailVerification(): Observable<boolean> {
    return this._authService.checkEmailVerification();
  }

  resendEmailVerification(): Observable<void> {
    return this._authService.sendEmailVerification();
  }
}