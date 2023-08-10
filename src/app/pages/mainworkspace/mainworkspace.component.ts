import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { COMPONENTS } from 'src/app/constant/foundation/foundation.constant';
import { IMenu, IMenuProp } from 'src/app/core/data/sidemenu/IMenu';
import { ContentService } from 'src/app/core/service/content.service';
import { SidemenuService } from 'src/app/core/service/sidemenu.service';

@Component({
  selector: 'app-mainworkspace',
  templateUrl: './mainworkspace.component.html',
  styleUrls: ['./mainworkspace.component.scss'],
})
export class MainworkspaceComponent implements OnInit {
  tabs: IMenu[] = [];
  selected = new FormControl(0);

  constructor(
    private sideMenuService: SidemenuService,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.tabs = this.sideMenuService.menus;
    this.selected = this.sideMenuService.selected;
  }

  onCloseMenu(menu: IMenu) {
    this.sideMenuService.closeMenu(menu);
    this.contentService.removePage(menu.id);
  }

  checkAccessMenu(acMenu: IMenuProp): IMenuProp {
    return acMenu !== null &&
      acMenu !== undefined &&
      acMenu != null &&
      acMenu != undefined
      ? acMenu
      : { onBack: true, onDelete: true, onRefresh: true, onSave: true };
  }
}
