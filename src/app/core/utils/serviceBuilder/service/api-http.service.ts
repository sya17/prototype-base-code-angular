import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiHttpService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, options?: any): Observable<any> {
    console.log("URL POST : ", url);
    console.log("OPTION : ", options);
    return this.http.get<T>(url, options);
  }

  post<T>(url: string, data: any, options?: any): Observable<any> {
    console.log("URL POST : ", url);
    console.log("OPTION : ", options);
    console.log("DATA : ", data);
    return this.http.post<T>(url, data, options);
  }

  put<T>(url: string, data: any, options?: any): Observable<any> {
    console.log("URL PUT : ", url);
    console.log("OPTION : ", options);
    console.log("DATA : ", data);
    return this.http.put(url, data, options);
  }

  delete(url: string, options?: any): Observable<any> {
    console.log("URL DEL : ", url);
    console.log("OPTION : ", options);
    return this.http.delete(url, options);
  }
}
