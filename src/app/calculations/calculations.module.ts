import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationsRoutingModule } from './calculations-routing.module';
import { CalculationsFormComponent } from './containers';
@NgModule({
  declarations: [CalculationsFormComponent],
  imports: [CommonModule, CalculationsRoutingModule],
})
export class CalculationsModule {}
