import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

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

  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async Registrarse() {
    console.log("nombre: " + this.formlogin.nombre);
    console.log("rut: " + this.formlogin.rut);
    console.log("correo: " + this.formlogin.correo);
    console.log("password: " + this.formlogin.password);

    await this.storage.set(this.formlogin.rut, {
      nombre: this.formlogin.nombre,
      correo: this.formlogin.correo,
      password: this.formlogin.password
    });

    let datosEnviar: NavigationExtras = {
      queryParams: { rutUsuario: this.formlogin.rut }
    };

    this.router.navigate(["/login"], datosEnviar);
  }
}
