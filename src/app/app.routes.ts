import { Routes } from '@angular/router';
import { APP_ROUTES } from './pages/home/home.routes';
import { ADMIN_ROUTES } from './pages/admin/admin.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        children: APP_ROUTES
    },
    // {
    //   path: 'admin',
    //   loadComponent: () => import('./pages/admin/admin').then(m => m.Admin),
    //   children: ADMIN_ROUTES
    // },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound)
    }
];
