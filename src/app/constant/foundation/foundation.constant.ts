import * as comp from './index.foundation';

export const COMPONENTS: ComponentMap = {
  'app-test': comp.TestComponent,
  'app-dashboard': comp.DashboardComponent,
  'app-menu-inquiry': comp.MenuInquiryComponent,
};

interface ComponentMap {
  [key: string]: any;
}

export const SHOW_LIST = {
  limit: 5,
};
