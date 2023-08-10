import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ContentService } from 'src/app/core/service/content.service';

@Component({
  selector: 'app-menu-inquiry',
  templateUrl: './menu-inquiry.component.html',
  styleUrls: ['./menu-inquiry.component.scss'],
})
export class MenuInquiryComponent implements OnInit, OnDestroy {
  @Input() idMenuModule: string = '';

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this;
  }

  ngOnDestroy(): void {
    this;
  }

  onNextPage(toPage: string) {
    this.contentService.nextPage(this.idMenuModule, toPage);
  }
}
