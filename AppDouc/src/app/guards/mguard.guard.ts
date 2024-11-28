import { CanMatchFn } from '@angular/router';

export const mguardGuard: CanMatchFn = (route, segments) => {
  return true;
};
