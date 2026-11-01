import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';

import { ApplicationService } from '../../../services/application.service';
import { FundingApplication,ApplicationStatus } from '../../../models/application.model';

import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-application-list',
  standalone: true,
   imports: [
    CurrencyPipe,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './application-list.html',
  styleUrl: './application-list.scss'
})
export class ApplicationList implements OnInit {

  private readonly applicationService = inject(ApplicationService);

  displayedColumns = ['applicantName', 'requestedAmount', 'status', 'documents'];

  applications = signal<FundingApplication[]>([]);
  isLoading = signal(false);
  selectedStatus = signal<ApplicationStatus | 'ALL'>('ALL');
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

  filteredApplications = computed(() => {
    const applications = this.applications();
    const selectedStatus = this.selectedStatus();

    if (selectedStatus === 'ALL') {
      return applications;
    }

    return applications.filter(app => app.status === selectedStatus);
  }); }
