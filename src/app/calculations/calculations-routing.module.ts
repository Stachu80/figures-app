import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationsFormComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: CalculationsFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculationsRoutingModule {}
