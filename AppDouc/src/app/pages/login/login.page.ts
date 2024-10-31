import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }


  inicarSesion(){
    console.log("rut"+ this.formlogin.rut)
    console.log("password"+ this.formlogin.password)
    
    let datosEnviar: NavigationExtras ={
      queryParams : {rutUsuario: this.formlogin.rut}
    }

    this.router.navigate(["/home"],datosEnviar)

  }
}
