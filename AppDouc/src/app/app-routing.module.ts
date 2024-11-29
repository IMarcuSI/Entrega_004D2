import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { mguardGuard } from './guards/mguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vistas',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./pages/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard],
    canMatch: [mguardGuard],
  },

  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
 
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'cambiopass',
    loadChildren: () => import('./pages/cambiopass/cambiopass.module').then( m => m.CambiopassPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QRPageModule)
  },
  {
    path: 'profesor-qr',
    loadChildren: () => import('./pages/profesor-qr/profesor-qr.module').then( m => m.ProfesorQRPageModule)
  },
  {
    path: 'vistas',
    loadChildren: () => import('./pages/vistas/vistas.module').then( m => m.VistasPageModule)
  },
  {
    path: 'registro-profesor',
    loadChildren: () => import('./pages/registro-profesor/registro-profesor.module').then( m => m.RegistroProfesorPageModule)
  },
  {
    path: 'login-profesor',
    loadChildren: () => import('./pages/login-profesor/login-profesor.module').then( m => m.LoginProfesorPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

