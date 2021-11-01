import { createAction, props } from '@ngrx/store';
import { ComboboxItem, Data, Figure } from '../../models';

export const setApiData = createAction(
  '[Figures] get data from api  ',
  props<{ data: Data }>()
);

export const setFiguresData = createAction(
  '[Figures] get figuresData from api and set in store',
  props<{ figuresData: Figure[] }>()
);

export const setChosenFigure = createAction(
  '[Figures] set  figure selected by user in combobox',
  props<{ chosenFigure: ComboboxItem }>()
);
export const reset = createAction('[Configuration] reset');

export const setCalculationsData = createAction(
  '[Calculations] get calculationsData from api and set in store',
  props<{ calculationsData: ComboboxItem[] }>()
);

export const setChosenCalculations = createAction(
  '[Calculations] set calculations selected by user in combobox ',
  props<{ chosenCalculations: ComboboxItem }>()
);

export const setResult = createAction(
  '[Calculations] set result',
  props<{ result: number }>()
);
