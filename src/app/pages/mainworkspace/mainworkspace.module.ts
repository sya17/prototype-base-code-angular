import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainworkspaceComponent } from './mainworkspace.component';
import { ThemeModule } from 'src/app/theme/theme.module';

@NgModule({
  imports: [CommonModule, ThemeModule],
  declarations: [MainworkspaceComponent],
  exports: [MainworkspaceComponent],
})
export class MainworkspaceModule {}
