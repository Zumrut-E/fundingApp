export type ApplicationStatus =
  | 'UNDER_REVIEW'
  | 'APPROVED'
  | 'REJECTED';

export interface FundingApplication {
  id: number;
  applicantName: string;
  requestedAmount: number;
  firstTimeApplicant: boolean;
  documentsAcceptable: boolean;
  status: ApplicationStatus;
}
