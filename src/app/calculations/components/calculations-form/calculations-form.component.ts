import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Param } from '../../../core/models';

@Component({
  selector: 'app-calculations-form',
  templateUrl: './calculations-form.component.html',
  styleUrls: ['./calculations-form.component.css'],
})
export class CalculationsFormComponent implements OnInit {
  @Input() formula!: string | undefined;
  @Input() params!: Array<Param>;
  calculationForm!: FormGroup;
  title = 'Wypełnij poniższe pola';

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
    const value = this.calculationForm.value.inputFields.reduce(
      (acc: {}, item: { name: string; value: string | number }) => {
        return { ...acc, [item.name]: +item.value };
      },
      {}
    );
    console.log(this.formula);
    console.log(value);
  }
}
