import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { components } from './components';

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [...components, MatButtonModule],
})
export class SharedModule {
  constructor() {
    console.log('Shared CORE');
  }
}
