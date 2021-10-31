import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculations-result',
  templateUrl: './calculations-result.component.html',
  styleUrls: ['./calculations-result.component.scss'],
})
export class CalculationsResultComponent implements OnInit {
  @Input() result: number | undefined;
  @Input() calculationsType: string | undefined;
  @Input() figureType: string | undefined;

  txt0 = ' figury ';
  txt1 = ' wynosi : ';
  resultText: string | undefined;

  ngOnInit(): void {
    this.resultText =
      this.calculationsType + this.txt0 + this.figureType + this.txt1;
  }
}
