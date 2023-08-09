import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { AM_MODULES } from '../theme/theme.module';

export const SHARED_COMPONENTS = [InputComponent, ToolBarComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  exports: [CommonModule, ...SHARED_COMPONENTS, ...AM_MODULES],
  imports: [CommonModule, ...AM_MODULES],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
