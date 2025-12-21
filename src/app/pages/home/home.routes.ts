import { Routes } from "@angular/router";

export const HOME_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    loadComponent: () => import('../task-manager/task-manager').then(m => m.TaskManager)
  },
];
