import { Routes } from '@angular/router';

import { privateGuard, publicGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    canActivateChild: [publicGuard()],
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    canActivateChild: [privateGuard()],
    path: 'home',
    loadComponent: () => import('./layout/components/layout/layout.component'),
    loadChildren: () => import('./home/home.routes'),
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
