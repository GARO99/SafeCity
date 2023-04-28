import { inject } from '@angular/core';
import { Storage } from '@ionic/storage';

export class StorageServices {
  private _storage = inject(Storage);

  constructor() {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this._storage.create();
    this._storage = storage;
  }
  
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
}