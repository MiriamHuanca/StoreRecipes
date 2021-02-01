import {Ingredient} from '../../shared/ingredient.modal';
import {Action} from '@ngrx/store';
import {ADD_INGREDIENT} from './shopping-list.actions';

const initState = {
  ingredient: [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

export function shoppingListReducer(state = initState, action: Action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredient: [...state.ingredient, action]
      };
  }
}
