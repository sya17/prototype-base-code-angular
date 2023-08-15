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
import { WorkflowGroupService } from 'src/app/core/service/masterdata/workflow-group/workflow-group.service';
import { PeriodicElement } from '../../menu/menu-inquiry/menu-inquiry.component';
import { IWorkflowGroup } from 'src/app/core/data/masterdata/workflow-group/IWorkflowGroup';

@Component({
  selector: 'app-workflow-group-inquiry',
  templateUrl: './workflow-group-inquiry.component.html',
  styleUrls: ['./workflow-group-inquiry.component.scss'],
})
export class WorkflowGroupInquiryComponent implements OnInit {
  @Input() idMenuModule: string = '';
  @Output() pagination = paginationConstant.ROWS_PER_PAGE;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  firstLoad: boolean = false;
  currentPageIndex: number = 1;
  displayedColumns: string[] = ['name', 'description', 'table_name'];
  dataSource = new MatTableDataSource<IWorkflowGroup>([]);

  newPage: string = 'app-workflow-group-detail';

  constructor(
    private contentService: ContentService,
    private service: WorkflowGroupService
  ) {}

  async ngOnInit(): Promise<void> {
    this.contentService.addContent(this.idMenuModule, this.newPage, {
      onBack: true,
      onDelete: true,
      onNew: true,
      onRefresh: true,
      onSave: true,
    });
    // Pagination
    this.dataSource.paginator = this.paginator!;

    // Sorting
    this.dataSource.sort = this.sort!;
    await this.doSearch('', this.currentPageIndex);
  }

  async doSearch(search: string, page: number): Promise<void> {
    this.firstLoad = true;
    this.service.getData(page).subscribe(
      async (res) => {
        this.dataSource.data = res.data;
        this.paginator!.length = res.page.total;
        this.firstLoad = false;
      },
      async (err) => {
        this.firstLoad = false;
      }
    );
  }

  async onPageChange(event: any) {
    const pageIndex = event.pageIndex + 1;
    if (pageIndex > this.currentPageIndex) {
      await this.doSearch('', pageIndex);
    } else if (pageIndex < this.currentPageIndex) {
      await this.doSearch('', pageIndex);
    }
    this.currentPageIndex = pageIndex;
  }
}
