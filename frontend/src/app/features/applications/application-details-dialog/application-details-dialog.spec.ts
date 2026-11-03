import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';                 // new
import { MAT_DIALOG_DATA } from '@angular/material/dialog';      // new

import { ApplicationDetailsDialog } from './application-details-dialog';

describe('ApplicationDetailsDialog', () => {
  let component: ApplicationDetailsDialog;
  let fixture: ComponentFixture<ApplicationDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationDetailsDialog],
      providers: [                                                // new
        provideRouter([]),
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            id: 1,
            applicantName: 'Hof Steiner',
            requestedAmount: 25000,
            firstTimeApplicant: false,
            documentsAcceptable: false,
            status: 'UNDER_REVIEW'
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationDetailsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
