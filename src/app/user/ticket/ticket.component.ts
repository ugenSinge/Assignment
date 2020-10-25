import { FixtureService } from './../../admin/services/fixture.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Fixtures } from 'src/app/data/fixture.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  fixtures$: Observable<Fixtures[]>;
  constructor(private fixtureService: FixtureService) { }

  ngOnInit(): void {
    this.fixtures$ = this.fixtureService.getFixturesFromHttp();
  }

}
