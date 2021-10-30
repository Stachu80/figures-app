import { Component } from '@angular/core';
import { CalculationFacade } from '../../../core/store/facade/calculation.facade';
import { ConfigurationFacade } from '../../../core/store/facade/configuration.facade';

@Component({
  selector: 'app-calculations-container',
  templateUrl: './calculations-container.component.html',
  styleUrls: ['./calculations-container.component.css'],
})
export class CalculationsContainerComponent {
  selectedCalculations$ = this.calculationFacade.getSelectedCalculations$;
  selectedFigure$ = this.configurationFacade.getSelectedFigure$;
  selectedDetails$ = this.calculationFacade.selectCalculationsDetails$;

  constructor(
    private calculationFacade: CalculationFacade,
    private configurationFacade: ConfigurationFacade
  ) {}
}
