export class QueryStringParameters {
  private paramsAndValues: string[];
  constructor() {
    this.paramsAndValues = [];
  }
  public push(key: string, value: Object): void {
    console.log(key, value);
    value = encodeURIComponent(value.toString());
    this.paramsAndValues.push([key, value].join("="));
    console.log(this.paramsAndValues);
  }
  public toString = (): string => this.paramsAndValues.join("&");
}
