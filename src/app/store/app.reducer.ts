import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer'
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  shoppingListLR: fromShoppingList.State;
  authR: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingListLR: fromShoppingList.shoppingListReducer,
  authR: fromAuth.authReducer
};
