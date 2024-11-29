import * as testing from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pagesProtegidoGuard } from './pages-protegido.guard';

describe('pagesProtegidoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      testing.TestBed.runInInjectionContext(() => pagesProtegidoGuard(...guardParameters));

  beforeEach(() => {
    testing.TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
