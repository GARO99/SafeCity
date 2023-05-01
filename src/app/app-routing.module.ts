import { NavBarComponent } from '@UIShare/components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsNotLoggedInGuard } from './UI/core/guards/is-not-logged-in/is-not-logged-in.guard';
import { IsLoggedInGuard } from './UI/core/guards/is-logged-in/is-logged-in.guard';
import { IsVerifyEmailGuard } from './UI/core/guards/is-verify-email/is-verify-email.guard';

const routes: Routes = [
  { 
    path: '',
    canActivate: [IsNotLoggedInGuard],
    loadChildren: () => import('@UIModules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'app',
    canActivate: [IsLoggedInGuard, IsVerifyEmailGuard],
    component: NavBarComponent,
    children:[
      {
        path: 'insecurityreports',
        loadChildren: () => import('@UIModules/insecurity-reports/insecurity-reports.module').then(m => m.InsecurityReportsModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('@UIModules/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('@UIModules/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('@UIModules/profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
