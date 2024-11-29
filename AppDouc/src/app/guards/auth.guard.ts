import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private storage: Storage) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    const isAuthenticated = await this.isLoggedIn();
    if (!isAuthenticated) {

      this.router.navigate(['vistas']);
      return false;
    }
    return true;
  }

  async isLoggedIn(): Promise<boolean> {
    const user = await this.storage.get('currentUser');
    return !!user;
  }
}
