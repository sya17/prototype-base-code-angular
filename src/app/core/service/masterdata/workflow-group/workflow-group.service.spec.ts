import { TestBed } from '@angular/core/testing';

import { WorkflowGroupService } from './workflow-group.service';

describe('WorkflowGroupService', () => {
  let service: WorkflowGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
