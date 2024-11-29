import { Component, OnInit } from '@angular/core';
import { ModalController,Platform} from '@ionic/angular';
import { BarcodeScanningModalComponent} from './barcode-scanning-modal.component';
import { LensFacing, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  segment = 'scan';
  scanResult = '';

  constructor(
    private platform: Platform,
    private modalController:ModalController
  ) { }
 
  async startScan(){
    const modal = await this.modalController.create({
    component : BarcodeScanningModalComponent,
    cssClass: 'barcode-scanning-modal',
    componentProps: {
      formats:[],
      LensFacing: LensFacing.Back,
    }
    });

    await modal.present();



    const{ data} = await modal.onWillDismiss();
    if(data){
      this.scanResult = data?.barcode?.displayValue;
    }

  }

  ngOnInit() {
    if(this.platform.is('capacitor')){
      BarcodeScanner.isSupported().then();
      BarcodeScanner.checkPermissions().then();
      BarcodeScanner.removeAllListeners().then();
    }
  }

}
