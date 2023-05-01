import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterReportComponent } from './pages/filter-report/filter-report.component';

const routes: Routes = [
  {
    path: '', 
    component: FilterReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
