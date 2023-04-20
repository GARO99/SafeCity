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
  private db = inject(AngularFirestore);
  private context = new FirestoreContext();
  private ref: AngularFirestoreCollection<T>;

  constructor() {
    super();
    this.ref = this.db.collection(this.context.Set(DataModelsEnum.user));     
  }

  override getAll(): Observable<T[]> {
    return this.ref.valueChanges({ idField: 'id' });
  }

  override getById(id: string): Observable<T | undefined> {
    return this.ref.doc<T>(id).valueChanges({ idField: 'id' });
  }

  override create(entity: T): Observable<T | undefined> {
    const id = entity.id; 
    this.ref.doc(id).set({ ...entity, id });

    return this.ref.doc<T>(id).valueChanges({ idField: 'id' });
  }

  override update(entity: T): Observable<T | undefined> {
    this.ref.doc<T>(entity.id).update(entity);

    return this.ref.doc<T>(entity.id).valueChanges({ idField: 'id' });
  }

  override delete(id: any): void {
    this.ref.doc<T>(id).delete();
  }
}