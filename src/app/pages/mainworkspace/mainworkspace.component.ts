import { Component, OnInit } from '@angular/core';
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
  selectedIndex: number = 0;

  constructor(private sideMenuService: SidemenuService) {}

  ngOnInit(): void {
    this.tabs = this.sideMenuService.menus;
  }
}
