import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../../services/recipe.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  public recipes: Array<Recipe>;
  subscription: Subscription;

  constructor(
    private recipieService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recipes = new Array<Recipe>();
  }

  ngOnInit() {
    this.recipes = this.recipieService.getRecipes();
    this.subscription = this.recipieService.recipeUpdated.subscribe((recipies: Recipe[]) => {
      this.recipes = recipies;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
