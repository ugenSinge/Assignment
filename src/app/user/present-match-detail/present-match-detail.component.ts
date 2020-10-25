
import { Component, OnInit, Input } from '@angular/core';
import { Fixtures } from 'src/app/data/fixture.model';

@Component({
  selector: 'app-present-match-detail',
  templateUrl: './present-match-detail.component.html',
  styleUrls: ['./present-match-detail.component.css']
})
export class PresentMatchDetailComponent implements OnInit {

  @Input() fixtures: Fixtures
  constructor() { }

  ngOnInit(): void {
  }

}

