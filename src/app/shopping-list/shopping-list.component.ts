import {Component, OnChanges, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

import {Ingredient} from '../shared/ingredient.modal';
import {LoggingService} from '../logging.service';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnChanges {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription;

  constructor(private loggingService: LoggingService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingListLR');
  }

  ngOnChanges() {
    // this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
