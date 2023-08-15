import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SideMenuComponent } from './layouts/side-menu/side-menu.component';
import { SideMenuItemComponent } from './layouts/side-menu/side-menu-item/side-menu-item.component';
import { RouterModule } from '@angular/router';
import { SideMenuListComponent } from './layouts/side-menu/side-menu-list/side-menu-list.component';
import { HeadLayoutComponent } from './layouts/head-layout/head-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { MatSelectModule } from '@angular/material/select';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomTextareaComponent } from './components/custom-textarea/custom-textarea.component';
import { InputComponent } from './components/input/input.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';

export const AM_MODULES = [
  MatSidenavModule,
  NgIf,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatFormFieldModule,
];
export const LAYOUT_COMPONENTS = [
  MainLayoutComponent,
  SideMenuComponent,
  SideMenuItemComponent,
  SideMenuListComponent,
  HeadLayoutComponent,
  ContentLayoutComponent,
];
export const CUSTOM_COMPONENTS = [
  InputComponent,
  ToolBarComponent,
  CustomInputComponent,
  CustomTextareaComponent,
];

export const PIPES = [];
export const OTHERS_MODULE = [ReactiveFormsModule, RouterModule];

@NgModule({
  imports: [CommonModule, ...AM_MODULES, ...OTHERS_MODULE],
  exports: [
    CommonModule,
    ...PIPES,
    ...LAYOUT_COMPONENTS,
    ...CUSTOM_COMPONENTS,
    ...AM_MODULES,
    ...OTHERS_MODULE
  ],
  declarations: [...LAYOUT_COMPONENTS, ...PIPES, ...CUSTOM_COMPONENTS],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
