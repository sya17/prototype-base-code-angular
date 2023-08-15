import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ThemeService } from './service/theme.service';
import { AlertSnackbarService } from './utils/alert-snackbar.service';
import { WorkflowGroupService } from './service/masterdata/workflow-group/workflow-group.service';
import { HttpClient } from '@angular/common/http';
import { WorkflowGroupAbs } from './data/masterdata/workflow-group/WorkflowGroupAbs';

export const DATA_SERVICES = [];
export const DATA_SERVICES_MODULES = [
  { provide: WorkflowGroupAbs, useClass:WorkflowGroupService },
];
export const DATA_SERVICES_UTIL = [
  { provide: ThemeService },
  { provide: AlertSnackbarService },
];

export const CORE_PROVIDERS = [
  ...DATA_SERVICES,
  ...DATA_SERVICES_MODULES,
  ...DATA_SERVICES_UTIL,
];
export const DIRECTIVES = [];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [CommonModule],
  exports: [...DIRECTIVES],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...CORE_PROVIDERS, ...DIRECTIVES],
    };
  }
}
