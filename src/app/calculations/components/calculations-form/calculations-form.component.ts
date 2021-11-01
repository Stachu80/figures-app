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
import { CalculationsParam, FormCalculationsParam } from '@app/core/models';

@Component({
  selector: 'app-calculations-form',
  templateUrl: './calculations-form.component.html',
  styleUrls: ['./calculations-form.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculationsFormComponent implements OnInit {
  @Input() formula!: string;
  @Input() calculationsParams!: Array<CalculationsParam>;
  @Output() result = new EventEmitter<{
    value: FormCalculationsParam[];
    formula: string;
  }>();

  @Output() inputChange = new EventEmitter();

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

    this.calculationsParams.forEach((param) => {
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

  restrict(event: KeyboardEvent): boolean {
    const charCode = event.code ? event.code : event.key;
    this.inputChange.emit();
    //@ts-ignore
    if (event?.target?.value.length === 0 && event.key === '0') {
      event.preventDefault();
    }

    if (charCode.includes('Digit') || charCode.includes('Backspace')) {
      return true;
    }
    event.preventDefault();
    return false;
  }

  sendResult(): void {
    const inputValue: FormCalculationsParam[] =
      this.calculationForm.value.inputFields;
    this.result.emit({ value: inputValue, formula: this.formula });
  }
}
