import { IMenu } from './IMenu';

export abstract class sideMenuData {
  abstract openTabs(menu: IMenu): any;
  abstract closeTabs(menu: IMenu): any;
}
