import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { paginationConstant } from './tables/pagination.constant';

export const CONSTANT_TABLES = [paginationConstant];

export const ALL_CONSTANT = [...CONSTANT_TABLES];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ConstantModule {}

export function appInitializerFactory() {
  return () => {
    // Di sini Anda bisa mengatur konstanta atau nilai yang ingin Anda akses.
    // Misalnya:
    (window as any).CONSTANT_TABLES = {
      ROWS_PER_PAGE: paginationConstant.ROWS_PER_PAGE,
    };
  };
}
