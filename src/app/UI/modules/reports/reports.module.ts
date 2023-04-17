import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { FilterReportComponent } from './pages/filter-report/filter-report.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    FilterReportComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
