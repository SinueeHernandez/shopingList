import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    private recipieService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recipes = new Array<Recipe>();
  }

  ngOnInit() {
    this.recipes = this.recipieService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
