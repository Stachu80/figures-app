import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { containers } from './containers';

@NgModule({
  declarations: [...containers],
  imports: [CommonModule, SharedModule, ConfigurationRoutingModule],
})
export class ConfigurationModule {
  constructor() {
    console.log('FIGURE');
  }
}
