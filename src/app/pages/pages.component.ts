import { Component, HostListener, OnInit } from '@angular/core';
import { DeviceUtil } from '../core/utils/device-util';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-pages',
  template: `<app-main-layout [openedSideMenu]="openedSideMenu">
    <app-side-menu> </app-side-menu>
    <app-head-layout [closeSideVisible]="openedSideMenu"></app-head-layout>
    <app-mainworkspace></app-mainworkspace>
  </app-main-layout>`,
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  // isHandset = this.breakpointObserver
  //   .observe(Breakpoints.Handset)
  //   .pipe(map((result) => result.matches));
  openedSideMenu = true; // Default to false for larger screens
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.openedSideMenu = !result.matches;
      });
  }

  // Listen for window resize event
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.openedSideMenu = window.innerWidth >= 600;
  }

  ngOnInit(): void {
    this;
  }
}
