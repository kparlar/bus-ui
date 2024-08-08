import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GET_ALL_LINES } from '../../state-management/app.actions';
import { Line } from '../../model/line.model';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common'
import { selectLines } from '../../state-management/app.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  lines$: Observable<Line[]> = this.store.select(selectLines);

  constructor(private store: Store<{lines: Line[]}>){
    }

  ngOnInit(): void{
    console.log("HOME-COMPONENT:  is loaded");
  }
}
