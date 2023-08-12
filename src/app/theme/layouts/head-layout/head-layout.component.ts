import { Component, Input } from '@angular/core';
import { MainLayoutComponent } from '../main-layout/main-layout.component';

@Component({
  selector: 'app-head-layout',
  templateUrl: './head-layout.component.html',
  styleUrls: ['./head-layout.component.scss'],
})
export class HeadLayoutComponent {
  constructor(private mainComp: MainLayoutComponent) {}

  @Input() closeSideVisible: boolean = true;

  closeSide() {
    this.mainComp.onCloseSide();
  }
}
