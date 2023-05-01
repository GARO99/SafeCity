import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Authentication } from '@businessLogic/users/usesCases/Authentication';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsNotVerifyEmailGuard {
  private _auth = inject(Authentication);
  private _router = inject(Router);
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._auth.isLoggedIn().pipe(
      map(r => {
        if (r === null) {
          return false;
        }
        if (!r?.emailVerified) {
          return true;
        } else {
          return false;
        }
      }),
      tap(IsNotVerifyEmail => {
        if (!IsNotVerifyEmail) {
          this._router.navigate(['']);
        }
      })
    );
  }

}
