import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../theme/theme.module';
import { TestComponent } from './modules/test/test.component';
import { MainworkspaceModule } from './mainworkspace/mainworkspace.module';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { MenuModule } from './modules/masterdata/menu/menu.module';
import { RolesModule } from './modules/masterdata/roles/roles.module';
import { WorkflowModule } from './modules/masterdata/workflow/workflow.module';
import { WorkflowGroupModule } from './modules/masterdata/workflow-group/workflow-group.module';

@NgModule({
  declarations: [PagesComponent, TestComponent, DashboardComponent],
  imports: [
    PagesRoutingModule,
    CommonModule,
    ThemeModule,
    MainworkspaceModule,
    MenuModule,
    WorkflowModule,
    WorkflowGroupModule,
    RolesModule,
  ],
})
export class PagesModule {}
