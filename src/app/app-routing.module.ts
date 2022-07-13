import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartPageComponent } from './add-to-cart-page/add-to-cart-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu-bar', pathMatch: 'full' },
  { path: 'menu-bar', component: MenuPageComponent },
  { path: 'orders-page', component: OrdersPageComponent },
  { path: 'add-to-cart', component: AddToCartPageComponent },
  { path: '**', redirectTo: 'menu-bar' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
