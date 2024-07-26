import { Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './core/components/page-not-found-component/page-not-found-component.component';

export const routes: Routes = [
  {
    loadComponent: () => import('./layouts/core-ui-admin-layout/core-ui-admin-layout.component').then(mod => mod.CoreUIAdminLayoutComponent),
    path: 'dashboard',
    loadChildren: () => import('@features/dashboard/dashboard.routes').then(mod => mod.DASHBOARD_ROUTES),
    pathMatch: 'prefix',

    data: { title: "Dashboard" }
  },
  {
    loadComponent: () => import('./layouts/core-ui-admin-layout/core-ui-admin-layout.component').then(mod => mod.CoreUIAdminLayoutComponent),
    path: 'graph',
    loadChildren: () => import('@features/graph/graph.routes').then(mod => mod.GRAPH_ROUTES),
    pathMatch: 'prefix',
    data: { title: "Graph" }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponentComponent
  }
];
