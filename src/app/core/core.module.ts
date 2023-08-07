import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ThemeService } from './service/theme.service';

export const DATA_SERVICES = [];
export const DATA_SERVICES_MODULES = [];
export const DATA_SERVICES_UTIL = [{ provide: ThemeService }];

export const CORE_PROVIDERS = [
  ...DATA_SERVICES,
  ...DATA_SERVICES_MODULES,
  ...DATA_SERVICES_UTIL,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...CORE_PROVIDERS],
    };
  }
}
