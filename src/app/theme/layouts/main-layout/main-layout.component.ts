import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/core/data/IMenu';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  menus: IMenu[] = [
    {
      id: 'Dashboard',
      name: 'Dashboard',
      child: [
        {
          id: 'Sub Dashboard',
          name: 'Sub Dashboard',
        },
      ],
    },
    {
      id: 'Module',
      name: 'Module',
    },
    {
      id: 'Settings',
      name: 'Settings',
    },
  ];

  ngOnInit(): void {
    this;
  }
}
