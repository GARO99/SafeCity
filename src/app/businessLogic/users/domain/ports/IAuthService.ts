import { Observable } from "rxjs";
import { User as AppUser } from "../Entities/User";
import { UserCredentials as  AppUserCredentials } from "../Entities/UserCredentials";

export abstract class IAuthService {
    abstract login(userCredentials: AppUserCredentials): Observable<AppUser>;
    abstract signUp(user: any): Observable<AppUser>
    abstract hasSession(): Observable<boolean>;
    abstract logout(): void;
}