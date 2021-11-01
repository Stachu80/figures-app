import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppPath, Dictionary } from '@app/core/constants';
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
  buttonLabelText = Dictionary.GotoConfiguration;

  constructor(private figuresFacade: FiguresFacade, private router: Router) {}

  showResult(result: number): void {
    this.figuresFacade.setResult(result);
  }

  goToConfiguration(): void {
    this.router.navigate([AppPath.Configuration]);
  }
}
