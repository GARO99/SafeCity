import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Authentication } from '@businessLogic/users/usesCases/Authentication';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsVerifyEmailGuard {
  private _auth = inject(Authentication);
  private _router = inject(Router);
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._auth.isLoggedIn().pipe(
        map(r => {
          if (r === null) {
            return true;
          }
          if(r.emailVerified) {
            return true;
          } else {
            return false;
          }
        }),
        tap(IsVerifyEmail => {
          if (!IsVerifyEmail) {
            this._router.navigate(['/verifyEmail']);
          }
        })
      );
  }
  
}
