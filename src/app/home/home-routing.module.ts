import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
      {
        path: '',
        pathMatch: 'full',
        component: LoginComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'signup', component: SignupComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
