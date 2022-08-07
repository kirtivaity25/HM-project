import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenucontainerComponent } from './menucontainer/menucontainer.component';

const routes: Routes = [
  {
    path:'',
    component : MenucontainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
