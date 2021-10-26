import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { SharedModule } from '../shared/shared.module';
import { FigureSelectionContainerComponent } from './containers/figure-selection-container/figure-selection-container.component';
import { FigureSelectionRoutingModule } from './figure-selection-routing.module';


@NgModule({


  declarations: [
    FigureSelectionContainerComponent,
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
