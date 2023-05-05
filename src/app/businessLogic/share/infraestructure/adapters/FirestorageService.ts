import { Injectable, inject } from "@angular/core";
import { IFileSotrageService } from "@businessLogic/share/Domain/ports/IFileSotrageService";
import { Observable, map } from "rxjs";
import { BaseFilePathEnum } from "../enums/BaseFilePathEnum";
import { FirestorageContext } from "../context/FirestorageContext";
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService extends IFileSotrageService {
  private _basePath = '/';
  private _context = new FirestorageContext();
  private _storage = inject(AngularFireStorage);

  override setBaseFilePath(filePath: BaseFilePathEnum): void {
    this._basePath = this._context.Set(filePath)
  }
  override getUrlFiles(): Observable<string[]> {
    throw new Error("Method not implemented.");
  }
  override getUrlFile(fileName: string): Observable<string> {
    const filePath = `${this._basePath}/${fileName}`;
    const storageRef = this._storage.ref(filePath);
    return storageRef.getDownloadURL();
  }
  override UploadFile(): Observable<void> {
    throw new Error("Method not implemented.");
  }
  override DeleteFile(fileName: string): Observable<void> {
    throw new Error("Method not implemented.");
  }

}