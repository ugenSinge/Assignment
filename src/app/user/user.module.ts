import { ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FixtureComponent } from './fixture/fixture.component';
import { WageComponent } from './wage/wage.component';
import { TicketComponent } from './ticket/ticket.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { PresentMatchDetailComponent } from './present-match-detail/present-match-detail.component';
import { TicketdetailComponent } from './ticketdetail/ticketdetail.component';
import { PresentTicketdetailComponent } from './present-ticketdetail/present-ticketdetail.component';
import { WageDetailComponent } from './wage-detail/wage-detail.component';
import { PresentWagedetailComponent } from './present-wagedetail/present-wagedetail.component';


@NgModule({
  declarations: [FixtureComponent, WageComponent, TicketComponent, UserComponent, MatchDetailComponent, PresentMatchDetailComponent, TicketdetailComponent, PresentTicketdetailComponent, WageDetailComponent, PresentWagedetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
