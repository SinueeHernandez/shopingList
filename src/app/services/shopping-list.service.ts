import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  public ingredients: Array<Ingredient>;
  ingredientModified = new EventEmitter<Array<Ingredient>>();

  constructor() {
    this.ingredients = new Array<Ingredient>();
    this.ingredients.push(new Ingredient({
      name: 'Apple',
      amount: 5
    }));
    this.ingredients.push(new Ingredient({
      name: 'Tomatoe',
      amount: 1
    }));
  }

  public getIngridients(): Array<Ingredient> {
    return this.ingredients.slice();
  }
  public addIngredient (ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientModified.emit(this.ingredients);
  }

}
