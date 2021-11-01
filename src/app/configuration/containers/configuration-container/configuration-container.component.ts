import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppPath } from '@app/core/constants';
import { Dictionary } from '@app/core/constants/dictionary.enum';
import { ComboboxItem } from '@app/core/models';
import { FiguresFacade } from '@app/core/store/facade/figures.facade';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-configuration-container',
  templateUrl: './configuration-container.component.html',
  styleUrls: ['./configuration-container.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationContainerComponent implements OnInit {
  selectFiguresComboBoxData$ = this.figuresFacade.selectFiguresData$;
  isReadyToCalculation$ = this.figuresFacade.isReadyToCalculation$;
  selectCalculationsData$ = this.figuresFacade.selectCalculationsData$;
  combobox0Title = Dictionary.ChoseFigure;
  combobox1Title = Dictionary.ChoseCalculation;
  buttonLabel = Dictionary.GotoCalculations;
  title = Dictionary.ConfigurationViewTitle;
  subtitle = Dictionary.ConfigurationViewSubtitle;
  path = AppPath.Calculations;

  constructor(
    private store: Store,
    private figuresFacade: FiguresFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.figuresFacade.reset();
  }

  setChosenFigure = (figure: ComboboxItem): void =>
    this.figuresFacade.setChosenFigure(figure);

  selectedCalculations = (calculation: ComboboxItem): void =>
    this.figuresFacade.selectedCalculations(calculation);

  goToCalculations(): void {
    this.router.navigate([AppPath.Calculations]);
  }
}
