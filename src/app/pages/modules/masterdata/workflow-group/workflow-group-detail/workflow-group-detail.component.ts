import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentService } from 'src/app/core/service/content.service';

@Component({
  selector: 'app-workflow-group-detail',
  templateUrl: './workflow-group-detail.component.html',
  styleUrls: ['./workflow-group-detail.component.scss'],
})
export class WorkflowGroupDetailComponent implements OnInit {
  @Input() idMenuModule: string = '';
  constructor(
    private contentService: ContentService,
    private fb: FormBuilder
  ) {}
  formGroup: FormGroup | undefined;

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['asd', Validators.required],
      description: ['asd'],
      table_name: ['asd', Validators.required],
    });
  }

  onActionForm() {
    this.formGroup;
  }
}
