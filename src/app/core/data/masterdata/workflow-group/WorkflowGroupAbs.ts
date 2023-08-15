import { Observable } from "rxjs";
import { IWorkflowGroup } from "./IWorkflowGroup";
import { IGlobalResponse } from "../../response/IGlobalResponse";

export abstract class WorkflowGroupAbs {
  abstract getData(page:number): Observable<IGlobalResponse<IWorkflowGroup[]>>;
  abstract getDetailData(id: string): Observable<IWorkflowGroup>;
  abstract postData(rolesData: IWorkflowGroup): Observable<any>;
  abstract putData(id: string, rolesData: IWorkflowGroup): Observable<IWorkflowGroup>;
  abstract deleteData(id: string): boolean;
}
