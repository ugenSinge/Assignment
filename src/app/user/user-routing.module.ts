import { WageDetailComponent } from './wage-detail/wage-detail.component';
import { TicketdetailComponent } from './ticketdetail/ticketdetail.component';
import { WageComponent } from './wage/wage.component';
import { TicketComponent } from './ticket/ticket.component';
import { FixtureComponent } from './fixture/fixture.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDetailComponent } from './match-detail/match-detail.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'fixture', component: FixtureComponent
      },
      {
        path: 'fixture/:id',
        component: MatchDetailComponent,
      },
      {
        path: 'ticket', component: TicketComponent
      },
      {
        path: 'ticket/:id', component: TicketdetailComponent
      },
      {
        path: 'wage', component: WageComponent
      },
      {
        path: 'wage/:id', component: WageDetailComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
