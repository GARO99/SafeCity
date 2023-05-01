import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '@businessLogic/users/usesCases/Authentication';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {
  private _auth = inject(Authentication);
  private _router = inject(Router);
  title = 'Perfil'

  logout(): void {
    this._auth.logout();
    this._router.navigate(['']);
  }
}
