import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { mguardGuard } from './mguard.guard';

describe('mguardGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
