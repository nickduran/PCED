# PCED Thread-Level Coding Guide for Secure Messages

## Overview
This guide provides instructions for coding **complete patient-provider exchanges** to identify opportunities for and enactment of Potential Comparative Effectiveness Deliberations (PCED). Rather than coding individual messages, this approach treats secure message exchanges as **adjacency pairs** where patient actions create opportunities and provider responses either engage or decline those opportunities.

## Core Rationale
Comparative effectiveness deliberation requires understanding the **communicative interaction as a whole**. Patients can create opportunities for providers to engage in comparative effectiveness reasoning, but only providers can actually deliver comparative effectiveness explanations about treatment options. Therefore, we code:
1. **Patient opportunity creation** (strength of invitation)
2. **Provider engagement** (whether and how they respond, including level of elaboration)

---

## TWO-STAGE CODING PROCESS

### STAGE 1: Patient Opportunity Assessment
**Primary Decision Rule**: Does the patient create an opportunity for the provider to engage in comparative effectiveness deliberation about treatment/management options?

#### Decision Table

| Code | Requests guidance on treatment? | Mentions specific options? | Asks about alternatives OR dissatisfaction? | Names 2+ specific options? | Explicitly requests comparison? | Example |
|------|------|------|------|------|------|----------|
| **P0** | **NO** | — | — | — | — | "Thanks for calling in the refill. I really appreciate it." / "Just wanted to let you know I'm taking the medication exactly as prescribed and feeling better." |
| **P1** | **YES** | **NO** | **NO** | — | — | "I've been having stomach pain for three days. What should I do?" / "My knee is bothering me. Can I try ibuprofen for this?" / "Should I keep taking the antibiotic even though I feel better?" |
| **P2** | **YES** | **NO** | **YES** | — | — | "I've been using the Aleve for two weeks but it only helps a little. What else can I try?" / "I'm not sure if this rash is from allergies or something else. What are your thoughts?" / "The current treatment isn't working well. Are there better options?" |
| **P3** | **YES** | **YES** | — | **YES** | **NO** | "My knee pain isn't improving. Should I continue with physical therapy or consider getting the cortisone injection you mentioned?" / "I'm trying to decide between the cream you prescribed or going straight to the oral medication. What do you think?" |
| **P4** | **YES** | **YES** | — | **YES** | **YES** | "Can you help me understand the pros and cons of the two diabetes medications we discussed?" / "What are the tradeoffs between continuing physical therapy versus having the surgery?" / "Which medication would work better for my situation - the one with fewer side effects or the one that's more effective?" |

#### Quick Reference: Patient Code Meanings
- **P0 - No Opportunity**: Patient does NOT request guidance on treatment decision (information sharing or acknowledgment only)
- **P1 - Weak Implicit**: General help-seeking without mentioning specific treatment options
- **P2 - Moderate Implicit**: Asks about alternatives without naming specific options OR expresses dissatisfaction with current approach OR speculates on multiple causes
- **P3 - Strong Implicit**: Names 2+ specific treatment options the patient is considering, without requesting comparison
- **P4 - Explicit**: Directly requests comparison, pros/cons, or tradeoffs between specific treatment options

---

### STAGE 2: Provider Response Assessment
**Primary Decision Rule**: How does the provider respond to the patient's opportunity (if one exists)?

#### Provider Engagement Table

| Code | Discusses clinical content? | Content type | Number of treatment options | Elaboration level | Example |
|------|------|------|------|------|----------|
| **R0** | **NO** | — | — | — | "Thank you for the message. I've noted this in your chart." / "I received your message. Let's discuss this at your next appointment." / "Okay, I'll send that referral." |
| **R1** | **YES** | Causes/diagnosis only | — | — | "This could be caused by a viral infection, bacterial infection, or allergic reaction. Let me know if symptoms worsen and we can run tests." / "The pain might be from muscle strain, arthritis, or nerve compression." |
| **R2** | **YES** | Treatment | 1 option (or multiple presented as single recommendation) | — | "I recommend starting physical therapy twice a week." / "Let's try increasing your dosage to 20mg daily." / "You should use the steroid cream and ibuprofen together." |
| **R3** | **YES** | Treatment | 2+ options | Minimal | "We could try metformin or a GLP-1 medication. Let me know which you prefer." / "Options include physical therapy or cortisone injection." / "You can either continue current dose or increase it." |
| **R4** | **YES** | Treatment | 2+ options | Substantial | "Metformin is usually the first choice - it's well-studied, inexpensive, and effective, though it can cause stomach upset initially. GLP-1 medications are newer, also effective, and may help with weight loss, but they're more expensive and require injections. Given your concerns about cost, I'd suggest starting with metformin." |

