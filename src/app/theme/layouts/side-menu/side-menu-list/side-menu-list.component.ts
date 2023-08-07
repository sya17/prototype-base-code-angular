import {
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList,
} from '@angular/core';
import { SideMenuItemComponent } from '../side-menu-item/side-menu-item.component';

@Component({
  selector: 'app-side-menu-list',
  templateUrl: './side-menu-list.component.html',
  styleUrls: ['./side-menu-list.component.scss'],
})
export class SideMenuListComponent {
  @ContentChildren(SideMenuItemComponent)
  navListItemComponents: QueryList<SideMenuItemComponent> | null = null;

  @Input() expandable = false;

  @Input() title = '';

  @HostBinding('class.nav-list--expandable')
  get expandableClass() {
    return this.expandable;
  }
}
