import { Component, Input } from '@angular/core';
import { SideMenuListComponent } from '../side-menu-list/side-menu-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu-item',
  template: `<div
    class="w-full {{
      colorMenu
    }} rounded-md inline-flex justify-between items-center px-3 py-2 cursor-pointer hover:bg-gray-400 space-x-2 {{
      customStyle
    }}"
    (click)="openChildOrRedirectTo(isHaveChild, finalLinkMenu)"
  >
    <div>
      <mat-icon>{{ iconMenu }}</mat-icon>
    </div>
    <div class="float-left flex justify-start items-center w-full">
      <span class="">{{ nameMenu }}</span>
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
export class SideMenuItemComponent {
  @Input() iconMenu: string | undefined;
  @Input() nameMenu: string | undefined;
  @Input() linkMenu: string = '';
  @Input() parentLinkMenu: string = '';
  @Input() colorMenu: string = 'bg-gray-300';
  @Input() customStyle: string = '';
  @Input() isHaveChild: boolean = false;
  @Input() parent: SideMenuListComponent | undefined;

  finalLinkMenu: string = '';

  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.finalLinkMenu += this.parentLinkMenu + '/' + this.linkMenu;
  }

  openChildOrRedirectTo(isHaveChild: boolean, link: string) {
    if (isHaveChild) {
      this.parent?.clickOpenChild();
    } else {
      this.redirectTo(link);
    }
  }

  async redirectTo(link: string) {
    console.log('redirectTo = ', link);
    console.log('redirectTo = ', this.router.url);
    await this.router.navigate(['/']);
    if (link.length !== 0) {
      if (!this.router.url.includes(link)) {
        let url = this.router.url + '/' + link;
        console.log('url = ', url);
        this.router.navigateByUrl(url);
      }
    } else {
      // alert
      this.alert('Comming Soon', 'X');
    }
  }

  alert(message: string, action: string) {
    this._snackBar.open(message, action);
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 5000);
  }
}
