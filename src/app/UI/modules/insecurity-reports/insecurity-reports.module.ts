import { NgModule } from '@angular/core';

import { InsecurityReportsRoutingModule } from './insecurity-reports-routing.module';
import { MapComponent } from './pages/map/map.component';
import { ShareModule } from '@UIShare/share.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
