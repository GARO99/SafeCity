export abstract class IAuthService {
    abstract login(username: string, password: string): Promise<any>;
}