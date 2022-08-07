import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffcontainerComponent } from './staffcontainer/staffcontainer.component';


@NgModule({
  declarations: [
    StaffcontainerComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
