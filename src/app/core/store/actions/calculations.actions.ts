import { createAction, props } from '@ngrx/store';
import { ComboboxItem } from '../../models';

export const setSelectedCalculation = createAction(
  '[Calculations] set selected calculations',
  props<{ selectedCalculation: ComboboxItem }>()
);
export const setResult = createAction(
  '[Calculations] set result',
  props<{ result: number }>()
);
