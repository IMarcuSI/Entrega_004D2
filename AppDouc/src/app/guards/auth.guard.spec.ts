import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

describe('AuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => new AuthGuard(
          TestBed.inject(Router),
          TestBed.inject(Storage)
      ).canActivate(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, Storage]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
