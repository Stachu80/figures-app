import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { containers } from './containers';

@NgModule({
  declarations: [...containers],
  imports: [
    CommonModule,
    SharedModule,
    ConfigurationRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class ConfigurationModule {}
