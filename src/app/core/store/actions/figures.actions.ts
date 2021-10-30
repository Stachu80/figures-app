import { createAction, props } from '@ngrx/store';
import { ComboboxItem, Figure } from '../../models';

export const setFigures = createAction(
  '[Figures] set figures ',
  props<{ figures: Figure[] }>()
);

export const setSelectedFigure = createAction(
  '[Figures] set selected figure',
  props<{ selectedFigure: ComboboxItem }>()
);
