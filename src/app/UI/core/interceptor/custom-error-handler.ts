import { ErrorHandler, Injectable, inject } from "@angular/core"
import { FirebaseError } from "@angular/fire/app";
import { defaultMessage } from "../resource/messages/default-message";
import { Language } from "../resource/language";
import { Device } from "@capacitor/device";
import FirebaseErrorMessage from "../resource/messages/firebase-error-message";
import { DefaultAppMessage } from "../models/default-app-message.model";
import { environment } from "@environments/environment";
import { AlertService } from "../services/alert/alert.service";

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandler implements ErrorHandler {
  private _alertService = inject(AlertService);

    async handleError(error: any): Promise<void> {
    if (environment.isDeveloped) {
      console.error(error);
    }
    if (error instanceof FirebaseError) {
      this._alertService.errorAlert(this.getFirebaseMessage((await Device.getLanguageCode()).value, error.code));
    }
  }

  private getFirebaseMessage(languageCode: string, errorCode: string): string {
    const MESSAGE = FirebaseErrorMessage.find(([language]) => language === 'es')?.[1][errorCode];
    const DEFAULT_MESSAGE = this.getDefaultFirebaseMessage('es' as Language).defaultReplaceable;
    if (MESSAGE) {
      if (environment.isDeveloped) {
        return MESSAGE.toDev;
      }
      return MESSAGE.toClient === 'default' ? DEFAULT_MESSAGE : MESSAGE.toClient;
    }

    return DEFAULT_MESSAGE;
  }

  private getDefaultFirebaseMessage(lang: Language): DefaultAppMessage {
    return defaultMessage[lang]
  }
}