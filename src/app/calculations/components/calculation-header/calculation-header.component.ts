import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-calculation-header',
  templateUrl: './calculation-header.component.html',
  styleUrls: ['./calculation-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculationHeaderComponent implements OnInit {
  @Input() calculationsType: string | undefined;
  @Input() figureType: string | undefined;
  instruction: string | undefined;

  ngOnInit(): void {
    this.instruction = `Chcesz obliczyć ${this.calculationsType} figury : ${this.figureType}`;
  }
}
