import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/core/service/content.service';
import { WorkflowInquiryComponent } from './workflow-inquiry/workflow-inquiry.component';
import { WorkflowDetailComponent } from './workflow-detail/workflow-detail.component';

@Component({
  selector: 'app-workflow',
  template: ` <div class="w-full h-full">
    <app-content-layout
      [content]="content"
      [dirContent]="DIR_CONTENT"
      [idMenuModule]="idMenu"
    ></app-content-layout>
  </div>`,
})
export class WorkflowComponent implements OnInit {
  @Input() idMenu: string = '';

  content: string = 'app-workflow-inquiry';
  DIR_CONTENT = {
    'app-workflow-inquiry': WorkflowInquiryComponent,
    'app-workflow-detail': WorkflowDetailComponent,
  };

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.nextPage(this.idMenu, this.content);
  }
}
