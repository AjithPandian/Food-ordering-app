import { Component, OnDestroy, OnInit } from '@angular/core';

import { Recipe } from './recipe-model';
import { RecipeService } from './recipe-service';
import { OrderDataService } from '../services/order-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent implements OnInit, OnDestroy {
  foodItems: Recipe[];
  cartItem = [];
  itemsFromCart: Subscription;

  constructor(
    private recipeService: RecipeService,
    private orderDataService: OrderDataService
  ) {}

  ngOnInit(): void {
    this.foodItems = this.recipeService.getRecipes();

    //Retriving the items present in the cart
    this.itemsFromCart = this.orderDataService.itemsInCart.subscribe((ele) => {
      if (ele) {
        this.cartItem = [...ele];
      }
    });
    this.orderDataService.itemsToAddInCart.next(this.cartItem);
  }

  handleValueChange(event, item) {
    let obj = { ...item };
    obj.quantity = event.target.value;

    //Checking whether the item is already in the cart, if it is then updating the quantity else
    //pushing the new order into the array
    let index;
    this.cartItem.forEach((ele, idx) => {
      if (ele.name === item.name) {
        index = idx;
        return;
      }
    });

    if (index !== undefined) {
      this.cartItem[index].quantity =
        Number(this.cartItem[index].quantity) + Number(obj.quantity);
    } else this.cartItem.push(obj);
    this.orderDataService.itemsToAddInCart.next(this.cartItem);
  }

  ngOnDestroy(): void {
    this.itemsFromCart.unsubscribe();
  }
}
