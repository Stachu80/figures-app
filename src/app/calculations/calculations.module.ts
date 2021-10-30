import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CalculationsRoutingModule } from './calculations-routing.module';
import { containers } from './containers';
import { CalculationsFormComponent } from './components/calculations-form/calculations-form.component';

@NgModule({
  declarations: [...containers, CalculationsFormComponent],
  imports: [
    CommonModule,
    CalculationsRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class CalculationsModule {}
