import { Injectable } from '@angular/core';
import { ComboboxItem, ApiData } from '@app/core/models';
import { FiguresAction } from '@app/core/store/actions';
import { AppState } from '@app/core/store/reducers';
import {
  isReadyToCalculation,
  selectAllCalculationsData,
  selectAllFiguresData,
  selectChosenCalculations,
  selectChosenFigure,
  selectedCalculationDetails,
  selectResult,
} from '@app/core/store/selectors';

import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class FiguresFacade {
  selectResult$ = this.store.select(selectResult);
  selectFiguresData$ = this.store.select(selectAllFiguresData);
  selectCalculationsData$ = this.store.select(selectAllCalculationsData);
  selectChosenFigure$ = this.store.select(selectChosenFigure);
  selectChosenCalculations$ = this.store.select(selectChosenCalculations);
  selectCalculationsDetails$ = this.store.select(selectedCalculationDetails);
  isReadyToCalculation$ = this.store.select(isReadyToCalculation);

  constructor(private store: Store<AppState>) {}

  setResult(result: number | null): void {
    this.store.dispatch(FiguresAction.setResult({ result }));
  }

  setData(data: ApiData): void {
    this.store.dispatch(FiguresAction.setApiData({ data }));
  }

  setChosenFigure(chosenFigure: ComboboxItem): void {
    this.store.dispatch(FiguresAction.setChosenFigure({ chosenFigure }));
  }

  setChosenCalculations(chosenCalculations: ComboboxItem): void {
    this.store.dispatch(
      FiguresAction.setChosenCalculations({ chosenCalculations })
    );
  }

  reset(): void {
    this.store.dispatch(FiguresAction.reset());
  }
}
