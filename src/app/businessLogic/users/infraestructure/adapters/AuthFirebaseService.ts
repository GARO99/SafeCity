import { Injectable, inject } from "@angular/core";
import { IAuthService } from "../../domain/ports/IAuthService";
import { User as AppUser} from "../../domain/Entities/User";
import { UserCredentials as  AppUserCredentials } from "../../domain/Entities/UserCredentials";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from, map } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export  class AuthFirebaseService extends IAuthService {
  private auth = inject(AngularFireAuth);

  override login(userCredentials: AppUserCredentials): Observable<AppUser> {
    return from (this.auth.signInWithEmailAndPassword(userCredentials.email, userCredentials.password).then(
      r => {
        console.log(r);
        let user: AppUser = {
          id: "",
          identification: {
            type: '',
            number: 0
          },
          username: "",
          name: "",
          email: '',
          lastName: "",
          userEventTags: [],
          active: false
        };
        return user;
      }
    ));
    
  }

  override signUp(user: any): Observable<AppUser> {
    throw new Error("Method not implemented.");
  }

  override hasSession(): Observable<boolean> {
    return this.auth.authState.pipe(
      map((r: firebase.default.User | null) => r != null? true: false)
    );
  }

  override logout(): void {
    this.auth.signOut();
  }

}