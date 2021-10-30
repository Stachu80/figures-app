import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ComboboxItem } from '../../models';
import { CalculationsAction } from '../actions';
import { AppState } from '../reducers';
import {
  getSelectedCalculation,
  getSelectedCalculationDetails,
} from '../selectors';

@Injectable({
  providedIn: 'root',
})
export class CalculationFacade {
  selectCalculationsDetails$ = this.store.select(getSelectedCalculationDetails);
  getSelectedCalculations$ = this.store.select(getSelectedCalculation);
  constructor(private store: Store<AppState>) {}

  setSelectedCalculation(selectedCalculation: ComboboxItem): void {
    this.store.dispatch(
      CalculationsAction.setSelectedCalculation({ selectedCalculation })
    );
  }
}
