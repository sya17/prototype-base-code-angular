import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainworkspaceComponent } from './mainworkspace.component';
import { ThemeModule } from 'src/app/theme/theme.module';
import { MainworkspaceContentComponent } from './mainworkspace-content/mainworkspace-content.component';

@NgModule({
  imports: [CommonModule, ThemeModule],
  declarations: [MainworkspaceComponent, MainworkspaceContentComponent],
  exports: [MainworkspaceComponent],
})
export class MainworkspaceModule {}
