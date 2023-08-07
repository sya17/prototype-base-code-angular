import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu-item',
  template: `<a
      *ngIf="isExternalLink; else internalLink"
      mat-list-item
      mat-ripple
      [href]="link"
      [attr.target]="target"
      ><ng-container *ngTemplateOutlet="templateContent"></ng-container
    ></a>

    <ng-template #internalLink>
      <a
        mat-list-item
        mat-ripple
        [routerLink]="link"
        routerLinkActive="active"
        (isActiveChange)="isActive.emit(!$event)"
        ><ng-container *ngTemplateOutlet="templateContent"></ng-container
      ></a>
    </ng-template>

    <ng-template #templateContent>
      <ng-content></ng-content>
    </ng-template>`,
  styleUrls: ['./side-menu-item.component.scss'],
})
export class SideMenuItemComponent {
  @Input() link: string | null = null;
  @Input() target: '_self' | '_blank' | '_parent' | '_top' | null = null;

  @Output() isActive = new EventEmitter<boolean>();

  get isExternalLink(): boolean {
    return /^(http:\/\/|https:\/\/)/i.test(this.link ?? '');
  }
}
