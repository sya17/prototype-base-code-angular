import { Component, Input } from '@angular/core';
import { IMenu } from 'src/app/core/data/IMenu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  @Input() menus: IMenu[] = [];

  haveChild(menu: IMenu): boolean {
    return (
      menu.child?.length !== null &&
      menu.child?.length !== undefined &&
      menu.child?.length > 0
    );
  }
}
