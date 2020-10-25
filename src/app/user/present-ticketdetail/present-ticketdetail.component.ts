import { Router } from '@angular/router';
import { Fixtures } from 'src/app/data/fixture.model';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-present-ticketdetail',
  templateUrl: './present-ticketdetail.component.html',
  styleUrls: ['./present-ticketdetail.component.css']
})
export class PresentTicketdetailComponent implements OnInit {
  bookingForm = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Credit_card_credentials: new FormControl('',[Validators.required]),
    agree: new FormControl('',Validators.requiredTrue)
  })
  @Input() fixtures: Fixtures
  constructor(
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  showModel(){
    alert("Successfully booked ticket for match");
    this.router.navigate(['user/fixture']);
  }
}
