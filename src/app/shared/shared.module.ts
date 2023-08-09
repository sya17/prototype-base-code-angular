import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';

export const SHARED_COMPONENTS = [InputComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  exports: [CommonModule, ...SHARED_COMPONENTS],
  imports: [CommonModule],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
