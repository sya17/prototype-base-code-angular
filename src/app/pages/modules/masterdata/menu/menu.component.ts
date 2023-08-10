import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MenuInquiryComponent } from './menu-inquiry/menu-inquiry.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { ToolBarService } from 'src/app/core/service/tool-bar.service';
import { Subscription } from 'rxjs';
import { MenuDetailDetailComponent } from './menu-detail-detail/menu-detail-detail.component';
import { IContentPage } from 'src/app/core/data/main/IContentPage';
import { ContentService } from 'src/app/core/service/content.service';
import { FormControl } from '@angular/forms';
import { RolesInquiryComponent } from '../roles/roles-inquiry/roles-inquiry.component';

@Component({
  selector: 'app-menu',
  template: ` <div class="w-full h-full">
    <app-content-layout
      [content]="content"
      [dirContent]="DIR_CONTENT"
      [idMenuModule]="idMenu"
    ></app-content-layout>
  </div>`,
})
export class MenuComponent implements OnInit {
  @Input() idMenu: string = '';

  content: string = 'app-menu-inquiry';
  DIR_CONTENT = {
    'app-menu-inquiry': MenuInquiryComponent,
    'app-roles-inquiry': RolesInquiryComponent,
    'app-menu-detail': MenuDetailComponent,
    'app-menu-detail-detail': MenuDetailDetailComponent,
  };

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.nextPage(this.idMenu, this.content);
  }
}
