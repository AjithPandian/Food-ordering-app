import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../Data/data.service';
import { OrderDataService } from '../services/order-data.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit, OnDestroy {
  ordersData = [];
  searchText = '';
  addToCartData: Subscription;
  responseSubscribtion: Subscription;
  sortedColumn = [];
  itemsFreqCount = {};
  freqElementKey = '';
  constructor(
    private dataService: DataService,
    private orderDataService: OrderDataService
  ) {}

  ngOnInit(): void {
    this.ordersData = [...this.dataService.getData()];
    this.addToCartData = this.orderDataService.placeOrder.subscribe((res) => {
      this.ordersData.unshift(...res);
    });
    this.freqOrderedKey();
  }

  //Filtering the frequently ordered item & other types
  handleFilter(event) {
    if (event.target.checked && event.target.value !== 'Frequently ordered') {
      this.searchText = event.target.value;
    } else if (
      event.target.checked &&
      event.target.value === 'Frequently ordered'
    ) {
      this.searchText = this.freqElementKey;
    } else {
      this.searchText = '';
    }
  }

  //Used for finding the frequently ordered item
  freqOrderedKey() {
    this.ordersData.forEach((ele) => {
      this.itemsFreqCount[ele.name]
        ? this.itemsFreqCount[ele.name]++
        : (this.itemsFreqCount[ele.name] = 1);
    });
    let maxFreqCount = 0;
    for (let key in this.itemsFreqCount) {
      if (this.itemsFreqCount[key] > maxFreqCount) {
        maxFreqCount = this.itemsFreqCount[key];
        this.freqElementKey = key;
      }
    }
  }

  ngOnDestroy(): void {
    this.addToCartData.unsubscribe();
  }
}
