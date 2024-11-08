import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formlogin = {
    rut: "",
    password: ""
  }

  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async iniciarSesion() {
    console.log("rut: " + this.formlogin.rut);
    console.log("password: " + this.formlogin.password);
    
    const user = await this.storage.get(this.formlogin.rut);
    
    if (user.password === this.formlogin.password) {
      console.log("Autenticación exitosa");

      let datosEnviar: NavigationExtras = {
        queryParams: { rutUsuario: this.formlogin.rut }
      }

      this.router.navigate(["/home"], datosEnviar);
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
