import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderDataService } from '../services/order-data.service';

@Component({
  selector: 'app-add-to-cart-page',
  templateUrl: './add-to-cart-page.component.html',
  styleUrls: ['./add-to-cart-page.component.scss'],
})
export class AddToCartPageComponent implements OnInit, OnDestroy {
  itemsfromMenu = [];
  dataSubscription: Subscription;
  constructor(private orderDataService: OrderDataService) {}

  ngOnInit(): void {
    this.dataSubscription = this.orderDataService.itemsToAddInCart.subscribe(
      (ele) => {
        this.itemsfromMenu = [...ele];
      }
    );
    this.orderDataService.itemsInCart.next(this.itemsfromMenu);
  }
  removeItem(index) {
    this.itemsfromMenu.splice(index, 1);
    this.orderDataService.itemsToAddInCart.next(this.itemsfromMenu);
  }

  getDateTime() {
    let today = new Date();
    let order_date =
      today.getDate() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getFullYear();
    let order_time = today.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    this.itemsfromMenu.forEach((ele) => {
      ele.order_date = order_date;
      ele.order_time = order_time;
    });
  }

  placeOrder() {
    this.getDateTime();
    this.orderDataService.placeOrder.next(this.itemsfromMenu);
    this.itemsfromMenu = [];
    this.orderDataService.itemsInCart.next([]);
    this.orderDataService.itemsToAddInCart.next([]);
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
