import { ActionReducerMap } from '@ngrx/store';
import { coreFeatureKey, coreReducer, CoreState } from './coreReducer';

export interface AppState {
  [coreFeatureKey]: CoreState;
}

export const reducers: ActionReducerMap<AppState> = {
  [coreFeatureKey]: coreReducer,
};
