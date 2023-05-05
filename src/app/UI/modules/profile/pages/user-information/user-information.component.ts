import { Component, OnInit, inject } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import { StorageService } from '@businessLogic/share/Domain/Services/StorageService';
import { User } from '@businessLogic/users/domain/Entities/User';
import { Authentication } from '@businessLogic/users/usesCases/Authentication';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit{
  private _auth = inject(Authentication);
  private _storageServices = inject(StorageService);
  private _router = inject(Router);
  private _location = inject(Location);
  currentUser: User | undefined;
  title = 'Perfil'

  ngOnInit(): void {
    this._storageServices.getSession<User>().then(
      (r => this.currentUser = r)
    );
  }

  logout(): void {
    this._auth.logout();
    this._location.go(this._location.path());
    location.reload();
  }
}
