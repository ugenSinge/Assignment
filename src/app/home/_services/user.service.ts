import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get('http://localhost:3000');
  }

  getUserBoard(): Observable<any> {
    return this.http.get('http://localhost:3000');
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get('http://localhost:3000');
  }

  getAdminBoard(): Observable<any> {
    return this.http.get('http://localhost:3000');
  }


  getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/signup')
  }
}
