import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    {
        path: 'tasks',
        loadComponent: () => import('../tasks/tasks').then(m => m.Tasks)
    }
];