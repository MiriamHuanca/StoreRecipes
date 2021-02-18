import {Ingredient} from '../../shared/ingredient.modal';
import * as ShoppingListActions from './shopping-list.actions';

const initState = {
  ingredient: [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

export function shoppingListReducer(
  state = initState,
  action: ShoppingListActions.AddIngredient
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredient: [...state.ingredient, action]
      };
  }
}
