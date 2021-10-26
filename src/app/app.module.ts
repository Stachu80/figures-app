import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: appInit,
    multi: true,

  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function appInit() {
  console.log("INIT")

}
