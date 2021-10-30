import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ComboboxItem } from '../../../core/models';
import { CalculationFacade } from '../../../core/store/facade/calculation.facade';
import { FiguresFacade } from '../../../core/store/facade/figures.facade';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
})
export class ConfigurationComponent {
  selectFiguresComboData$ = this.figureFacade.selectFiguresComboData$;
  selectCalculations = [
    { id: 0, name: 'Pole powierzchni' },
    { id: 1, name: 'Obwód' },
  ];
  comboboxName1 = 'Wybierz figurę';
  comboboxName2 = 'Wybierz co chcesz obliczyć';

  constructor(
    private store: Store,
    private figureFacade: FiguresFacade,
    private calculationFacade: CalculationFacade
  ) {}

  selectedFigure = (figure: ComboboxItem): void =>
    this.figureFacade.setSelectedFigure(figure);

  selectedCalculations = (calculation: ComboboxItem): void =>
    this.calculationFacade.setSelectedCalculation(calculation);
}