#### Quick Reference: Provider Code Meanings
- **R0 - No Clinical Engagement**: Provider acknowledges message but does not discuss treatment options or causes (deferral, administrative response, or simple acknowledgment)
- **R1 - Causes Only**: Provider discusses multiple possible causes or diagnoses without recommending specific treatment options
- **R2 - Non-Comparative Treatment**: Provider recommends single treatment solution or multiple treatments as a combined approach (no alternatives presented)
- **R3 - Minimal Comparative**: Provider presents 2+ treatment options with little to no elaboration on differences, benefits, or tradeoffs
- **R4 - Elaborated Comparative**: Provider presents 2+ treatment options WITH meaningful elaboration on how they differ, their benefits/risks, or tradeoffs; may relate to patient's specific situation

---

## CONTEXT COLUMNS FOR PROVIDER

After coding the provider response (R0-R4), also code these contextual features for each provider message:

| Context Variable | Code YES if... | Code NO if... |
|-----------------|----------------|---------------|
| **Non-primary provider?** | Respondent is a medical assistant, nurse, pharmacist, case manager, or someone other than the patient's primary/attending physician | Respondent is the patient's primary care provider or attending physician |
| **Defers to in-person?** | Provider explicitly suggests or requires meeting in-person or via phone to continue the discussion | Provider addresses the question in the secure message without deferral |
| **Core response canned?** | Provider's response appears to be templated, generic, or stock language (not personalized to this patient's specific situation) | Provider's response appears personalized or specifically tailored to the patient's situation |

**Note**: These context columns are independent of each other and of the R-codes. For example, a provider could give an R4 (elaborated comparative) response that still defers to in-person (e.g., "Here are your two main options... let's meet to finalize the decision").

---

## CODING PROCEDURE

### Step 1: Identify the Exchange Unit
- Read the **entire thread** or meaningful exchange segment (typically 2-6 messages)
- Identify patient message(s) that create potential opportunities
- Identify provider response(s)

### Step 2: Code Patient Opportunity (P0-P4)
Ask: "What opportunity, if any, does the patient create for the provider to engage in comparative effectiveness deliberation **about treatment/management options**?"
- Focus on treatment/management, not purely diagnostic speculation
- **P0**: No request for guidance on treatment
- **P1**: General help-seeking without specifics
- **P2**: Asks about alternatives (open-ended) OR speculates on causes OR expresses dissatisfaction
- **P3**: Names 2+ specific treatments patient is considering
- **P4**: Explicitly requests comparison or tradeoffs
- Code the **strongest** opportunity present if multiple patient messages exist

### Step 3: Code Provider Response (R0-R4)
Ask: "How does the provider respond?"
- **R0**: No clinical engagement (acknowledgment/deferral only)
- **R1**: Discusses multiple causes but no treatment options
- **R2**: Provides single treatment solution (or multiple as combined approach)
- **R3**: Presents 2+ treatment options with minimal elaboration
- **R4**: Presents 2+ treatment options with substantial elaboration
- If provider gives multiple options, evaluate whether they meaningfully elaborate on differences

### Step 4: Code Context Columns (YES/NO for each)
For each provider message, code:
- **Non-primary provider?**: Is the respondent someone other than the patient's primary/attending physician?
- **Defers to in-person?**: Does the provider explicitly suggest meeting in-person or by phone?
- **Core response canned?**: Does the response appear templated or generic rather than personalized?

---

## EXAMPLE THREAD CODINGS

