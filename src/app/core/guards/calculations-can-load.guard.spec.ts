import { TestBed } from '@angular/core/testing';

import { CalculationsCanLoadGuard } from './calculations-can-load.guard';

describe('CalculationsCanLoadGuard', () => {
  let guard: CalculationsCanLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CalculationsCanLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
