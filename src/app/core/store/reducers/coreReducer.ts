import { createReducer, on } from '@ngrx/store';
import { Figure } from '../../models/figures.model';
import { setFigures } from '../actions/figures.actions';

export const coreFeatureKey = 'core';

export interface CoreState {
  figures: Figure[];
}

export const initialState: CoreState = {
  figures: [],
};

export const coreReducer = createReducer(
  initialState,
  on(setFigures, (state, { figures }) => ({
    ...state,
    figures,
  }))
);
