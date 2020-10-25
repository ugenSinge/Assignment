import { UserListService } from './../services/user-list.service';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/data/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  users$: Observable<Users[]>;
  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    this.users$ = this.userListService.getUsersFromHttp();

  }

}
