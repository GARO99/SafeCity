import { NgModule } from '@angular/core';

import { InsecurityReportsRoutingModule } from './insecurity-reports-routing.module';
import { MapComponent } from './pages/map/map.component';
import { ShareModule } from '@UIShare/share.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    IonicModule,
    InsecurityReportsRoutingModule
  ],
  entryComponents:[MapComponent]
})
export class InsecurityReportsModule { }
