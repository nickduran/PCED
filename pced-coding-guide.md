---
layout: default
title: PCED Coding Guide for Secure Messages
---

# PCED Coding Guide for Secure Messages

## Overview
This guide provides instructions for identifying Potential Comparative Effectiveness Deliberations (PCED) in physician-patient secure messages. PCEDs are interactions where physician and patient engage in deliberative communication about two or more viable clinical options with the potential for collaboration in decision-making.

## Primary Decision Rule

A message contains PCED if it meets **BOTH** of the following criteria:

1. **The message must reference at least TWO distinct treatment or management options** OR **clearly mark a decision point requiring choice between options**
   
   AND
   
2. **The message must contain at least ONE of the following elements:**
   - Information Exchange About Options
   - Preference Expression or Elicitation
   - Tradeoffs or Comparisons Articulation
   - Collaborative Deliberation or Negotiation

## Detailed Explanation of Core Elements

### 1. Option Presentation and Decision Point Recognition (Required)
*The presence of multiple treatment/management choices or clear indication that a decision needs to be made*

**Indicators:**
- Explicit mention of multiple options existing
- Asking about alternative approaches
- Comparing two or more options
- Expressing uncertainty about what course to take
- Indicating a need to make a decision

**Examples:**
> "We could either try the steroid cream first or refer you to a dermatologist."
> 
> "Should I continue with physical therapy or consider getting the cortisone injection we discussed?"
>
> "I'm not sure what to do next with your blood pressure medication. We need to make a decision about this."

### 2. Information Exchange About Options
*Sharing factual information about the different choices available*

**Indicators:**
- Explanation of how options work
- Description of general benefits/risks of different options
- Patient sharing experience with various options
- Questions to clarify understanding of option details

**Examples:**
> "The oral antibiotic would likely clear this up faster, but might cause stomach upset. The topical cream would be gentler but takes longer to work and you'd need to apply it 3x daily."
> 
> "I tried the nasal spray you suggested, but it caused severe dryness. What differences should I expect with the pill option?"

### 3. Preference Expression and Elicitation
*Communication about personal values and priorities related to options*

**Indicators:**
- Asking about patient's preferences or concerns
- Patient expressing what matters to them regarding decisions
- Relating options to patient's specific life circumstances or values
- Discussion of constraints (cost, convenience, etc.)

**Examples:**
> "Which of these approaches would fit better with your daily routine?"
> 
> "I'm concerned about side effects that might interfere with my work, so I prefer the option with fewer daytime symptoms."
>
> "Given your concerns about cost, the generic version might be a better fit for you."

### 4. Tradeoffs or Comparisons Articulation
*Explicit discussion of pros/cons or comparing relative benefits/drawbacks across options*

**Indicators:**
- Direct comparison of benefits between options
- Weighing of risks against benefits
- Discussion of strength of evidence for different options
- Explicit mentions of tradeoffs

**Examples:**
> "Warfarin requires more frequent monitoring but has a longer track record, while the newer medication requires less monitoring but has less long-term data on outcomes."
>
> "Physical therapy will take longer but avoid surgical risks, while surgery might provide quicker relief but involves recovery time."

### 5. Collaborative Deliberation or Negotiation
*Indications that options are being actively weighed together or that input is being integrated*

**Indicators:**
- Language indicating joint consideration (e.g., "we," "let's decide")
- Explicit invitation for input on decision
- Responding to previously stated preferences
- Integrating both parties' perspectives into a plan

**Examples:**
> "Let's think about whether surgery or medication management makes more sense given your activity goals."
> 
> "I'm weighing the trade-offs between these medications and would value your input on which direction to go."
>
> "I understand your preference for avoiding surgery, so let's try the conservative approach first and reassess in a month."

## Multi-Facet Annotation System

In addition to the binary PCED determination, each message can be annotated with specific facets to provide more detailed analysis:

| Facet | Code | Description |
|-------|------|-------------|
| Decision Point Marked | F1 | Message indicates uncertainty or need for decision |
| Options Presented/Requested | F2 | Two or more options are mentioned |
| Values/Preferences Expressed | F3 | Expression or elicitation of what matters to patient |
| Tradeoffs Articulated | F4 | Comparison of pros/cons between options |
| Negotiation/Integration | F5 | Invitation or integration of other's input |

## PCED Decision Rules for Edge Cases

| Scenario | PCED Binary = YES? | Notes |
|----------|-------------------|-------|
| Mentions 2+ options without preference talk | Yes | F2 present, even if other facets absent |
| Preference is discussed but no clear options are named | Yes | If context clearly implies options |
| Decision point marked without explicit options | Yes | If context suggests deliberation |
| Question about dose or refill only | No | Likely routine management |
| Long narrative with emotional content but no options or values | No | May be important but not deliberative |
| Tradeoff discussed without explicit options | Yes | F4 captures implicit deliberation |
| Message asks for clarification about a single option | No | Not comparing alternatives |

## Coding Process

1. Read the entire message carefully
2. Determine if at least two distinct treatment/management options are referenced OR a decision point is clearly marked
3. If yes, look for at least one of the four additional elements
4. Mark the message as containing PCED if both criteria are met
5. If desired, annotate which specific facets (F1-F5) are present in the message
6. If criteria are not met, mark as NOT containing PCED

## Important Notes

- Focus on the content of the individual message being coded, not the entire thread
- Both patient and physician messages can contain PCED
- Options must be active treatments or management approaches (not just diagnostic possibilities)
- The mere mention of a decision point is not sufficient; there must be substantive engagement with the decision process

## Complete Message Examples

### Example 1: Contains PCED
> "Dr. Smith, I've been taking the lisinopril for 2 weeks now but I'm experiencing a dry cough that's quite bothersome. I read this could be a side effect. Could we try a different medication like the losartan you mentioned as an alternative at my last visit? I'm concerned about dealing with this cough long-term, especially since I do public speaking for work."

*Analysis: References two options (lisinopril and losartan), shares information about current treatment effects, and expresses preferences related to work needs. Present facets: F2, F3, F5*

### Example 2: Contains PCED
> "I've reviewed your blood work and we need to make a decision about your diabetes management. Your A1C is still running high at 8.2 despite the maximum dose of metformin. At this point, we have two main options: adding a second oral medication like a DPP-4 inhibitor, which is convenient but may be less effective, or starting insulin which is more effective but requires injections. Given your active lifestyle, what are your thoughts about these approaches?"

*Analysis: Marks a decision point, presents two options, discusses tradeoffs, and explicitly seeks patient input on preferences. Present facets: F1, F2, F4, F5*

### Example 3: Does NOT Contain PCED
> "Dr. Smith, I've been taking the lisinopril for 2 weeks now but I'm experiencing a dry cough that's quite bothersome. I read this could be a side effect. Is this normal? Should I be concerned?"

*Analysis: Only references one treatment option (lisinopril), without discussion of alternatives or clear marking of a decision point requiring choice.*

### Example 4: Contains PCED
> "I'm not sure what to do about my knee pain. The Aleve helps some but not enough, and I'm concerned about taking it every day. Would physical therapy be better to try before considering cortisone shots? I'm trying to avoid surgery if possible."

*Analysis: Decision point is marked (uncertainty), multiple options mentioned (Aleve, PT, cortisone, surgery), and preferences expressed (avoiding surgery). Present facets: F1, F2, F3*

## PCED Decision Flowchart

This flowchart provides a visual representation of the PCED coding decision process:

<div class="flowchart">
    <img src="{{ '/figures/pced-flowchart.svg' | relative_url }}" alt="PCED Coding Decision Flowchart" width="100%">
</div>