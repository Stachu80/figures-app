import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { SentryErrorHandler } from '@app/core/errors/sentry-error-handler';
import { interceptors } from '@app/core/interceptors';
import { SharedModule } from '../shared/shared.module';
import { containers } from './containers';
import { RootStoreModule } from './store/root-store.module';

@NgModule({
  declarations: [...containers],
  exports: [...containers],
  imports: [CommonModule, SharedModule, RootStoreModule],
  providers: [
    ...interceptors,
    { provide: ErrorHandler, useClass: SentryErrorHandler },
  ],
})
export class CoreModule {}
