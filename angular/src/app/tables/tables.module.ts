import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablescontainerComponent } from './tablescontainer/tablescontainer.component';


@NgModule({
  declarations: [
    TablescontainerComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }
