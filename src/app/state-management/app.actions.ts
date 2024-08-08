import { createAction, props } from '@ngrx/store';
import { Line } from '../model/line.model';

export const GET_ALL_LINES = 'GET_ALL_LINES';
export const SET_ALL_LINES = 'SET_ALL_LINES';


export const getAllLines = createAction(GET_ALL_LINES);

export const setAllLines = createAction(SET_ALL_LINES, props<{lines: Array<Line>}>());

/*
export const increment = createAction('Increment');
export const decrement = createAction('Decrement');
export const reset = createAction('Reset'); */
