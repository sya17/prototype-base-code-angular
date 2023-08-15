export interface IPageResponse {
  total: number;
  total_page: number;
  limit: number;
  curr_page: number;
  nextPage: string;
  prevPage: string;
}
