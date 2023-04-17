import { NavBarComponent } from '@UIShare/components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('@UIModules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'app',
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
