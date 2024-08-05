import { Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
//import {HomeGuard} from './guard/home.guard';


export const routes: Routes =
  [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent
      //canActivate: [HomeGuard]
      }
  ];
