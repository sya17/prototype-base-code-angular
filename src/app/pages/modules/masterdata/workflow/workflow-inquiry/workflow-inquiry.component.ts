import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { paginationConstant } from 'src/app/constant/tables/pagination.constant';
import { ContentService } from 'src/app/core/service/content.service';
import { PeriodicElement } from '../../menu/menu-inquiry/menu-inquiry.component';

@Component({
  selector: 'app-workflow-inquiry',
  templateUrl: './workflow-inquiry.component.html',
  styleUrls: ['./workflow-inquiry.component.scss'],
})
export class WorkflowInquiryComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() idMenuModule: string = '';
  @Output() pagination = paginationConstant.ROWS_PER_PAGE;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  newPage: string = 'app-workflow-group-detail';

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.addContent(this.idMenuModule, this.newPage, {
      onBack: true,
      onDelete: true,
      onNew: true,
      onRefresh: true,
      onSave: true,
    });
  }

  ngOnDestroy(): void {
    this;
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator!;
    // this.dataSource.sort = this.sort!;
  }
}
