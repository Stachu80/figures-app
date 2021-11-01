import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Dictionary } from '@app/core/constants';
import { CalculationsParam } from '@app/core/models';
import * as math from 'mathjs';
import { simplify } from 'mathjs';

@Component({
  selector: 'app-calculations-form',
  templateUrl: './calculations-form.component.html',
  styleUrls: ['./calculations-form.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculationsFormComponent implements OnInit {
  @Input() formula!: string;
  @Input() params!: Array<CalculationsParam>;
  @Output() result = new EventEmitter<number>();

  calculationForm!: FormGroup;
  title = Dictionary.CalculationsViewSubtitle;
  buttonLabel = Dictionary.CalculationsButtonLabel;

  constructor(private formBuilder: FormBuilder) {}

  get calculationsControl(): { [p: string]: AbstractControl } {
    return this.calculationForm.controls;
  }

  get inputFields(): FormArray {
    return this.calculationsControl.inputFields as FormArray;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.calculationForm = this.formBuilder.group({
      inputFields: new FormArray([]),
    });

    this.params.forEach((param) => {
      const { name, description } = param;
      this.inputFields.push(this.createInputField(name, description));
    });
  }

  createInputField(name: string, description: string): FormGroup {
    return this.formBuilder.group({
      name,
      description,
      value: [null, [Validators.required]],
    });
  }

  keyUp(event: KeyboardEvent): boolean {
    const charCode = event.code ? event.code : event.key;

    if (charCode.includes('Digit')) {
      return true;
    }
    event.preventDefault();
    return false;
  }

  calculate(): void {
    const value = this.calculationForm.value.inputFields.reduce(
      (acc: {}, item: { name: string; value: string | number }) => {
        return { ...acc, [item.name]: +item.value };
      },
      {}
    );

    const mathResult = math.evaluate(simplify(this.formula, value).toString());
    this.result.emit(mathResult);
  }
}
