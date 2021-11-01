import { ActionReducerMap } from '@ngrx/store';
import {
  figuresFeatureKey,
  figuresReducer,
  CoreState,
} from './figures-reducer';

export interface AppState {
  [figuresFeatureKey]: CoreState;
}

export const reducers: ActionReducerMap<AppState> = {
  [figuresFeatureKey]: figuresReducer,
};
