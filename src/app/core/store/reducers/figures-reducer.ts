import { Figure } from '@app/core/models';
import {
  reset,
  setCalculationsData,
  setChosenCalculations,
  setChosenFigure,
  setFiguresData,
  setResult,
} from '@app/core/store/actions/figures.actions';
import { createReducer, on } from '@ngrx/store';
import { ComboboxItem } from '../../models';

export const figuresFeatureKey = 'figures';

export interface CoreState {
  figuresData: Figure[];
  calculationsData: ComboboxItem[];
  chosenFigure: ComboboxItem | null;
  chosenCalculations: ComboboxItem | null;
  result: number | null;
}

export const initialState: CoreState = {
  figuresData: [],
  calculationsData: [],
  chosenFigure: null,
  chosenCalculations: null,
  result: null,
};

export const figuresReducer = createReducer(
  initialState,
  on(setFiguresData, (state, { figuresData }) => ({
    ...state,
    figuresData,
  })),

  on(setCalculationsData, (state, { calculationsData }) => ({
    ...state,
    calculationsData,
  })),

  on(setChosenFigure, (state, { chosenFigure }) => ({
    ...state,
    chosenFigure,
  })),

  on(setChosenCalculations, (state, { chosenCalculations }) => ({
    ...state,
    chosenCalculations,
  })),

  on(setResult, (state, { result }) => ({
    ...state,
    result,
  })),

  on(reset, (state) => ({
    ...state,
    chosenFigure: null,
    chosenCalculations: null,
    result: null,
  }))
);
