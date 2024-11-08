import { CanActivateFn } from '@angular/router';

export const pagesProtegidoGuard: CanActivateFn = (route, state) => {
  return true;
  
};
