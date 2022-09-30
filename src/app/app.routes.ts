import { Routes } from '@angular/router';
import { AComponent, BComponent } from './components';

export const appRoutes: Routes = [
  {
    path: '',
    canActivate: [],
    children: [
      {
        path: 'a',
        component: AComponent,
        canActivate: [],       
      },
      {
        path: 'b',
        component: BComponent,
        canActivate: [],       
      },
      { path: '', redirectTo: '/a', pathMatch: 'full' },
    ],
  },
];
