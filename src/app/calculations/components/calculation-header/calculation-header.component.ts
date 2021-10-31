import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation-header',
  templateUrl: './calculation-header.component.html',
  styleUrls: ['./calculation-header.component.scss'],
})
export class CalculationHeaderComponent implements OnInit {
  @Input() calculationsType: string | undefined;
  @Input() figureType: string | undefined;
  buttonText = 'Wróć do konfiguracji';
  instruction: string | undefined;

  public ngOnInit(): void {
    this.instruction =
      'Chcesz obliczyć ' +
      this.calculationsType +
      ' figury : ' +
      this.figureType;
  }
}
