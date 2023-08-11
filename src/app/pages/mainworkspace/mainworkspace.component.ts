import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IMenu, IAccessMenu } from 'src/app/core/data/sidemenu/IMenu';
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
    this.tabs = this.sideMenuService.tabs;
    this.selected = this.sideMenuService.selected;
  }

  onCloseMenu(menu: IMenu) {
    this.sideMenuService.closeTabs(menu);
    this.contentService.removePage(menu.id);
  }

  checkAccessMenu(acMenu: IAccessMenu): IAccessMenu {
    return acMenu !== null &&
      acMenu !== undefined &&
      acMenu != null &&
      acMenu != undefined
      ? acMenu
      : { onBack: true, onDelete: true, onRefresh: true, onSave: true , onNew: true};
  }
}
