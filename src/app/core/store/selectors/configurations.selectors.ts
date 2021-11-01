import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComboboxItem, Figure } from '../../models';
import { AppState } from '../reducers';
import { coreFeatureKey, CoreState } from '../reducers/core-reducer';

export const selectCoreState = createFeatureSelector<CoreState>(coreFeatureKey);

export const selectAllFiguresData = createSelector<
  AppState,
  CoreState,
  Figure[]
>(selectCoreState, ({ figuresData }) => figuresData);

export const figureSelectedByUserInComboBox = createSelector<
  AppState,
  CoreState,
  CoreState['figureSelectedInComboBox']
>(selectCoreState, ({ figureSelectedInComboBox }) => figureSelectedInComboBox);

export const calculationDataInComboBox = createSelector<
  AppState,
  CoreState,
  ComboboxItem[]
>(selectCoreState, ({ calculationsData }) => calculationsData);

export const figuresDataInComboBox = createSelector<
  AppState,
  Figure[],
  ComboboxItem[]
>(selectAllFiguresData, (figures) =>
  figures.map(({ id, name }) => {
    return {
      id,
      name,
    };
  })
);

export const calculationSelectedByUserInComboBox = createSelector<
  AppState,
  CoreState,
  CoreState['calculationSelectedInComboBox']
>(
  selectCoreState,
  ({ calculationSelectedInComboBox }) => calculationSelectedInComboBox
);

export const isReadyToCalculation = createSelector<
  AppState,
  CoreState['figureSelectedInComboBox'],
  CoreState['calculationSelectedInComboBox'],
  boolean
>(
  figureSelectedByUserInComboBox,
  calculationSelectedByUserInComboBox,
  (selectedFigure, selectedCalculation) => {
    return selectedFigure !== null && selectedCalculation !== null;
  }
);
