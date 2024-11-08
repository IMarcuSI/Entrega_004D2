import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../../servicios/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: string[] = [];
  mensaje: string = "";
  mensaje2: string = "";

  constructor(private rutaActiva: ActivatedRoute, private storage: Storage,private apiService: ApiService) {
    this.rutaActiva.queryParams.subscribe(params => {
      if (params['rutUsuario']) {
        this.mensaje = params['rutUsuario'];
        this.loadUserName(params['rutUsuario']);
      }
    });
  }
  async ngOnInit() {
    await this.storage.create();
    this.apiService.getPost().subscribe((data: any) => {
      this.posts.push(data.message); // Assuming the API returns { message: 'URL' }
    });
  }

  async loadUserName(rutUsuario: string) {
    const user = await this.storage.get(rutUsuario);
    if (user) {
      this.mensaje2 = user.nombre;
    } else {
      console.log('Usuario no encontrado en el almacenamiento.');
    }
  }
}
