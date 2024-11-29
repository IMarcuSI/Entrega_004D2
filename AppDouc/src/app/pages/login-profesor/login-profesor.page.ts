import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.page.html',
  styleUrls: ['./login-profesor.page.scss'],
})
export class LoginProfesorPage implements OnInit {
  formlogin = {
    rut_profesor: "",
    password_profesor: ""
  }

  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async iniciarSesion() {
    console.log("rut: " + this.formlogin.rut_profesor);
    console.log("password: " + this.formlogin.password_profesor);
    
    const user = await this.storage.get(this.formlogin.rut_profesor);
    
    if (user.password === this.formlogin.password_profesor && user.password_profesor !== ""  ) {

      await this.storage.set('currentUser', user);

      let datosEnviar: NavigationExtras = {
        queryParams: { rutUsuario: this.formlogin.rut_profesor }
      }

      this.router.navigate(["/profesor-qr"], datosEnviar);
    } else {
      this.router.navigate(["/loginProfesor"]);
    }
  }
}
