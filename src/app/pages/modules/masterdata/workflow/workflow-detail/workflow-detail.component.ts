import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContentService } from 'src/app/core/service/content.service';

@Component({
  selector: 'app-workflow-detail',
  templateUrl: './workflow-detail.component.html',
  styleUrls: ['./workflow-detail.component.scss'],
})
export class WorkflowDetailComponent implements OnInit {
  @Input() idMenuModule: string = '';
  constructor(private contentService: ContentService) {}
  formGroup = new FormGroup({});

  ngOnInit(): void {

  }

  onActionForm() {
    this.formGroup
  }
}
