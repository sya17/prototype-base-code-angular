import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceUtil {
  constructor() {}

  isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  isTablet(): boolean {
    return /iPad|Android|Tablet/i.test(navigator.userAgent);
  }

  isDesktop(): boolean {
    return !this.isMobile() && !this.isTablet();
  }
}
