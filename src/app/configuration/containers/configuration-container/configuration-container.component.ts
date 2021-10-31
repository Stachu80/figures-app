import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ComboboxItem } from '@app/core/models';
import { CalculationFacade } from '@app/core/store/facade/calculation.facade';
import { ConfigurationFacade } from '@app/core/store/facade/configuration.facade';

@Component({
  selector: 'app-configuration-container',
  templateUrl: './configuration-container.component.html',
  styleUrls: ['./configuration-container.component.css'],
})
export class ConfigurationContainerComponent {
  selectFiguresComboBoxData$ = this.configurationFacade.selectFiguresComboData$;
  isReadyToCalculation$ = this.configurationFacade.isReadyToCalculation$;
  selectCalculations = [
    { id: 0, name: 'Pole powierzchni' },
    { id: 1, name: 'Obwód' },
  ];
  comboboxName1 = 'Wybierz figurę';
  comboboxName2 = 'Wybierz co chcesz obliczyć';

  constructor(
    private store: Store,
    private configurationFacade: ConfigurationFacade,
    private calculationFacade: CalculationFacade
  ) {}

  selectedFigure = (figure: ComboboxItem): void =>
    this.configurationFacade.setSelectedFigure(figure);

  selectedCalculations = (calculation: ComboboxItem): void =>
    this.calculationFacade.setSelectedCalculation(calculation);
}
