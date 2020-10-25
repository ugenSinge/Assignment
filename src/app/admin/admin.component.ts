
import { TokenStorageService } from './../home/_services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    // private tokenStorageService: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    window.sessionStorage.clear();
    this.router.navigate(['home'])
  }

}