### Example 1: Strong Opportunity, Elaborated Comparative Response
**Patient**: "I've been taking lisinopril for 2 weeks but have a dry cough. I read this could be a side effect. Could we try a different medication like losartan? I'm concerned about this cough for my work presentations."

**Provider**: "You're right that ACE inhibitors like lisinopril can cause cough in some patients. We have two good alternatives: switching to an ARB like losartan, which rarely causes cough but works similarly, or trying amlodipine, a different class that's also effective but may cause some ankle swelling. Given your concern about presentations, losartan would be my recommendation as it has the fewest troublesome side effects."

**Coding**: 
- P3 (strong implicit - mentions alternative with uncertainty) 
- R4 (2+ options with substantial elaboration on differences and tradeoffs)
- Context: Non-primary provider = NO, Defers to in-person = NO, Core response canned = NO

---

### Example 2: Explicit Opportunity, No Clinical Engagement
**Patient**: "What are the pros and cons of continuing metformin versus adding insulin for my diabetes?"

**Provider**: "Both are reasonable options. Let's discuss this at your next appointment."

**Coding**: 
- P4 (explicit request for comparison) 
- R0 (no clinical engagement - defers to in-person)
- Context: Non-primary provider = NO, Defers to in-person = YES, Core response canned = NO

---

### Example 3: Moderate Opportunity, Non-Comparative Treatment
**Patient**: "My knee pain isn't getting better with Aleve. What else can I try?"

**Provider** (Medical Assistant): "Let's schedule physical therapy evaluation. I'll send the referral."

**Coding**: 
- P2 (moderate implicit - expresses dissatisfaction, asks about alternatives) 
- R2 (single treatment solution)
- Context: Non-primary provider = YES, Defers to in-person = YES, Core response canned = NO

---

### Example 4: Weak Opportunity, Minimal Comparative Response
**Patient**: "My A1C came back at 8.2. What should we do?"

**Provider**: "Your A1C is higher than we'd like. We should consider adding medication. Options include a DPP-4 inhibitor or a GLP-1 injection. Which would you prefer?"

**Coding**: 
- P1 (weak implicit - asks what to do) 
- R3 (2+ options with minimal elaboration)
- Context: Non-primary provider = NO, Defers to in-person = NO, Core response canned = NO

---

### Example 5: Moderate Opportunity, Causes Only
**Patient**: "I've had this headache for three days and the Tylenol isn't helping. What else could this be?"

**Provider**: "Persistent headaches can be caused by tension, migraines, sinus issues, or medication rebound. If it doesn't improve in the next few days, we should see you in person to evaluate further."

**Coding**: 
- P2 (expresses dissatisfaction with current treatment, asks what else) 
- R1 (discusses multiple causes but no treatment options provided)
- Context: Non-primary provider = NO, Defers to in-person = YES, Core response canned = NO

---

## DECISION FLOWCHART

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

---

## KEY REMINDERS

- **Focus on treatment/management options**, not diagnostic possibilities alone
- **Code the exchange**, not individual messages in isolation
- **Provider type matters**: Note if respondent is MA, pharmacist, or non-primary (may affect ability to engage in CE) - this is captured in the "Non-primary provider?" context column
- **Causes vs. Treatments**: Discussing multiple causes (R1) ≠ comparative effectiveness about treatments
- **Adjacency pair logic**: Patient creates communicative opportunity → Provider accepts or declines
- **Multiple patient messages** = code strongest opportunity
- **Multiple provider messages** = code most engaged response
- **R3 vs R4 distinction**: The key difference is level of elaboration - does the provider meaningfully differentiate the options (benefits, risks, tradeoffs) or just list them?
- **R2 captures**: Both single treatment recommendations AND multiple treatments presented as a combined approach (e.g., "Use the cream and take ibuprofen")
- **Context columns are independent**: A provider can give elaborated comparative information (R4) while still deferring to in-person, or a non-primary provider could give excellent comparative effectiveness responses

## PCED Decision Flowchart

This flowchart provides a visual representation of the PCED coding decision process:

<div class="flowchart">
    <img src="{{ '/figures/patient_flowchart.html' | relative_url }}" alt="PCED Patient Decision Flowchart" width="100%">
</div>