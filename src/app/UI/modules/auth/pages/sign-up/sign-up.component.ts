import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '@UIUtils/custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
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

  constructor(
    private fb: FormBuilder
  ) {   
    this.FormBuild();
  }

  private FormBuild(): void {
    this.signUpForm = this.fb.group({
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
      console.log('Works');
      
    }else{
      this.signUpForm.markAllAsTouched();
    }
  }
}
