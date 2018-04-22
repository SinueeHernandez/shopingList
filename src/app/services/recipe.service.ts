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
      description: 'Hamburger',
      imagePath :
      'https://fthmb.tqn.com/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg',
      ingridients: [
        new Ingredient({name: 'Beef Steak', amount: 10}),
        new Ingredient({name: 'tomatoe', amount: 3}),
        new Ingredient({name: 'carrott', amount: 5})
      ]
    }));
    this.recipes.push(new Recipe({
      name: 'Some Recipe 2',
      description: 'Mega Sushi',
      imagePath : 'https://halfoff.adspayusa.com/wp-content/uploads/2018/03/sushi_and_sashimi_for_two.0.jpg',
      ingridients: [
        new Ingredient({name: 'orange', amount: 2})
      ]
    }));
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes.slice()[id];
  }

}
