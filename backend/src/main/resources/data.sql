INSERT INTO funding_application
    (applicant_name, requested_amount,
     first_time_applicant, documents_acceptable, status)
VALUES
    ('Hof Müller', 12000.00, TRUE, TRUE, 'SUBMITTED'),
    ('Biohof Berger', 65000.00, FALSE, TRUE, 'SUBMITTED'),
    ('Hof Steiner', 25000.00, FALSE, FALSE, 'UNDER_REVIEW'),
    ('Biohof Gruber', 72000.00, TRUE, TRUE, 'UNDER_REVIEW');
 