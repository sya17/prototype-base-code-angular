export interface IMenu {
  id: string;
  name: string;
  link: string;
  desc?: string;
  child?: IMenu[];
}
