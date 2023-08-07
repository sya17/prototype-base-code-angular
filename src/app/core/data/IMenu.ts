export interface IMenu {
  id: string;
  name: string;
  desc?: string;
  child?: IMenu[];
}
