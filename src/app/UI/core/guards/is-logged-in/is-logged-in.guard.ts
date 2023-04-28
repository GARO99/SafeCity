import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Authentication } from '@businessLogic/users/usesCases/Authentication';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard {
  private _auth = inject(Authentication);
  private _router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._auth.isLoggedIn().pipe(
      map(r => r !== null ? true : false),
      tap(IsLoggedIn => {
        if (!IsLoggedIn) {
          this._router.navigate(['']);
        }
      })
    );
  }

}
