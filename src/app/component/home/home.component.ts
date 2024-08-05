import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyCounterComponent } from '../my-counter/my-counter.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MyCounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{


  constructor(){
    }


  ngOnInit(): void{

  }


}
