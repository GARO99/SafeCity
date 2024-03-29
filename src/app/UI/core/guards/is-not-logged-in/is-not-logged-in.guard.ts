import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Authentication } from '@businessLogic/users/usesCases/Authentication';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsNotLoggedInGuard {
  private _auth = inject(Authentication);
  private _router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const exclude = route.children.some(child => child.data?.['excludeFromAuthGuard']);
    if (exclude) {
      return true;
    }
    return this._auth.isLoggedIn().pipe(
      map(r => r === null ? true : false),
      tap(IsNotLoggedIn => {
        if (!IsNotLoggedIn) {
          this._router.navigate(['/app/insecurityreports']);
        }
      })
    );
  }

}
