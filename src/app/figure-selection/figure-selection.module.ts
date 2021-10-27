import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { containers } from './containers';
import { FigureSelectionRoutingModule } from './figure-selection-routing.module';


@NgModule({


  declarations: [
    ...containers
  ],
  imports: [
    CommonModule,
    SharedModule,
    FigureSelectionRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
  ]
})
export class FigureSelectionModule {
  constructor() {
    console.log("FIGURE")
  }
}
