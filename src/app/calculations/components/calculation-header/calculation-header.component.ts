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
  txt0 = 'Chcesz obliczyć ';
  txt1 = ' figury : ';
  instruction: string | undefined;

  ngOnInit(): void {
    this.instruction =
      this.txt0 + this.calculationsType + this.txt1 + this.figureType;
  }
}
