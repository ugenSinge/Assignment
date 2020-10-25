import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FixtureService } from 'src/app/admin/services/fixture.service';
import { Fixtures } from 'src/app/data/fixture.model';


@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit, OnDestroy {

  id: number;
  fixtures: Fixtures[];

//setup subscription inside this component
  fixtureSub$: Subscription;

  constructor(private fixtureService: FixtureService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id'); //check matches from our routing module

    this.fixtureSub$ = this.fixtureService.fixtureFromHttp(this.id)
      .subscribe(fixtures => {
        this.fixtures = fixtures;
        console.log(this.fixtures)
      })
  }
  ngOnDestroy(): void{
    this.fixtureSub$.unsubscribe(); //clean up subscribtion
  }

}

