import { Injectable } from '@angular/core';
import { ComboboxItem } from '@app/core/models';
import { CalculationsAction } from '@app/core/store/actions';
import { AppState } from '@app/core/store/reducers';
import {
  getCalculationsResult,
  getSelectedCalculation,
  getSelectedCalculationDetails,
} from '@app/core/store/selectors/calculations.selectors';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class CalculationFacade {
  getCalculationsDetails$ = this.store.select(getSelectedCalculationDetails);
  getSelectedCalculations$ = this.store.select(getSelectedCalculation);
  getCalculationsResult$ = this.store.select(getCalculationsResult);
  constructor(private store: Store<AppState>) {}

  setSelectedCalculation(selectedCalculation: ComboboxItem): void {
    this.store.dispatch(
      CalculationsAction.setSelectedCalculation({ selectedCalculation })
    );
  }

  setResult(result: number): void {
    this.store.dispatch(CalculationsAction.setResult({ result }));
  }
}
