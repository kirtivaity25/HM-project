import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablescontainerComponent } from './tablescontainer/tablescontainer.component';

const routes: Routes = [
  {
    path:'',
    component: TablescontainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
