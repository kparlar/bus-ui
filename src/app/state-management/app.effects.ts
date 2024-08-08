import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, throwError, tap } from 'rxjs';
import { map, exhaustMap, switchMap, catchError } from 'rxjs/operators';
import { LineService } from '../service/line-service.service';
import { getAllLines } from './app.actions';
import * as AppActions from './app.actions';
import { Line } from '../model/line.model';


@Injectable()
export class AppEffects {

  public loadLines$ = createEffect(() => this.actions$.pipe(
    ofType( getAllLines ),
    exhaustMap( () => this.lineService.getAllLines()),
    tap( () => console.log("APP-EFFECTS: loadLines called")),
    switchMap((data: Array<Line>) => {
      return of(AppActions.setAllLines({lines: data}))
      }), catchError( error => {
        console.log(error);
        return throwError(error);
        }) ));

      constructor(
          private readonly actions$: Actions,
          private lineService: LineService){
          }
}
