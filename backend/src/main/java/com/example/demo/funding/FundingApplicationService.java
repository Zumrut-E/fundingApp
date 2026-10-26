package com.example.demo.funding;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FundingApplicationService {

    private final FundingApplicationRepository repository;

    public FundingApplicationService(
            FundingApplicationRepository repository) {
        this.repository = repository;
    }

    public List<FundingApplication> findAll() {
        return repository.findAll();
    }
}
