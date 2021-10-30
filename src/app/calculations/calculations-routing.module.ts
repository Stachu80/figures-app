import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationsContainerComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: CalculationsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculationsRoutingModule {}
