import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdercontainerComponent } from './ordercontainer/ordercontainer.component';

const routes: Routes = [
  {
    path :'',
    component : OrdercontainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
