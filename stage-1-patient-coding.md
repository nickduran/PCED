### STAGE 1: Patient Assessment
**Primary Decision Rule**: Does the patient create an opportunity for the provider to engage in comparative effectiveness deliberation about treatment/management options?

#### Quick Reference: Patient Code Meanings
- **P0 - No Opportunity**: Patient does NOT request guidance on treatment decision (information sharing or acknowledgment only)
- **P1 - Weak Implicit**: General help-seeking without mentioning specific treatment options
- **P2 - Moderate Implicit**: Asks about alternatives without naming specific options OR expresses dissatisfaction with current approach OR speculates on multiple causes
- **P3 - Strong Implicit**: Names 2+ specific treatment options the patient is considering, without requesting comparison
- **P4 - Explicit**: Directly requests comparison, pros/cons, or tradeoffs between specific treatment options

#### Decision Table

| Code | Requests guidance on treatment? | Mentions specific options? | Asks about alternatives OR dissatisfaction? | Names 2+ specific options? | Explicitly requests comparison? | Example |
|------|------|------|------|------|------|----------|
| **P0** | **NO** | — | — | — | — | "Thanks for calling in the refill. I really appreciate it." / "Just wanted to let you know I'm taking the medication exactly as prescribed and feeling better." |
| **P1** | **YES** | **NO** | **NO** | — | — | "I've been having stomach pain for three days. What should I do?" / "My knee is bothering me. Can I try ibuprofen for this?" / "Should I keep taking the antibiotic even though I feel better?" |
| **P2** | **YES** | **NO** | **YES** | — | — | "I've been using the Aleve for two weeks but it only helps a little. What else can I try?" / "I'm not sure if this rash is from allergies or something else. What are your thoughts?" / "The current treatment isn't working well. Are there better options?" |
| **P3** | **YES** | **YES** | — | **YES** | **NO** | "My knee pain isn't improving. Should I continue with physical therapy or consider getting the cortisone injection you mentioned?" / "I'm trying to decide between the cream you prescribed or going straight to the oral medication. What do you think?" |
| **P4** | **YES** | **YES** | — | **YES** | **YES** | "Can you help me understand the pros and cons of the two diabetes medications we discussed?" / "What are the tradeoffs between continuing physical therapy versus having the surgery?" / "Which medication would work better for my situation - the one with fewer side effects or the one that's more effective?" |

---

## PCED Decision Flowchart

This flowchart provides a visual representation of the PCED coding decision process:

<div class="flowchart">
    <img src="{{ '/figures/patient_flowchart.html' | relative_url }}" alt="PCED Patient Decision Flowchart" width="100%">
</div>