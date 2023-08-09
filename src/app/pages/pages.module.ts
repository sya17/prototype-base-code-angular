import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../theme/theme.module';
import { TestComponent } from './modules/test/test.component';
import { MainworkspaceModule } from './mainworkspace/mainworkspace.module';

@NgModule({
  declarations: [PagesComponent, TestComponent],
  imports: [PagesRoutingModule, CommonModule, ThemeModule, MainworkspaceModule],
})
export class PagesModule {}
