import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-detail-detail',
  templateUrl: './menu-detail-detail.component.html',
  styleUrls: ['./menu-detail-detail.component.scss'],
})
export class MenuDetailDetailComponent {
  @Input() idMenuModule: string = '';
}
