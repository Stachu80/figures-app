import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Dictionary } from '@app/core/constants';
import { FiguresFacade } from '@app/core/store/facade/figures.facade';

@Component({
  selector: 'app-calculations-container',
  templateUrl: './calculations-container.component.html',
  styleUrls: ['./calculations-container.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculationsContainerComponent {
  selectCalculationsDetails$ = this.figuresFacade.selectCalculationsDetails$;
  selectChosenCalculations$ = this.figuresFacade.selectChosenCalculations$;
  selectChosenFigure$ = this.figuresFacade.selectChosenFigure$;
  result$ = this.figuresFacade.selectResult$;
  title = Dictionary.CalculationsViewTitle;
  subtitle = Dictionary.CalculationsViewSubtitle;

  constructor(private figuresFacade: FiguresFacade) {}

  showResult(result: number): void {
    this.figuresFacade.setResult(result);
  }
}
