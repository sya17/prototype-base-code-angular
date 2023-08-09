export class StringUtil {
    static isNotNullOrEmpty(val: string): boolean {
      return val !== null && val !== undefined && val.trim() !== "";
    }
  }
  