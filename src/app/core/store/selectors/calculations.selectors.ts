import {
  getSelectedFigure,
  selectCoreState,
  selectFigures,
} from '@app/core/store/selectors/configurations.selectors';
import { createSelector } from '@ngrx/store';
import { Details } from '../../models';
import { AppState } from '../reducers';
import { CoreState } from '../reducers/core-reducer';

export const getSelectedCalculation = createSelector<
  AppState,
  CoreState,
  CoreState['selectedCalculation']
>(selectCoreState, ({ selectedCalculation }) => selectedCalculation);

export const getSelectedCalculationDetails = createSelector<
  AppState,
  CoreState['figures'],
  CoreState['selectedFigure'],
  CoreState['selectedCalculation'],
  Details | null
>(
  selectFigures,
  getSelectedFigure,
  getSelectedCalculation,
  (figures, selectedFigure, selectedCalculation) => {
    if (selectedFigure && selectedCalculation) {
      return selectedCalculation.id === 0
        ? figures[+selectedFigure.id].area
        : figures[+selectedFigure.id].perimeter;
    }
    return null;
  }
);

export const isReadyToCalculation = createSelector<
  AppState,
  CoreState['selectedFigure'],
  CoreState['selectedCalculation'],
  boolean
>(
  getSelectedFigure,
  getSelectedCalculation,
  (selectedFigure, selectedCalculation) => {
    return selectedFigure !== null && selectedCalculation !== null;
  }
);
export const getCalculationsResult = createSelector<
  AppState,
  CoreState,
  CoreState['result']
>(selectCoreState, ({ result }) => {
  console.log('selecyor result', result);
  return result;
});
