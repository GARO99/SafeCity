import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { HistoryNotificationsComponent } from './pages/history-notifications/history-notifications.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    HistoryNotificationsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
