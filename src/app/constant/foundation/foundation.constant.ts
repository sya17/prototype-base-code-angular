import { ComponentMap } from 'src/app/core/data/contentMapData';
import * as comp from './index.foundation';

export const COMPONENTS: ComponentMap = {
  'app-test': comp.TestComponent,
  'app-dashboard': comp.DashboardComponent,
  'app-menu': comp.MenuComponent,
  'app-roles': comp.RolesComponent,
};

export const SHOW_LIST = {
  limit: 5,
};
