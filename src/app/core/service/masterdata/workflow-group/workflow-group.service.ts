import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { paginationConstant } from 'src/app/constant/tables/pagination.constant';
import { IWorkflowGroup } from 'src/app/core/data/masterdata/workflow-group/IWorkflowGroup';
import { WorkflowGroupAbs } from 'src/app/core/data/masterdata/workflow-group/WorkflowGroupAbs';
import { IGlobalResponse } from 'src/app/core/data/response/IGlobalResponse';
import { IHttpOptions } from 'src/app/core/utils/serviceBuilder/http/IHttpOptions';
import { QueryStringParameters } from 'src/app/core/utils/serviceBuilder/http/query-string-parameters';
import { ApiEndpointsService } from 'src/app/core/utils/serviceBuilder/service/api-endpoints.service';
import { ApiHttpService } from 'src/app/core/utils/serviceBuilder/service/api-http.service';

@Injectable({
  providedIn: 'root',
})
export class WorkflowGroupService implements WorkflowGroupAbs {
  endPoint: string = 'masterdata/workflow-group';
  data: IWorkflowGroup[] = [];

  httpOptions: IHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private urlBuilder: ApiEndpointsService,
    private api: ApiHttpService
  ) {}

  getData(page:number): Observable<IGlobalResponse<IWorkflowGroup[]>> {
    // create query
    let queryStringHandler = (
      queryStringParameters: QueryStringParameters
    ) => {
      queryStringParameters.push("limit", paginationConstant.ROWS_PER_PAGE)
      queryStringParameters.push("curr_page", page)
    };

    // create url
    // let url = this.urlBuilder.createUrl(this.endPoint, false);
    let url = this.urlBuilder.createUrlWithQueryParameters(this.endPoint, false, queryStringHandler, '')
    return this.api.get<IWorkflowGroup[]>(url, this.httpOptions);
  }
  getDetailData(id: string): Observable<IWorkflowGroup> {
    throw new Error('Method not implemented.');
  }
  postData(rolesData: IWorkflowGroup): Observable<any> {
    throw new Error('Method not implemented.');
  }
  putData(id: string, rolesData: IWorkflowGroup): Observable<IWorkflowGroup> {
    throw new Error('Method not implemented.');
  }
  deleteData(id: string): boolean {
    throw new Error('Method not implemented.');
  }
}
