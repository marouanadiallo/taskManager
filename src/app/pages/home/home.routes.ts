import { Routes } from "@angular/router";
import { TASKS_ROUTES } from "../tasks/tasks.routes";

export const APP_ROUTES: Routes = [
    {
        path: 'tasks',
        loadComponent: () => import('../tasks/tasks').then(m => m.Tasks),
        // children: TASKS_ROUTES
    },
    {
      path: 'tasks/create',
      loadComponent: () => import('../../features/task/create-form/create-form')
        .then(m => m.CreateForm)
    },
    {
      path: 'admin',
      loadComponent: () => import('../admin/admin').then(m => m.Admin)
    },
    {
      path: 'contact',
      loadComponent: () => import('../contact/contact').then(m => m.Contact)
    }
];
