import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }


  formlogin = {
    nombre:"",
    rut:"",
    correo:"",
    password:""
  }


  Registrarse(){
    console.log("nombre"+ this.formlogin.nombre)
    console.log("rut"+ this.formlogin.rut)
    console.log("correo"+ this.formlogin.rut)
    console.log("password"+ this.formlogin.password)
    
    let datosEnviar: NavigationExtras ={
      queryParams : {rutUsuario: this.formlogin.rut}
    }

    this.router.navigate(["/login"] ,datosEnviar)

    this.storage.get(this.formlogin.nombre)
    this.storage.get(this.formlogin.rut)
    this.storage.get(this.formlogin.correo)
    this.storage.get(this.formlogin.password)

  }
}
