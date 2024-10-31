import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pagesProtegidoGuard } from './pages-protegido.guard';

describe('pagesProtegidoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pagesProtegidoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
