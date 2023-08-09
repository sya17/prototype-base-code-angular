import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuInquiryComponent } from './menu-inquiry/menu-inquiry.component';
import { ThemeModule } from 'src/app/theme/theme.module';

export const MENU_COMPONENTS = [
  MenuInquiryComponent
]

@NgModule({
  declarations: [...MENU_COMPONENTS],
  imports: [CommonModule, ThemeModule],
  exports: [...MENU_COMPONENTS]
})
export class MenuModule {}
