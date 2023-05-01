import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '@UIModules/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { IsNotVerifyEmailGuard } from '../../core/guards/is-not-verify-email/is-not-verify-email.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password/forgot-password.component';


const routes: Routes = [
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'verifyEmail',
    component: VerifyEmailComponent,
    canActivate: [IsNotVerifyEmailGuard],
    data: { excludeFromAuthGuard: true }
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
