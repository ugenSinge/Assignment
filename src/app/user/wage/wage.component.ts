import { FixtureService } from './../../admin/services/fixture.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Fixtures } from 'src/app/data/fixture.model';

@Component({
  selector: 'app-wage',
  templateUrl: './wage.component.html',
  styleUrls: ['./wage.component.css']
})
export class WageComponent implements OnInit {
  fixtures$: Observable<Fixtures[]>;
  constructor(private fixtureService: FixtureService) { }

  ngOnInit(): void {
    this.fixtures$ = this.fixtureService.getFixturesFromHttp();
  }

}
