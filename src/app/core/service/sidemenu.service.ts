import { Injectable } from '@angular/core';
import { IMenu } from '../data/sidemenu/IMenu';
import { StringUtil } from '../utils/string-util';
import { sideMenuData } from '../data/sidemenu/sideMenuData';

@Injectable({
  providedIn: 'root',
})
export class SidemenuService implements sideMenuData {
  constructor() {}

  menus: IMenu[] = [];
  setSelectedMenu:number=0;

  openMenu(menuData: IMenu) {
    let menu = this.menus.find((res) => res.id == menuData.id);
    if (menu == null || menu == undefined) {
      this.menus.push(menuData);
      this.setSelectedMenu++;
    }
  }
  
  closeMenu(menuData: IMenu) {
    let menu: IMenu = this.menus.find((res) => res.id == menuData.id)!;
    let idx = this.menus.indexOf(menu);
    this.menus.splice(idx, 1);
    this.setSelectedMenu--;
  }
}
