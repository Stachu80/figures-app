import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FigureSelectionContainerComponent } from './containers/figure-selection-container/figure-selection-container.component';

const routes: Routes = [
  {
    path: '',
    component: FigureSelectionContainerComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class FigureSelectionRoutingModule {
}
