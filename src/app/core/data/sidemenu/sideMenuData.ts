import { IMenu } from './IMenu';

export abstract class sideMenuData {
  abstract openMenu(menu: IMenu): any;
  abstract closeMenu(menu: IMenu): any;
}
