import { Injectable } from "@angular/core";
import { BaseFilePathEnum } from "../enums/BaseFilePathEnum";

@Injectable({
  providedIn: 'root'
})
export class FirestorageContext {
  private _dataModel = new Map<BaseFilePathEnum ,string>();

  constructor() {
    this.onBaseFilePathCreating();
  }

  private onBaseFilePathCreating() {
    this._dataModel.set(BaseFilePathEnum.appAvatars, '/avatars-app');
  }

  public Set(filePath: BaseFilePathEnum): string {
    return this._dataModel.get(filePath)?? '';
  };
}