import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShellComponent } from './containers/shell/shell.component';


@NgModule({
  declarations: [
    ShellComponent
  ],
  exports: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule {
  constructor() {
    console.log("INIT CORE")
  }
}
