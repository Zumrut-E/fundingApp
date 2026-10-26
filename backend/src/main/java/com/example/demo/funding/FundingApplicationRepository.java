package com.example.demo.funding;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FundingApplicationRepository
        extends JpaRepository<FundingApplication, Long> {
}