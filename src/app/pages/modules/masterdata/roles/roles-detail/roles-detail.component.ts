import { Component, Input } from '@angular/core';
import { ContentService } from 'src/app/core/service/content.service';

@Component({
  selector: 'app-roles-detail',
  templateUrl: './roles-detail.component.html',
  styleUrls: ['./roles-detail.component.scss'],
})
export class RolesDetailComponent {
  @Input() idMenuModule: string = '';
  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this;
  }

  ngOnDestroy(): void {
    this;
  }

  onNextPage() {
    this.contentService.nextPage(this.idMenuModule, 'app-roles-detail-detail');
  }
}
