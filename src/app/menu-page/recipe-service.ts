import { Injectable } from '@angular/core';
import { Recipe } from './recipe-model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeItems: Recipe[] = [
    new Recipe('Dosa', 'Veg', 'South Indian', ['BreakFast', 'Dinner'], 50),
    new Recipe('Idli', 'Veg', 'South Indian', ['BreakFast', 'Dinner'], 10),
    new Recipe(
      'Chapathi',
      'Veg',
      'North Indian',
      ['BreakFast', 'Lunch', 'Dinner'],
      40
    ),
    new Recipe(
      'Chicken',
      'Non-Veg',
      'South Indian',
      ['BreakFast', 'Lunch', 'Dinner'],
      100
    ),
    new Recipe(
      'Mutton',
      'Non-Veg',
      'South Indian',
      ['BreakFast', 'Lunch', 'Dinner'],
      150
    ),
    new Recipe(
      'Roti',
      'Veg',
      'North Indian',
      ['BreakFast', 'Lunch', 'Dinner'],
      30
    ),
  ];

  getRecipes() {
    return this.recipeItems.slice();
  }
}
