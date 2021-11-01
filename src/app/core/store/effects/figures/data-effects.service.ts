import { Injectable } from '@angular/core';
import {
  CalculationsAction,
  ConfigurationsAction,
} from '@app/core/store/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap } from 'rxjs';

@Injectable()
export class DataEffects {
  apiData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfigurationsAction.setAllApiDataInStore),
      concatMap(({ data }) => {
        return [
          ConfigurationsAction.setAllFiguresDataInStore({
            figuresData: data.figures,
          }),
          CalculationsAction.setAllCalculationsDataInStore({
            calculationsData: data.calculations,
          }),
        ];
      })
    )
  );

  constructor(private actions$: Actions) {}
}
