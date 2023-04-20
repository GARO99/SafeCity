import { Injectable } from "@angular/core";
import { DomainEntity } from "@businessLogic/share/Domain/Entities/DomainEntity";
import { User } from "@businessLogic/users/domain/Entities/User";
import { DataModelsEnum } from "../enums/DataModelsEnum";

@Injectable({
  providedIn: 'root'
})
export class FirestoreContext {
  private _dataModel = new Map<DataModelsEnum ,string>();

  constructor() {
    this.OnModelCreating();
  }

  private OnModelCreating(): void {
    
    this._dataModel.set(DataModelsEnum.user, '/users');
  }


  public Set(model: DataModelsEnum): string {
    return this._dataModel.get(model)?? '';
  };

}