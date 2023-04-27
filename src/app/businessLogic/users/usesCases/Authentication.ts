import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { IAuthService } from "../domain/ports/IAuthService";
import { UserCredentials } from "../domain/Entities/UserCredentials";
import { User } from "../domain/Entities/User";

@Injectable({
  providedIn: 'root'
})
export class Authentication {
  private _authService = inject(IAuthService);

  login(userCredentials: UserCredentials): Observable<User> {
    return this._authService.login(userCredentials);
  }

  signUp(user: User, password: string): Observable<User> {
    return this._authService.signUp(user, password);
  }
}