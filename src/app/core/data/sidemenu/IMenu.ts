export interface IMenu {
  id: string;
  name: string;
  description: string;
  link?: string;
  icon?: string;
  default?: boolean;
  subscribe?: boolean;
  accessMenu?: IAccessMenu | null;
  childMenu?: IMenu[];
}

export interface IAccessMenu {
  onBack?: boolean;
  onSave?: boolean;
  onDelete?: boolean;
  onRefresh?: boolean;
  onNew?: boolean;
}
