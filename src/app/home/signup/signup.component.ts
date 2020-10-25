import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  players = [];
  //to not allow signup of same user
  exists = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log('reached signup');
  }

  signupSave() {

  const payLoad = {
    user_name: this.form.user_name,
    contact: this.form.contact,
    email: this.form.email,
    password: this.form.password,
    confirmPassword: this.form.confirmPassword,
    permission_access: "true", //so admin does not have to register a user manually
    role: 'user', //all users registering will never be admin
    access_token: Math.random()

  }
    this.authService.register(payLoad).subscribe(
      () => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.router.navigate(['login']);
      }
    );


  }
}
