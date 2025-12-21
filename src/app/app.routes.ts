import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
      path: 'home',
      loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
          path: 'tasks',
          loadComponent: () => import('./pages/task-manager/task-manager').then(m => m.TaskManager)
    },
    {
      path: 'admin',
      loadComponent: () => import('./pages/admin/admin').then(m => m.Admin)
    },
    {
      path: 'contact',
      loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound)
    }
];
