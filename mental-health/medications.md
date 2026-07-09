---
layout: default
title: Mental Health Medications
---

<style>
  .med-page-wrap {
    max-width: 1050px;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.55;
  }

  .med-hero-card,
  .med-section,
  .med-study-path,
  .med-master-card {
    border: 1px solid rgba(120, 92, 160, 0.18);
    border-radius: 18px;
    background: #fff;
    box-shadow: 0 8px 24px rgba(60, 45, 85, 0.07);
    padding: 1.1rem;
    margin: 1.1rem 0;
  }

  .med-hero-card {
    background: linear-gradient(135deg, #fff7fb, #f5f0ff);
  }

  .med-hero-card h2,
  .med-section h2 {
    margin-top: 0;
    margin-bottom: 0.35rem;
  }

  .med-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin: 0.9rem 0 0;
  }

  .med-pills a,
  .med-chip {
    display: inline-block;
    padding: 0.45rem 0.7rem;
    border-radius: 999px;
    background: #f3eefc;
    color: #4a326f;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.92rem;
  }

  .med-study-path {
    background: #fbf9ff;
  }

  .med-two-col {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 0.9rem;
  }

  .med-mini-card {
    border: 1px solid rgba(120, 92, 160, 0.16);
    border-radius: 14px;
    background: #ffffff;
    padding: 0.85rem;
  }

  .med-mini-card h3 {
    margin-top: 0;
    margin-bottom: 0.45rem;
  }

  .med-danger-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 0.75rem;
    background: #fffafa;
    border-radius: 18px;
    padding: 0.8rem;
    border: 1px solid rgba(179, 92, 122, 0.14);
  }

  .danger-box {
    border-left: 5px solid #b35c7a;
    background: #fff;
    border-radius: 12px;
    padding: 0.85rem;
  }

  .danger-box strong {
    display: block;
    margin-bottom: 0.25rem;
  }

  .med-section-header {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    margin-bottom: 0.8rem;
  }

  .med-section-icon {
    font-size: 1.8rem;
    line-height: 1;
  }

  .med-section p {
    margin-top: 0.25rem;
  }

  .med-accordion {
    border: 1px solid rgba(120, 92, 160, 0.18);
    border-radius: 14px;
    background: #ffffff;
    margin: 0.75rem 0;
    overflow: hidden;
  }

  .med-accordion summary {
    cursor: pointer;
    padding: 0.85rem 1rem;
    background: #f8f5ff;
    font-weight: 800;
    color: #3f2f60;
  }

  .med-accordion summary span {
    display: block;
    font-weight: 600;
    color: #725995;
    font-size: 0.92rem;
    margin-top: 0.1rem;
  }

  .med-accordion-body {
    padding: 0.9rem 1rem 1rem;
  }

  .med-quick-line {
    background: #fff8dd;
    border-left: 5px solid #d2a53f;
    border-radius: 12px;
    padding: 0.7rem;
    margin-top: 0.7rem;
  }

  .med-table-scroll {
    overflow-x: auto;
  }

  .med-master-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
  }

  .med-master-table th,
  .med-master-table td {
    border: 1px solid rgba(120, 92, 160, 0.18);
    padding: 0.65rem;
    vertical-align: top;
  }

  .med-master-table th {
    background: #f3eefc;
  }

  .med-alert {
    background: #fff4f6;
    border-left: 5px solid #b35c7a;
    border-radius: 12px;
    padding: 0.75rem;
    margin: 0.75rem 0;
  }

  .med-checklist li {
    margin-bottom: 0.3rem;
  }

  .cheer-banner {
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 16px;
    background: linear-gradient(135deg, #f6efff, #fff7fb);
    text-align: center;
    font-weight: 800;
  }

  @media print {
    .med-pills,
    .page-nav,
    .med-game-launch {
      display: none !important;
    }

    .med-page-wrap {
      font-size: 10.5pt;
    }

    .med-section,
    .med-hero-card,
    .med-danger-grid,
    .med-study-path,
    .med-master-card {
      box-shadow: none;
      break-inside: avoid;
    }

    details.med-accordion[open] {
      break-inside: avoid;
    }
  }
</style>

<div class="mh-breadcrumb">
  <a href="{{ '/mental-health.html' | relative_url }}">Mental Health</a>
  <span>Mental Health Medications</span>
</div>

<div class="med-page-wrap" markdown="1">

# Mental Health Medications

<div class="med-hero-card" markdown="1">

## What this page is for

This page includes the **named psych meds from your drug list** plus the **big-hitter medications mentioned in the Mental Health PowerPoints**. Non-medication treatments are saved for a separate section.

Use it like flashcards: open **one class at a time** instead of staring at a giant wall of content.

<div class="med-pills">
  <a href="#danger-cues">Danger Cues</a>
  <a href="#antidepressants">Antidepressants</a>
  <a href="#anxiety-ocd">Anxiety + OCD</a>
  <a href="#mood-stabilizers">Mood Stabilizers</a>
  <a href="#antipsychotics">Antipsychotics</a>
  <a href="#substance-use">Substance Use</a>
  <a href="#eating-special">Eating Disorder + Special</a>
  <a href="#eps-antidotes">EPS + Antidotes</a>
  <a href="#master-chart">Master Chart</a>
</div>

<a class="med-game-launch" href="{{ '/mental-health/medication-game.html' | relative_url }}">🎮 Play Mind Med Match</a>

</div>

---

<section id="danger-cues" class="med-section" markdown="1">

<div class="med-section-header">
  <span class="med-section-icon">🚨</span>
  <div>
    <h2>Do-Not-Miss Danger Cues</h2>
    <p>These are the symptoms that should make you stop and think “this is the test question.”</p>
  </div>
</div>

<div class="med-danger-grid">
  <div class="danger-box"><strong>Suicide Risk</strong>Antidepressants may improve energy before mood. Monitor closely early and after dose changes.</div>
  <div class="danger-box"><strong>Serotonin Syndrome</strong>Fever, agitation, confusion, sweating, diarrhea, tremor, rigidity, or hyperreflexia.</div>
  <div class="danger-box"><strong>Lithium Toxicity</strong>GI upset, tremor, confusion, ataxia, seizures → hold next dose + notify provider.</div>
  <div class="danger-box"><strong>Respiratory Depression</strong>Benzodiazepines/sedatives can decrease breathing, especially with alcohol or opioids.</div>
  <div class="danger-box"><strong>EPS</strong>Tremor, rigidity, restlessness, muscle spasms, abnormal movements, or stiff neck.</div>
  <div class="danger-box"><strong>NMS</strong>Fever + severe muscle rigidity + altered mental status while taking antipsychotics.</div>
  <div class="danger-box"><strong>Clozapine Blood Risk</strong>Fever, sore throat, or infection symptoms can signal agranulocytosis.</div>
  <div class="danger-box"><strong>Alcohol Withdrawal</strong>Tremors, increased VS, hallucinations, seizures, delirium. Can be fatal.</div>
</div>

</section>

<section class="med-study-path" markdown="1">

## Simple Study Path

<div class="med-two-col">
  <div class="med-mini-card" markdown="1">
### Step 1: Know the class

SSRI, SNRI, benzo, mood stabilizer, antipsychotic, substance-use med, or special class-note med?
  </div>

  <div class="med-mini-card" markdown="1">
### Step 2: Know the danger

Ask: suicide, serotonin syndrome, sedation, EPS/NMS, lithium toxicity, seizure risk, or respiratory depression?
  </div>
</div>

</section>

---

<section id="antidepressants" class="med-section" markdown="1">

<div class="med-section-header">
  <span class="med-section-icon">🌧️</span>
  <div>
    <h2>Antidepressants</h2>
    <p>Used for depression, anxiety symptoms, OCD symptoms, PTSD symptoms, PMDD, somatic/illness anxiety treatment, and depression symptoms.</p>
  </div>
</div>

<div class="med-two-col" markdown="1">
<div class="med-mini-card" markdown="1">
### Big picture
- Most take **weeks** to work.
- Do **not** stop abruptly.
- Monitor **suicide risk early**.
- Watch for **serotonin syndrome**.
</div>

<div class="med-mini-card" markdown="1">
### NCLEX loves
- Energy before mood → suicide risk.
- MAOI tyramine restrictions.
- TCA overdose danger.
- St. John’s Wort interactions.
</div>
</div>

<details class="med-accordion" open markdown="1">
<summary>SSRIs <span>Fluoxetine • Sertraline • Paroxetine • Escitalopram • Citalopram</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Depression, anxiety disorders, OCD/PTSD symptoms, PMDD, somatic/illness anxiety disorders.  
**Monitor:** Suicide risk early, serotonin syndrome, GI upset, sleep changes, sexual side effects.  
**Teach:** Takes weeks. Do not stop suddenly. Report suicidal thoughts or serotonin syndrome symptoms.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Energy may improve before mood → suicide risk early.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Vilazodone <span>Selective serotonin reuptake inhibitor + serotonin receptor agonist</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Depression.  
**Monitor:** Serotonin syndrome, GI effects, suicide risk early.  
**Teach:** Take as prescribed. Report worsening mood or serotonin syndrome.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Treat like a serotonergic antidepressant.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>SNRIs <span>Venlafaxine • Duloxetine</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Depression and anxiety symptoms. Duloxetine may also be used for pain-related conditions.  
**Monitor:** BP changes, serotonin syndrome, suicide risk early.  
**Teach:** Do not stop abruptly. Report severe headache, BP symptoms, or serotonin syndrome.

<div class="med-quick-line"><strong>NCLEX cue:</strong> SNRI = serotonin syndrome + blood pressure monitoring.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Bupropion / Wellbutrin <span>NDRI</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Depression, tobacco cessation, stimulant-withdrawal depression.  
**Monitor:** Seizure risk, anxiety, insomnia, mood changes.  
**Teach:** Report seizures or worsening mood.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Avoid/caution with seizure risk or eating disorder history.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Trazodone <span>Antidepressant often recognized for sleep/sedation</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Depression; often associated with sleep due to sedation.  
**Monitor:** Sedation, orthostatic hypotension, falls, priapism.  
**Teach:** Rise slowly. Avoid alcohol/CNS depressants. Take exactly as prescribed.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Sedation + fall precautions.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>TCA <span>Imipramine</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Depression; class notes connect TCAs with somatic disorders and OCD options.  
**Monitor:** Anticholinergic effects, sedation, orthostatic hypotension, cardiac effects, overdose danger.  
**Teach:** Rise slowly. Avoid alcohol/CNS depressants. Keep secured.

<div class="med-quick-line"><strong>NCLEX cue:</strong> TCA overdose can be fatal/dangerous.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>MAOIs <span>Phenelzine • Tranylcypromine</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Depression when other meds are not effective.  
**Monitor:** Hypertensive crisis, tyramine/drug interactions.  
**Teach:** Avoid tyramine foods. Report severe headache, chest pain, stiff neck, or palpitations.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Tyramine diet is the big teaching point.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>St. John’s Wort <span>Herbal depression supplement</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Herbal sometimes used for depression.  
**Monitor:** Interactions and serotonin syndrome risk.  
**Teach:** Tell provider before taking. Do not mix with antidepressants unless approved.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Herbal does not mean harmless.</div>
</div>
</details>

</section>

---

<section id="anxiety-ocd" class="med-section" markdown="1">

<div class="med-section-header">
  <span class="med-section-icon">✿</span>
  <div>
    <h2>Antianxiety + OCD Medications</h2>
    <p>Used for anxiety disorders, panic symptoms, OCD, dissociative anxiety symptoms, and physical anxiety symptoms.</p>
  </div>
</div>

<details class="med-accordion" open markdown="1">
<summary>Benzodiazepines <span>Diazepam • Chlordiazepoxide • Lorazepam</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Acute anxiety/panic, alcohol withdrawal, severe withdrawal/DTs, stimulant agitation if ordered, dissociative anxiety symptoms.  
**Monitor:** Sedation, falls, dependence, respiratory depression, withdrawal seizures.  
**Teach:** Avoid alcohol/CNS depressants. Do not stop suddenly.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Fast relief, but big safety risk: breathing, falls, dependence.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Buspirone / BuSpar <span>Long-term anxiety medication</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Long-term anxiety treatment.  
**Monitor:** Delayed onset; not useful for immediate panic relief.  
**Teach:** Takes weeks. No tolerance/addiction like benzos. Take consistently.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Not a rescue medication.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Fluvoxamine / Luvox <span>OCD medication</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** OCD.  
**Monitor:** Serotonin syndrome, suicide risk early, GI/sleep effects.  
**Teach:** Take consistently. Continue therapy. Do not stop abruptly.

<div class="med-quick-line"><strong>NCLEX cue:</strong> OCD med from class.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Propranolol / Inderal <span>Beta blocker for physical anxiety symptoms</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Physical anxiety symptoms like tremor, palpitations, or performance-type anxiety.  
**Monitor:** Low HR, low BP, dizziness.  
**Teach:** Report fainting, dizziness, or very low pulse.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Controls body symptoms, not the emotional cause.</div>
</div>
</details>

</section>

---

<section id="mood-stabilizers" class="med-section" markdown="1">

<div class="med-section-header">
  <span class="med-section-icon">⚡</span>
  <div>
    <h2>Mood Stabilizers</h2>
    <p>Used for bipolar disorder, mania, mood stabilization, and schizoaffective/bipolar features.</p>
  </div>
</div>

<details class="med-accordion" open markdown="1">
<summary>Lithium Carbonate <span>Drug of choice for bipolar illness</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Bipolar disorder and mood stabilization.  
**Monitor:** Level **0.6–1.2 mEq/L**, toxicity, thyroid/kidney function, diabetes insipidus.  
**Teach:** Maintain fluids/salt. Avoid diuretics unless ordered. Keep lab appointments.

<div class="med-alert"><strong>Priority:</strong> Suspected lithium toxicity = hold next dose + notify provider.</div>

| Lithium Topic | What to Know |
|---|---|
| Therapeutic range | **0.6–1.2 mEq/L** |
| Toxicity cues | GI upset, tremor, confusion, ataxia, seizures |
| Fluids + salt | Keep consistent because lithium is a salt |
| Kidneys | Monitor BUN, creatinine, specific gravity |
| Thyroid | Can cause hypothyroidism |
| DI cue | Clear urine + extreme thirst |
| Avoid/caution | Heart, kidney, thyroid disease, pregnancy, breastfeeding per class notes |
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Valproic Acid <span>Anticonvulsant mood stabilizer</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Bipolar mood stabilization, especially if lithium is ineffective or not used.  
**Monitor:** Liver problems, coagulation/platelets, pancreatitis, bone marrow suppression, rash, dizziness, speech changes, pregnancy risk.  
**Teach:** Report abdominal pain, bleeding/bruising, rash, yellowing skin, severe dizziness, or pregnancy/plans.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Anticonvulsant mood stabilizer = liver, pancreas, bleeding, bone marrow, pregnancy.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Other Mood Stabilizer Options <span>Anticonvulsants • Calcium channel blockers</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Bipolar illness if lithium alone is not effective or as alternatives.  
**Monitor anticonvulsants:** Liver/coagulation problems, pancreatitis, bone marrow suppression, rash, pregnancy risk.  
**Monitor calcium channel blockers:** Low BP, dizziness, edema, constipation.

<div class="med-quick-line"><strong>NCLEX cue:</strong> These are class-note options, but lithium is the main bipolar “big hitter.”</div>
</div>
</details>

</section>

---

<section id="antipsychotics" class="med-section" markdown="1">

<div class="med-section-header">
  <span class="med-section-icon">🧠</span>
  <div>
    <h2>Antipsychotics</h2>
    <p>Used for schizophrenia, psychosis, hallucinations, delusions, severe agitation, and bipolar/schizoaffective psychotic features.</p>
  </div>
</div>

<div class="med-two-col" markdown="1">
<div class="med-mini-card" markdown="1">
### Big picture
- First-generation meds = more EPS focus.
- Second-generation meds = metabolic monitoring.
- Any antipsychotic can cause NMS.
</div>

<div class="med-mini-card" markdown="1">
### NCLEX loves
- EPS vs NMS.
- Weight, glucose, lipids.
- Clozapine blood counts.
- Do not stop meds just because symptoms improve.
</div>
</div>

<details class="med-accordion" open markdown="1">
<summary>First-Generation Antipsychotics <span>Haloperidol • Chlorpromazine • Thiothixene</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Psychosis, hallucinations, delusions, severe agitation.  
**Monitor:** EPS, NMS, sedation, orthostatic hypotension, anticholinergic effects, cardiac concerns.  
**Teach:** Report stiffness, tremor, abnormal movements, fever, rigidity, confusion, or trouble swallowing.

<div class="med-quick-line"><strong>NCLEX cue:</strong> First-gen = EPS/NMS focus.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Second-Generation Antipsychotics <span>Risperidone • Olanzapine • Aripiprazole</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Schizophrenia/psychosis, bipolar psychotic features, mood-related psychotic symptoms.  
**Monitor:** Weight gain, glucose/lipids, metabolic syndrome, sedation, EPS/NMS.  
**Teach:** Keep labs. Report abnormal movements, fever/rigidity, major weight changes, or glucose symptoms.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Second-gen = metabolic monitoring, but still watch EPS/NMS.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Clozapine <span>High-risk antipsychotic</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Treatment-resistant schizophrenia/psychosis.  
**Monitor:** WBC/ANC, infection symptoms, seizures, myocarditis, metabolic syndrome, sedation.  
**Teach:** Report fever, sore throat, flu-like symptoms, chest pain, or signs of infection immediately.

<div class="med-alert"><strong>Priority:</strong> Clozapine = agranulocytosis risk. Fever/sore throat matters.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Pimozide / Orap <span>Paranoid thoughts class-note medication</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Class note: can decrease paranoid thoughts.  
**Monitor:** Antipsychotic-type adverse effects, cardiac concerns, EPS/NMS.  
**Teach:** Report abnormal movements, fever, rigidity, or chest symptoms.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Paranoid personality disorder med cue from class.</div>
</div>
</details>

</section>

---

<section id="substance-use" class="med-section" markdown="1">

<div class="med-section-header">
  <span class="med-section-icon">🧪</span>
  <div>
    <h2>Substance Use Medications</h2>
    <p>Used for overdose reversal, withdrawal management, alcohol use disorder, tobacco cessation, and alcohol-related complications.</p>
  </div>
</div>

<details class="med-accordion" open markdown="1">
<summary>Opioid Overdose + Withdrawal <span>Naloxone • Methadone • Clonidine • Buprenorphine/Naloxone • Lofexidine</span></summary>
<div class="med-accordion-body" markdown="1">

**Naloxone / Narcan:** Opioid overdose reversal. Breathing/airway first, then naloxone. Monitor for recurrent respiratory depression.  
**Methadone:** Opioid withdrawal/maintenance. Monitor sedation and respiratory depression.  
**Clonidine / Lofexidine:** Helps withdrawal symptoms. Monitor low BP/dizziness.  
**Buprenorphine/Naloxone:** Opioid withdrawal/maintenance as part of a recovery plan.

<div class="med-alert"><strong>Priority:</strong> Opioid overdose death is usually from respiratory arrest → promote breathing first.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Sedative-Hypnotic / Benzo Overdose <span>Flumazenil</span></summary>
<div class="med-accordion-body" markdown="1">

**Flumazenil:** Benzodiazepine antagonist/reversal option.  
**Monitor:** Airway/breathing first; seizure/withdrawal risk.  
<div class="med-quick-line"><strong>NCLEX cue:</strong> Never forget ABCs. Reversal meds do not replace airway/breathing support.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Alcohol Withdrawal / DTs <span>Diazepam • Chlordiazepoxide • Lorazepam • B vitamins • IV thiamine</span></summary>
<div class="med-accordion-body" markdown="1">

**Diazepam / Valium:** Used for alcohol-withdrawal seizures; also possible stimulant agitation if ordered.  
**Chlordiazepoxide / Librium:** Classic alcohol-withdrawal medication; dose/frequency gradually decreased.  
**Lorazepam / Ativan:** Severe withdrawal/DT option.  
**B vitamins / Thiamine:** Replaces alcohol-related vitamin deficiency.  
**IV Thiamine:** Treats/prevents Wernicke’s encephalopathy and Korsakoff’s psychosis.

<div class="med-alert"><strong>Priority:</strong> Alcohol withdrawal can be fatal. Watch VS, hallucinations, seizures, delirium, and thiamine deficiency.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Alcohol-Related Support + Relapse Prevention <span>Disulfiram • IV glucose • Furosemide • Magnesium sulfate</span></summary>
<div class="med-accordion-body" markdown="1">

**Disulfiram / Antabuse:** Alcohol aversion therapy. Avoid all alcohol-containing products; reaction can be severe/fatal.  
**IV Glucose / Dextrose:** Support for hypoglycemia risk if ordered.  
**Furosemide / Lasix:** Class note for ascites/fluid overload related to alcohol complications; watch electrolytes/dehydration.  
**Magnesium Sulfate:** Class note if seizures appear imminent in severe withdrawal/DTs; monitor respirations/reflexes.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Antabuse = no alcohol, including hidden sources.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Tobacco + Gambling Disorder Meds <span>Nicotine replacement • Varenicline • Bupropion • SSRIs • Mood stabilizers</span></summary>
<div class="med-accordion-body" markdown="1">

**Tobacco withdrawal:** Nicotine replacement, bupropion, or varenicline may be used as ordered.  
**Monitor:** Mood changes, BP/HR depending on product, adherence.  
**Gambling disorder:** Class notes mention possible SSRIs, bupropion, mood stabilizers, and anticonvulsants.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Bupropion shows up in both depression and tobacco cessation.</div>
</div>
</details>

</section>

---

<section id="eating-special" class="med-section" markdown="1">

<div class="med-section-header">
  <span class="med-section-icon">🍽️</span>
  <div>
    <h2>Eating Disorder + Special Class-Note Medications</h2>
    <p>Medications mentioned with binge eating disorder, somatic/dissociative disorders, and special class-note cues.</p>
  </div>
</div>

<details class="med-accordion" open markdown="1">
<summary>Binge Eating Disorder Meds <span>Vyvanse • Topamax/Topiramate • Contrave</span></summary>
<div class="med-accordion-body" markdown="1">

**Vyvanse:** Binge eating medication. Monitor stimulant effects, HR/BP, appetite, insomnia, misuse risk.  
**Topamax / Topiramate:** Monitor cognitive slowing, dizziness, weight/appetite changes, pregnancy concerns.  
**Contrave:** Watch BP, mood changes, and seizure risk.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Eating disorder care is not only meds — nutrition, therapy, cardiac/electrolyte safety, and structure matter.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Amobarbital <span>Conversion disorder class-note medication</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Class note: may help retrieve memories and treat seizures/insomnia.  
**Monitor:** Sedation, respiratory depression, safety.  
**Teach:** Use only under close medical supervision.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Sedation/respiratory safety.</div>
</div>
</details>

</section>

---

<section id="eps-antidotes" class="med-section" markdown="1">

<div class="med-section-header">
  <span class="med-section-icon">🛟</span>
  <div>
    <h2>EPS Meds + Antidotes</h2>
    <p>These are not always “psych treatment meds,” but they matter because they show up with psych-med safety questions.</p>
  </div>
</div>

<details class="med-accordion" open markdown="1">
<summary>Benztropine <span>Anticholinergic used for EPS</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** EPS from antipsychotics, especially dystonia/parkinsonism-type symptoms.  
**Monitor:** Anticholinergic effects: urinary retention, constipation, dry mouth, blurred vision, confusion.  
**Teach:** Report inability to urinate, severe constipation, confusion, or worsening symptoms.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Antipsychotic side effect treatment = benztropine.</div>
</div>
</details>

<details class="med-accordion" markdown="1">
<summary>Flumazenil <span>Benzodiazepine antagonist</span></summary>
<div class="med-accordion-body" markdown="1">

**Used for:** Benzodiazepine overdose/oversedation as ordered.  
**Monitor:** Airway/breathing first; seizures/withdrawal can occur.  
**Teach:** Emergency reversal medication, not anxiety treatment.

<div class="med-quick-line"><strong>NCLEX cue:</strong> Benzo reversal = flumazenil, but ABCs first.</div>
</div>
</details>

</section>

---

<section id="master-chart" class="med-section" markdown="1">

<div class="med-section-header">
  <span class="med-section-icon">📋</span>
  <div>
    <h2>Master Medication Match-Up</h2>
    <p>Fast review of each medication, category, and biggest NCLEX cue.</p>
  </div>
</div>

<div class="med-table-scroll">
<table class="med-master-table">
<thead>
<tr>
<th>Medication</th>
<th>Category</th>
<th>Biggest NCLEX Cue</th>
</tr>
</thead>
<tbody>
<tr><td><strong>Fluoxetine / Sertraline / Paroxetine / Escitalopram / Citalopram</strong></td><td>SSRIs</td><td>Suicide risk early; serotonin syndrome</td></tr>
<tr><td><strong>Vilazodone</strong></td><td>Serotonergic antidepressant</td><td>Serotonin syndrome</td></tr>
<tr><td><strong>Venlafaxine / Duloxetine</strong></td><td>SNRIs</td><td>BP changes + serotonin syndrome</td></tr>
<tr><td><strong>Bupropion / Wellbutrin</strong></td><td>NDRI</td><td>Seizure risk; tobacco cessation</td></tr>
<tr><td><strong>Trazodone</strong></td><td>Antidepressant/sedating med</td><td>Sedation, orthostatic hypotension, falls</td></tr>
<tr><td><strong>Imipramine</strong></td><td>TCA</td><td>Anticholinergic effects; overdose danger</td></tr>
<tr><td><strong>Phenelzine / Tranylcypromine</strong></td><td>MAOIs</td><td>Tyramine restrictions; hypertensive crisis</td></tr>
<tr><td><strong>St. John’s Wort</strong></td><td>Herbal</td><td>Interactions; serotonin syndrome risk</td></tr>
<tr><td><strong>Diazepam / Chlordiazepoxide / Lorazepam</strong></td><td>Benzodiazepines</td><td>Sedation, falls, respiratory depression, dependence</td></tr>
<tr><td><strong>Buspirone</strong></td><td>Antianxiety</td><td>Takes weeks; not rescue</td></tr>
<tr><td><strong>Fluvoxamine</strong></td><td>OCD medication</td><td>Serotonin syndrome risk</td></tr>
<tr><td><strong>Propranolol</strong></td><td>Beta blocker</td><td>Physical anxiety symptoms; monitor HR/BP</td></tr>
<tr><td><strong>Lithium Carbonate</strong></td><td>Mood stabilizer</td><td>Level 0.6–1.2; toxicity = hold + notify</td></tr>
<tr><td><strong>Valproic Acid</strong></td><td>Anticonvulsant mood stabilizer</td><td>Liver, pancreas, platelets/coagulation, pregnancy</td></tr>
<tr><td><strong>Calcium channel blockers</strong></td><td>Bipolar option from class</td><td>Low BP/dizziness</td></tr>
<tr><td><strong>Haloperidol / Chlorpromazine / Thiothixene</strong></td><td>First-gen antipsychotics</td><td>EPS/NMS</td></tr>
<tr><td><strong>Risperidone / Olanzapine / Aripiprazole</strong></td><td>Second-gen antipsychotics</td><td>Metabolic monitoring + EPS/NMS</td></tr>
<tr><td><strong>Clozapine</strong></td><td>High-risk antipsychotic</td><td>WBC/ANC; fever/sore throat</td></tr>
<tr><td><strong>Pimozide / Orap</strong></td><td>Antipsychotic-type med</td><td>Paranoid thoughts class-note cue</td></tr>
<tr><td><strong>Benztropine</strong></td><td>EPS medication</td><td>Helps EPS; anticholinergic side effects</td></tr>
<tr><td><strong>Flumazenil</strong></td><td>Benzo antagonist</td><td>Airway first; seizure/withdrawal risk</td></tr>
<tr><td><strong>Naloxone / Narcan</strong></td><td>Opioid antagonist</td><td>Breathing first, then naloxone</td></tr>
<tr><td><strong>Methadone</strong></td><td>Opioid withdrawal/maintenance</td><td>Sedation/respiratory monitoring</td></tr>
<tr><td><strong>Clonidine / Lofexidine</strong></td><td>Opioid withdrawal symptoms</td><td>Low BP/dizziness</td></tr>
<tr><td><strong>Buprenorphine/Naloxone</strong></td><td>Opioid withdrawal/maintenance</td><td>Recovery plan adherence</td></tr>
<tr><td><strong>B vitamins / IV Thiamine</strong></td><td>Alcohol-related vitamin replacement</td><td>Wernicke’s/Korsakoff’s</td></tr>
<tr><td><strong>Disulfiram / Antabuse</strong></td><td>Alcohol aversion</td><td>No alcohol; reaction can be fatal</td></tr>
<tr><td><strong>IV Glucose / Dextrose</strong></td><td>Glucose replacement</td><td>Hypoglycemia risk</td></tr>
<tr><td><strong>Furosemide / Lasix</strong></td><td>Alcohol-related fluid complication support</td><td>Electrolytes/dehydration</td></tr>
<tr><td><strong>Magnesium Sulfate</strong></td><td>Seizure-related class note</td><td>Respirations/reflexes</td></tr>
<tr><td><strong>Nicotine replacement / Varenicline</strong></td><td>Tobacco cessation</td><td>Mood/BP monitoring</td></tr>
<tr><td><strong>Vyvanse</strong></td><td>Binge eating medication</td><td>Stimulant effects; HR/BP</td></tr>
<tr><td><strong>Topamax / Topiramate</strong></td><td>Binge eating medication</td><td>Cognitive slowing; pregnancy concerns</td></tr>
<tr><td><strong>Contrave</strong></td><td>Binge eating/weight-related med</td><td>BP, mood, seizure risk</td></tr>
<tr><td><strong>Amobarbital</strong></td><td>Conversion disorder class-note med</td><td>Sedation/respiratory depression</td></tr>
</tbody>
</table>
</div>

</section>

---

<div class="med-two-col" markdown="1">

<div class="med-mini-card" markdown="1">
### Quick Review

1. **SSRIs/SNRIs** → suicide risk early + serotonin syndrome.
2. **SNRIs** → also watch BP.
3. **Bupropion** → seizure risk.
4. **Trazodone/benzos** → sedation/falls.
5. **Lithium** → levels, fluids/salt, kidneys, thyroid.
6. **Antipsychotics** → EPS/NMS.
7. **Second-gen antipsychotics** → metabolic labs.
8. **Clozapine** → WBC/ANC.
9. **Opioid overdose** → breathing first, then naloxone.
10. **Alcohol withdrawal** → benzos + thiamine focus.
</div>

<div class="med-mini-card" markdown="1">
### “Which Med Is It?” Cues

- **Fever + rigidity + AMS** → NMS.
- **Fever + diarrhea + tremor + hyperreflexia** → serotonin syndrome.
- **Restless/can’t sit still** → akathisia/EPS.
- **Sore throat/fever on clozapine** → possible agranulocytosis.
- **Benzo overdose** → airway/breathing first, flumazenil possible.
- **Alcohol withdrawal** → chlordiazepoxide/diazepam/lorazepam.
- **Chronic alcohol + confusion/gait/eye changes** → thiamine.
</div>

</div>

<div class="cheer-banner">
  Psych meds are easier when you sort them by danger: suicide, sedation, serotonin syndrome, lithium toxicity, EPS/NMS, breathing, seizures, and blood counts.
</div>

---

<div class="page-nav">
  <a href="{{ '/mental-health/somatic-factitious-dissociative.html' | relative_url }}" class="page-nav-back">← Somatic, Factitious & Dissociative</a>
  <a href="{{ '/mental-health.html' | relative_url }}" class="page-nav-next">Back to Mental Health →</a>
</div>

</div>
