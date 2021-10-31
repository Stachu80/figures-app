import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { components } from './components';

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  exports: [...components],
})
export class SharedModule {}
