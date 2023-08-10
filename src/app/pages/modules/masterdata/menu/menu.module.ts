import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuInquiryComponent } from './menu-inquiry/menu-inquiry.component';
import { ThemeModule } from 'src/app/theme/theme.module';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuComponent } from './menu.component';
import { MenuDetailDetailComponent } from './menu-detail-detail/menu-detail-detail.component';

export const MENU_COMPONENTS = [
  MenuInquiryComponent,
  MenuDetailComponent,
  MenuComponent,
  MenuDetailDetailComponent,
];

@NgModule({
  declarations: [...MENU_COMPONENTS],
  imports: [CommonModule, ThemeModule],
  exports: [...MENU_COMPONENTS],
})
export class MenuModule {}
