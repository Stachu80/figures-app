import { createReducer, on } from '@ngrx/store';
import { ComboboxItem } from '../../models';
import { Figure } from '../../models/figures.model';
import { setSelectedCalculation } from '../actions/calculations.actions';
import { setFigures, setSelectedFigure } from '../actions/figures.actions';

export const coreFeatureKey = 'core';

export interface CoreState {
  figures: Figure[];
  selectedFigure: ComboboxItem | null;
  selectedCalculation: ComboboxItem | null;
}

export const initialState: CoreState = {
  figures: [],
  selectedFigure: null,
  selectedCalculation: null,
};

export const coreReducer = createReducer(
  initialState,
  on(setFigures, (state, { figures }) => ({
    ...state,
    figures,
  })),
  on(setSelectedFigure, (state, { selectedFigure }) => ({
    ...state,
    selectedFigure,
  })),
  on(setSelectedCalculation, (state, { selectedCalculation }) => ({
    ...state,
    selectedCalculation,
  }))
);
