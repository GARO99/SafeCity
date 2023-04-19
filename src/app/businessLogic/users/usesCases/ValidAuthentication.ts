import { Injectable, inject } from "@angular/core";
import { Observable, from } from "rxjs";
import { IAuthService } from "../domain/ports/IAuthService";
import { UserCredentials } from "../domain/Entities/UserCredentials";
import { User } from "../domain/Entities/User";

@Injectable({
  providedIn: 'root'
})
export class ValidAuthentication {
  authService = inject(IAuthService);

  login(userCredentials: UserCredentials): Observable<User>{
    return this.authService.login(userCredentials);
  }

}