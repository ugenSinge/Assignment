import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }
  username='form.user_name'
  ngOnInit(): void {
  }
  logout(){
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['home']);
  }

}
