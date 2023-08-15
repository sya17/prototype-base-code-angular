import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowInquiryComponent } from './workflow-inquiry.component';

describe('WorkflowInquiryComponent', () => {
  let component: WorkflowInquiryComponent;
  let fixture: ComponentFixture<WorkflowInquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkflowInquiryComponent]
    });
    fixture = TestBed.createComponent(WorkflowInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
