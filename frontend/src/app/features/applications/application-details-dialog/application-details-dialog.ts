import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FundingApplication } from '../../../models/application.model';

@Component({
  selector: 'app-application-details-dialog',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './application-details-dialog.html',
  styleUrl: './application-details-dialog.scss'
})
export class ApplicationDetailsDialog {
  readonly application = inject<FundingApplication>(MAT_DIALOG_DATA);
}