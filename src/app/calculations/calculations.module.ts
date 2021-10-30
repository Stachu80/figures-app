import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CalculationsRoutingModule } from './calculations-routing.module';
import { containers } from './containers';

@NgModule({
  declarations: [...containers],
  imports: [CommonModule, CalculationsRoutingModule, MatButtonModule],
})
export class CalculationsModule {}
