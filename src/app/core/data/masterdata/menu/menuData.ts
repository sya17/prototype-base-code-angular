import { Observable } from "rxjs";
import { IMenu } from "./IMenu";

export abstract class MenuData {
  abstract getData(search?: string, skip?: number): Observable<IMenu[]>;
  abstract getDetailData(id: string): Observable<IMenu>;
  abstract postData(rolesData: IMenu): Observable<any>;
  abstract putData(id: string, rolesData: IMenu): Observable<IMenu>;
  abstract deleteData(id: string): boolean;
}
