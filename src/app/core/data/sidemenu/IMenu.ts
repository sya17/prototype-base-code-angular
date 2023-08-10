export interface IMenu {
  id: string;
  name: string;
  description: string;
  link?: string;
  icon?: string;
  default?: boolean;
  subscribe?: boolean;
  accessMenu?: IMenuProp | null;
  childMenu?: IMenu[];
}

export interface IMenuProp {
  onBack?: boolean;
  onSave?: boolean;
  onDelete?: boolean;
  onRefresh?: boolean;
}
