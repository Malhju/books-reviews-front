import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string = 'http://localhost:8000/api';
  token;

  constructor(private http: HttpClient) { }

  register(credentials: any) {
    return this.http.post(this.url + '/register',
    JSON.stringify(credentials),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }

  login(credentials: any) {
    return this.http.post(this.url + '/login',
    JSON.stringify(credentials),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }

  getToken(): any {
    this.token = JSON.parse(localStorage.getItem('access-token-books'));
    return this.token.access_token;

  }
}
