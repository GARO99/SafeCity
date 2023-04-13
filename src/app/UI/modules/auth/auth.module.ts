import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from '@UIModules/auth/auth-routing.module';
import { SignInComponent } from '@UIModules/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from '@UIModules/auth/pages/sign-up/sign-up.component';
import { ShareModule } from '@UIShare/share.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HistorialComponente } from './pages/historial/historial.page';
import { Tab1Page } from './pages/tab1/tab1.page';
import { Tab2Page } from './pages/tab2/tab2.page';
import { Tab3Page } from './pages/tab3/tab3.page';
import { TabsPage } from './pages/tabs/tabs.page';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    HistorialComponente,
    Tab1Page,
    Tab2Page,  
    Tab3Page,
    TabsPage    

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule.forRoot(),
    ShareModule,    
    ReactiveFormsModule
    
  ]
})
export class AuthModule { }
