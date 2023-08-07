import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu-item',
  template: ` <a
      class="side-item"
      mat-list-item
      mat-ripple
      [routerLink]="link"
      routerLinkActive="active"
      (isActiveChange)="isActive.emit(!$event)"
    >
      <ng-container *ngTemplateOutlet="templateContent"></ng-container>
    </a>

    <ng-template #templateContent>
      <ng-content></ng-content>
    </ng-template>`,
  styleUrls: ['./side-menu-item.component.scss'],
})
export class SideMenuItemComponent {
  @Input() link: string | null = null;
  @Input() target: '_self' | '_blank' | '_parent' | '_top' | null = null;

  @Output() isActive = new EventEmitter<boolean>();
}
