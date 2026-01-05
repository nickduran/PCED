## STAGE 1: Patient Assessment

**Primary Decision Rule**: Does the patient create an opportunity for the provider to engage in comparative effectiveness deliberation about **treatment/management or work-up/diagnostic options?**. Key focus is on whether the patient is making a request of any kind that might open the door for such deliberation, specifically.  

#### Quick Reference: Patient Code Meanings
- **P0 - No Opportunity**: Does NOT make a request or is NOT seeking guidance associated with target topics (acknowledgment, information sharing, or gratitude only)
- **P1 - Weak Opportunity**: Makes a request or is seeking guidance associated with target topics but mentions none by name (only problems/symptoms)
- **P2 - Moderate Opportunity**: Makes a request or is seeking guidance associated with target topics and mentions one or more by name as **context/background** but does not present them as alternatives/choices.  
- **P3 - Strong Opportunity**: Makes a request or is seeking guidance associated with target topics and mentions one or more by name as **alternatives/choices** to deliberate or compare between
  
## Decision Table

| Code | Make a request or is seeking guidance? | Names clinical issue? | Clinical issues framed as alternatives/choices? | Example |
|------|------|------|------|----------|
| **P0** | **NO** | Any | — | "Thanks for calling in the refill." / "I picked up the prescription today." / "I'm taking the Aleve you recommended and it's working great!" |
| **P1** | **YES** | **NO** (0 options mentioned for addressing problems/symptoms) | — | "I've been having stomach pain for three days. What should I do?" / "My knee is really bothering me. Can you help?" / "I'm not sure if this is allergies or an infection. What are your thoughts?" / "What should we do next to figure this out?" |
| **P2** | **YES** | **YES** (1+ options mentioned for addressing problems/symptoms) | As **context/background** (current meds, what they've tried, tests already done) | "I'm on Aleve but it's not helping. What else can I try?" / "I've tried Tylenol and it didn't work. What should I do?" / "I'm on steroids and Aleve, but can I try Ibuprofen?" / "I've had bloodwork already but still having symptoms. What else should we check?" |
| **P3** | **YES** | **YES** (1+ options mentioned for addressing problems/symptoms) | As **alternatives/choices** to compare or choose between | "Should I continue physical therapy or get the cortisone injection?" / "What are the pros and cons of Aleve versus Ibuprofen?" / "I heard infrared light treatment is best, but what are the alternatives?" / "Should I also get the RSV vaccine too?" / "Should we do an MRI or CT scan?" |

#### Note 
- **Key:** Focus on treatment/management/work-up/diagnostic options. Speculation about problems/symptoms is fine at any level but doesn't affect coding. 
- **Treatment/management vs work-up/diagnostic:** Both create opportunities for comparative effectiveness deliberation. Treatment/management address existing conditions therapeutically; work-ups/diagnostic include diagnostic testing, referrals, preventive interventions, or management planning steps.
- See [Coding Examples](/PCED/examples) if you would like additional clarification.  

---

## CONTEXT COLUMNS FOR PATIENT

After coding the patient message (P0-P3), also code this contextual feature:

| Context Variable | Code YES if... | 
|-----------------|----------------|---------------|
| **Involves work-up/diagnostic decision?** | Patient's request relates **primarily** to diagnostic testing, referrals, preventive interventions, screening, or management planning steps |

#### Clarifying Examples:

**Work-up/diagnostic (Code YES):**
- "Should I also get the RSV vaccine too?" (preventive intervention)
- "I think it's time for my annual labs. Should we check my liver function and thyroid levels this time?" (diagnostic work-ups)
- "Should I see a cardiologist or can we handle this in primary care?" (referral decision)
- "Should we do an MRI or CT scan?" (diagnostic imaging choice)
- "Do I need to get tested for diabetes?" (screening decision)

**Treatment/managment (Code Left BLANK):**
- "Should I continue physical therapy or get the cortisone injection?" (therapeutic treatment alternatives)
- "What are the pros and cons of Aleve versus Ibuprofen?" (medication treatment comparison)
- "I'm on Aleve but it's not helping. What else can I try?" (seeking alternative treatment)

**Mixed Cases:**
In some messages, patients may discuss both work-ups and treatments. Use your judgment to code based on the **primary focus** of the request:
- "I've had bloodwork and it came back normal. Should I try a different medication or see a specialist?" → If equal weight, code based on what seems to be the patient's main question/concern

#### Note
- This context column is independent of the P-codes. For example, both "Should I get vaccine A or B?" (work-up) and "Should I try medication A or B?" (treatment) would receive P3 codes, but would differ in whether you mark the work-up/diagnostic context flag.
- The distinction helps identify whether comparative effectiveness deliberation opportunities involve therapeutic decision-making versus diagnostic/preventive planning.