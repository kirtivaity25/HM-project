import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardcontainerComponent } from './dashboardcontainer/dashboardcontainer.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardcontainerComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
