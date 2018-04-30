import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  public ingredients: Array<Ingredient>;
  ingredientModified = new Subject<Array<Ingredient>>();
  startedEditing = new Subject<number>();

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
    this.ingredientModified.next(this.ingredients.slice());
  }

  public addIngredients (ingredients: Array<Ingredient>) {
    this.ingredients.push(...ingredients);
    this.ingredientModified.next(this.ingredients.slice());
  }

  getIngridientById(id: number): Ingredient | undefined {
    return this.ingredients[id];
  }

  updatedIngridient(id: number, newIngridient: Ingredient) {
    this.ingredients[id] = newIngridient;
    this.ingredientModified.next(this.ingredients.slice());
  }

  deleteItem(id: number) {
    this.ingredients.splice(id, 1);
    this.ingredientModified.next(this.ingredients.slice());
  }
}
