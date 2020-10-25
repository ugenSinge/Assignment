import { ActivatedRoute } from '@angular/router';
import { FixtureService } from './../../admin/services/fixture.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Fixtures } from 'src/app/data/fixture.model';

@Component({
  selector: 'app-ticketdetail',
  templateUrl: './ticketdetail.component.html',
  styleUrls: ['./ticketdetail.component.css']
})
export class TicketdetailComponent implements OnInit {
  id: number;
  fixtures: Fixtures[];
  fixtureSub$: Subscription;
  constructor(private fixtureService: FixtureService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.fixtureSub$ = this.fixtureService.fixtureFromHttp(this.id)
    .subscribe(fixtures => {
      this.fixtures = fixtures;
    })
  }
  ngOnDestroy(): void{
    this.fixtureSub$.unsubscribe();
  }

}
