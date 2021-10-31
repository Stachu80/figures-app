import { Component } from '@angular/core';
import { ComboboxItem } from '@app/core/models';
import { CalculationFacade } from '@app/core/store/facade/calculation.facade';
import { ConfigurationFacade } from '@app/core/store/facade/configuration.facade';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-configuration-container',
  templateUrl: './configuration-container.component.html',
  styleUrls: ['./configuration-container.component.scss'],
})
export class ConfigurationContainerComponent {
  selectFiguresComboBoxData$ = this.configurationFacade.selectFiguresComboData$;
  isReadyToCalculation$ = this.configurationFacade.isReadyToCalculation$;
  selectCalculations = [
    { id: 0, name: 'pole powierzchni' },
    { id: 1, name: 'obwód' },
  ];
  comboboxName1 = 'Wybierz figurę';
  comboboxName2 = 'Wybierz obliczenia';
  buttonText = 'Przejdź do obliczeń';
  title = 'Figury';
  subtitle = 'Obliczanie pola powierzchni lub obwodu wybranej figury';

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
