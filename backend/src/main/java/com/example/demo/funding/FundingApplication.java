
package com.example.demo.funding;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.math.BigDecimal;

@Entity
public class FundingApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String applicantName;

    private BigDecimal requestedAmount;

    private boolean firstTimeApplicant;

    private boolean documentsAcceptable;

    private String status;

    protected FundingApplication() {
    }

    
public Long getId() {
    return id;
}

public String getApplicantName() {
    return applicantName;
}

public BigDecimal getRequestedAmount() {
    return requestedAmount;
}

public boolean isFirstTimeApplicant() {
    return firstTimeApplicant;
}

public boolean isDocumentsAcceptable() {
    return documentsAcceptable;
}

public String getStatus() {
    return status;
}

}
