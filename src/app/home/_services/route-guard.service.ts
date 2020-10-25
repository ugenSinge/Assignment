import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
//this guard so as to admin route is protected from default users
  constructor() { }
  public canActivate(route: ActivatedRouteSnapshot){ debugger
    //get the username as superAdmin so as to enable the route Guard
      let user = JSON.parse(sessionStorage.getItem('auth-user'));
      let username = user['user_name'];
      if(username == 'superAdmin'){
        return true;
      }
      return false;
    }
  }

