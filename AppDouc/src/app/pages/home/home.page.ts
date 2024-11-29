import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  mensaje: string = "";
  mensaje2: string = "";
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
      
      // Enviar usuario al json-server
      this.apiService.registrarUsuario({ rut: rutUsuario, ...user }).subscribe({
        next: (response: any) => {
          console.log('Usuario registrado en json-server:', response);
        },
        error: (error: any) => {
          console.error('Error al registrar usuario en json-server:', error);
        }
      });
    } else {
      console.log('Usuario no encontrado en el almacenamiento.');
    }
  }

  async clearStorage() {
    await this.storage.clear();
    console.log('Todos los usuarios han sido borrados del almacenamiento.');
    this.mensaje2 = "";
    this.mensaje = "";
    this.user = {};
  }
}
