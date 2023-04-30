import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AuthRoutingModule } from '@UIModules/auth/auth-routing.module';
import { SignInComponent } from '@UIModules/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from '@UIModules/auth/pages/sign-up/sign-up.component';
import { ShareModule } from '@UIShare/share.module';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    IonicModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
