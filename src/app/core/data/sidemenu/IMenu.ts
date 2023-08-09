export interface IMenu {
  id: string;
  name: string;
  description: string;
  link?: string;
  icon?: string;
  childMenu?: IMenu[];
}
