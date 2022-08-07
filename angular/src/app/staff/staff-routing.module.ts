import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffcontainerComponent } from './staffcontainer/staffcontainer.component';

const routes: Routes = [
  {
    path:'',
    component : StaffcontainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
