import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Fixtures } from 'src/app/data/fixture.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-present-wagedetail',
  templateUrl: './present-wagedetail.component.html',
  styleUrls: ['./present-wagedetail.component.css']
})
export class PresentWagedetailComponent implements OnInit {
  wageForm = new FormGroup({
    Name: new FormControl('',Validators.required),
    Email: new FormControl('',Validators.required),
    Credit: new FormControl('',Validators.required),
    Team: new FormControl('',Validators.required),
    Score: new FormControl('',Validators.required),
    Bid: new FormControl('',Validators.required),
    agree: new FormControl('',Validators.requiredTrue)
  })
  @Input() fixtures: Fixtures
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  done(){
    alert("Your Prediction has been saved, Come again to check for your earnings!");
    this.router.navigate(['user/fixture']);
  }
}
