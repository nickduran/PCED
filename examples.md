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

## KEY REMINDERS

- **Focus on treatment/management options**
- **Code individual messages but think about the messages in context of the entire thread**
- **Causes vs. Treatments**: Discussing multiple causes (R1) ≠ comparative effectiveness about treatments
- **Adjacency pair logic**: Patient creates communicative opportunity → Provider accepts or declines
- **R3 vs R4 distinction**: The key difference is level of elaboration - does the provider meaningfully differentiate the options (benefits, risks, tradeoffs) or just list them?
- **R2 captures**: Both single treatment recommendations AND multiple treatments presented as a combined approach (e.g., "Use the cream and take ibuprofen")
- **Context columns are independent**: A provider can give elaborated comparative information (R4) while still deferring to in-person, or a non-primary provider could give excellent comparative effectiveness responses

