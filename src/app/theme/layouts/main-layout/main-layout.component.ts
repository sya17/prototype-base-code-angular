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
      link: '/dashboard',
      child: [
        {
          id: 'Sub Dashboard',
          name: 'Sub Dashboard',
          link: '/dashboard',
          child: [
            {
              id: 'Sub SUB Dashboard',
              name: 'Sub SUB Dashboard',
              link: '/dashboard',
            },
          ],
        },
      ],
    },
    {
      id: 'Module',
      name: 'Module',
      link: '/dashboard',
      child: [
        {
          id: 'Sub Module',
          name: 'Sub Module',
          link: '/submodule',
        },
      ],
    },
    {
      id: 'Settings',
      name: 'Settings',
      link: '/dashboard',
    },
  ];

  ngOnInit(): void {
    this;
  }
}
