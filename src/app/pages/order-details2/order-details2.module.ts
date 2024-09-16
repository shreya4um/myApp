import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetails2PageRoutingModule } from './order-details2-routing.module';

import { OrderDetails2Page } from './order-details2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetails2PageRoutingModule
  ],
  declarations: [OrderDetails2Page]
})
export class OrderDetails2PageModule {}
