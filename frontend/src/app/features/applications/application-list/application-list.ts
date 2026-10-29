import { Component, OnInit, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';

import { ApplicationService } from '../../../services/application.service';
import { FundingApplication } from '../../../models/application.model';

@Component({
  selector: 'app-application-list',
  standalone: true,
  templateUrl: './application-list.html',
  styleUrl: './application-list.scss'
})
export class ApplicationList implements OnInit {

  private readonly applicationService = inject(ApplicationService);

  applications = signal<FundingApplication[]>([]);
  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.applicationService.getApplications()
      .pipe(
        finalize(() => this.isLoading.set(false))
      )
      .subscribe({
        next: data => this.applications.set(data),
        error: () => this.errorMessage.set(
          'Could not load applications.'
        )
      });
  }
}

