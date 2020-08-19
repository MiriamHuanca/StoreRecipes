import {Recipe} from './recipe-list/recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.modal';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 3)
      ]),
    new Recipe(
      'Spaghetti',
      'Huge Pile Of Spaghetti On Plate And Twirled',
      'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/09/receta-facil-de-salsa-roja-para-espagueti.jpg',
      [
        new Ingredient('Meat', 10),
        new Ingredient('Spaghetti', 15)
      ]),
    {
      name: 'A test Recipe 2',
      description: 'This is simply a test 2',
      imagePath: 'https://tvazteca.brightspotcdn.com/dims4/default/7e6560c/2147483647/strip/true/crop/1068x660+0+0/resize/968x598!/format/jpg/quality/80/?url=https%3A%2F%2Ftvazteca.brightspotcdn.com%2F97%2F7d%2Fcffd3c31ec0d2b9d8f999300cb48%2Fel-conde-de-sandwich.jpg',
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
