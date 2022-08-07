import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdercontainerComponent } from './ordercontainer/ordercontainer.component';


@NgModule({
  declarations: [
    OrdercontainerComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
