import { UserGuardService } from './home/_services/user-guard.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './home/_services/auth.guard';
import { RouteGuardService } from './home/_services/route-guard.service';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
     path: 'home',

     loadChildren: ()=>import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    canActivate : [RouteGuardService],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user',
    //add canActivate to prevent fail of logout function
     canActivate: [AuthGuard,UserGuardService],
    loadChildren: ()=> import('./user/user.module').then(m=>m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
