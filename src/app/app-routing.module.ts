import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'auth/login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'search-orders',
    loadChildren: () => import('./pages/search-orders/search-orders.module').then( m => m.SearchOrdersPageModule)
  },
  {
    path: 'order-status',
    loadChildren: () => import('./pages/order-status/order-status.module').then( m => m.OrderStatusPageModule)
  },
  {
    path: 'delivery',
    loadChildren: () => import('./pages/delivery/delivery.module').then( m => m.DeliveryPageModule)
  },
  {
    path: 'order-details2',
    loadChildren: () => import('./pages/order-details2/order-details2.module').then( m => m.OrderDetails2PageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
