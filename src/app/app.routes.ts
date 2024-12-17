import { Routes } from '@angular/router';
import { ChildComponent } from './router-test/test1/child/child.component';
import { authGuardGuard } from './auth-guard.guard';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

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
  {
    path: 'pipes',
    loadComponent: () => import('./pipes/pipes.component').then( m => m.PipesComponent),
  },
  {
    path: 'rxjs',
    loadComponent: () => import('./rxjs-test/rxjs-test.component').then( m => m.RxjsTestComponent),
    children: [
      {
        path: 'filter-states',
        loadComponent: () => import('./rxjs-test/filter-states/filter-states.component').then( m => m.FilterStatesComponent),
      },
      {
        path: 'subjects',
        loadComponent: () => import('./rxjs-test/subjects/subjects.component').then( m => m.SubjectsComponent),
      },
      {
        path: 'interval',
        loadComponent: () => import('./rxjs-test/interval/interval.component').then( m => m.IntervalComponent),
      },
      {
        path: 'operators',
        loadComponent: () => import('./rxjs-test/operators/operators.component').then( m => m.OperatorsComponent),
      },
      {
        path: '',
        redirectTo: 'filter-states',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'router-test',
    loadComponent: () => import('./router-test/router-test.component').then( m => m.RouterTestComponent),
    children: [
      {
        path: 'test1',
        loadComponent: () => import('./router-test/test1/test1.component').then( m => m.Test1Component),
        children: [
          {
            path: ':id',
            loadComponent: () => import('./router-test/test1/child/child.component').then( m => m.ChildComponent),
          }
        ],
        canDeactivate: [
          () => inject(AuthService).isSaved() || window.confirm('Are you sure you want to leave?')
        ]
    
      },
      {
        path: 'test2',
        loadComponent: () => import('./router-test/test2/test2.component').then( m => m.Test2Component),
      },
      {
        path: 'guarded',
        loadComponent: () => import('./router-test/guarded/guarded.component').then( m => m.GuardedComponent),
        canActivate: [authGuardGuard]
        // canActivate: [() => inject(AuthService).isLoggedIn()]
      },
      {
        path: '',
        redirectTo: 'test1/3',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./page-not-found/page-not-found.component').then( m => m.PageNotFoundComponent),
  }
];
