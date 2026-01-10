import { Routes } from "@angular/router";

export const TASKS_ROUTES: Routes = [
    {
      path: 'create',
      loadComponent: () => import('../../features/task/create-form/create-form')
        .then(m => m.CreateForm)
    }
]
