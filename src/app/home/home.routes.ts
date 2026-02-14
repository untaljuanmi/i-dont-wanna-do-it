import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component'),
  },
] as Routes;
