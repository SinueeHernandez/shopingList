import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageServices {

    url = 'https://irecipies-b89ad.firebaseio.com/recipes.json' + '?auth=';

    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private auth: AuthService
    ) { }

    storeRecipes() {
        const token = this.auth.getToken();
        return this.http.put(
            this.url + token,
            this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.auth.getToken();
        this.http.get<Recipe[]>(this.url + token)
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
