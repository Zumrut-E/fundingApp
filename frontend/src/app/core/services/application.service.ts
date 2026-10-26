import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FundingApplication } from
  '../../features/applications/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private readonly http = inject(HttpClient);

  getApplications(): Observable<FundingApplication[]> {
    return this.http.get<FundingApplication[]>(
      '/api/applications'
    );
  }
}
