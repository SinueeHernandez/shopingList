import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  public recipes: Array<Recipe>;

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

  ngOnInit() {
  }

  onRecipeClicked(_recipeSelected: Recipe) {
    this.recipeSelected.emit(_recipeSelected);
  }

}
