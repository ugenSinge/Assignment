import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { ViewchangesComponent } from './viewchanges/viewchanges.component';
import { ApproveComponent } from './approve/approve.component';
import { AddfixtureComponent } from './addfixture/addfixture.component';


@NgModule({
  declarations: [ViewchangesComponent, AdminComponent, ApproveComponent, AddfixtureComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule


  ]
})
export class AdminModule { }
