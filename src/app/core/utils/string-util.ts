export class StringUtil {
    // static isNotNullOrEmpty(val: string): boolean {
    //   return val !== null && val !== undefined && val.trim() !== "";
    // }
    static isNotNullOrEmpty(str: string | null | undefined): boolean {
      return str !== null && str !== undefined && str !== '';
  }
  }
  