---
layout: default
title: Welcome
---

# PCED Coding Guide for Secure Messages

## Overview
This guide provides instructions for coding **complete patient-provider exchanges** to identify opportunities for and enactment of Potential Comparative Effectiveness Deliberations (PCED). Rather than coding individual messages, this approach treats secure message exchanges as **adjacency pairs** where patient actions create opportunities and provider responses either engage or decline those opportunities.

## Core Rationale
Comparative effectiveness deliberation requires understanding the **communicative interaction as a whole**. Patients can create opportunities for providers to engage in comparative effectiveness reasoning, but only providers can actually deliver comparative effectiveness explanations about treatment options. Therefore, we code:
1. **Patient opportunity creation** (strength of invitation)
2. **Provider engagement** (whether and how they respond, including level of elaboration)

## CODING PROCEDURE

#### Step 1: Identify the Exchange Unit
- Identify the **entire thread** or meaningful exchange segment (typically 2-6 messages)

#### Step 2: **STAGE 1** Code Patient Language 
For more details, see the [Stage 1 Patient Coding Instructions](stage-1-patient-coding).
Ask: "What opportunity, if any, does the patient create (whether intentional or not) for the provider to engage in comparative effectiveness deliberation **about treatment/management options**?"
- Focus on treatment/management, not purely diagnostic speculation
- **P0**: No request for guidance on treatment
- **P1**: General help-seeking without specifics
- **P2**: Asks about alternatives (open-ended) OR speculates on causes OR expresses dissatisfaction
- **P3**: Names 2+ specific treatments patient is considering
- **P4**: Explicitly requests comparison or tradeoffs

#### Step 3: **STAGE 2** Code Provider Response (R0-R4)
For more details, see the [Stage 2 Provider Coding Instructions](stage-2-provider-coding-context).
Ask: "How does the provider respond?"
- **R0**: No clinical engagement (acknowledgment/deferral only)
- **R1**: Discusses multiple causes but no treatment options
- **R2**: Provides single treatment solution (or multiple as combined approach)
- **R3**: Presents 2+ treatment options with minimal elaboration
- **R4**: Presents 2+ treatment options with substantial elaboration

#### Step 4: Code Context Columns (YES/NO for each)
For each provider message, code:
- **Non-primary provider?**: Is the respondent someone other than the patient's primary/attending physician?
- **Defers to in-person?**: Does the provider explicitly suggest meeting in-person or by phone?
- **Core response canned?**: Does the response appear templated or generic rather than personalized? 

---

## DECISION FLOWCHART CHEATSHEET
You may want to have a copy of this cheatsheet visibile when coding as a reference as you begin. 

```
START
  ↓
Read entire thread
  ↓
═══════════════════════════════════════════════════
STAGE 1: Patient Opportunity Assessment
═══════════════════════════════════════════════════
  
Patient Codes (building progressively):
  
  P0: WITHOUT requesting guidance on treatment
  P1: + requests guidance WITHOUT mentioning specific options  
  P2: + asks about alternatives WITHOUT naming specific options (OR discusses causes)
  P3: + names 2+ specific options WITHOUT requesting comparison
  P4: + explicitly requests comparison
  
  ↓
═══════════════════════════════════════════════════
STAGE 2: Provider Response Assessment
═══════════════════════════════════════════════════

Provider Codes:
  
  R0: No clinical engagement (acknowledgement only)
  R1: Discusses causes only
  R2: Gives treatment solution(s) (non-comparative)
  R3: Gives 2+ comparative options, minimal detail
  R4: Gives 2+ comparative options with elaboration
  
  ↓
═══════════════════════════════════════════════════
CONTEXT COLUMNS
═══════════════════════════════════════════════════

Code YES/NO for each:
  • Non-primary provider?
  • Defers to in-person?
  • Core response canned?
  
  ↓
DONE
```
