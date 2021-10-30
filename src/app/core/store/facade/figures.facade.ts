import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ComboboxItem, Figure } from '../../models';
import { FiguresAction } from '../actions';
import { AppState } from '../reducers';
import { selectFigures, selectFiguresComboData } from '../selectors';

@Injectable({
  providedIn: 'root',
})
export class FiguresFacade {
  selectFigures$ = this.store.select(selectFigures);
  selectFiguresComboData$ = this.store.select(selectFiguresComboData);

  constructor(private store: Store<AppState>) {}

  setFigures(figures: Figure[]): void {
    this.store.dispatch(FiguresAction.setFigures({ figures }));
  }

  setSelectedFigure(selectedFigure: ComboboxItem): void {
    this.store.dispatch(FiguresAction.setSelectedFigure({ selectedFigure }));
  }
}
