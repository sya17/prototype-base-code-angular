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

@Component({
  selector: 'app-menu-inquiry',
  templateUrl: './menu-inquiry.component.html',
  styleUrls: ['./menu-inquiry.component.scss'],
})
export class MenuInquiryComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() idMenuModule: string = '';
  @Output() pagination = paginationConstant.ROWS_PER_PAGE;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  newPage: string = 'app-menu-detail';

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
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  onNextPage(toPage: string) {
    this.contentService.nextPage(this.idMenuModule, toPage);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
