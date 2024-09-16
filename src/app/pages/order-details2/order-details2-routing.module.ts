import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDetails2Page } from './order-details2.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDetails2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetails2PageRoutingModule {}
