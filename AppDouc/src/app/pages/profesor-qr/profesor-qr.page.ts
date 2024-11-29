import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-profesor-qr',
  templateUrl: './profesor-qr.page.html',
  styleUrls: ['./profesor-qr.page.scss'],
})
export class ProfesorQRPage implements OnInit {


  mensaje: string = "";
  mensaje2: string = "";
  mensaje3: string = "";
  user: any = {};

  constructor(
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
    await this.storage.create();
  }

  async loadUserName(rutUsuario: string) {
    const user = await this.storage.get(rutUsuario);
    if (user) {
      this.user = user;
      this.mensaje2 = user.nombre;
      
      
      
  
      this.apiService.registrarUsuario({ rut: rutUsuario, ...user }).subscribe({
        next: (response: any) => {
        },
      });
    } 
  }

  async clearStorage() {
    await this.storage.clear();

    this.mensaje2 = "";
    this.mensaje = "";
    this.user = {};
  }
}



