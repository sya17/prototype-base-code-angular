import {
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList,
} from '@angular/core';
import { SideMenuItemComponent } from '../side-menu-item/side-menu-item.component';
import { IMenu } from 'src/app/core/data/IMenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu-list',
  templateUrl: './side-menu-list.component.html',
  styleUrls: ['./side-menu-list.component.scss'],
})
export class SideMenuListComponent {
  @Input() iconMenu: string | undefined;
  @Input() nameMenu: string | undefined;
  @Input() linkMenu: string = '';
  @Input() colorMenu: string = 'bg-gray-300';
  @Input() customStyle: string = '';
  @Input() childMenu: IMenu[] | undefined;

  openChild: boolean = false;

  clickOpenChild() {
    this.openChild = !this.openChild;
  }

  ngOnInit(): void {}

  isHaveChild(item: IMenu[]): boolean {
    return item.length > 0;
  }
}
