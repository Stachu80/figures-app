import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { figuresEffects } from './effects';
import { reducers } from './reducers';

export const routerStateConfig = {
  stateKey: 'router',
};

@NgModule({
  imports: [
    EffectsModule.forRoot(figuresEffects),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreRouterConnectingModule.forRoot(routerStateConfig),

    environment.reduxDevtools ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class RootStoreModule {}
