import { Injectable } from '@angular/core';
import { ComponentMap } from '../data/contentMapData';
import { IContentPage } from '../data/main/IContentPage';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { StringUtil } from '../utils/string-util';
import { IAccessMenu } from '../data/sidemenu/IMenu';
import { SidemenuService } from './sidemenu.service';

export interface IContent {
  id: string;
  listPrev: string[];
}
@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private sideMenuService: SidemenuService) {}
  listConten: IContent[] = [];
  listPrev: string[] = [];
  listPrevAccessMenu: IAccessMenu[] = [];
  seq: number = 0;

  nextContent: { id: string; name: string } = { id: '', name: '' };
  content = new BehaviorSubject<{ id: string; name: string }>({
    id: '',
    name: '',
  });
  public data$ = this.content.asObservable();

  initialize(id: string) {
    let contentOpen = this.listConten.find((data) => data.id == id);
    if (contentOpen == null) {
      this.listConten.push({ id: id, listPrev: this.listPrev });
    }
  }

  addContent(id: string, page: string, accessMenu: IAccessMenu) {
    this.listPrevAccessMenu.push(accessMenu);
    this.sideMenuService.setAccessMenu(id, accessMenu);
    this.nextContent = { id: id, name: page };
  }

  nextContentPage(id: string) {
    if (
      this.nextContent != null &&
      this.nextContent != undefined &&
      this.nextContent.id == id
    ) {
      this.nextPage(this.nextContent.id, this.nextContent.name);
    }
  }

  nextPage(id: string, page: string) {
    let contentOpen = this.listConten.find((data) => data.id == id);
    if (contentOpen == null) {
      let list = this.listPrev.find((data) => data == page);
      if (list == null) {
        this.content.next({ id: id, name: page });
        this.listPrev.push(page);
      }
      this.listConten.push({ id: id, listPrev: this.listPrev });
    } else {
      let list = contentOpen.listPrev.find((data) => data == page);
      if (list == null) {
        this.content.next({ id: id, name: page });
        contentOpen.listPrev = [...contentOpen.listPrev, page];
      }
    }
  }

  prevPage(id: string) {
    let contentOpen = this.listConten.find((data) => data.id == id);
    if (contentOpen != null && contentOpen != undefined) {
      let prev = contentOpen.listPrev[contentOpen.listPrev.length - 2];
      if (StringUtil.isNotNullOrEmpty(prev)) {
        this.content.next({ id: id, name: prev });
        contentOpen.listPrev.pop();

        let prevAccessMenu =
          this.listPrevAccessMenu[this.listPrevAccessMenu.length - 2];
        if (prevAccessMenu != null && prevAccessMenu != undefined) {
          this.sideMenuService.setAccessMenu(id, prevAccessMenu);
          this.listPrevAccessMenu.pop();
        }
      }
    }
  }

  removePage(id: string) {
    let contentOpen = this.listConten.find((data) => data.id == id);
    if (contentOpen != null && contentOpen != undefined) {
      contentOpen.listPrev.splice(0, contentOpen.listPrev.length);
      this.content.next({ id: id, name: '' });
      this.listPrevAccessMenu.splice(0, this.listPrevAccessMenu.length);
    }
  }
}
