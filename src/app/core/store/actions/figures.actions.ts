import { createAction, props } from '@ngrx/store';
import { Figure } from '../../models';

export const setFigures = createAction(
  '[Figures] set figures in store',
  props<{ figures: Figure[] }>()
);
