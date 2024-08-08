import {createSelector} from '@ngrx/store';
import {State} from './app.reducer';


export const appState = (state: any) => state.reducer;

export const selectLines = createSelector(
  appState,
  (state: State) => state.lines
  );
