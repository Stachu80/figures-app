import { createAction, props } from '@ngrx/store';
import { ComboboxItem } from '../../models';

export const setSelectedCalculation = createAction(
  '[Figures] set selected calculations',
  props<{ selectedCalculation: ComboboxItem }>()
);
