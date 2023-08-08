import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<app-main-layout>
    <app-side-menu> </app-side-menu>
    <app-head-layout></app-head-layout>
    <app-mainworkspace></app-mainworkspace>
  </app-main-layout>`,
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {}
