import {Component, OnChanges, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.modal';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnChanges {
  ingredients: Ingredient[];
  private ingChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingChangeSub = this.shoppingListService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  ngOnChanges() {
    this.ingChangeSub.unsubscribe();
  }

  onIngredientAdded(ingredient: Ingredient) {
    // this.ingredients.push(ingredient);
  }

}
