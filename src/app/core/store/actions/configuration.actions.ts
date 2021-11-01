import { createAction, props } from '@ngrx/store';
import { ComboboxItem, Data, Figure } from '../../models';

export const setAllApiDataInStore = createAction(
  '[Figures] get data from api  ',
  props<{ data: Data }>()
);

export const setAllFiguresDataInStore = createAction(
  '[Figures] get figuresData from api and set in store',
  props<{ figuresData: Figure[] }>()
);

export const figureSelectedByUserInComboBox = createAction(
  '[Figures] set  figure selected by user in combobox',
  props<{ figureSelectedInComboBox: ComboboxItem }>()
);
export const reset = createAction('[Configuration] reset');
