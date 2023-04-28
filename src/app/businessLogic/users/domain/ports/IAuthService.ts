import { Observable } from 'rxjs';
import { User as AppUser } from '../Entities/User';
import { UserCredentials as  AppUserCredentials } from '../Entities/UserCredentials';

export abstract class IAuthService {
    abstract login(userCredentials: AppUserCredentials): Observable<AppUser>;
    abstract signUp(user: AppUser, password: string): Observable<AppUser>
    abstract hasSession(): Observable<AppUser | null>;
    abstract sendEmailVerification(): void;
    abstract checkEmailVerification(): Observable<boolean>
    abstract logout(): void;
}