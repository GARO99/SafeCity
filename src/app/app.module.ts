import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from '@UIShare/share.module';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from './UI/core/core.module';
import { Drivers } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ShareModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__mydb',
     driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
