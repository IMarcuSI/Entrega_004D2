import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';
  constructor(private http: HttpClient) { }
  getPost() {
    return this.http.get(`${this.apiUrl}`);
    }
 createPost(post: any) {
return this.http.post(this.apiUrl, post);
}
}
