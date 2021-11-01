import { Component, OnInit } from '@angular/core';
import { ComboboxItem } from '@app/core/models';
import { ConfigurationFacade } from '@app/core/store/facade/configuration.facade';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-configuration-container',
  templateUrl: './configuration-container.component.html',
  styleUrls: ['./configuration-container.component.scss'],
})
export class ConfigurationContainerComponent implements OnInit {
  selectFiguresComboBoxData$ = this.configurationFacade.figuresDataInComboBox$;
  isReadyToCalculation$ = this.configurationFacade.isReadyToCalculation$;
  selectCalculationsComboData$ =
    this.configurationFacade.calculationDataInComboBox$;
  comboboxName1 = 'Wybierz figurę';
  comboboxName2 = 'Wybierz obliczenia';
  buttonText = 'Przejdź do obliczeń';
  title = 'Figury';
  subtitle = 'Obliczanie pola powierzchni lub obwodu wybranej figury';

  constructor(
    private store: Store,
    private configurationFacade: ConfigurationFacade
  ) {}

  ngOnInit(): void {
    this.configurationFacade.reset();
  }

  figureSelectedByUserInComboBox = (figure: ComboboxItem): void =>
    this.configurationFacade.figureSelectedByUserInComboBox(figure);

  calculationSelectedInComboBox = (calculation: ComboboxItem): void =>
    this.configurationFacade.calculationSelectedInComboBox(calculation);
}
