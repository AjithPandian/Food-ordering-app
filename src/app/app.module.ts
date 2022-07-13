import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { AddToCartPageComponent } from './add-to-cart-page/add-to-cart-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuPageComponent,
    OrdersPageComponent,
    AddToCartPageComponent,
    FilterPipe,
    SortPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
