import { CanActivateFn } from '@angular/router';
import { inject} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GET_ALL_LINES, setAllLines } from '../state-management/app.actions';
import { lastValueFrom, pipe, take, tap, filter, map, catchError, of, Observable, async, switchMap  } from 'rxjs';
import { Router } from '@angular/router';

 export const homeGuard: CanActivateFn = (route, state) : Observable<boolean> => {
  const store = inject(Store);
     store.pipe(map(() => store.dispatch({type: GET_ALL_LINES})),
              take(1)
            ).subscribe(() => console.log("HOME-GUARD: GET_ALL_LINES called."));

      return of(true);
      }
