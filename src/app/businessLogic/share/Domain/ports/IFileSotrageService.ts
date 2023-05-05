import { BaseFilePathEnum } from "@businessLogic/share/infraestructure/enums/BaseFilePathEnum";
import { Observable } from "rxjs";

export abstract class IFileSotrageService {
  abstract setBaseFilePath(filePath: BaseFilePathEnum): void
  abstract getUrlFiles(): Observable<string[]>;
  abstract getUrlFile(fileName: string): Observable<string>;
  abstract UploadFile(): Observable<void>
  abstract DeleteFile(fileName: string): Observable<void>
}