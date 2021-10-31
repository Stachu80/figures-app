import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComboboxItem, Figure } from '../../models';
import { AppState } from '../reducers';
import { coreFeatureKey, CoreState } from '../reducers/core-reducer';

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
