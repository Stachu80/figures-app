import { ComboboxItem, Details, Figure } from '@app/core/models';
import { AppState } from '@app/core/store/reducers';
import {
  CoreState,
  figuresFeatureKey,
} from '@app/core/store/reducers/figures-reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCoreState =
  createFeatureSelector<CoreState>(figuresFeatureKey);

export const selectAllFiguresData = createSelector<
  AppState,
  CoreState,
  Figure[]
>(selectCoreState, ({ figuresData }) => figuresData);

export const selectAllCalculationsData = createSelector<
  AppState,
  CoreState,
  ComboboxItem[]
>(selectCoreState, ({ calculationsData }) => calculationsData);

export const selectChosenFigure = createSelector<
  AppState,
  CoreState,
  CoreState['chosenFigure']
>(selectCoreState, ({ chosenFigure }) => chosenFigure);

export const selectFiguresData = createSelector<
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

export const selectChosenCalculations = createSelector<
  AppState,
  CoreState,
  CoreState['chosenCalculations']
>(selectCoreState, ({ chosenCalculations }) => chosenCalculations);

export const isReadyToCalculation = createSelector<
  AppState,
  CoreState['chosenFigure'],
  CoreState['chosenCalculations'],
  boolean
>(
  selectChosenFigure,
  selectChosenCalculations,
  (selectedFigure, selectedCalculation) => {
    return selectedFigure !== null && selectedCalculation !== null;
  }
);

export const selectedCalculationDetails = createSelector<
  AppState,
  CoreState['figuresData'],
  CoreState['chosenFigure'],
  CoreState['chosenCalculations'],
  Details | null
>(
  selectAllFiguresData,
  selectChosenFigure,
  selectChosenCalculations,
  (figures, selectedFigure, selectedCalculation) => {
    if (selectedFigure && selectedCalculation) {
      return selectedCalculation.id === 0
        ? figures[+selectedFigure.id].area
        : figures[+selectedFigure.id].perimeter;
    }
    return null;
  }
);

export const selectResult = createSelector<
  AppState,
  CoreState,
  CoreState['result']
>(selectCoreState, ({ result }) => result);
