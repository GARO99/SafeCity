import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '@businessLogic/users/usesCases/Authentication';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  private _auth = inject(Authentication);
  private _router = inject(Router);
  private _fb = inject(FormBuilder);

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
  }
}
