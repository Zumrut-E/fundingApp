package com.example.demo.funding;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
public class FundingApplicationController {

    private final FundingApplicationService service;

    public FundingApplicationController(
            FundingApplicationService service) {
        this.service = service;
    }

    @GetMapping
    public List<FundingApplication> getApplications() {
        return service.findAll();
    }
}