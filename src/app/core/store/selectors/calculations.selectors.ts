import {
  calculationSelectedByUserInComboBox,
  figureSelectedByUserInComboBox,
  selectAllFiguresData,
  selectCoreState,
} from '@app/core/store/selectors/configurations.selectors';
import { createSelector } from '@ngrx/store';
import { Details } from '../../models';
import { AppState } from '../reducers';
import { CoreState } from '../reducers/core-reducer';

export const getSelectedCalculationDetails = createSelector<
  AppState,
  CoreState['figuresData'],
  CoreState['figureSelectedInComboBox'],
  CoreState['calculationSelectedInComboBox'],
  Details | null
>(
  selectAllFiguresData,
  figureSelectedByUserInComboBox,
  calculationSelectedByUserInComboBox,
  (figures, selectedFigure, selectedCalculation) => {
    if (selectedFigure && selectedCalculation) {
      return selectedCalculation.id === 0
        ? figures[+selectedFigure.id].area
        : figures[+selectedFigure.id].perimeter;
    }
    return null;
  }
);

export const getCalculationsResult = createSelector<
  AppState,
  CoreState,
  CoreState['result']
>(selectCoreState, ({ result }) => result);
