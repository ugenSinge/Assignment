import { FixtureService } from './../services/fixture.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfixture',
  templateUrl: './addfixture.component.html',
  styleUrls: ['./addfixture.component.css']
})
export class AddfixtureComponent implements OnInit {


  adminFixtureForm = new FormGroup({
    date: new FormControl('',[Validators.required,]),
    time: new FormControl('',[Validators.required]),
    stadium: new FormControl('',[Validators.required]),
    ticketcost: new FormControl('',[Validators.required]),
    referee: new FormControl('',[Validators.required]),
    linesman1: new FormControl('',[Validators.required]),
    linesman2: new FormControl('',[Validators.required]),
    team1: new FormControl('',[Validators.required]),
    team2: new FormControl('',[Validators.required]),
    managerT1: new FormControl('',[Validators.required]),
    playersT1: new FormControl('',[Validators.required]),
    managerT2: new FormControl('',[Validators.required]),
    playersT2: new FormControl('',[Validators.required])
    }
  );
  constructor(
    private fixtureService: FixtureService,
    private router: Router, // to route back to home page after form fill
  ) { }

  ngOnInit(): void {
  }
  addFixture(){
    if(this.adminFixtureForm.valid){
      this.fixtureService.addFixture(this.adminFixtureForm.value)
       .subscribe( result => {
         this.adminFixtureForm.reset();
         this.router.navigate(['admin/adminview']); //navigate back to root after subscription
        });
    }
  }

}
