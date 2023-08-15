import { IPageResponse } from './IPageResponse';

export interface IGlobalResponse<T> {
  time: Date;
  status: number;
  message: string;
  path: string;
  page: IPageResponse;
  data: T;
}
