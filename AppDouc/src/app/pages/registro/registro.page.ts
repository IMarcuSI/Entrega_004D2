import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../../servicios/api.service'; // Importa el servicio

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formlogin = {
    nombre: "",
    rut: "",
    correo: "",
    password: ""
  };

  constructor(
    private router: Router, 
    private storage: Storage, 
    private apiService: ApiService // Inyecta el servicio
  ) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async Registrarse() {
    console.log("nombre: " + this.formlogin.nombre);
    console.log("rut: " + this.formlogin.rut);
    console.log("correo: " + this.formlogin.correo);
    console.log("password: " + this.formlogin.password);

    const usuario = {
      nombre: this.formlogin.nombre,
      correo: this.formlogin.correo,
      password: this.formlogin.password
    };

    // Guarda en el almacenamiento local
    await this.storage.set(this.formlogin.rut, usuario);

    // Envía al json-server al mismo tiempo
    this.apiService.registrarUsuario({ rut: this.formlogin.rut, ...usuario }).subscribe({
      next: (response: any) => {
        console.log('Usuario registrado en json-server:', response);
        let datosEnviar: NavigationExtras = {
          queryParams: { rutUsuario: this.formlogin.rut }
        };
        this.router.navigate(["/login"], datosEnviar);
      },
      error: (error: any) => {
        console.error('Error al registrar usuario en json-server:', error);
      }
    });
  }
}
