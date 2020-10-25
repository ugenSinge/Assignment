import { Users } from './../../data/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private ROOT_URL = 'http://localhost:3000/signup';
  constructor(private http: HttpClient) { }
  getUsersFromHttp(){
    return this.http.get<Users[]>(this.ROOT_URL);
  }
}
