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
    rut:"",
    password:""
  }

  constructor(private router: Router, private storage: Storage) { 

  }

   async ngOnInit() {
    await this.storage.create();
  }


  inicarSesion(){
    console.log("rut"+ this.formlogin.rut)
    console.log("password"+ this.formlogin.password)
    
    let datosEnviar: NavigationExtras ={
      queryParams : {rutUsuario: this.formlogin.rut}
    }

    this.router.navigate(["/home"] ,datosEnviar)

    this.storage.get(this.formlogin.rut)
    this.storage.get(this.formlogin.password)

  }
}
