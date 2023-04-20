
import { DomainEntity } from "../Entities/DomainEntity";
import { Observable } from "rxjs";

export abstract class IGenericRepository<T extends DomainEntity> {
  abstract getAll(): Observable<T[]>;
  abstract getById(id: string): Observable<T | undefined>;
  abstract create(entity: T): Observable<T | undefined>;
  abstract update(entity: T): Observable<T | undefined>;
  abstract delete(id: any): void;
}