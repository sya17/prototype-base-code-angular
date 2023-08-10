import { Component, OnInit } from '@angular/core';
import { MenuInquiryComponent } from './menu-inquiry/menu-inquiry.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';

@Component({
  selector: 'app-menu',
  template: ` <div class="w-full h-full">
    <app-content-layout
      [content]="content"
      [dirContent]="DIR_CONTENT"
    ></app-content-layout>
  </div>`,
})
export class MenuComponent {
  content: string = 'app-menu-inquiry';
  // content: string = 'app-menu-detail';
  DIR_CONTENT = {
    'app-menu-inquiry': MenuInquiryComponent,
    'app-menu-detail': MenuDetailComponent,
  };
}
