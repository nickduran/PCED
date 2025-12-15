## STAGE 1: Patient Assessment

**Primary Decision Rule**: Does the patient create an opportunity for the provider to engage in comparative effectiveness deliberation about **treatment, management, or diagnostic options?**

#### Quick Reference: Patient Code Meanings
- **P0 - No Opportunity**: Patient does NOT request guidance on treatment/management decision (acknowledgment, information sharing, or gratitude only)
- **P1 - Weak Opportunity**: Requests guidance on treatment/management but mentions ZERO treatments or work-ups by name
- **P2 - Moderate Opportunity**: Requests guidance and mentions treatment(s) or work-up(s) as **context** (current medications, what they've tried, test already done, background information)
- **P3 - Strong Opportunity**: Requests guidance and presents treatment(s) or work-up(s) as **alternatives/choices** to deliberate or compare between

## Decision Table

<!-- | Code | Requests guidance on treatment/management? | Mentions treatment(s) or work-up(s)? | How are treatments/work-up(s) framed? | Example |
|------|------|------|------|----------|
| **P0** | **NO** | Any | — | "Thanks for calling in the refill." / "I picked up the prescription today." / "I'm taking the Aleve you recommended and it's working great!" |
| **P1** | **YES** | **NO** (0 treatments or work-ups mentioned) | — | "I've been having stomach pain for three days. What should I do?" / "My knee is really bothering me. Can you help?" / "I'm not sure if this is allergies or an infection. What are your thoughts?" / "What should we do next to figure this out?" |
| **P2** | **YES** | **YES** (1+ treatments or work-ups mentioned) | As **context/background** (current meds, what they've tried, tests already done) | "I'm on Aleve but it's not helping. What else can I try?" / "I've tried Tylenol and it didn't work. What should I do?" / "I'm on steroids and Aleve, but can I try Ibuprofen?" / "I've had bloodwork already but still having symptoms. What else should we check?" |
| **P3** | **YES** | **YES** (1+ treatments or work-ups mentioned) | As **alternatives/choices** to compare or choose between | "Should I continue physical therapy or get the cortisone injection?" / "What are the pros and cons of Aleve versus Ibuprofen?" / "I heard infrared light treatment is best, but what are the alternatives?" / "Should I also get the RSV vaccine too?" / "Should we do an MRI or CT scan?" | -->

<table>
<thead>
<tr>
<th>Code</th>
<th>Involves a request for guidance?</th>
<th>Clinical guidance (vs administrative guidance)?</th>
<th>Mentions treatment(s) or work-up(s)?</th>
<th>Treatments/work-ups framed as alternatives/choices?</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>P0</strong></td>
<td><strong>NO</strong></td>
<td>—</td>
<td>—</td>
<td>—</td>
<td>"Thanks for calling in the refill." / "I picked up the prescription today." / "I'm taking the Aleve you recommended and it's working great!" / "I received your message about the test results."</td>
</tr>
<tr>
<td><strong>P1</strong></td>
<td><strong>YES</strong></td>
<td><strong>NO</strong> (Administrative/logistical)</td>
<td>—</td>
<td>—</td>
<td>"The lab order didn't come through; can you resend it?" / "I need a refill on my metformin prescription." / "Can you send the referral to Dr. Smith?" / "The pharmacy says they need prior authorization."</td>
</tr>
<tr style="background-color: #e8f4f8;">
<td><strong>P2</strong></td>
<td><strong>YES</strong></td>
<td><strong>YES</strong> (Clinical)</td>
<td><strong>NO</strong> (0 treatments or work-ups mentioned)</td>
<td>—</td>
<td>"I've been having stomach pain for three days. What should I do?" / "My knee is really bothering me. Can you help?" / "I'm not sure if this is allergies or an infection. What are your thoughts?" / "What should we do next to figure this out?"</td>
</tr>
<tr style="background-color: #e8f4f8;">
<td><strong>P3</strong></td>
<td><strong>YES</strong></td>
<td><strong>YES</strong> (Clinical)</td>
<td><strong>YES</strong> (1+ treatments or work-ups mentioned)</td>
<td><strong>NO</strong> (As context/background)</td>
<td>"I'm on Aleve but it's not helping. What else can I try?" / "I've tried Tylenol and it didn't work. What should I do?" / "I'm currently taking the steroid cream, but should I also try ibuprofen?" / "I've had bloodwork already but still having symptoms. What else should we check?"</td>
</tr>
<tr style="background-color: #e8f4f8;">
<td><strong>P4</strong></td>
<td><strong>YES</strong></td>
<td><strong>YES</strong> (Clinical)</td>
<td><strong>YES</strong> (1+ treatments or work-ups mentioned)</td>
<td><strong>YES</strong> (As alternatives/choices)</td>
<td>"Should I continue physical therapy or get the cortisone injection?" / "What are the pros and cons of Aleve versus Ibuprofen?" / "Should I also get the RSV vaccine too?" / "Should we do an MRI or CT scan?" / "Which would work better for my symptoms - the cream or the pills?"</td>
</tr>
</tbody>
</table>

#### Note 
- **Key:** Focus on treatment/management/diagnostic options. Speculation about causes is fine at any level but doesn't affect coding. 
- **Treatment vs Work-Up:** Both create opportunities for comparative effectiveness deliberation. Treatments address existing conditions therapeutically; work-ups include diagnostic testing, referrals, preventive interventions, or management planning steps.
- See [Coding Examples](/PCED/examples) if you would like additional clarification.  

---

## CONTEXT COLUMNS FOR PATIENT

After coding the patient message (P0-P3), also code this contextual feature:

| Context Variable | Code YES if... | 
|-----------------|----------------|---------------|
| **Involves work-up/management decision?** | Patient's request relates **primarily** to diagnostic testing, referrals, preventive interventions, screening, or management planning steps (rather than therapeutic treatment of an existing condition) |

#### Clarifying Examples:

**Work-up/Management (Code YES):**
- "Should I also get the RSV vaccine too?" (preventive intervention)
- "I think it's time for my annual labs. Should we check my liver function and thyroid levels this time?" (diagnostic work-ups)
- "Should I see a cardiologist or can we handle this in primary care?" (referral decision)
- "Should we do an MRI or CT scan?" (diagnostic imaging choice)
- "Do I need to get tested for diabetes?" (screening decision)

**Treatment (Code Left BLANK):**
- "Should I continue physical therapy or get the cortisone injection?" (therapeutic treatment alternatives)
- "What are the pros and cons of Aleve versus Ibuprofen?" (medication treatment comparison)
- "I'm on Aleve but it's not helping. What else can I try?" (seeking alternative treatment)

**Mixed Cases:**
In some messages, patients may discuss both work-ups and treatments. Use your judgment to code based on the **primary focus** of the request:
- "I've had bloodwork and it came back normal. Should I try a different medication or see a specialist?" → If equal weight, code based on what seems to be the patient's main question/concern

#### Note
- This context column is independent of the P-codes. For example, both "Should I get vaccine A or B?" (work-up) and "Should I try medication A or B?" (treatment) would receive P3 codes, but would differ in the work-up/management context flag.
- The distinction helps identify whether comparative effectiveness deliberation opportunities involve therapeutic decision-making versus diagnostic/preventive/management planning.