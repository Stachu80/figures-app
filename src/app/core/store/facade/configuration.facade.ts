import { Injectable } from '@angular/core';
import { ComboboxItem, Figure } from '@app/core/models';
import { ConfigurationsAction } from '@app/core/store/actions';
import { AppState } from '@app/core/store/reducers';
import {
  getSelectedFigure,
  selectFiguresComboData,
} from '@app/core/store/selectors';
import { isReadyToCalculation } from '@app/core/store/selectors/calculations.selectors';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationFacade {
  selectFiguresComboData$ = this.store.select(selectFiguresComboData);
  getSelectedFigure$ = this.store.select(getSelectedFigure);
  isReadyToCalculation$ = this.store.select(isReadyToCalculation);

  constructor(private store: Store<AppState>) {}

  setFigures(figures: Figure[]): void {
    this.store.dispatch(ConfigurationsAction.setFigures({ figures }));
  }

  setSelectedFigure(selectedFigure: ComboboxItem): void {
    this.store.dispatch(
      ConfigurationsAction.setSelectedFigure({ selectedFigure })
    );
  }

  reset(): void {
    this.store.dispatch(ConfigurationsAction.reset());
  }
}
