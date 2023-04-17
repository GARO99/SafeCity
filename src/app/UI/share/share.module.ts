import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  exports:[
    ReactiveFormsModule
    
  ],
  declarations:[NavBarComponent],
  imports: [
    CommonModule,    
    IonicModule,
  ]
})
export class ShareModule { }
