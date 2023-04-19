import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidAuthentication } from '@businessLogic/users/usesCases/ValidAuthentication';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  private auth = inject(ValidAuthentication);
  private router = inject(Router);

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
  constructor(
    private fb: FormBuilder
  ) {
    this.FormBuild();
  }

  private FormBuild(): void {
    this.signInForm = this.fb.group({
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
      console.log('Works');
      this.auth.login(this.signInForm.value).subscribe(
        () => {
          this.router.navigate(['/app/insecurityreports']);
        }
      );
    }else{
      this.signInForm.markAllAsTouched();
    }
  }

}
