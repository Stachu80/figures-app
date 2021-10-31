import { ActionReducerMap } from '@ngrx/store';
import { coreFeatureKey, coreReducer, CoreState } from './core-reducer';

export interface AppState {
  [coreFeatureKey]: CoreState;
}

export const reducers: ActionReducerMap<AppState> = {
  [coreFeatureKey]: coreReducer,
};
