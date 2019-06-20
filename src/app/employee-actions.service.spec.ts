import { TestBed } from '@angular/core/testing';

import { EmployeeActionsService } from './employee-actions.service';

describe('EmployeeActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeActionsService = TestBed.get(EmployeeActionsService);
    expect(service).toBeTruthy();
  });
});
