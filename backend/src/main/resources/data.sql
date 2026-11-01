INSERT INTO funding_application
    (applicant_name, requested_amount,
     first_time_applicant, documents_acceptable, status)
VALUES
    ('Hof Steiner', 25000.00, FALSE, FALSE, 'UNDER_REVIEW'),
    ('Biohof Gruber', 72000.00, TRUE, TRUE, 'UNDER_REVIEW'),
    ('Hof Weber', 18000.00, FALSE, TRUE, 'APPROVED'),
    ('Biohof Wagner', 42000.00, TRUE, TRUE, 'APPROVED'),
    ('Hof Huber', 31000.00, FALSE, FALSE, 'REJECTED'),
    ('Biohof Leitner', 56000.00, TRUE, FALSE, 'REJECTED');
 