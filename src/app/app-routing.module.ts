import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPath } from './core/constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppPath.FigureSelection,
    pathMatch: 'full'
  },
  {
    path: AppPath.FigureSelection,
    loadChildren: () => import('./figure-selection/figure-selection.module').then((m) => m.FigureSelectionModule),
  },

  {
    path: '**',
    redirectTo:  AppPath.FigureSelection,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
