import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IMenu } from 'src/app/core/data/sidemenu/IMenu';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer | undefined;

  ngOnInit(): void {
    this;
  }

  onCloseSide() {
    console.log('closeee');

    this.drawer?.toggle();
  }
}
