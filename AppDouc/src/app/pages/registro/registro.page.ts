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
    rut:"",
    correo:"",
    password:""
  }


  Registrarse(){
    console.log("rut"+ this.formlogin.rut)
    console.log("correo"+ this.formlogin.rut)
    console.log("password"+ this.formlogin.password)
    
    let datosEnviar: NavigationExtras ={
      queryParams : {rutUsuario: this.formlogin.rut}
    }

    this.router.navigate(["/home"] ,datosEnviar)

    this.storage.get(this.formlogin.rut)
    this.storage.get(this.formlogin.correo)
    this.storage.get(this.formlogin.password)

  }
}
