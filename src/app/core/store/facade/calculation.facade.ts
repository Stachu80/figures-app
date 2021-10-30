import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ComboboxItem } from '../../models';
import { CalculationsAction } from '../actions';
import { AppState } from '../reducers';

@Injectable({
  providedIn: 'root',
})
export class CalculationFacade {
  constructor(private store: Store<AppState>) {}

  setSelectedCalculation(selectedCalculation: ComboboxItem): void {
    this.store.dispatch(
      CalculationsAction.setSelectedCalculation({ selectedCalculation })
    );
  }
}
