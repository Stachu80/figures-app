import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Figure } from '../../models';
import { AppState } from '../reducers';
import { coreFeatureKey, CoreState } from '../reducers/coreReducer';

export const selectCoreState = createFeatureSelector<CoreState>(coreFeatureKey);

export const selectFigures = createSelector<AppState, CoreState, Figure[]>(
  selectCoreState,
  ({ figures }) => figures
);
