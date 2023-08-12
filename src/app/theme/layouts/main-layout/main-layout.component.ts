import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { map } from 'rxjs';
import { IMenu } from 'src/app/core/data/sidemenu/IMenu';
import { DeviceUtil } from 'src/app/core/utils/device-util';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer | undefined;
  @Input() openedSideMenu: boolean = true;

  constructor(){}

  ngOnInit(): void {
    this;
  }

  onCloseSide() {
    this.drawer?.toggle();
  }
}
