import { Injectable, inject } from "@angular/core";
import { DomainEntity } from "@businessLogic/share/Domain/Entities/DomainEntity";
import { IGenericRepository } from "@businessLogic/share/Domain/ports/IGenericRepository";
import { Observable } from "rxjs";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FirestoreContext } from "../context/FirestoreContext";
import { DataModelsEnum } from "../enums/DataModelsEnum";

@Injectable({
  providedIn: 'root'
})
export class GenericFirestoreRepository<T extends DomainEntity> extends IGenericRepository<T> {
  private _db = inject(AngularFirestore);
  private _context = new FirestoreContext();
  private _ref: AngularFirestoreCollection<T>;

  constructor() {
    super();
    this._ref = this._db.collection(this._context.Set(DataModelsEnum.user));     
  }

  override getAll(): Observable<T[]> {
    return this._ref.valueChanges({ idField: 'id' });
  }

  override getById(id: string): Observable<T | undefined> {
    return this._ref.doc<T>(id).valueChanges({ idField: 'id' });
  }

  override create(entity: T): Observable<T | undefined> {
    const id = entity.id; 
    this._ref.doc(id).set({ ...entity, id });

    return this._ref.doc<T>(id).valueChanges({ idField: 'id' });
  }

  override update(entity: T): Observable<T | undefined> {
    this._ref.doc<T>(entity.id).update(entity);

    return this._ref.doc<T>(entity.id).valueChanges({ idField: 'id' });
  }

  override delete(id: any): void {
    this._ref.doc<T>(id).delete();
  }
}