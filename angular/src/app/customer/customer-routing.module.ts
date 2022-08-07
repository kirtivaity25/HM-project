import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomercontainerComponent } from './customercontainer/customercontainer.component';

const routes: Routes = [
  {
    path :'',
    component: CustomercontainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
