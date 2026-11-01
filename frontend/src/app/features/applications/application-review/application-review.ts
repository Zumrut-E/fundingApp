import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-application-review',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './application-review.html',
  styleUrl: './application-review.scss'
})
export class ApplicationReview {
  readonly applicationId =
    inject(ActivatedRoute).snapshot.paramMap.get('id');
}