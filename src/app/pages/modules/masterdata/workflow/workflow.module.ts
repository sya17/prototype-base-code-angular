import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowComponent } from './workflow.component';
import { ThemeModule } from 'src/app/theme/theme.module';
import { WorkflowInquiryComponent } from './workflow-inquiry/workflow-inquiry.component';
import { WorkflowDetailComponent } from './workflow-detail/workflow-detail.component';

export const WORKFLOW_COMPONENTS = [
  WorkflowComponent,
  WorkflowInquiryComponent,
  WorkflowDetailComponent,
];

@NgModule({
  declarations: [...WORKFLOW_COMPONENTS],
  imports: [CommonModule, ThemeModule],
  exports: [...WORKFLOW_COMPONENTS],
})
export class WorkflowModule {}
