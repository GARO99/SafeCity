import { Injectable, inject } from "@angular/core";
import { IAuthService } from "../../domain/ports/IAuthService";
import { User as AppUser} from "../../domain/Entities/User";
import { UserCredentials as  AppUserCredentials } from "../../domain/Entities/UserCredentials";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from, of, switchMap } from "rxjs";
import { IGenericRepository } from "@businessLogic/share/Domain/ports/IGenericRepository";
import * as firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export  class AuthFirebaseService extends IAuthService {
  private _auth = inject(AngularFireAuth);
  private _repository = inject(IGenericRepository<AppUser>)

  override login(userCredentials: AppUserCredentials): Observable<AppUser> {
    return from(this._auth.signInWithEmailAndPassword(userCredentials.email, userCredentials.password)).pipe(
      switchMap((r: firebase.default.auth.UserCredential) => {
        return this._repository.getById(r.user?.uid?? '');
      })
    );
    
  }

  override signUp(user: any): Observable<AppUser> {
    throw new Error("Method not implemented.");
  }

  override hasSession(): Observable<AppUser | null> {
    return this._auth.authState.pipe(
      switchMap((r: firebase.default.User | null) => {
        if(r != null){
          return this._repository.getById(r.uid);
        }
        return of(null);
      })
    );
  }

  override logout(): void {
    this._auth.signOut();
  }

}