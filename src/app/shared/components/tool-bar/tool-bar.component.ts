import { Component, Input, OnInit } from '@angular/core';
import { IAccessMenu } from 'src/app/core/data/sidemenu/IMenu';
import { ToolbarData } from 'src/app/core/data/toolbar';
import { ContentService } from 'src/app/core/service/content.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit, ToolbarData {
  @Input() idMenu: string = '';
  @Input() menuToolbarAccess: IAccessMenu = {
    onBack: true,
    onDelete: true,
    onRefresh: true,
    onSave: true,
    onNew: true,
  };

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this;
  }

  onBack(): void {
    this.contentService.prevPage(this.idMenu);
  }
  onSave(): void {
    throw new Error('Method not implemented.');
  }
  onDelete(): void {
    throw new Error('Method not implemented.');
  }
  onRefresh(): void {
    throw new Error('Method not implemented.');
  }
  onNew(): void {
    this.contentService.nextContentPage(this.idMenu);
  }
}
