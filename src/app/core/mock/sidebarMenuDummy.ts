import { IMenu } from '../data/sidemenu/IMenu';

export const listMenu: IMenu[] = [
  {
    id: '0',
    name: 'Dashboard',
    description: 'Dashboard',
    icon: 'dashboard',
    link: 'app-dashboard',
    subscribe: true,
    childMenu: [],
  },
  {
    id: '1',
    name: 'Masterdata',
    description: 'Masterdata Menu',
    icon: 'settings',
    subscribe: true,
    childMenu: [
      {
        id: '97284970814958',
        name: 'Menu',
        description: 'menu',
        icon: 'menu',
        link: 'app-menu-inquiry',
        subscribe: true,
        childMenu: [],
      },
    ],
  },
  {
    id: '2',
    name: 'Module',
    description: 'Module',
    icon: 'view_module',
    link: '',
    subscribe: true,
    childMenu: [
      {
        id: '21',
        name: 'Sub Module 1',
        description: 'Sub Module',
        icon: 'view_module',
        link: '',
        subscribe: true,
        childMenu: [
          {
            id: '211',
            name: 'Sub Sub Module',
            description: 'Sub Sub Module',
            icon: 'view_module',
            link: '',
            subscribe: true,
            childMenu: [],
          },
        ],
      },
      {
        id: '22',
        name: 'Sub Module 2',
        description: 'Sub Module',
        icon: 'view_module',
        link: '',
        subscribe: false,
        childMenu: [],
      },
    ],
  },
];
