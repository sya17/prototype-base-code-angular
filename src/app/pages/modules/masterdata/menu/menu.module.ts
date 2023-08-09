import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuInquiryComponent } from './menu-inquiry/menu-inquiry.component';
import { ThemeModule } from 'src/app/theme/theme.module';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';

export const MENU_COMPONENTS = [MenuInquiryComponent, MenuDetailComponent];

export const DIR_MENU = {
  'app-menu-inquiry': MenuInquiryComponent,
  'app-menu-detail': MenuDetailComponent,
}

@NgModule({
  declarations: [...MENU_COMPONENTS],
  imports: [CommonModule, ThemeModule],
  exports: [...MENU_COMPONENTS],
})
export class MenuModule {}
