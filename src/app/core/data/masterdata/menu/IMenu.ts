export interface IMenu {
  title: string;
  icon: string;
  skipLocationChange: boolean;
  children: IMenu[];
}
