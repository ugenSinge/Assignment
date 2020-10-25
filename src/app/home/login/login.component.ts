import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  unauthorizedMessage = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private userService: UserService,
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit() { debugger;
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    //this.createLoginForm();
  }

  // createLoginForm() {
  //   this.loginForm = this.fb.group({
  //     username : ["undefined",Validators.required],
  //     password : ["undefined",Validators.required]
  //   })
  // }

  loginSave() { debugger;

    this.userService.getUsers().subscribe(
      data => { debugger;

        const users = data.filter( user =>{
         return ((user.user_name === this.form.user_name) && user.password === this.form.password)

        })

        //below is to navigate respective users to thier roles but only if permission_access is true,which was a feature an admin could have used *not yet implemented
        if (users && users.length && users[0].permission_access && users[0].permission_access === "true"){
          this.router.navigate([`/${users[0]['role']}`]);
          this.tokenStorage.saveToken(users[0].accessToken);
          this.tokenStorage.saveUser(users[0]);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
        } else {
          if(users && users.length){
            this.unauthorizedMessage = true;
        } else {
          this.router.navigate(['signup']);
          //console.log("Signup First")

        }
      }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  // reloadPage() {
  //   window.location.reload();
  // }
}
