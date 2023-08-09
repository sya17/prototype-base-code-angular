import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { COMPONENTS } from 'src/app/constant/foundation/foundation.constant';
import { IMenu } from 'src/app/core/data/sidemenu/IMenu';
import { SidemenuService } from 'src/app/core/service/sidemenu.service';

@Component({
  selector: 'app-mainworkspace',
  templateUrl: './mainworkspace.component.html',
  styleUrls: ['./mainworkspace.component.scss'],
})
export class MainworkspaceComponent implements OnInit {
  tabs: IMenu[] = [];
  selected = new FormControl(0);

  constructor(private sideMenuService: SidemenuService) {}

  ngOnInit(): void {
    this.tabs = this.sideMenuService.menus;
    this.selected = this.sideMenuService.selected;
  }

  onCloseMenu(menu: IMenu) {
    this.sideMenuService.closeMenu(menu);
  }
}
