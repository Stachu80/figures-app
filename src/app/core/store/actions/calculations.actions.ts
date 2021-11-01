import { createAction, props } from '@ngrx/store';
import { ComboboxItem } from '../../models';

export const setAllCalculationsDataInStore = createAction(
  '[Calculations] get calculationsData from api and set in store',
  props<{ calculationsData: ComboboxItem[] }>()
);

export const calculationSelectedByUserInComboBox = createAction(
  '[Calculations] set calculations selected by user in combobox ',
  props<{ calculationSelectedInComboBox: ComboboxItem }>()
);

export const setResult = createAction(
  '[Calculations] set result',
  props<{ result: number }>()
);
