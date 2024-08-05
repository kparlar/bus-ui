import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {increment, decrement, reset} from '../../state-management/app.actions'
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.scss'
})
export class MyCounterComponent {
  count$: Observable<number>

  constructor(private store: Store<{count: number}>){
    this.count$ = store.select('count');
  }

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }

}
