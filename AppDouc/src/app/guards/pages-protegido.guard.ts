import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class PagesContenidoGuard implements CanActivate {
  private storageReady = false;

  constructor(private router: Router, private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.storageReady = true;
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (!this.storageReady) {
      await this.init();
    }
    const rut = await this.storage.get('rut');
    const password = await this.storage.get('password');
    
    if (rut && password) {
      // Usuario autenticado
      return true;
    } else {
      // Usuario no autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}

export const pagesProtegidoGuard: CanActivateFn = (route, state) => {
  return true;
  
};
