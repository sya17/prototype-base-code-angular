import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowGroupDetailComponent } from './workflow-group-detail.component';

describe('WorkflowGroupDetailComponent', () => {
  let component: WorkflowGroupDetailComponent;
  let fixture: ComponentFixture<WorkflowGroupDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkflowGroupDetailComponent]
    });
    fixture = TestBed.createComponent(WorkflowGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
