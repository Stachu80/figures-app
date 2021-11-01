import { Figure } from '@app/core/models';
import { createReducer, on } from '@ngrx/store';
import { ComboboxItem } from '../../models';
import {
  setAllCalculationsDataInStore,
  setResult,
  calculationSelectedByUserInComboBox,
} from '../actions/calculations.actions';
import {
  reset,
  setAllFiguresDataInStore,
  figureSelectedByUserInComboBox,
} from '../actions/configuration.actions';

export const coreFeatureKey = 'core';

export interface CoreState {
  figuresData: Figure[];
  calculationsData: ComboboxItem[];
  figureSelectedInComboBox: ComboboxItem | null;
  calculationSelectedInComboBox: ComboboxItem | null;
  result: number | null;
}

export const initialState: CoreState = {
  figuresData: [],
  calculationsData: [],
  figureSelectedInComboBox: null,
  calculationSelectedInComboBox: null,
  result: null,
};

export const coreReducer = createReducer(
  initialState,
  on(setAllFiguresDataInStore, (state, { figuresData }) => ({
    ...state,
    figuresData,
  })),

  on(setAllCalculationsDataInStore, (state, { calculationsData }) => ({
    ...state,
    calculationsData,
  })),

  on(figureSelectedByUserInComboBox, (state, { figureSelectedInComboBox }) => ({
    ...state,
    figureSelectedInComboBox,
  })),

  on(
    calculationSelectedByUserInComboBox,
    (state, { calculationSelectedInComboBox }) => ({
      ...state,
      calculationSelectedInComboBox,
    })
  ),

  on(setResult, (state, { result }) => ({
    ...state,
    result,
  })),

  on(reset, (state) => ({
    ...state,
    figureSelectedInComboBox: null,
    calculationSelectedInComboBox: null,
    result: null,
  }))
);
