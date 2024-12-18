import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorQRPageRoutingModule } from './profesor-qr-routing.module';

import { ProfesorQRPage } from './profesor-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorQRPageRoutingModule
  ],
  declarations: [ProfesorQRPage]
})
export class ProfesorQRPageModule {}
