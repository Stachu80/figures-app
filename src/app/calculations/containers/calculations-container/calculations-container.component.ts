import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppPath, Dictionary } from '@app/core/constants';
import { FormCalculationsParam } from '@app/core/models';
import { FiguresFacade } from '@app/core/store/facade/figures.facade';
import * as math from 'mathjs';
import { simplify } from 'mathjs';

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

  calculateResult(event: {
    value: FormCalculationsParam[];
    formula: string;
  }): void {
    const result = event.value.reduce(
      (acc: {}, item: { name: string; value: string | number }) => {
        return { ...acc, [item.name]: +item.value };
      },
      {}
    );
    const mathResult = math.evaluate(
      simplify(event.formula, result).toString()
    );
    this.figuresFacade.setResult(mathResult);
  }

  goToConfiguration(): void {
    this.router.navigate([AppPath.Configuration]);
  }
}
