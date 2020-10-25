import { ApproveComponent } from './approve/approve.component';
import { ViewchangesComponent } from './viewchanges/viewchanges.component';
import { AddfixtureComponent } from './addfixture/addfixture.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children:[
      {
        path: 'adminfix', component: AddfixtureComponent
      },
      {
        path: 'adminview', component: ViewchangesComponent
      },
      {
        path: 'adminapprove', component: ApproveComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
