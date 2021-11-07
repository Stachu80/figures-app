import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: environment.sentryDNS,
  integrations: [
    new Sentry.Integrations.TryCatch({
      XMLHttpRequest: false,
    }),
  ],
});

@Injectable()
export class SentryErrorHandler extends ErrorHandler {
  handleError(error: {
    originalError: any;
    message: string | string[];
    status: number;
  }) {
    let errHeader = 'Przepraszamy, wystapił błąd.';
    const err = error.originalError || error;

    if (error.message.includes('Http failure response') || error.status === 0) {
      errHeader = 'Brak połączenia z internetem.';
    }

    if (
      error.status === 401 ||
      error.status === 402 ||
      error.status === 403 ||
      error.status === 404
    ) {
      errHeader = 'Przepraszamy, wystąpił błąd.';
    }

    Sentry.captureException(err);
    alert(errHeader);
  }
}
