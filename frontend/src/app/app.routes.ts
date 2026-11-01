import { Routes } from '@angular/router';

import { ApplicationList } from
  './features/applications/application-list/application-list';
import { ApplicationReview } from
  './features/applications/application-review/application-review';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'applications',
    pathMatch: 'full'
  },
  {
    path: 'applications',
    component: ApplicationList
  },
  {
    path: 'applications/:id/review',
    component: ApplicationReview
  }
];