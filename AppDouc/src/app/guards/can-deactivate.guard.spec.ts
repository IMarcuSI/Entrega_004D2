import { TestBed } from '@angular/core/testing';
import { CanDeactivate } from '@angular/router';
import { CanDeactivateGuard, CanComponentDeactivate } from './can-deactivate.guard';

describe('CanDeactivateGuard', () => {
  let guard: CanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateGuard]
    });
    guard = TestBed.inject(CanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should call canDeactivate method', () => {
    const component: CanComponentDeactivate = {
      canDeactivate: () => true
    };
    expect(guard.canDeactivate(component)).toBe(true);
  });
});
