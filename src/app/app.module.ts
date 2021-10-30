import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { firstValueFrom, map, pluck } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Figure } from './core/models';
import { ApiService } from './core/services/api.service';
import { FiguresFacade } from './core/store/facade/figures.facade';

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
      deps: [FiguresFacade, ApiService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function appInit(
  figureFacade: FiguresFacade,
  api: ApiService
): () => Promise<void> {
  return () => {
    return firstValueFrom(
      api.getFigures$().pipe(
        pluck('figures'),
        map((figures: Figure[]) => figureFacade.setFigures(figures))
      )
    );
  };
}
