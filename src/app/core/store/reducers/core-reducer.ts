import { createReducer, on } from '@ngrx/store';
import { ComboboxItem } from '../../models';
import { Figure } from '@app/core/models';
import {
  setResult,
  setSelectedCalculation,
} from '../actions/calculations.actions';
import {
  reset,
  setFigures,
  setSelectedFigure,
} from '../actions/configuration.actions';

export const coreFeatureKey = 'core';

export interface CoreState {
  figures: Figure[];
  selectedFigure: ComboboxItem | null;
  selectedCalculation: ComboboxItem | null;
  result: number | null;
}

export const initialState: CoreState = {
  figures: [],
  selectedFigure: null,
  selectedCalculation: null,
  result: null,
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
  })),

  on(setResult, (state, { result }) => ({
    ...state,
    result,
  })),

  on(reset, (state) => ({
    ...state,
    selectedFigure: null,
    selectedCalculation: null,
    result: null,
  }))
);
