import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComboboxItem, Details, Figure } from '../../models';
import { AppState } from '../reducers';
import { coreFeatureKey, CoreState } from '../reducers/coreReducer';

export const selectCoreState = createFeatureSelector<CoreState>(coreFeatureKey);

export const selectFigures = createSelector<AppState, CoreState, Figure[]>(
  selectCoreState,
  ({ figures }) => figures
);

export const getSelectedFigure = createSelector<
  AppState,
  CoreState,
  CoreState['selectedFigure']
>(selectCoreState, ({ selectedFigure }) => selectedFigure);

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
    return selectedFigure && selectedCalculation
      ? selectedCalculation.id === 0
        ? figures[selectedFigure.id].area
        : figures[selectedFigure.id].perimeter
      : null;
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

export const selectFiguresComboData = createSelector<
  AppState,
  Figure[],
  ComboboxItem[]
>(selectFigures, (figures) =>
  figures.map(({ id, name }) => {
    return {
      id,
      name,
    };
  })
);
