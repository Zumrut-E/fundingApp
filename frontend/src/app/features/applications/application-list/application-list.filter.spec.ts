import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApplicationList } from './application-list';
import { ApplicationService } from '../../../services/application.service';
import { FundingApplication } from '../../../models/application.model';

const MOCK_APPLICATIONS: FundingApplication[] = [
  { id: 1, applicantName: 'Hof Steiner', requestedAmount: 25000, firstTimeApplicant: false, documentsAcceptable: false, status: 'UNDER_REVIEW' },
  { id: 3, applicantName: 'Hof Weber', requestedAmount: 18000, firstTimeApplicant: false, documentsAcceptable: true, status: 'APPROVED' },
  { id: 5, applicantName: 'Hof Huber', requestedAmount: 31000, firstTimeApplicant: false, documentsAcceptable: false, status: 'REJECTED' }
];

describe('ApplicationList filter', () => {
  it('shows only approved applications when the filter is set to APPROVED', async () => {
    // Arrange: replace the real service with a fake that returns test data
    await TestBed.configureTestingModule({
      imports: [ApplicationList],
      providers: [
        {
          provide: ApplicationService,
          useValue: { getApplications: () => of(MOCK_APPLICATIONS) }
        }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(ApplicationList);
    const component = fixture.componentInstance;
    fixture.detectChanges(); // runs ngOnInit, which loads the fake data

    // Act: choose a status, as the user would in the select
    component.selectedStatus.set('APPROVED');

    // Assert: only the approved application is left
    const result = component.filteredApplications();
    expect(result.length).toBe(1);
    expect(result[0].applicantName).toBe('Hof Weber');
  });
});