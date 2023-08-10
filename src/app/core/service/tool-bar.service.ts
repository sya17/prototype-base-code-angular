import { Injectable } from '@angular/core';
import { ToolbarButton } from '../data/main/content-menu/toolbar-button';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolBarService {
  constructor() {}

  pages: ToolbarButton[] = [];

  addPages<T>(id: string) {
    let page: ToolbarButton = this.pages.find((page) => page.id === id)!;

    //cek page
    if (page == null) {
      this.pages.push({
        id: id,
        save_event: new Subject<T>(),
        back_event: new Subject<T>(),
        refresh_event: new Subject<T>(),
        delete_event: new Subject<T>(),
      });
    }
    
    console.log(this.pages);
  }

  rmPages(id: string) {
    let page: ToolbarButton = this.pages.find((page) => page.id === id)!;
    let idx = this.pages.indexOf(page);
    this.pages.splice(idx, 1);
  }

  // Back Event
  doBack<T>(id: string, data: T) {
    console.log(this.pages);
    let page: ToolbarButton = this.pages.find((page) => page.id === id)!;
    page.back_event.next(data);
  }

  onBack(id: string): Observable<any> {
    let page: ToolbarButton = this.pages.find((page) => page.id === id)!;
    if (page != undefined) {
      return page.back_event.asObservable();
    } else {
      return new Observable<any>((observer) => observer.complete());
    }
  }

  // Save Event
  doSave<T>(id: string, data: T) {
    console.log(this.pages);
    let page: ToolbarButton = this.pages.find((page) => page.id === id)!;
    page.save_event.next(data);
  }

  onSave(id: string): Observable<any> {
    let page: ToolbarButton = this.pages.find((page) => page.id === id)!;
    if (page != undefined) {
      return page.save_event.asObservable();
    } else {
      return new Observable<any>((observer) => observer.complete());
    }
  }

  // Refresh Event
  doRefresh<T>(id: string, data: T) {
    console.log(this.pages);
    let page: ToolbarButton = this.pages.find((page) => page.id === id)!;
    page.refresh_event.next(data);
  }

  onRefresh(id: string): Observable<any> {
    let page: ToolbarButton = this.pages.find((page) => page.id === id)!;
    if (page != undefined) {
      return page.refresh_event.asObservable();
    } else {
      return new Observable<any>((observer) => observer.complete());
    }
  }

  // Delete Event
  doDelete<T>(id: string, data: T) {
    console.log(this.pages);
    let page: ToolbarButton = this.pages.find((page) => page.id === id)!;
    page.refresh_event.next(data);
  }

  onDelete(id: string): Observable<any> {
    let page: ToolbarButton = this.pages.find((page) => page.id === id)!;
    if (page != undefined) {
      return page.refresh_event.asObservable();
    } else {
      return new Observable<any>((observer) => observer.complete());
    }
  }
}
