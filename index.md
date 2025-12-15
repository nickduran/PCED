---
layout: default
title: Welcome
---

# PCED Coding Guide for Secure Messages
This guide provides instructions for coding **patient-provider exchanges** for Potential Comparative Effectiveness Deliberations (PCED). 

## Core Rationale
This coding approach requires understanding patient-provider exchanges as **potentialities or opportunities for and enactment of compartive effectiveness deliberations.** Patients can create possibilities (whether intentional or not) for providers to engage in comparative effectiveness reasoning **about treatment/management options**, but only providers can actually deliver comparative effectiveness explanations about options. This coding approach assumes that the patient-initiated potentialities can vary in strength and that provider responses can vary in quality of engagement. 
Therefore, we code:  
1. **Patient opportunity creation** (strength of potential). See the [Stage 1 Patient Coding Instructions](stage-1-patient-coding).
2. **Provider engagement** (whether and how they respond). See the [Stage 2 Provider Coding Instructions](stage-2-provider-coding-context).

## BASIC PROCEDURE

#### Step 1: Identify the Exchange Unit
- Identify the **entire thread** and be clear which messages in the thread are from provider and which are from the patient (typically 2-6 messages)

#### Step 2: Code Patient Language (**STAGE 1**)
Ask: "What opportunity, if any, does the patient create (whether intentional or not) for the provider to engage in comparative effectiveness deliberation **about treatment/management options**?" 
- There are 4 possible codes (P0-P3) that you will select from a dropdown menu in the spreadsheet. For explanation of each code, see the [Stage 1 Patient Coding Instructions](stage-1-patient-coding)

#### Step 3: Code Provider Language (**STAGE 2**)
Ask: "How does the provider respond?" 
- There are 5 possible codes (R0-R4) that you will select from a dropdown menu in the spreadsheet. For explanation of each code, see the [Stage 2 Provider Coding Instructions](stage-2-provider-coding-context).

#### Step 4: Code Context Columns (ONLY MARK IF YES)
*For each patient message,* code:

- **Involves work-up/management decision?**: Does the patient's request relate **primarily** to diagnostic testing, referrals, preventive interventions, screening, or management planning steps?

*For each provider message,* code:

- **Non-primary provider?**: Is the respondent someone other than the patient's primary/attending physician?
- **Defers to in-person?**: Does the provider explicitly suggest meeting in-person or by phone?
- **Core response canned?**: Does the response appear templated or generic rather than personalized? 
- **Involves work-up/management decision?** : Does the provider's response relate primarily to diagnostic testing, referrals, preventive interventions, screening, or management planning steps? 

---

## DECISION FLOWCHART CHEATSHEET
When starting to code, you should have a copy of the cheatsheet visibile as a reference as you begin. Use the cheatsheet once you sufficiently understand the code explanations in [Stage 1 Patient Coding Instructions](stage-1-patient-coding), [Stage 2 Provider Coding Instructions](stage-2-provider-coding-context), and the [Coding Examples](examples). 

