import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { RolesInquiryComponent } from './roles-inquiry/roles-inquiry.component';
import { RolesDetailComponent } from './roles-detail/roles-detail.component';
import { ThemeModule } from 'src/app/theme/theme.module';

export const ROLES_COMPONENTS = [
  RolesComponent,
  RolesInquiryComponent,
  RolesDetailComponent,
];

@NgModule({
  declarations: [...ROLES_COMPONENTS],
  imports: [CommonModule, ThemeModule],
  exports: [...ROLES_COMPONENTS],
})
export class RolesModule {}
