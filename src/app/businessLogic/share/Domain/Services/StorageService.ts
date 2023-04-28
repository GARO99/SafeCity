import { inject } from '@angular/core';
import { Storage } from '@ionic/storage';

const SESSION_KEY = "session"

export class StorageService {
  private _storage = inject(Storage);

  constructor() {
    this.init();
  }

  private async init() {
    const storage = await this._storage.create();
    this._storage = storage;
  }
  
  set(key: string, value: any) {
    this._storage.set(key, value);
  }

  async get<T>(key: string): Promise<T>{
    return this._storage.get(key);
  }

  setSession(value: any) {
    this._storage.set(SESSION_KEY, value);
  }

  async getSession<T>(key: string): Promise<T>{
    return this._storage.get(SESSION_KEY);
  }
}