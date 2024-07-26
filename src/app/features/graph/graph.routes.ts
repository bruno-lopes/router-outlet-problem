import { Routes } from '@angular/router';

export const GRAPH_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./graph.component').then((mod) => mod.GraphComponent),
    title: "GRAPH",
    data: { title: "GRAPH" },
    pathMatch: 'full',

  }
];

