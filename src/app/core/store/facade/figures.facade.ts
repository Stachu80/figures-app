import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Figure } from '../../models';
import { FiguresAction } from '../actions';
import { AppState } from '../reducers';
import { selectFigures } from '../selectors';

@Injectable({
  providedIn: 'root',
})
export class FiguresFacade {
  selectFigures$ = this.store.select(selectFigures);

  constructor(private store: Store<AppState>) {}

  setFigures(figures: Figure[]): void {
    this.store.dispatch(FiguresAction.setFigures({ figures }));
  }
}
