import { Injectable } from '@angular/core';
import { ComponentMap } from '../data/contentMapData';
import { IContentPage } from '../data/main/IContentPage';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { StringUtil } from '../utils/string-util';

export interface IContent {
  id: string;
  listPrev: string[];
}
@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor() {}
  listConten: IContent[] = [];
  listPrev: string[] = [];
  seq: number = 0;

  content = new BehaviorSubject<{ id: string; name: string }>({
    id: '',
    name: '',
  });
  public data$ = this.content.asObservable();

  initialize(id: string) {
    // console.log('initialize', this.listConten);
    let contentOpen = this.listConten.find((data) => data.id == id);
    if (contentOpen == null) {
      this.listConten.push({ id: id, listPrev: this.listPrev });
    }
  }

  nextPage(id: string, page: string) {
    // console.log('nextPage', id);
    // console.log('nextPage', page);
    let contentOpen = this.listConten.find((data) => data.id == id);
    if (contentOpen == null) {
      // console.log('masuk 1');
      let list = this.listPrev.find((data) => data == page);
      if (list == null) {
        // console.log('masuk 11');
        this.content.next({ id: id, name: page });
        this.listPrev.push(page);
      }
      this.listConten.push({ id: id, listPrev: this.listPrev });
    } else {
      // console.log('masuk 2');
      let list = contentOpen.listPrev.find((data) => data == page);
      if (list == null) {
        // console.log('masuk 22');
        this.content.next({ id: id, name: page });
        contentOpen.listPrev = [...contentOpen.listPrev, page];
        // contentOpen.listPrev.push(page);
      }
    }
    // console.log(contentOpen?.listPrev);
  }

  prevPage(id: string) {
    let contentOpen = this.listConten.find((data) => data.id == id);
    if (contentOpen != null && contentOpen != undefined) {
      let prev = contentOpen.listPrev[contentOpen.listPrev.length - 2];
      if (StringUtil.isNotNullOrEmpty(prev)) {
        this.content.next({ id: id, name: prev });
        contentOpen.listPrev.pop();
      }
    }
  }

  removePage(id: string) {
    // console.log(id);
    // console.log('removePage', this.content);
    let contentOpen = this.listConten.find((data) => data.id == id);
    if (contentOpen != null && contentOpen != undefined) {
      contentOpen.listPrev.splice(0, contentOpen.listPrev.length);
      this.content.next({ id: id, name: '' });
    }
  }
}
