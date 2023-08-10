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

  ngOnInit(): void {
    this;
  }

  ngOnDestroy(): void {
    this;
  }

  onNextPage() {
    this.contentService.nextPage(this.idMenuModule, 'app-menu-detail-detail');
  }
}
