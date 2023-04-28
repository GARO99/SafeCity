import { Component, inject } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '@businessLogic/users/usesCases/Authentication';
import { CustomValidators } from '@UIUtils/custom-validators';
import { ToastService } from 'src/app/UI/core/services/toast/toast.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  private _auth = inject(Authentication);
  private _router = inject(Router);
  private _fb = inject(FormBuilder);
  private _toastService = inject(ToastService);

  signUpForm!: FormGroup;
  validations: any = {
    'email': [
      { type: 'required', message: 'El email es requerido.'},
      { type: 'pattern', message: 'El email debe ser válido'},
    ],
    'name':[
      { type:'required', message: 'El nombre es requerido.'},
    ],
    'lastName':[
      { type:'required', message: 'El nombre es requerido.' , isFormValidation: false},
    ],
    'userName':[
      { type:'required', message: 'El nombre es requerido.'},
    ],
    'password': [
      { type:'required', message: 'La contraseña es requerida.'},
      { type: 'pattern', message: 'La contraseña debe tener lo menos 6 caracteres, un numero y un carácter especial'},
    ],
    'confirmPassword': [
      { type:'required', message: 'La contraseña es requerida.'},
      { type: 'pattern', message: 'La contraseña debe tener lo menos 6 caracteres, un numero y un carácter especial'},
      { type: 'passwordsNotSame', message: 'La contraseña no coinciden'}
    ]
  }

  constructor() {   
    this.FormBuild();
  }

  private FormBuild(): void {
    this.signUpForm = this._fb.group({
      email: [null, [Validators.required, Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]],
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      password: [null, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/)
      ]],
      confirmPassword: [null, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/)
      ]]
    }, {validators: CustomValidators.PasswordsNotSame('password','confirmPassword')} as AbstractControlOptions);
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    if (this.signUpForm.valid) {
      Object.keys(this.signUpForm.controls).forEach((key) => this.signUpForm.get(key)?.setValue(this.signUpForm.get(key)?.value.trim()));
      this._auth.signUp({
        email: this.signUpForm.get('email')?.value,
        username: this.signUpForm.get('userName')?.value,
        name: this.signUpForm.get('name')?.value,
        lastName: this.signUpForm.get('lastName')?.value,
      }, this.signUpForm.get('password')?.value).subscribe(
        () =>{
          this._router.navigate(['']);
          this._toastService.topToast('Ahora puedes iniciar sesión');
        }
      );
    }else{
      this.signUpForm.markAllAsTouched();
    }
  }
}
