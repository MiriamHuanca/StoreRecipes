import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(
        'https://ng-store-recipe-book.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }
}

