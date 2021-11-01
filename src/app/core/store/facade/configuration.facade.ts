import { Injectable } from '@angular/core';
import { ComboboxItem, Data } from '@app/core/models';
import {
  CalculationsAction,
  ConfigurationsAction,
} from '@app/core/store/actions';
import { AppState } from '@app/core/store/reducers';
import {
  calculationDataInComboBox,
  calculationSelectedByUserInComboBox,
  figuresDataInComboBox,
  figureSelectedByUserInComboBox,
  isReadyToCalculation,
} from '@app/core/store/selectors';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationFacade {
  figuresDataInComboBox$ = this.store.select(figuresDataInComboBox);
  calculationDataInComboBox$ = this.store.select(calculationDataInComboBox);

  figureSelectedByUserInComboBox$ = this.store.select(
    figureSelectedByUserInComboBox
  );
  calculationSelectedByUserInComboBox$ = this.store.select(
    calculationSelectedByUserInComboBox
  );
  isReadyToCalculation$ = this.store.select(isReadyToCalculation);

  constructor(private store: Store<AppState>) {}

  setData(data: Data): void {
    this.store.dispatch(ConfigurationsAction.setAllApiDataInStore({ data }));
  }

  figureSelectedByUserInComboBox(figureSelectedInComboBox: ComboboxItem): void {
    this.store.dispatch(
      ConfigurationsAction.figureSelectedByUserInComboBox({
        figureSelectedInComboBox,
      })
    );
  }

  calculationSelectedInComboBox(
    calculationSelectedInComboBox: ComboboxItem
  ): void {
    this.store.dispatch(
      CalculationsAction.calculationSelectedByUserInComboBox({
        calculationSelectedInComboBox,
      })
    );
  }

  reset(): void {
    this.store.dispatch(ConfigurationsAction.reset());
  }
}
