import { Injectable } from '@angular/core';
import { IAccessMenu, IMenu } from '../data/sidemenu/IMenu';
import { sideMenuData } from '../data/sidemenu/sideMenuData';
import { FormControl } from '@angular/forms';
import { StringUtil } from '../utils/string-util';
import { AlertSnackbarService } from '../utils/alert-snackbar.service';

interface ITabActive {
  id: string;
  idx: number;
}
@Injectable({
  providedIn: 'root',
})
export class SidemenuService implements sideMenuData {
  constructor(private alertSnackbar: AlertSnackbarService) {}

  tabs: IMenu[] = [
    {
      id: '0',
      name: 'Dashboard',
      description: 'Default Dashboard',
      link: 'app-dashboard',
      icon: 'dashboard',
      default: true,
      accessMenu: {
        onBack: false,
        onDelete: false,
        onSave: false,
        onRefresh: true,
        onNew: false,
      },
      childMenu: [],
    },
  ];
  selected = new FormControl(0);

  openTabs(menuData: IMenu) {
    if (StringUtil.isNotNullOrEmpty(menuData?.link)) {
      let menu = this.tabs.find((res) => res.id == menuData.id);
      if (menu == null || menu == undefined) {
        this.tabs.push(menuData);
        this.selected.setValue(this.tabs.length);
      } else {
        let idx = this.tabs.indexOf(menu);
        this.selected.setValue(idx);
      }
    } else {
      this.alertSnackbar.alert(
        'center',
        'top',
        'the module has not been registered'
      );
    }
  }

  closeTabs(menuData: IMenu) {
    let menu: IMenu = this.tabs.find((res) => res.id == menuData.id)!;
    let idx = this.tabs.indexOf(menu);
    this.tabs.splice(idx, 1);
  }

  setAccessMenu(id: string, accessMenu: IAccessMenu) {
    let menu: IMenu = this.tabs.find((res) => res.id == id)!;
    if (menu != null && menu != undefined) {
      menu.accessMenu = accessMenu;
    }
  }
}
