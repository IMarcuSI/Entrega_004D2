import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/users'; // URL del json-server

  constructor(private http: HttpClient) { }

  // Método para registrar un usuario en el json-server
  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }

  // Método para obtener usuarios
  obtenerUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
