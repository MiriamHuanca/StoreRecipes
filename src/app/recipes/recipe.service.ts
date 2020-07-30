import {Recipe} from './recipe-list/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.modal';
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 3)
      ]),
    {
      name: 'A test Recipe 2',
      description: 'This is simply a test 2',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      ingredients: [
        new Ingredient('Bruns', 2),
        new Ingredient('Meat', 20),
      ]
    },
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }
}
