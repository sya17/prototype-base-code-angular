import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowGroupInquiryComponent } from './workflow-group-inquiry.component';

describe('WorkflowGroupInquiryComponent', () => {
  let component: WorkflowGroupInquiryComponent;
  let fixture: ComponentFixture<WorkflowGroupInquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkflowGroupInquiryComponent]
    });
    fixture = TestBed.createComponent(WorkflowGroupInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
