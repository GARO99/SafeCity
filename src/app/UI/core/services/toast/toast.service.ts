import { Injectable, inject } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _toastController = inject(ToastController);

  async topToast(message: string): Promise<void> {
    const toast = await this._toastController.create({
      message,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }
}
