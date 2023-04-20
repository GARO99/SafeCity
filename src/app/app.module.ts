import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from '@UIShare/share.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { IonicModule } from '@ionic/angular';
import { USE_DEVICE_LANGUAGE } from '@angular/fire/compat/auth';
import { IAuthService } from '@businessLogic/users/domain/ports/IAuthService';
import { AuthFirebaseService } from '@businessLogic/users/infraestructure/adapters/AuthFirebaseService';
import { environment } from '@environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { IGenericRepository } from '@businessLogic/share/Domain/ports/IGenericRepository';
import { GenericFirestoreRepository } from '@businessLogic/share/infraestructure/adapters/GenericFirestoreRepository';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    IonicModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage())
  ],
  providers: [
    { provide: USE_DEVICE_LANGUAGE, useValue: true },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    { provide: IAuthService, useClass: AuthFirebaseService },
    { provide: IGenericRepository, useClass: GenericFirestoreRepository }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
