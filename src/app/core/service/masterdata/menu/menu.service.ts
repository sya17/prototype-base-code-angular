import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from 'src/app/core/data/masterdata/menu/IMenu';
import { MenuData } from 'src/app/core/data/masterdata/menu/menuData';
import { IHttpOptions } from 'src/app/core/utils/serviceBuilder/http/IHttpOptions';
import { QueryStringParameters } from 'src/app/core/utils/serviceBuilder/http/query-string-parameters';
import { ApiEndpointsService } from 'src/app/core/utils/serviceBuilder/service/api-endpoints.service';
import { ApiHttpService } from 'src/app/core/utils/serviceBuilder/service/api-http.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService implements MenuData {
  endPointProduct: string = 'menu';
  menu: IMenu[] = [];

  httpOptions: IHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private urlBuilder: ApiEndpointsService,
    private api: ApiHttpService
  ) {}

  isSearch(search: string): boolean {
    return search !== null && search !== undefined && search.trim() !== '';
  }

  getData(search?: string, skip?: number): Observable<IMenu[]> {
    try {
      // create query
      let queryStringHandler = (
        queryStringParameters: QueryStringParameters
      ) => {
        if (this.isSearch(search!)) queryStringParameters.push('q', search!);
        // queryStringParameters.push("limit", SHOW_LIST.limit);
        // if (skip) queryStringParameters.push("skip", skip);
      };

      // create url
      let url = this.urlBuilder.createUrlWithQueryParameters(
        this.endPointProduct,
        false,
        queryStringHandler,
        (this.isSearch(search!) ? 'search' : null)!
      );

      return this.api.get<IMenu[]>(url, this.httpOptions);
    } catch (error) {
      console.error('Error while fetching data:', error);
      throw error;
    }
  }
  getDetailData(id: string): Observable<IMenu> {
    throw new Error('Method not implemented.');
  }
  postData(rolesData: IMenu): Observable<any> {
    throw new Error('Method not implemented.');
  }
  putData(id: string, rolesData: IMenu): Observable<IMenu> {
    throw new Error('Method not implemented.');
  }
  deleteData(id: string): boolean {
    throw new Error('Method not implemented.');
  }
}
