import { TestBed } from '@angular/core/testing';

import { AssignTaskService } from './assign-task.service';

describe('AssignTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignTaskService = TestBed.get(AssignTaskService);
    expect(service).toBeTruthy();
  });
});
