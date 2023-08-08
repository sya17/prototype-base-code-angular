import { Component, Input } from '@angular/core';
import { IMenu } from 'src/app/core/data/IMenu';
import { listMenu } from 'src/app/core/mock/sidebarMenuDummy';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  listMenu: IMenu[] = listMenu;
}
