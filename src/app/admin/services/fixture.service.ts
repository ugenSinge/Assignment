
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fixtures } from 'src/app/data/fixture.model';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  private ROOT_URL = 'http://localhost:3000/fixtures';

  constructor(private http: HttpClient) { }

  getFixturesFromHttp(){
    return this.http.get<Fixtures[]>(this.ROOT_URL);
  }

  fixtureFromHttp(id: number){      //template literal
    return this.http.get<Fixtures[]>(`${this.ROOT_URL}/${id}`);
  }

  addFixture(fixtures: Fixtures){
    return this.http.post(this.ROOT_URL, fixtures)
  }
  // getFixtures(){
  //   return of(fixtures);
  // }

  // fixture(id: number) {
  //   return of(
  //     fixtures.find(fixture => +fixture.id === +id) //the + will convert any strign to a number format
  //   )
  // }
}
