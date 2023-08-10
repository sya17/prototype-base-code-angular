import { Component, Input } from '@angular/core';
import { IMenuProp } from 'src/app/core/data/sidemenu/IMenu';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent {
  @Input() menuToolbarAccess: IMenuProp = {
    onBack: true,
    onDelete: true,
    onRefresh: true,
    onSave: true,
  };
}
