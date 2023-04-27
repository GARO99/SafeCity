import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '@businessLogic/users/usesCases/Authentication';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  private _auth = inject(Authentication);
  private _router = inject(Router);
  private _fb = inject(FormBuilder)

  signInForm!: FormGroup;
  validations: any = {
    'email': [
      { type: 'required', message: 'El email es requerido.' },
      { type: 'pattern', message: 'El email debe ser válido' },
    ],
    'password': [
      { type:'required', message: 'La contraseña es requerida.' },
      { type: 'pattern', message: 'La contraseña debe tener lo menos 6 caracteres, un numero y un carácter especial' },
    ]
  }
  constructor() {
    this.FormBuild();
  }

  private FormBuild(): void {
    this.signInForm = this._fb.group({
      email: [null, [Validators.required, Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]],
      password: [null, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/)
      ]]
    });
  } 

  onSubmit(e: Event): void {
    e.preventDefault();
    if (this.signInForm.valid) {
      this._auth.login(this.signInForm.value).subscribe(
        () => {
          this._router.navigate(['/app/insecurityreports']);
        }
      );
    }else{
      this.signInForm.markAllAsTouched();
    }
  }

}
