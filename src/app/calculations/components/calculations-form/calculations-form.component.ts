import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Param } from '@app/core/models';
import * as math from 'mathjs';
import { simplify } from 'mathjs';

@Component({
  selector: 'app-calculations-form',
  templateUrl: './calculations-form.component.html',
  styleUrls: ['./calculations-form.component.scss'],
})
export class CalculationsFormComponent implements OnInit {
  @Input() formula!: string;
  @Input() params!: Array<Param>;
  @Output() result = new EventEmitter<number>();
  calculationForm!: FormGroup;
  title = 'Wypełnij poniższe pola';
  buttonText = 'Oblicz';
  constructor(private formBuilder: FormBuilder) {}

  get calculationsControl() {
    return this.calculationForm.controls;
  }

  get inputFields() {
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
      this.inputFields.push(this.addInputField(param));
    });
  }

  addInputField(param: Param): FormGroup {
    const { name, description } = param;
    return this.formBuilder.group({
      name,
      description,
      value: [null, [Validators.required]],
    });
  }

  keyPressNumbers(event: KeyboardEvent): boolean {
    const charCode = event.code ? event.code : event.key;

    if (charCode.includes('Digit')) {
      return true;
    }
    event.preventDefault();
    return false;
  }

  calculate(): void {
    console.log(this.calculationForm.value.inputFields);
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
