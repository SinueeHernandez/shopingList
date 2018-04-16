import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Array<Recipe>;

  constructor(
    private recipieService: RecipeService
  ) {
    this.recipes = new Array<Recipe>();
  }

  ngOnInit() {
    this.recipes = this.recipieService.getRecipes();
  }
}
