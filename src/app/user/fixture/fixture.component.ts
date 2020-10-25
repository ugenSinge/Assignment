import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FixtureService } from 'src/app/admin/services/fixture.service';
import { Fixtures } from 'src/app/data/fixture.model';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  fixtures$: Observable<Fixtures[]>;
  constructor(private fixtureService: FixtureService) { }

  ngOnInit(): void {
    // this.fixtures$ = this.fixtureService.getFixtures();
    this.fixtures$ = this.fixtureService.getFixturesFromHttp();
  }

}
