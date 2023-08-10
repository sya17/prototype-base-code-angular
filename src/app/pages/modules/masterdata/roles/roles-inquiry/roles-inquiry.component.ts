import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ContentService } from 'src/app/core/service/content.service';

@Component({
  selector: 'app-roles-inquiry',
  templateUrl: './roles-inquiry.component.html',
  styleUrls: ['./roles-inquiry.component.scss'],
})
export class RolesInquiryComponent implements OnInit, OnDestroy {
  @Input() idMenuModule: string = '';
  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this;
  }

  ngOnDestroy(): void {
    this;
  }

  onNextPage() {
    this.contentService.nextPage(this.idMenuModule, 'app-roles-detail');
  }
}
