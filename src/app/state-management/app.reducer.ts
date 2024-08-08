import { createReducer, on } from '@ngrx/store';
import * as AppActions  from './app.actions';
import { Line } from '../model/line.model';


export interface State {
  lines: Array<Line>;
}

export const initialState: State = {
  lines : []
  }

export const appReducer = createReducer(
  initialState,
  on(AppActions.setAllLines, (state, {lines}) =>
    {
      console.log("APP-REDUCER: setAllLines called");
      return { ...state,  lines: lines};
      }));
/*
export function appReducer(state: State = initialState, action?:any){
  switch(action.type){
    case AppActions.SET_ALL_LINES:
      return {
          ...state,
          lines: action.payload
        }
      default:
        return state;
      }
  }
 */

/* export const appReducer = createReducer(
  initialState,
  on(AppActions.getAllLines, )

  ) */

//export const initialState = 0;

/* export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
); */
