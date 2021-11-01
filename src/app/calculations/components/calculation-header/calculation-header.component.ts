import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AppPath } from '@app/core/constants';

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
  buttonLabelText = 'Wróć do konfiguracji';
  path = AppPath.Configuration;

  ngOnInit(): void {
    this.instruction = `Chcesz obliczyć ${this.calculationsType} figury : ${this.figureType}`;
  }
}
