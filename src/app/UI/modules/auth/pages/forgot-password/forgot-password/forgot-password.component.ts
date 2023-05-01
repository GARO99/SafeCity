import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '@businessLogic/users/usesCases/Authentication';
import { ToastService } from 'src/app/UI/core/services/toast/toast.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  private _auth = inject(Authentication);
  private _router = inject(Router);
  private _fb = inject(FormBuilder);
  private _toastService = inject(ToastService);

  resetPasswordForm!: FormGroup;
  validations: any = {
    'email': [
      { type: 'required', message: 'El email es requerido.' },
      { type: 'pattern', message: 'El email debe ser válido' },
    ]
  }

  constructor() {
    this.FormBuild();
  }

  private FormBuild(): void {
    this.resetPasswordForm = this._fb.group({
      email: [null, [Validators.required, Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]]
    });
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    if (this.resetPasswordForm.valid) {
      this._auth.sendPasswordResetEmail( this.resetPasswordForm.get('email')?.value).subscribe(
        () => {
          this._router.navigate(['/login']);
          this._toastService.topToast('Revise su correo electrónico para completar el proceso.');
        }
      );
    } else {
      this.resetPasswordForm.markAllAsTouched();
    }
  }
}
