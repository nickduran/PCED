---
layout: default
title: Common Edge Cases and How to Handle Them
---

# Supplement: Common Edge Cases and How to Handle Them

This supplement is designed to accompany the PCED Coding Manual and support annotators in resolving common ambiguities.

---

## Edge Case 1: Implied Options Without Explicit Naming

**Example:**  
> “Can we talk about other options for managing my blood pressure?”

**Decision Rule:**  
If a request or statement *clearly implies* the existence of multiple management paths and signals deliberative intent, **code as PCED = YES** even if no options are named.

**Ask Yourself:**
- Does the speaker acknowledge that a decision exists?
- Are they initiating or inviting a choice-based conversation?

✅ **PCED = YES**  
**Facets:** F1 (Decision Point), F2 (Options Requested)

---

## Edge Case 2: Only One Option Mentioned, But Preference Elicited

**Example:**  
> “We can try a cortisone injection if you're comfortable with that.”

**Decision Rule:**  
If preference elicitation is present, and the option is *not presented as a directive*, **code as PCED = YES**.

**Ask Yourself:**
- Is the provider offering a path with openness to patient input?
- Could the conversation still go in another direction?

✅ **PCED = YES**  
**Facets:** F3 (Preferences), F5 (Negotiation)

---

## Edge Case 3: Declarative Decision With No Present Deliberation

**Example:**  
> “I’ve decided to go with the knee surgery.”

**Decision Rule:**  
If no deliberative language or prior reference to options is present *in this message*, **code as PCED = NO**.

**Ask Yourself:**
- Is there evidence of options, tradeoffs, or value alignment here?
- Or is this a standalone declaration?

❌ **PCED = NO**  
**Rationale:** Decision already made; not a deliberative act in this turn.

---

## Edge Case 4: Routine Request With Minor Preference Expression

**Example:**  
> “Can I get a refill for the 10mg instead of the 20mg? The lower dose feels better.”

**Decision Rule:**  
If the message includes reasoning that reflects a tradeoff or experiential evaluation, **lean toward PCED = YES**.

**Ask Yourself:**
- Is the preference about more than just convenience or habit?
- Is there a sense of weighing options (even implicitly)?

✅ **PCED = YES**  
**Facets:** F3 (Preferences), F4 (Tradeoffs)

---

## Edge Case 5: Diagnostic Path Decisions

**Example:**  
> “Should I get an MRI first or see a specialist?”

**Decision Rule:**  
Diagnostic choices are **in scope** if they involve competing clinical pathways and patient involvement. **Code as PCED = YES**.

**Ask Yourself:**
- Is the message engaging the patient in determining next steps?
- Are there implications for treatment based on the choice?

✅ **PCED = YES**  
**Facets:** F2 (Options), F4 (Tradeoffs if present)

---

## Edge Case 6: Cost or Access Concern Without Options Yet Presented

**Example:**  
> “That prescription is too expensive. Is there something cheaper?”

**Decision Rule:**  
These messages **trigger deliberation** even if options aren’t yet stated. **Code as PCED = YES**.

**Ask Yourself:**
- Is the speaker expressing a constraint that could reshape care?
- Does this reflect a value-based request?

✅ **PCED = YES**  
**Facets:** F3 (Preferences), F1 (Decision Point if follow-up implied)

---

## Edge Case 7: Disagreement or Refusal Without Suggesting Alternatives

**Example:**  
> “I’m not comfortable taking that medication.”

**Decision Rule:**  
If resistance is voiced without proposing or requesting an alternative, **code as PCED = NO**, unless it's accompanied by language suggesting openness to alternatives.

**Ask Yourself:**
- Is this a conversation-stopper or conversation-starter?
- Would a clinician *reasonably* interpret this as opening the door to deliberation?

❌ **PCED = NO** (unless additional indicators present)  
**Rationale:** Lack of constructive deliberative signal

---

## Decision Tree Snippet

```text
1. Is there more than one option explicitly or implicitly present?
   → YES → PCED = YES
   → NO →
      2. Is there a preference, constraint, or value expressed that could affect treatment choice?
         → YES → PCED = YES
         → NO →
            3. Is a decision point clearly marked?
               → YES → PCED = YES
               → NO → PCED = NO
```
