## STAGE 2: Provider Response Assessment
**Primary Decision Rule**: How does the provider respond to the patient's opportunity (if one exists)?

## Quick Reference: Provider Code Meanings
- **R0 - No Clinical Engagement**: Provider acknowledges message but does not discuss treatment options or causes (deferral, administrative response, or simple acknowledgment)
- **R1 - Causes Only**: Provider discusses multiple possible causes or diagnoses without recommending specific treatment options
- **R2 - Non-Comparative Treatment**: Provider recommends single treatment solution or multiple treatments as a combined approach (no alternatives presented)
- **R3 - Minimal Comparative**: Provider presents 2+ treatment options with little to no elaboration on differences, benefits, or tradeoffs
- **R4 - Elaborated Comparative**: Provider presents 2+ treatment options WITH meaningful elaboration on how they differ, their benefits/risks, or tradeoffs; may relate to patient's specific situation

## Provider Engagement Table

| Code | Discusses clinical content? | Content type | Number of treatment options | Elaboration level | Example |
|------|------|------|------|------|----------|
| **R0** | **NO** | — | — | — | "Thank you for the message. I've noted this in your chart." / "I received your message. Let's discuss this at your next appointment." / "Okay, I'll send that referral." |
| **R1** | **YES** | Causes/diagnosis only | — | — | "This could be caused by a viral infection, bacterial infection, or allergic reaction. Let me know if symptoms worsen and we can run tests." / "The pain might be from muscle strain, arthritis, or nerve compression." |
| **R2** | **YES** | Treatment | 1 option (or multiple presented as single recommendation) | — | "I recommend starting physical therapy twice a week." / "Let's try increasing your dosage to 20mg daily." / "You should use the steroid cream and ibuprofen together." |
| **R3** | **YES** | Treatment | 2+ options | Minimal | "We could try metformin or a GLP-1 medication. Let me know which you prefer." / "Options include physical therapy or cortisone injection." / "You can either continue current dose or increase it." |
| **R4** | **YES** | Treatment | 2+ options | Substantial | "Metformin is usually the first choice - it's well-studied, inexpensive, and effective, though it can cause stomach upset initially. GLP-1 medications are newer, also effective, and may help with weight loss, but they're more expensive and require injections. Given your concerns about cost, I'd suggest starting with metformin." |

#### Note 
- **R3 vs R4 distinction**: The key difference is level of elaboration - does the provider meaningfully differentiate the options (benefits, risks, tradeoffs) or just list them? See [Coding Examples](examples) if you would like additional clarification.  

---

## CONTEXT COLUMNS FOR PROVIDER

After coding the provider response (R0-R4), also code these contextual features for each provider message:

| Context Variable | Code YES if... | 
|-----------------|----------------|---------------|
| **Non-primary provider?** | Respondent is a medical assistant, nurse, pharmacist, case manager, or someone other than the patient's primary/attending physician | Respondent is the patient's primary care provider or attending physician |
| **Defers to in-person?** | Provider explicitly suggests or requires meeting in-person or via phone to continue the discussion | Provider addresses the question in the secure message without deferral |
| **Core response canned?** | Provider's response appears to be templated, generic, or stock language (not personalized to this patient's specific situation) | Provider's response appears personalized or specifically tailored to the patient's situation |

#### Note 
- These context columns are independent of each other and of the R-codes. For example, a provider could give an R4 (elaborated comparative) response that still defers to in-person (e.g., "Here are your two main options... let's meet to finalize the decision").