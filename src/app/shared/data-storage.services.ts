import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageServices {

    url = 'https://irecipies-b89ad.firebaseio.com/recipes.json';

    constructor(
        private http: HttpClient,
        private recipeService: RecipeService
    ) { }

    storeRecipes() {
        return this.http.put(
            this.url,
            this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get<Recipe[]>(this.url)
            .pipe(
                map(
                    (recipes: Recipe[]) => {
                        for (const recipe of recipes) {
                            if (!recipe['ingredients']) {
                                recipe['ingredients'] = [];
                            }
                        }
                        return recipes;
                    }))
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.fetchRecipes(recipes);
            })
            ;
    }
}
