import { Injectable } from '@angular/core';
import { IMenu } from '../data/sidemenu/IMenu';
import { StringUtil } from '../utils/string-util';
import { sideMenuData } from '../data/sidemenu/sideMenuData';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

interface ITabActive {
  id: string;
  idx: number;
}
@Injectable({
  providedIn: 'root',
})
export class SidemenuService implements sideMenuData {
  constructor() {}

  menus: IMenu[] = [
    {
      id: '0',
      name: 'Dashboard',
      description: 'Default Dashboard',
      link: 'app-dashboard',
      icon: 'dashboard',
      default: true,
      childMenu: [],
    },
  ];
  selected = new FormControl(0);

  openMenu(menuData: IMenu) {
    let menu = this.menus.find((res) => res.id == menuData.id);
    if (menu == null || menu == undefined) {
      this.menus.push(menuData);
      this.selected.setValue(this.menus.length - 1);
    } else {
      let idx = this.menus.indexOf(menu);
      this.selected.setValue(idx);
    }
  }

  closeMenu(menuData: IMenu) {
    let menu: IMenu = this.menus.find((res) => res.id == menuData.id)!;
    let idx = this.menus.indexOf(menu);
    this.menus.splice(idx, 1);
  }
}
