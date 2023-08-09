import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from 'src/app/core/data/sidemenu/IMenu';

@Component({
  selector: 'app-side-menu-list',
  templateUrl: './side-menu-list.component.html',
  styleUrls: ['./side-menu-list.component.scss'],
})
export class SideMenuListComponent implements OnInit {
  @Input() colorMenu: string = '';
  @Input() customStyle: string = '';
  @Input() paddingLeft: number = 0;

  @Input() menuData: IMenu | undefined;

  openChild: boolean = false;

  clickOpenChild() {
    this.openChild = !this.openChild;
  }

  ngOnInit(): void {
    this.paddingLeft += 1;
    this.customStyle = 'padding-left:' + this.paddingLeft + 'rem';
  }

  isHaveChild(item: IMenu[]): boolean {
    return item.length > 0;
  }
}
