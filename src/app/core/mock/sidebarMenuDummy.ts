import { IMenu } from "../data/IMenu";

export const listMenu: IMenu[] = [
  {
    id: '1',
    name: 'Broadcast',
    description: 'broadcast',
    icon: 'screen_share',
    link: 'broadcast',
    childMenu: [
      {
        id: '11',
        name: 'Pages',
        description: 'pages',
        icon: 'pages',
        link: 'pages',
        childMenu: [],
      },
      {
        id: '12',
        name: 'Group',
        description: 'group',
        icon: 'group',
        link: 'group',
        childMenu: [
          {
            id: '121',
            name: 'Sub Group',
            description: 'Sub group',
            icon: 'group',
            link: 'group',
            childMenu: [],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Settings',
    description: 'settings',
    icon: 'settings',
    link: 'settings',
    childMenu: [
      {
        id: '21',
        name: 'Pages',
        description: 'pages',
        icon: 'pages',
        link: 'pages',
        childMenu: [],
      },
      {
        id: '22',
        name: 'Group',
        description: 'group',
        icon: 'group',
        link: 'group',
        childMenu: [],
      },
      {
        id: '23',
        name: 'Account',
        description: 'account',
        icon: 'account_box',
        link: 'account',
        childMenu: [
          // {
          //   id: '23',
          //   name: 'Sub Account',
          //   description: 'account',
          //   icon: 'account_box',
          //   link: 'account',
          //   childMenu: [],
          // },
          // {
          //   id: '23',
          //   name: 'Sub Account 2',
          //   description: 'account',
          //   icon: 'account_box',
          //   link: 'account',
          //   childMenu: [],
          // },
        ],
      },
    ],
  },
];
