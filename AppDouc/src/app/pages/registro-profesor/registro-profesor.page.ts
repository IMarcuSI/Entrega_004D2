import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.page.html',
  styleUrls: ['./registro-profesor.page.scss'],
})
export class RegistroProfesorPage implements OnInit {

  formlogin = {
    nombre_profesor: "",
    rut_profesor: "",
    correo_profesor: "",
    password_profesor: ""
  };

  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async Registrarse() {
    console.log("nombre: " + this.formlogin.nombre_profesor);
    console.log("rut: " + this.formlogin.rut_profesor);
    console.log("correo: " + this.formlogin.correo_profesor);
    console.log("password: " + this.formlogin.password_profesor);

    await this.storage.set(this.formlogin.rut_profesor, {
      nombre: this.formlogin.nombre_profesor,
      correo: this.formlogin.correo_profesor,
      password: this.formlogin.password_profesor
    });

    let datosEnviar: NavigationExtras = {
      queryParams: { rutUsuario: this.formlogin.rut_profesor }
    };

    this.router.navigate(["/login"], datosEnviar);
  }
}