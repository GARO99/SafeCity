import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '@UIModules/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


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
    path: 'historial',
    component: SignInComponent
  },
  {
    path: 'tab1',
    component: SignInComponent
  },
  {
    path: 'tab2',
    component: SignInComponent
  },
  {
    path: 'tab3',
    component: SignInComponent
  },
  {
    path: 'tabs',
    component: SignInComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
