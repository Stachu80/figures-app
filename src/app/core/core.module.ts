import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { containers } from './containers';
import { RootStoreModule } from './store/root-store.module';

@NgModule({
  declarations: [...containers],
  exports: [...containers],
  imports: [CommonModule, SharedModule, RootStoreModule],
})
export class CoreModule {}
