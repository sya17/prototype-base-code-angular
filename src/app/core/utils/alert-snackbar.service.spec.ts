import { TestBed } from '@angular/core/testing';

import { AlertSnackbarService } from './alert-snackbar.service';

describe('AlertSnackbarService', () => {
  let service: AlertSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
