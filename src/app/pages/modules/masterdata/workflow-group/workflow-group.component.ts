import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/core/service/content.service';
import { WorkflowGroupInquiryComponent } from './workflow-group-inquiry/workflow-group-inquiry.component';
import { WorkflowGroupDetailComponent } from './workflow-group-detail/workflow-group-detail.component';

@Component({
  selector: 'app-workflow-group',
  template: ` <div class="w-full h-full">
    <app-content-layout
      [content]="content"
      [dirContent]="DIR_CONTENT"
      [idMenuModule]="idMenu"
    ></app-content-layout>
  </div>`,
})
export class WorkflowGroupComponent implements OnInit {
  @Input() idMenu: string = '';

  content: string = 'app-workflow-group-inquiry';
  DIR_CONTENT = {
    'app-workflow-group-inquiry': WorkflowGroupInquiryComponent,
    'app-workflow-group-detail': WorkflowGroupDetailComponent,
  };

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.nextPage(this.idMenu, this.content);
  }
}
