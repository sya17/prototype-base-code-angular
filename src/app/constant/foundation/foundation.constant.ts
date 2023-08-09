import * as comp from './index.foundation';

export const COMPONENTS: ComponentMap = {
  'app-test': comp.TestComponent,
};

interface ComponentMap {
  [key: string]: any;
}

export const SHOW_LIST = {
  limit: 5,
};
