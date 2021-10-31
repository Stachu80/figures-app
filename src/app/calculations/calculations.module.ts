import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { components } from '@app/calculations/components';
import { SharedModule } from '@app/shared/shared.module';
import { CalculationsRoutingModule } from './calculations-routing.module';
import { containers } from './containers';
import { CalculationsResultComponent } from './components/calculations-result/calculations-result.component';

@NgModule({
  declarations: [...containers, ...components, CalculationsResultComponent],
  imports: [
    CommonModule,
    CalculationsRoutingModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class CalculationsModule {}
