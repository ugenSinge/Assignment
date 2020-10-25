import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FixtureService } from './../../admin/services/fixture.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Fixtures } from 'src/app/data/fixture.model';

@Component({
  selector: 'app-wage-detail',
  templateUrl: './wage-detail.component.html',
  styleUrls: ['./wage-detail.component.css']
})
export class WageDetailComponent implements OnInit,OnDestroy {
  id:number;
  fixtures: Fixtures[];
  fixtureSub$: Subscription;
  constructor(
    private fixtureService: FixtureService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.fixtureSub$ = this.fixtureService.fixtureFromHttp(this.id).subscribe(fixtures =>{
      this.fixtures = fixtures;
    })
  }
  ngOnDestroy(): void{
    this.fixtureSub$.unsubscribe(); //best practise to unsubscribe to prevent leakages in application
  }
}
