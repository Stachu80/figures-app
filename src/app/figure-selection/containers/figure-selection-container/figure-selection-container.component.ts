import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FiguresFacade } from '../../../core/store/facade/figures.facade';

@Component({
  selector: 'app-figure-selection-container',
  templateUrl: './figure-selection-container.component.html',
  styleUrls: ['./figure-selection-container.component.css'],
})
export class FigureSelectionContainerComponent {
  selectFigures$ = this.figureFacade.selectFigures$;

  constructor(private store: Store, private figureFacade: FiguresFacade) {}
}
