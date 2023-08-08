import { Component, Input, OnInit } from '@angular/core';
import { SideMenuListComponent } from '../side-menu-list/side-menu-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IMenu } from 'src/app/core/data/IMenu';

@Component({
  selector: 'app-side-menu-item',
  template: `<div
    class="w-full {{
      colorMenu
    }} rounded-md inline-flex justify-between items-center px-3 py-2 cursor-pointer hover:bg-gray2color space-x-2 "
    [style]="customStyle"
    (click)="openChildOrRedirectTo(isHaveChild)"
  >
    <div>
      <mat-icon>{{ menuDataChild?.icon }}</mat-icon>
    </div>
    <div class="float-left flex justify-start items-center w-full">
      <span class="">{{ menuDataChild?.name }}</span>
    </div>
    <div>
      <mat-icon *ngIf="isHaveChild">{{
        this.parent?.openChild
          ? 'keyboard_arrow_downicon'
          : 'keyboard_arrow_righticon'
      }}</mat-icon>
    </div>
  </div>`,
  styleUrls: ['./side-menu-item.component.scss'],
})
export class SideMenuItemComponent implements OnInit {
  @Input() colorMenu: string = 'bg-gray-300';
  @Input() customStyle: string = '';
  @Input() isHaveChild: boolean = false;
  @Input() parent: SideMenuListComponent | undefined;

  @Input() menuDataChild: IMenu | undefined;

  ngOnInit(): void {
    console.log(this.customStyle);
    
  }

  openChildOrRedirectTo(isHaveChild: boolean) {
    if (isHaveChild) {
      this.parent?.clickOpenChild();
    }
  }
}
