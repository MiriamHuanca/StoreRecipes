import {Ingredient} from '../../shared/ingredient.modal';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  constructor(name: string, desc: string, imag: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imag;
    this.ingredients = ingredients;
  }
}
