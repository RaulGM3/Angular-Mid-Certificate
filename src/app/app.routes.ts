import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic-angular',
    pathMatch: 'full'
  },
  {
    path: 'basic-angular',
    loadComponent: () => import('./basic-angular/basic-angular.component').then( m => m.BasicAngularComponent),
  },
  {
    path: 'typescript',
    loadComponent: () => import('./typescript-test/typescript-test.component').then( m => m.TypescriptTestComponent),
  },
];
