import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchOrdersPageRoutingModule } from './search-orders-routing.module';

import { SearchOrdersPage } from './search-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchOrdersPageRoutingModule
  ],
  declarations: [SearchOrdersPage]
})
export class SearchOrdersPageModule {}
