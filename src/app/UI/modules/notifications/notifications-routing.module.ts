import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryNotificationsComponent } from './pages/history-notifications/history-notifications.component';

const routes: Routes = [
  {
    path:'',
    component: HistoryNotificationsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
