import { Injectable } from '@angular/core';
import { FiguresAction } from '@app/core/store/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap } from 'rxjs';

@Injectable()
export class DataEffects {
  apiData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FiguresAction.setApiData),
      concatMap(({ data }) => {
        return [
          FiguresAction.setFiguresData({
            figuresData: data.figures,
          }),
          FiguresAction.setCalculationsData({
            calculationsData: data.calculations,
          }),
        ];
      })
    )
  );

  constructor(private actions$: Actions) {}
}
