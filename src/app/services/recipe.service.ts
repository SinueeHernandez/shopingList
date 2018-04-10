import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Array<Recipe>;

  constructor() {
    this.recipes = new Array<Recipe>();
    this.recipes.push(new Recipe({
      name: 'Some Recipe',
      description: 'testing recipie',
      imagePath : 'https://www.ocf.berkeley.edu/~sather/wp-content/uploads/2018/01/food--1200x600.jpg'
    }));
    this.recipes.push(new Recipe({
      name: 'Some Recipe 2',
      description: 'testing recipie',
      imagePath : 'https://www.ocf.berkeley.edu/~sather/wp-content/uploads/2018/01/food--1200x600.jpg'
    }));
  }

  getRecipes() {
    return this.recipes.slice();
  }

}
