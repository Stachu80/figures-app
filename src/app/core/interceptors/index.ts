import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './error/http-error.interceptor';

const coreInterceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  },
];

const interceptors = [...coreInterceptors];

export { interceptors, HttpErrorInterceptor };
