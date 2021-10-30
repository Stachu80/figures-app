import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ConfigurationFacade } from '../store/facade/configuration.facade';

@Injectable({
  providedIn: 'root',
})
export class CalculationsCanLoadGuard implements CanLoad {
  constructor(
          private router: Router,
          private figureFacade: ConfigurationFacade
  ) {
  }

  canLoad(
          route: Route,
          segments: UrlSegment[]
  ):
          | Observable<boolean | UrlTree>
          | Promise<boolean | UrlTree>
          | boolean
          | UrlTree {
    return this.figureFacade.isReadyToCalculation$.pipe(
            tap((isReady) => {
              if (isReady === false) {
                this.router.navigate([ '/configuration' ]);
              }
            }))
  };
