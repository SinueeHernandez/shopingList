import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeSelected: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(_recipeSelected: Recipe) {
    this.recipeSelected = _recipeSelected;
  }
}
