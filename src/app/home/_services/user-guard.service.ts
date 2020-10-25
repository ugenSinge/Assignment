import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate{

  constructor() { }
  public canActivate(){
    let user = JSON.parse(sessionStorage.getItem('auth-user'));
      let role = user['role'];
      if(role == 'user'){
        return true;
      }
      return false;

  }
}
