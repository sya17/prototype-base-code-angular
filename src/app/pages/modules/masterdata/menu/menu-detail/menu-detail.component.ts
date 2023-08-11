import { Component, Input } from '@angular/core';
import { ContentService } from 'src/app/core/service/content.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss'],
})
export class MenuDetailComponent {
  @Input() idMenuModule: string = '';
  constructor(private contentService: ContentService) {}

  newPage: string = 'app-menu-detail-detail';

  ngOnInit(): void {
    this.contentService.addContent(this.idMenuModule, this.newPage, {
      onBack: true,
      onDelete: true,
      onRefresh: true,
      onSave: true,
      onNew: false,
    });
  }

  ngOnDestroy(): void {
    this;
  }

  onNextPage() {
    this.contentService.nextPage(this.idMenuModule, 'app-menu-detail-detail');
  }
}
