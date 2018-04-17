import { Component, Input, OnInit } from '@angular/core';

import { ShoppingListService } from '../../services/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    public shoppingListService: ShoppingListService
  ) {
    this.recipe = new Recipe();
  }

  ngOnInit() {
  }

  toShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingridients);
  }

}
