import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-calculations-result',
  templateUrl: './calculations-result.component.html',
  styleUrls: ['./calculations-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculationsResultComponent implements OnInit {
  @Input() result: number | undefined;
  @Input() calculationsType: string | undefined;
  @Input() figureType: string | undefined;
  resultText: string | undefined;

  ngOnInit(): void {
    this.resultText = `${this.calculationsType} figury : ${this.figureType} wynosi : `;
  }
}
