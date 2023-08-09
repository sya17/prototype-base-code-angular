export interface IMenu {
  id: string;
  name: string;
  description: string;
  link?: string;
  icon?: string;
  default?: boolean;
  subscribe?: boolean;
  childMenu?: IMenu[];
}
