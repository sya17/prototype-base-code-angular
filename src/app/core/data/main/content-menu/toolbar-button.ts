import { Observable, Subject } from 'rxjs';

export interface ToolbarButton {
  id: string;
  back_event: Subject<any>;
  save_event: Subject<any>;
  refresh_event: Subject<any>;
  delete_event: Subject<any>;
}

export abstract class ToolbarButtonData {
  abstract addPages(id: string): void;
  abstract rmPages(id: string): void;
  abstract doBack<T>(id: string, data: T): void;
  abstract onBack<T>(id: string): Observable<T>;
  abstract doSave<T>(id: string, data: T): void;
  abstract onSave<T>(id: string): Observable<T>;
  abstract doRefresh<T>(id: string, data: T): void;
  abstract onRefresh<T>(id: string): Observable<T>;
  abstract doDelete<T>(id: string, data: T): void;
  abstract onDelete<T>(id: string): Observable<T>;
}
