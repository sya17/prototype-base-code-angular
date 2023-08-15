import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowGroupComponent } from './workflow-group.component';
import { ThemeModule } from 'src/app/theme/theme.module';
import { WorkflowGroupInquiryComponent } from './workflow-group-inquiry/workflow-group-inquiry.component';
import { WorkflowGroupDetailComponent } from './workflow-group-detail/workflow-group-detail.component';

export const WORKFLOW_COMPONENTS = [
  WorkflowGroupComponent,
  WorkflowGroupInquiryComponent,
  WorkflowGroupDetailComponent,
];

@NgModule({
  declarations: [...WORKFLOW_COMPONENTS],
  imports: [CommonModule, ThemeModule],
  exports: [...WORKFLOW_COMPONENTS],
})
export class WorkflowGroupModule {}
