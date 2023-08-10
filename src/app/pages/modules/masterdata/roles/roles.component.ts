import { Component, Input } from '@angular/core';
import { ContentService } from 'src/app/core/service/content.service';
import { RolesDetailComponent } from './roles-detail/roles-detail.component';
import { RolesInquiryComponent } from './roles-inquiry/roles-inquiry.component';

@Component({
  selector: 'app-roles',
  template: ` <div class="w-full h-full">
    <app-content-layout
      [content]="content"
      [dirContent]="DIR_CONTENT"
      [idMenuModule]="idMenu"
    ></app-content-layout>
  </div>`,
})
export class RolesComponent {
  @Input() idMenu: string = '';
  content: string = 'app-roles-inquiry';
  DIR_CONTENT = {
    'app-roles-inquiry': RolesInquiryComponent,
    'app-roles-detail': RolesDetailComponent,
  };

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.nextPage(this.idMenu, this.content);
  }
}
