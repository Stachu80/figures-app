import { Injectable } from '@angular/core';
import { CalculationsAction } from '@app/core/store/actions';
import { AppState } from '@app/core/store/reducers';
import {
  getCalculationsResult,
  getSelectedCalculationDetails,
} from '@app/core/store/selectors/calculations.selectors';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class CalculationFacade {
  getCalculationsDetails$ = this.store.select(getSelectedCalculationDetails);
  getCalculationsResult$ = this.store.select(getCalculationsResult);
  constructor(private store: Store<AppState>) {}

  setResult(result: number): void {
    this.store.dispatch(CalculationsAction.setResult({ result }));
  }
}
