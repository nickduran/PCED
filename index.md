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
For each provider message, code:
- **Non-primary provider?**: Is the respondent someone other than the patient's primary/attending physician?
- **Defers to in-person?**: Does the provider explicitly suggest meeting in-person or by phone?
- **Core response canned?**: Does the response appear templated or generic rather than personalized? 

---

## DECISION FLOWCHART CHEATSHEET
When starting to code, you should have a copy of the cheatsheet visibile as a reference as you begin. Use the cheatsheet once you sufficiently understand the code explanations in [Stage 1 Patient Coding Instructions](stage-1-patient-coding), [Stage 2 Provider Coding Instructions](stage-2-provider-coding-context), and the [Coding Examples](examples). 

```
START
  ↓
Identify thread and read all patient/provider messages
  ↓
═══════════════════════════════════════════════════
STAGE 1: Patient Opportunity Assessment
═══════════════════════════════════════════════════

Step 1: Does patient REQUEST GUIDANCE ON TREATMENT?
  ├→ NO → P0 (No opportunity)
  └→ YES → Continue to Step 2

Step 2: Does patient MENTION ANY TREATMENTS by name?
  ├→ NO → P1 (Weak opportunity)
  └→ YES → Continue to Step 3

Step 3: How are treatments FRAMED?
  ├→ As CONTEXT/BACKGROUND → P2 (Moderate opportunity)
  │   (current meds, what they've tried)
  │   Examples: "I'm on X but it's not helping"
  │             "I tried X. What should I do?"
  │
  └→ As ALTERNATIVES/CHOICES → P3 (Strong opportunity)
      (presenting options to compare/choose between)
      Examples: "Should I do X or Y?"
                "What are pros/cons of X vs Y?"
                "What are the alternatives to X?"

  ↓
═══════════════════════════════════════════════════
STAGE 2: Provider Response Assessment
═══════════════════════════════════════════════════

How does provider respond?

  R0: No clinical engagement (acknowledgement only)
  R1: Discusses causes only (no treatment recommendations)
  R2: Gives treatment solution(s) - non-comparative
      (single treatment OR multiple as combined approach)
  R3: Gives 2+ comparative options, minimal detail
      (lists alternatives without elaboration)
  R4: Gives 2+ comparative options with elaboration
      (discusses differences, tradeoffs, pros/cons)

  ↓
═══════════════════════════════════════════════════
CONTEXT COLUMNS
═══════════════════════════════════════════════════

Code YES for each provider response:
  • Non-primary provider?
  • Defers to in-person?
  • Core response canned?

  ↓
DONE
```