export class GenResponse {
  constructor() {}
  public getTotal(res: any) {
    const data = JSON.parse(JSON.stringify(res));
    return data['pagination']['total'];
  }
  public getCurrPage(res: any) {
    const data = JSON.parse(JSON.stringify(res));
    return data['pagination']['currentPage'];
  }
  public getTotalPerPage(res: any) {
    const data = JSON.parse(JSON.stringify(res));
    return data['pagination']['totalPerPage'];
  }
  public getTotalPage(res: any) {
    const data = JSON.parse(JSON.stringify(res));
    return data['pagination']['totalPage'];
  }
}
