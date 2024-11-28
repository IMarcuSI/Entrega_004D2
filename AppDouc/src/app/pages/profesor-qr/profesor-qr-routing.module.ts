import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorQRPage } from './profesor-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorQRPageRoutingModule {}
