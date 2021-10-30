import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Param } from '../../../core/models';

@Component({
  selector: 'app-calculations-form',
  templateUrl: './calculations-form.component.html',
  styleUrls: ['./calculations-form.component.css'],
})
export class CalculationsFormComponent implements OnInit {
  @Input() formula: string | undefined;
  @Input() params!: Array<Param>;
  title = 'Wypełnij poniższe pola';
  paramsArray!: FormArray;
  calculationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  get paramsInput() {
    return this.calculationForm.get('inputFields') as FormArray;
  }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.calculationForm = this.formBuilder.group({
      inputFields: this.formBuilder.array([]),
    });

    this.params &&
      this.params.forEach((param) => {
        this.paramsArray =
          this.calculationForm &&
          (this.calculationForm.get('inputFields') as FormArray);
        console.log(param);
        this.paramsArray && this.paramsArray.push(this.addInputField(param));
      });
  }

  addInputField(param: Param): FormGroup {
    const { name, description } = param;
    return this.formBuilder.group({
      name,
      description,
      value: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }
}
