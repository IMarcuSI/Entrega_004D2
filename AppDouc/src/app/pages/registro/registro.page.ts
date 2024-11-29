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
    password: "",
    registro: "ausente"
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
  
    const usuario = {
      nombre: this.formlogin.nombre,
      correo: this.formlogin.correo,
      password: this.formlogin.password,
      registro: this.formlogin.registro
    };

   
    await this.storage.set(this.formlogin.rut, usuario);

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
