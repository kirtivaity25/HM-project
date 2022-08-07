import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardcontainerComponent } from './dashboardcontainer/dashboardcontainer.component';


@NgModule({
  declarations: [
    DashboardcontainerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
