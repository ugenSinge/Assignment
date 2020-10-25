import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [SignupComponent, LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,

  ]
})
export class HomeModule {
}
