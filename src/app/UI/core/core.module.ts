import { ErrorHandler, NgModule } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { FIREBASE_OPTIONS } from "@angular/fire/compat";
import { USE_DEVICE_LANGUAGE } from "@angular/fire/compat/auth";
import { IGenericRepository } from "@businessLogic/share/Domain/ports/IGenericRepository";
import { GenericFirestoreRepository } from "@businessLogic/share/infraestructure/adapters/GenericFirestoreRepository";
import { IAuthService } from "@businessLogic/users/domain/ports/IAuthService";
import { AuthFirebaseService } from "@businessLogic/users/infraestructure/adapters/AuthFirebaseService";
import { environment } from "@environments/environment";
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { CustomErrorHandler } from "./interceptor/custom-error-handler";
import { IFileSotrageService } from "@businessLogic/share/Domain/ports/IFileSotrageService";
import { FirestorageService } from "@businessLogic/share/infraestructure/adapters/FirestorageService";

@NgModule({
  imports: [    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage())
  ],
  providers: [
    { provide: USE_DEVICE_LANGUAGE, useValue: true },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    { provide: IAuthService, useClass: AuthFirebaseService },
    { provide: IGenericRepository, useClass: GenericFirestoreRepository },
    { provide: IFileSotrageService, useClass: FirestorageService}
  ]
})
export class CoreModule {}