
import { FixtureService } from './../services/fixture.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fixtures } from 'src/app/data/fixture.model';

@Component({
  selector: 'app-fixtures',
  templateUrl: './viewchanges.component.html',
  styleUrls: ['./viewchanges.component.css']
})
export class ViewchangesComponent implements OnInit {

  fixtures$: Observable<Fixtures[]>;
  constructor(private fixtureService: FixtureService) { }

  ngOnInit(): void {
    // this.fixtures$ = this.fixtureService.getFixtures();
    this.fixtures$ = this.fixtureService.getFixturesFromHttp();
  }

}