```
START
  ↓
Identify patient message(s) and read thoroughly
  ↓
╔═════════════════════════════════════════════════════════════════════
║ STAGE 1: Patient Opportunity Assessment
╚═════════════════════════════════════════════════════════════════════

Step 1: Does patient REQUEST GUIDANCE ON TREATMENT/MANAGEMENT?
  ├→ NO → P0 (No opportunity)
  │       Examples: "Thanks for the refill"
  │                "I picked up the prescription"
  │                "The medication is working great!"
  │
  └→ YES → Continue to Step 2

Step 2: Does patient MENTION ANY TREATMENTS OR WORK-UPS by name?
  ├→ NO → P1 (Weak opportunity)
  │       Examples: "What should I do about this pain?"
  │                "My knee is bothering me. Can you help?"
  │                "What should we do next to figure this out?"
  │
  └→ YES → Continue to Step 3

Step 3: How are treatments/work-ups FRAMED?
  ├→ As CONTEXT/BACKGROUND → P2 (Moderate opportunity)
  │   (current meds, what they've tried, tests already done)
  │   Examples: "I'm on Aleve but it's not helping. What else?"
  │             "I've tried Tylenol. What should I do?"
  │             "I've had bloodwork already but still have symptoms"
  │
  └→ As ALTERNATIVES/CHOICES → P3 (Strong opportunity)
      (presenting options to compare/choose between)
      Examples: "Should I do physical therapy or get the injection?"
                "What are pros/cons of Aleve vs Ibuprofen?"
                "Should I also get the RSV vaccine too?"
                "Should we do an MRI or CT scan?" 
  ↓
╔═════════════════════════════════════════════════════════════════════
║ CONTEXT FLAG FOR PATIENT
╚═════════════════════════════════════════════════════════════════════

Does the request involve WORK-UP/MANAGEMENT decision?
(diagnostic testing, referrals, preventive interventions, screening)

  ├→ YES: Mark "Involves work-up/management decision" 

  ↓
DONE - Proceed to Stage 2 (Provider Response Assessment)

═══════════════════════════════════════════════════
STAGE 2: Provider Response Assessment
═══════════════════════════════════════════════════

How does provider respond?

  R0: No clinical engagement (acknowledgement only)
  R1: Discusses causes only (no treatment/management recommendations)
  R2: Gives treatment/management solution(s) - non-comparative
      (single option OR multiple as combined approach)
  R3: Gives 2+ comparative options, minimal detail
      (lists treatment/management alternatives without elaboration)
  R4: Gives 2+ comparative options with elaboration
      (discusses differences, tradeoffs, pros/cons of treatments/work-ups)

  ↓
═══════════════════════════════════════════════════
CONTEXT FLAGS FOR PROVIDER
═══════════════════════════════════════════════════

Code YES for each provider response:
  • Non-primary provider?
  • Defers to in-person?
  • Core response canned?
  • Involves work-up/management decision?

  ↓
DONE
```

<!-- START
  ↓
Identify patient message(s) and read thoroughly
  ↓
╔═════════════════════════════════════════════════════════════════════
║ STAGE 1: Patient Opportunity Assessment
╚═════════════════════════════════════════════════════════════════════

Step 1: Does patient REQUEST ANY GUIDANCE?
  ├→ NO → P0 (No request for guidance)
  │       Examples: "Thanks for the refill"
  │                "I picked up the prescription"
  │                "The medication is working great!"
  │
  └→ YES → Continue to Step 2

Step 2: Is the request for CLINICAL guidance or ADMINISTRATIVE assistance?
  ├→ ADMINISTRATIVE → P1 (Administrative request)
  │   (refills, orders, forms, appointments - no clinical judgment needed)
  │   Examples: "Can you resend the lab order?"
  │             "I need a refill on my medication"
  │             "The pharmacy needs prior authorization"
  │
  └→ CLINICAL → Continue to Step 3
      (seeking guidance on symptoms, treatments, or management)

Step 3: Does patient MENTION ANY TREATMENTS OR WORK-UPS by name?
  ├→ NO → P2 (Clinical guidance, no treatments mentioned)
  │       Examples: "I have stomach pain. What should I do?"
  │                "My knee is bothering me. Can you help?"
  │                "What should we do next to figure this out?"
  │
  └→ YES → Continue to Step 4

Step 4: How are treatments/work-ups FRAMED?
  ├→ As CONTEXT/BACKGROUND → P3 (Clinical guidance, treatments as context)
  │   (current meds, what they've tried, tests already done)
  │   Examples: "I'm on Aleve but it's not helping. What else?"
  │             "I've tried Tylenol. What should I do?"
  │             "I've had bloodwork but still have symptoms"
  │
  └→ As ALTERNATIVES/CHOICES → P4 (Clinical guidance, treatments as alternatives)
      (presenting options to compare/choose between)
      Examples: "Should I do physical therapy or get the injection?"
                "What are pros/cons of Aleve vs Ibuprofen?"
                "Should I also get the RSV vaccine too?"
                "Should we do an MRI or CT scan?" -->
