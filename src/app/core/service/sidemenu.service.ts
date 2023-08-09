import { Injectable } from '@angular/core';
import { IMenu } from '../data/sidemenu/IMenu';
import { StringUtil } from '../utils/string-util';
import { sideMenuData } from '../data/sidemenu/sideMenuData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidemenuService implements sideMenuData {
  constructor() {}

  menus: IMenu[] = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      description: 'Default Dashboard',
      link: 'app-dashboard',
      icon: 'dashboard',
      default: true,
      childMenu: [],
    },
  ];

  openMenu(menuData: IMenu) {
    let menu = this.menus.find((res) => res.id == menuData.id);
    if (menu == null || menu == undefined) {
      this.menus.push(menuData);
    }
  }

  closeMenu(menuData: IMenu) {
    let menu: IMenu = this.menus.find((res) => res.id == menuData.id)!;
    let idx = this.menus.indexOf(menu);
    this.menus.splice(idx, 1);
  }
}
