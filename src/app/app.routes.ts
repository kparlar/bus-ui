import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UnauthorizedComponent} from './component/unauthorized/unauthorized.component';
import { homeGuard } from './guard/home.guard';


export const routes: Routes =
  [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [homeGuard]
      },
    { path: 'unauthorized', component: UnauthorizedComponent},

  ];
