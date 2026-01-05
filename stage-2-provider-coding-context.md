## STAGE 2: Provider Response Assessment
**Primary Decision Rule**: How does the provider respond to the patient's request (if one exists) for guidance on **treatment/management or work-up/diagnostic options?**. Key focus is on whether the provider engages in comparative effectiveness deliberation by discussing multiple options, and if so, how elaborately they do so.

## Quick Reference: Provider Code Meanings
- **R0 - No Clinical Engagement**: Acknowledges message but does not discuss treatment/diagnostic options or causes (deferral, administrative response, or simple acknowledgment)
- **R1 - Causes Only**: Discusses multiple possible causes or diagnoses without recommending specific treatment/management or work-up/diagnostic options.
- **R2 - Non-Comparative Response**: Recommends or provides solution(s) without comparative deliberation (no alternatives presented).  
- **R3 - Minimal Comparative**: Recommends or provides solution(s) with some alternatives/options presented but WITHOUT meaningful elaboration on differences, benefits, or tradeoffs
- **R4 - Elaborated Comparative**: Recommends or provides solution(s) WITH meaningful elaboration on how they differ, their benefits/risks, or tradeoffs; may relate to patient's specific situation

## Provider Engagement Table

| Code | Discusses clinical content? | Content type | Options presented? | Elaboration level | Example |
|------|------|------|------|------|----------|
| **R0** | **NO** | — | — | — | "Thank you for the message. I've noted this in your chart." / "I received your message. Let's discuss this at your next appointment." / "Okay, I'll send that referral." |
| **R1** | **YES** | Causes/diagnosis | — | — | "This could be caused by a viral infection, bacterial infection, or allergic reaction. Let me know if symptoms worsen and we can run tests." / "The pain might be from muscle strain, arthritis, or nerve compression." |
| **R2** | **YES** | Recommendations/solutions | No | — | "I recommend starting physical therapy twice a week." / "Let's try increasing your dosage to 20mg daily." / "You should use the steroid cream and ibuprofen together." / "Let's get your A1C checked and schedule a cardiology consult." |
| **R3** | **YES** | Recommendations/solutions | Yes | Minimal | "We could try metformin or a GLP-1 medication. Let me know which you prefer." / "Options include physical therapy or cortisone injection." / "You can either continue current dose or increase it." / "We could do an MRI or CT scan. Which would you prefer?" |
| **R4** | **YES** | Recommendations/solutions | Yes | Substantial | "Metformin is usually the first choice - it's well-studied, inexpensive, and effective, though it can cause stomach upset initially. GLP-1 medications are newer, also effective, and may help with weight loss, but they're more expensive and require injections. Given your concerns about cost, I'd suggest starting with metformin." / "An MRI provides more detailed soft tissue images and doesn't use radiation, but it's more expensive and takes longer. A CT scan is faster and better for bone issues, but involves radiation exposure. Given your symptoms pointing to ligament damage, I'd recommend the MRI." |

#### Note 
- **R3 vs R4 distinction**: The key difference is level of elaboration - does the provider meaningfully differentiate the options (benefits, risks, tradeoffs) or just list them? This applies whether discussing treatment/management or work-up/diagnostic decisions.
- **Treatment/management vs work-up/diagnostic:**: Providers can give comparative or non-comparative responses about therapeutic treatments (medications, procedures, therapies) OR about diagnostic/work-up decisions (which test to order, which specialist to see, which preventive intervention to pursue).
- See [Coding Examples](/PCED/examples) if you would like additional clarification.

---

## CONTEXT COLUMNS FOR PROVIDER

After coding the provider response (R0-R4), also code these contextual features for each provider message:

| Context Variable | Code YES if... | 
|-----------------|----------------|
| **Non-primary provider?** | Respondent is a medical assistant, nurse, pharmacist, case manager, or someone other than a primary/assisting physician | 
| **Defers to in-person?** | Provider explicitly suggests or requires meeting in-person or via phone to continue the discussion | 
| **Core response canned?** | Provider's response appears to be templated, generic, or stock language (not personalized to this patient's specific situation) | 
<!-- | **Involves work-up/management decision?** | Provider's response relates primarily to diagnostic testing, referrals, preventive interventions, screening, or management planning steps (rather than therapeutic treatment of an existing condition) | -->

#### Note 
- These context columns are independent of each other and of the R-codes. For example:
  - A provider could give an R4 (elaborated comparative) response that still defers to in-person (e.g., "Here are your two main options... let's meet to finalize the decision")
  <!-- - A provider could give an R3 (minimal comparative) response about work-ups (e.g., "We could do an MRI or CT scan") where work-up/management = YES
  - A provider could give an R2 (non-comparative) response about treatments (e.g., "Start taking ibuprofen twice daily") where work-up/management = NO -->
<!-- - The work-up/management context flag helps identify whether the provider's comparative effectiveness deliberation (or lack thereof) involves therapeutic decision-making versus diagnostic/preventive/management planning. This allows analysis of whether providers engage differently with treatment opportunities versus work-up opportunities. -->