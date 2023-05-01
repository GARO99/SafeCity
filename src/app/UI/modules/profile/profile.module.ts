import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { UserInformationComponent } from './pages/user-information/user-information.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    UserInformationComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
