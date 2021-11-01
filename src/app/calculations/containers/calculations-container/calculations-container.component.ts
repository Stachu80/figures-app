import { Component } from '@angular/core';
import { CalculationFacade } from '@app/core/store/facade/calculation.facade';
import { ConfigurationFacade } from '@app/core/store/facade/configuration.facade';

@Component({
  selector: 'app-calculations-container',
  templateUrl: './calculations-container.component.html',
  styleUrls: ['./calculations-container.component.scss'],
})
export class CalculationsContainerComponent {
  getCalculationsDetails$ = this.calculationFacade.getCalculationsDetails$;

  calculationSelectedByUserInComboBox$ =
    this.configurationFacade.calculationSelectedByUserInComboBox$;

  figureSelectedByUserInComboBox$ =
    this.configurationFacade.figureSelectedByUserInComboBox$;

  result$ = this.calculationFacade.getCalculationsResult$;
  title = 'Kalkulator';
  subtitle = 'wypełnij wymagane pola';

  constructor(
    private calculationFacade: CalculationFacade,
    private configurationFacade: ConfigurationFacade
  ) {}

  showResult(result: number) {
    this.calculationFacade.setResult(result);
  }
}
