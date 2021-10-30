import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPath } from './core/constants';
import { CalculationsCanLoadGuard } from './core/guards/calculations-can-load.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppPath.Configuration,
    pathMatch: 'full',
  },

  {
    path: AppPath.Configuration,
    loadChildren: () =>
      import('./configuration/configuration.module').then(
        (m) => m.ConfigurationModule
      ),
  },

  {
    path: AppPath.Calculations,
    canLoad: [CalculationsCanLoadGuard],
    loadChildren: () =>
      import('./calculations/calculations.module').then(
        (m) => m.CalculationsModule
      ),
  },

  {
    path: '**',
    redirectTo: AppPath.Configuration,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
