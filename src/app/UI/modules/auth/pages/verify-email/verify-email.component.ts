import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@businessLogic/share/Domain/Services/StorageService';
import { User } from '@businessLogic/users/domain/Entities/User';
import { Authentication } from '@businessLogic/users/usesCases/Authentication';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  private _auth = inject(Authentication);
  private _router = inject(Router);
  private _storageService = inject(StorageService);
  private _intervalId: any;
  user: User | undefined;

  ngOnInit(): void {
    this._storageService.getSession<User>().then(
      (r => this.user = r)
    )
    this._intervalId = setInterval(() => {
      this._auth.checkEmailVerification().subscribe(
        ((r: boolean) => {
          if (r) {
            clearInterval(this._intervalId);
            this._router.navigate(['/app/insecurityreports']);
          }
        })
      )
    }, 2000)
  }

  resendVerificationEmail(): void {
    this._auth.resendEmailVerification();
  }
}
