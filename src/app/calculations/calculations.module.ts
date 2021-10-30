import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CalculationsRoutingModule } from './calculations-routing.module';
import { CalculationsFormComponent } from './containers';
@NgModule({
  declarations: [CalculationsFormComponent],
  imports: [CommonModule, CalculationsRoutingModule, MatButtonModule],
})
export class CalculationsModule {}
