import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  id: number;

  constructor(
    public shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {
    this.recipe = new Recipe();
    this.route.params.subscribe((data: Params) => {
      this.id = +data['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }

  ngOnInit() {
  }

  toShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingridients);
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
