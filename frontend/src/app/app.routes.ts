
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'applications',
    pathMatch: 'full'
  },
  {
    path: 'applications',
    loadComponent: () =>
      import('./features/applications/application-list/application-list')
        .then(m => m.ApplicationList)
  }
];
