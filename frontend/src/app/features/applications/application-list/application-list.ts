import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { finalize } from 'rxjs';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ApplicationService } from '../../../services/application.service';
import { FundingApplication, ApplicationStatus} from '../../../models/application.model';
import { ApplicationDetailsDialog } from '../application-details-dialog/application-details-dialog';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './application-list.html',
  styleUrl: './application-list.scss'
})
export class ApplicationList implements OnInit {
  private readonly applicationService = inject(ApplicationService);
  private readonly dialog = inject(MatDialog);

  displayedColumns = [
  'id',
  'applicantName',
  'requestedAmount',
  'status',
  'actions'
];

  applications = signal<FundingApplication[]>([]);
  isLoading = signal(false);
  selectedStatus = signal<ApplicationStatus | 'ALL'>('ALL');
  errorMessage = signal<string | null>(null);

  filteredApplications = computed(() => {
    const applications = this.applications();
    const selectedStatus = this.selectedStatus();

    if (selectedStatus === 'ALL') {
      return applications;
    }

    return applications.filter(app => app.status === selectedStatus);
  });

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

  openDetails(application: FundingApplication): void {
    this.dialog.open(ApplicationDetailsDialog, {
      data: application,
      width: '520px',
      maxWidth: '95vw'
    });
  }
}