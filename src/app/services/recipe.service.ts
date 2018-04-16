import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Array<Recipe>;

  constructor() {
    this.recipes = new Array<Recipe>();
    this.recipes.push(new Recipe({
      name: 'Some Recipe',
      description: 'testing recipie',
      imagePath : 'https://www.ocf.berkeley.edu/~sather/wp-content/uploads/2018/01/food--1200x600.jpg',
      ingridients: [
        new Ingredient({name: 'Beef Steak', amount: 10}),
        new Ingredient({name: 'tomatoe', amount: 3}),
        new Ingredient({name: 'carrott', amount: 5})
      ]
    }));
    this.recipes.push(new Recipe({
      name: 'Some Recipe 2',
      description: 'testing recipie',
      imagePath : 'https://www.ocf.berkeley.edu/~sather/wp-content/uploads/2018/01/food--1200x600.jpg',
      ingridients: [
        new Ingredient({name: 'orange', amount: 2})
      ]
    }));
  }

  getRecipes() {
    return this.recipes.slice();
  }

}
