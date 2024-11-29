import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { LensFacing, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {
  segment = 'scan';
  scanResult = '';
  user: any = {};
  mensaje: string = "";
  mensaje2 = "";

  constructor(
    private platform: Platform,
    private modalController: ModalController,
    private rutaActiva: ActivatedRoute,
    private storage: Storage,
    private apiService: ApiService
  ) {
    this.rutaActiva.queryParams.subscribe(params => {
      if (params['rutUsuario']) {
        this.mensaje = params['rutUsuario'];
        this.loadUserName(params['rutUsuario']);
      }
    });
  }

  async ngOnInit() {
    if (this.platform.is('capacitor')) {
      BarcodeScanner.isSupported().then();
      BarcodeScanner.checkPermissions().then();
      BarcodeScanner.removeAllListeners().then();
    }
    await this.storage.create();
  }

  async loadUserName(rutUsuario: string) {
    const user = await this.storage.get(rutUsuario);
    if (user) {
      this.user = user
      this.mensaje2 = user.registro;
    }
  }

  async startScan() {
    const modal = await this.modalController.create({
      component: BarcodeScanningModalComponent,
      cssClass: 'barcode-scanning-modal',
      componentProps: {
        formats: [],
        LensFacing: LensFacing.Back,
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.scanResult = data?.barcode?.displayValue;
      if (this.scanResult === 'Presente') {
        this.user.registro == 'Presente'
   
      }
    }
  }




  async clearStorage() {
    await this.storage.clear();
    this.mensaje = "";
    this.user = {};
  }
}
