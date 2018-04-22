import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ShoppingListService } from '../../services/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    public shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.recipe = new Recipe();
    this.route.params.subscribe((data: Params) => {
      this.recipe = this.recipeService.getRecipeById(+data['id']);
    });
  }

  ngOnInit() {
  }

  toShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingridients);
  }

}
