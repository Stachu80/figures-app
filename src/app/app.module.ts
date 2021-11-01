import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { firstValueFrom, map } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Data } from './core/models';
import { ApiService } from './core/services/api.service';
import { ConfigurationFacade } from './core/store/facade/configuration.facade';

@NgModule({
  declarations: [AppComponent],
  exports: [MatProgressSpinnerModule],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      multi: true,
      deps: [ConfigurationFacade, ApiService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function appInit(
  figureFacade: ConfigurationFacade,
  api: ApiService
): () => Promise<void> {
  return () => {
    return firstValueFrom(
      api.getData$().pipe(map((data: Data) => figureFacade.setData(data)))
    );
  };
}
