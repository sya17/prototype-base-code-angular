import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MainLayoutComponent } from '../main-layout/main-layout.component';

@Component({
  selector: 'app-head-layout',
  templateUrl: './head-layout.component.html',
  styleUrls: ['./head-layout.component.scss'],
})
export class HeadLayoutComponent {
  constructor(private mainComp: MainLayoutComponent) {}
  closeSide() {
    this.mainComp.onCloseSide();
  }
}
