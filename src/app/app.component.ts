import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BusHeaderComponent} from './component/bus-header/bus-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BusHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bus-ui';
}
