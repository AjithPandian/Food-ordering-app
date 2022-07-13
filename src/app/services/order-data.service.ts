import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderDataService {
  itemsToAddInCart = new BehaviorSubject([]);
  itemsInCart = new BehaviorSubject([]);
  placeOrder = new BehaviorSubject([]);
  constructor() {}
}
