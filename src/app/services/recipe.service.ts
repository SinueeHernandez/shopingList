import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  private recipes: Array<Recipe>;
  recipeUpdated = new Subject<Recipe[]>();

  constructor() {
    this.recipes = new Array<Recipe>();
    // this.recipes.push(new Recipe({
    //   name: 'Some Recipe',
    //   description: 'Hamburger',
    //   imagePath :
    //   'https://fthmb.tqn.com/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg',
    //   ingridients: [
    //     new Ingredient({name: 'Beef Steak', amount: 10}),
    //     new Ingredient({name: 'tomatoe', amount: 3}),
    //     new Ingredient({name: 'carrott', amount: 5})
    //   ]
    // }));
    // this.recipes.push(new Recipe({
    //   name: 'Some Recipe 2',
    //   description: 'Mega Sushi',
    //   imagePath : 'https://halfoff.adspayusa.com/wp-content/uploads/2018/03/sushi_and_sashimi_for_two.0.jpg',
    //   ingridients: [
    //     new Ingredient({name: 'orange', amount: 2})
    //   ]
    // }));
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes.slice()[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeUpdated.next(this.recipes.slice());
  }

  updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.recipeUpdated.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipeUpdated.next(this.recipes.slice());
  }

  fetchRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeUpdated.next(this.recipes.slice());
  }
}
