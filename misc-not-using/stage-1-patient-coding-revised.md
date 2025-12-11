## STAGE 1: Patient Assessment
**Primary Decision Rule**: Does the patient create an opportunity for the provider to engage in comparative effectiveness deliberation about **treatment, management, or diagnostic options**?

#### Quick Reference: Patient Code Meanings
- **P0 - No Opportunity**: Patient does NOT request guidance on treatment/management decision (acknowledgment, information sharing, or gratitude only)
- **P1 - Weak Opportunity**: Requests guidance on treatment/management but mentions ZERO specific treatments or work-ups by name
- **P2 - Moderate Opportunity**: Requests guidance and mentions treatment(s) or work-up(s) as **context** (current medications, what they've tried, tests already done, background information)
- **P3 - Strong Opportunity**: Requests guidance and presents treatment(s) or work-up(s) as **alternatives/choices** to deliberate or compare between

## Decision Table

| Code | Requests guidance on treatment/management? | Mentions treatments or work-ups? | How are treatments/work-ups framed? | Example |
|------|------|------|------|----------|
| **P0** | **NO** | Any | — | "Thanks for calling in the refill." / "I picked up the prescription today." / "I'm taking the Aleve you recommended and it's working great!" |
| **P1** | **YES** | **NO** (0 treatments or work-ups mentioned) | — | "I've been having stomach pain for three days. What should I do?" / "My knee is really bothering me. Can you help?" / "I'm not sure if this is allergies or an infection. What are your thoughts?" / "What should we do next to figure this out?" |
| **P2** | **YES** | **YES** (1+ treatments or work-ups mentioned) | As **context/background** (current meds, what they've tried, tests already done) | "I'm on Aleve but it's not helping. What else can I try?" / "I've tried Tylenol and it didn't work. What should I do?" / "I'm on steroids and Aleve, but can I try Ibuprofen?" / "I've had bloodwork already but still having symptoms. What else should we check?" |
| **P3** | **YES** | **YES** (1+ treatments or work-ups mentioned) | As **alternatives/choices** to compare or choose between | "Should I continue physical therapy or get the cortisone injection?" / "What are the pros and cons of Aleve versus Ibuprofen?" / "I heard infrared light treatment is best, but what are the alternatives?" / "Which would work better - the cream or the pills?" / "Should I also get the RSV vaccine too?" / "Should we do an MRI or CT scan?" |

#### Note 
- **Key:** Focus on treatment/management/diagnostic options. Speculation about causes is fine at any level but doesn't affect coding. 
- **Treatment vs Work-up:** Both create opportunities for comparative effectiveness deliberation. Treatments address existing conditions therapeutically; work-ups include diagnostic testing, referrals, preventive interventions, or management planning steps.
- See [Coding Examples](/PCED/examples) if you would like additional clarification.

---

## CONTEXT COLUMN FOR PATIENT

After coding the patient message (P0-P3), also code this contextual feature:

| Context Variable | Code YES if... | Code NO if... |
|-----------------|----------------|---------------|
| **Involves work-up/management decision?** | Patient's request relates primarily to diagnostic testing, referrals, preventive interventions, screening, or management planning steps (rather than therapeutic treatment of an existing condition) | Patient's request relates primarily to therapeutic treatment options for managing symptoms or treating an existing condition |

#### Clarifying Examples:

**Work-up/Management (Code YES):**
- "Should I also get the RSV vaccine too?" (preventive intervention)
- "I think it's time for my annual labs. Should we check my liver function and thyroid levels this time?" (diagnostic work-ups)
- "Should I see a cardiologist or can we handle this in primary care?" (referral decision)
- "Should we do an MRI or CT scan?" (diagnostic imaging choice)
- "Do I need to get tested for diabetes?" (screening decision)

**Treatment (Code NO):**
- "Should I continue physical therapy or get the cortisone injection?" (therapeutic treatment alternatives)
- "What are the pros and cons of Aleve versus Ibuprofen?" (medication treatment comparison)
- "I'm on Aleve but it's not helping. What else can I try?" (seeking alternative treatment)

**Mixed Cases:**
In some messages, patients may discuss both work-ups and treatments. Use your judgment to code based on the **primary focus** of the request:
- "I've had bloodwork and it came back normal. Should I try a different medication or see a specialist?" → If equal weight, code based on what seems to be the patient's main question/concern

#### Note
- This context column is independent of the P-codes. For example, both "Should I get vaccine A or B?" (work-up) and "Should I try medication A or B?" (treatment) would receive P3 codes, but would differ in the work-up/management context flag.
- The distinction helps identify whether comparative effectiveness deliberation opportunities involve therapeutic decision-making versus diagnostic/preventive/management planning.

---

<!-- ## PCED Decision Flowchart

This flowchart provides a visual representation of the PCED coding decision process:

<div class="flowchart">
    <img src="{{ '/figures/patient_flowchart.svg' | relative_url }}" alt="PCED Patient Decision Flowchart" width="100%">
</div> -->
