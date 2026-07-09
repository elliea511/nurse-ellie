---
layout: default
title: Mental Health Medications
page_type: med-browser
---

<div class="med-app">

  <nav class="med-crumbs" aria-label="Breadcrumb">
    <a href="{{ '/mental-health.html' | relative_url }}">Mental Health</a>
    <span>›</span>
    <span>Mental Health Medications</span>
  </nav>

  <header class="med-hero">
    <div class="med-hero-icon">🧠</div>
    <div>
      <h1>Mental Health Medications</h1>
      <p>Tap a category, then open a med for quick study notes.</p>
    </div>
    <a class="med-quiz-btn" href="{{ '/mental-health/medication-game.html' | relative_url }}">☆ Quick Quiz</a>
  </header>

  <section class="med-browser-card" aria-label="Medication browser">
    <div class="med-toolbar">
      <label class="med-search">
        <span>⌕</span>
        <input type="search" placeholder="Search medications..." aria-label="Search medications">
      </label>
      <div class="med-filters" aria-label="Medication filters">
        <a href="#antidepressants">All Classes</a>
        <a href="#danger-cues">NCLEX High-Yield</a>
        <a href="#master-chart">Side Effects</a>
        <a href="#teaching">Patient Teaching</a>
      </div>
    </div>

    <section id="danger-cues" class="med-alert-panel">
      <h2>⚠ High Priority Safety Alerts</h2>
      <div class="med-alert-grid">
        <article><strong>Suicide Risk</strong><span>Antidepressants may improve energy before mood. Monitor closely early and after dose changes.</span></article>
        <article><strong>Serotonin Syndrome</strong><span>Fever, agitation, confusion, sweating, diarrhea, tremor, rigidity, or hyperreflexia.</span></article>
        <article><strong>Lithium Toxicity</strong><span>GI upset, tremor, confusion, ataxia, seizures → hold next dose and notify provider.</span></article>
        <article><strong>QT / Cardiac Risk</strong><span>Monitor cardiac symptoms with antipsychotics, TCAs, and high-risk medications.</span></article>
        <article><strong>Extrapyramidal Symptoms (EPS)</strong><span>Tremor, rigidity, restlessness, muscle spasms, abnormal movements, or stiff neck.</span></article>
        <article><strong>Neuroleptic malignant syndrome (NMS)</strong><span>Fever + severe rigidity + altered mental status while taking antipsychotics.</span></article>
      </div>
    </section>

    <div class="med-jump-row">
      <span>Jump to drug class</span>
      <a href="#antidepressants">Antidepressants</a>
      <a href="#anxiety-ocd">Antianxiety + OCD</a>
      <a href="#mood-stabilizers">Mood Stabilizers</a>
      <a href="#antipsychotics">Antipsychotics</a>
      <a href="#substance-use">Substance Use</a>
      <a href="#eating-special">Eating Disorder + Special</a>
      <a href="#eps-antidotes">EPS Antidotes</a>
      <a href="#master-chart">Master Chart</a>
    </div>

    <details id="antidepressants" class="med-class" open>
      <summary>
        <span class="med-class-icon">🙂</span>
        <span><strong>Antidepressants</strong><small>Used for depression, anxiety, OCD, PTSD, PMDD, and somatic/illness anxiety symptoms.</small></span>
      </summary>

      <div class="med-class-body">
        <div class="med-teaching-grid">
          <div class="med-info-box purple"><h3>Class Big Picture</h3><ul><li>Most take 2–6 weeks to work.</li><li>Do not stop abruptly.</li><li>Monitor suicide risk early.</li><li>Watch for serotonin syndrome.</li></ul></div>
          <div class="med-info-box gold"><h3>NCLEX Loves</h3><ul><li>Energy before mood = suicide risk.</li><li>MAOIs = tyramine restrictions.</li><li>TCA overdose can be dangerous.</li></ul></div>
          <div class="med-info-box green"><h3>Teaching Points</h3><ul><li>Take consistently.</li><li>Report worsening mood.</li><li>Avoid mixing serotonergic meds unless approved.</li></ul></div>
        </div>

        <h3 class="med-select-title">Select antidepressants</h3>
        <div class="med-card-grid">
          <article class="med-card featured">
            <header><span>💊</span><div><h4>SSRIs</h4><small>Fluoxetine • Sertraline • Paroxetine • Escitalopram • Citalopram</small></div></header>
            <p><strong>Used for:</strong> Depression, anxiety disorders, OCD/PTSD symptoms, PMDD, somatic/illness anxiety disorders.</p>
            <p><strong>Monitor:</strong> Suicide risk early, serotonin syndrome, GI upset, sleep changes, sexual side effects.</p>
            <p><strong>Teach:</strong> Takes weeks. Do not stop suddenly. Report suicidal thoughts or serotonin syndrome symptoms.</p>
            <div class="med-nclex">NCLEX cue: Energy may improve before mood → suicide risk early.</div>
          </article>

          <article class="med-card">
            <header><span>💊</span><div><h4>SNRIs</h4><small>Venlafaxine • Duloxetine</small></div></header>
            <p><strong>Used for:</strong> Depression and anxiety symptoms. Duloxetine may also be used for pain-related conditions.</p>
            <p><strong>Monitor:</strong> Blood pressure changes, serotonin syndrome, suicide risk early.</p>
            <p><strong>Teach:</strong> Do not stop abruptly. Report severe headache, BP symptoms, or serotonin syndrome.</p>
            <div class="med-nclex">NCLEX cue: SNRI = serotonin syndrome + blood pressure monitoring.</div>
          </article>

          <article class="med-card">
            <header><span>💊</span><div><h4>Bupropion / Wellbutrin</h4><small>NDRI</small></div></header>
            <p><strong>Used for:</strong> Depression, tobacco cessation, stimulant-withdrawal depression.</p>
            <p><strong>Monitor:</strong> Seizure risk, anxiety, insomnia, mood changes.</p>
            <p><strong>Teach:</strong> Report seizures or worsening mood.</p>
            <div class="med-nclex">NCLEX cue: Avoid/caution with seizure risk or eating disorder history.</div>
          </article>

          <article class="med-card">
            <header><span>🌙</span><div><h4>Trazodone</h4><small>Antidepressant often recognized for sleep/sedation</small></div></header>
            <p><strong>Used for:</strong> Depression; often associated with sleep due to sedation.</p>
            <p><strong>Monitor:</strong> Sedation, orthostatic hypotension, falls, priapism.</p>
            <p><strong>Teach:</strong> Rise slowly. Avoid alcohol/CNS depressants.</p>
            <div class="med-nclex">NCLEX cue: Sedation + fall precautions.</div>
          </article>

          <article class="med-card">
            <header><span>💗</span><div><h4>TCA</h4><small>Imipramine</small></div></header>
            <p><strong>Used for:</strong> Depression; class notes connect TCAs with somatic disorders and OCD options.</p>
            <p><strong>Monitor:</strong> Anticholinergic effects, sedation, orthostatic hypotension, cardiac effects, overdose danger.</p>
            <div class="med-nclex">NCLEX cue: TCA overdose can be fatal/dangerous.</div>
          </article>

          <article class="med-card">
            <header><span>⚠</span><div><h4>MAOIs</h4><small>Phenelzine • Tranylcypromine</small></div></header>
            <p><strong>Used for:</strong> Depression when other meds are not effective.</p>
            <p><strong>Monitor:</strong> Hypertensive crisis, tyramine/drug interactions.</p>
            <p><strong>Teach:</strong> Avoid tyramine foods. Report severe headache, chest pain, stiff neck, or palpitations.</p>
            <div class="med-nclex">NCLEX cue: Tyramine diet is the big teaching point.</div>
          </article>
        </div>
      </div>
    </details>

    <details id="anxiety-ocd" class="med-class">
      <summary><span class="med-class-icon pink">✿</span><span><strong>Antianxiety + OCD Medications</strong><small>Used for anxiety disorders, panic symptoms, OCD, dissociative anxiety symptoms, and physical anxiety symptoms.</small></span></summary>
      <div class="med-class-body">
        <div class="med-card-grid">
          <article class="med-card"><header><span>🌸</span><div><h4>Benzodiazepines</h4><small>Diazepam • Chlordiazepoxide • Lorazepam</small></div></header><p><strong>Used for:</strong> Acute anxiety/panic, alcohol withdrawal, severe withdrawal/DTs, stimulant agitation if ordered.</p><p><strong>Monitor:</strong> Sedation, falls, dependence, respiratory depression, withdrawal seizures.</p><div class="med-nclex">NCLEX cue: Fast relief, but big safety risk: breathing, falls, dependence.</div></article>
          <article class="med-card"><header><span>🌿</span><div><h4>Buspirone / BuSpar</h4><small>Long-term anxiety medication</small></div></header><p><strong>Used for:</strong> Long-term anxiety treatment.</p><p><strong>Monitor:</strong> Delayed onset; not useful for immediate panic relief.</p><p><strong>Teach:</strong> Takes weeks. No tolerance/addiction like benzos. Take consistently.</p><div class="med-nclex">NCLEX cue: Not a rescue medication.</div></article>
          <article class="med-card"><header><span>🧠</span><div><h4>Fluvoxamine / Luvox</h4><small>OCD medication</small></div></header><p><strong>Used for:</strong> OCD.</p><p><strong>Monitor:</strong> Serotonin syndrome, suicide risk early, GI/sleep effects.</p><div class="med-nclex">NCLEX cue: OCD med from class.</div></article>
          <article class="med-card"><header><span>💓</span><div><h4>Propranolol / Inderal</h4><small>Beta blocker for physical anxiety symptoms</small></div></header><p><strong>Used for:</strong> Physical anxiety symptoms like tremor, palpitations, or performance anxiety.</p><p><strong>Monitor:</strong> Low HR, low BP, dizziness.</p><div class="med-nclex">NCLEX cue: Controls body symptoms, not the emotional cause.</div></article>
        </div>
      </div>
    </details>

    <details id="mood-stabilizers" class="med-class">
      <summary><span class="med-class-icon blue">⚖</span><span><strong>Mood Stabilizers</strong><small>Used for bipolar disorder, mania, mood stabilization, and schizoaffective/bipolar features.</small></span></summary>
      <div class="med-class-body">
        <div class="med-card-grid">
          <article class="med-card lithium"><header><span>🧂</span><div><h4>Lithium Carbonate</h4><small>Drug of choice for bipolar illness</small></div></header><p><strong>Used for:</strong> Bipolar disorder and mood stabilization.</p><p><strong>Monitor:</strong> Level 0.6–1.2 mEq/L, toxicity, thyroid/kidney function, diabetes insipidus.</p><p><strong>Teach:</strong> Maintain fluids/salt. Avoid diuretics unless ordered. Keep lab appointments.</p><div class="med-danger-note">Priority: Suspected lithium toxicity = hold next dose + notify provider.</div></article>
          <article class="med-card"><header><span>🛡</span><div><h4>Valproic Acid</h4><small>Anticonvulsant mood stabilizer</small></div></header><p><strong>Used for:</strong> Bipolar mood stabilization, especially if lithium is ineffective or not used.</p><p><strong>Monitor:</strong> Liver problems, coagulation/platelets, pancreatitis, bone marrow suppression, rash, pregnancy risk.</p><div class="med-nclex">NCLEX cue: Liver, pancreas, bleeding, bone marrow, pregnancy.</div></article>
          <article class="med-card"><header><span>📉</span><div><h4>Other Mood Stabilizer Options</h4><small>Anticonvulsants • Calcium channel blockers</small></div></header><p><strong>Used for:</strong> Bipolar illness if lithium alone is not effective or as alternatives.</p><p><strong>Monitor:</strong> Low BP, dizziness, edema, constipation with calcium channel blockers.</p></article>
        </div>
      </div>
    </details>

    <details id="antipsychotics" class="med-class">
      <summary><span class="med-class-icon">🧠</span><span><strong>Antipsychotics</strong><small>Used for schizophrenia, psychosis, hallucinations, delusions, severe agitation, and bipolar/schizoaffective psychotic features.</small></span></summary>
      <div class="med-class-body">
        <div class="med-teaching-grid">
          <div class="med-info-box purple"><h3>Class Big Picture</h3><ul><li>First-generation meds = more Extrapyramidal Symptoms (EPS) focus.</li><li>Second-generation meds = metabolic monitoring.</li><li>Any antipsychotic can cause Neuroleptic malignant syndrome (NMS).</li></ul></div>
          <div class="med-info-box gold"><h3>NCLEX Loves</h3><ul><li>EPS vs NMS.</li><li>Weight, glucose, lipids.</li><li>Clozapine blood counts.</li></ul></div>
          <div class="med-info-box green"><h3>Teaching Points</h3><ul><li>Report abnormal movements.</li><li>Report fever/rigidity/confusion.</li><li>Keep metabolic labs.</li></ul></div>
        </div>
        <div class="med-card-grid">
          <article class="med-card"><header><span>⚠</span><div><h4>First-Generation Antipsychotics</h4><small>Haloperidol • Chlorpromazine • Thiothixene</small></div></header><p><strong>Used for:</strong> Psychosis, hallucinations, delusions, severe agitation.</p><p><strong>Monitor:</strong> Extrapyramidal Symptoms (EPS), Neuroleptic malignant syndrome (NMS), sedation, orthostatic hypotension, anticholinergic effects.</p><div class="med-nclex">NCLEX cue: First-gen = EPS/NMS focus.</div></article>
          <article class="med-card"><header><span>📊</span><div><h4>Second-Generation Antipsychotics</h4><small>Risperidone • Olanzapine • Aripiprazole</small></div></header><p><strong>Used for:</strong> Schizophrenia/psychosis, bipolar psychotic features.</p><p><strong>Monitor:</strong> Weight gain, glucose/lipids, metabolic syndrome, sedation, EPS/NMS.</p><div class="med-nclex">NCLEX cue: Second-gen = metabolic monitoring.</div></article>
          <article class="med-card"><header><span>🩸</span><div><h4>Clozapine</h4><small>High-risk antipsychotic</small></div></header><p><strong>Used for:</strong> Treatment-resistant schizophrenia/psychosis.</p><p><strong>Monitor:</strong> WBC/ANC, infection symptoms, seizures, myocarditis, metabolic syndrome.</p><div class="med-danger-note">Priority: Clozapine = agranulocytosis risk. Fever/sore throat matters.</div></article>
          <article class="med-card"><header><span>🧩</span><div><h4>Pimozide / Orap</h4><small>Paranoid thoughts class-note medication</small></div></header><p><strong>Used for:</strong> Class note: can decrease paranoid thoughts.</p><p><strong>Monitor:</strong> Antipsychotic-type adverse effects, cardiac concerns, EPS/NMS.</p></article>
        </div>
      </div>
    </details>

    <details id="substance-use" class="med-class">
      <summary><span class="med-class-icon green">🌿</span><span><strong>Substance Use Medications</strong><small>Used for overdose reversal, withdrawal management, alcohol use disorder, tobacco cessation, and complications.</small></span></summary>
      <div class="med-class-body">
        <div class="med-card-grid">
          <article class="med-card"><header><span>🚑</span><div><h4>Opioid Overdose + Withdrawal</h4><small>Naloxone • Methadone • Clonidine • Buprenorphine/Naloxone • Lofexidine</small></div></header><p><strong>Naloxone:</strong> Opioid overdose reversal. Breathing/airway first, then naloxone.</p><p><strong>Methadone:</strong> Opioid withdrawal/maintenance. Monitor sedation and respiratory depression.</p><p><strong>Clonidine/Lofexidine:</strong> Helps withdrawal symptoms. Monitor low BP/dizziness.</p><div class="med-danger-note">Priority: Opioid overdose death is usually respiratory arrest → promote breathing first.</div></article>
          <article class="med-card"><header><span>🍷</span><div><h4>Alcohol Withdrawal / DTs</h4><small>Diazepam • Chlordiazepoxide • Lorazepam • B vitamins • IV thiamine</small></div></header><p><strong>Used for:</strong> Alcohol withdrawal seizures, DTs, thiamine deficiency prevention/treatment.</p><p><strong>Monitor:</strong> VS, hallucinations, seizures, delirium, Wernicke/Korsakoff cues.</p><div class="med-nclex">NCLEX cue: Benzos + thiamine focus.</div></article>
          <article class="med-card"><header><span>🚭</span><div><h4>Tobacco + Gambling Disorder Meds</h4><small>Nicotine replacement • Varenicline • Bupropion • SSRIs • Mood stabilizers</small></div></header><p><strong>Used for:</strong> Tobacco withdrawal/cessation; gambling disorder options from class notes.</p><p><strong>Monitor:</strong> Mood changes, BP/HR depending on product, adherence.</p></article>
        </div>
      </div>
    </details>

    <details id="eating-special" class="med-class">
      <summary><span class="med-class-icon pink">♡</span><span><strong>Eating Disorder + Special Medications</strong><small>Binge eating disorder, somatic/dissociative disorders, and special class-note cues.</small></span></summary>
      <div class="med-class-body">
        <div class="med-card-grid">
          <article class="med-card"><header><span>🍽</span><div><h4>Binge Eating Disorder Meds</h4><small>Vyvanse • Topamax/Topiramate • Contrave</small></div></header><p><strong>Vyvanse:</strong> Monitor stimulant effects, HR/BP, appetite, insomnia, misuse risk.</p><p><strong>Topamax:</strong> Monitor cognitive slowing, dizziness, weight/appetite changes, pregnancy concerns.</p><p><strong>Contrave:</strong> Watch BP, mood changes, and seizure risk.</p></article>
          <article class="med-card"><header><span>🌙</span><div><h4>Amobarbital</h4><small>Conversion disorder class-note medication</small></div></header><p><strong>Used for:</strong> Class note: may help retrieve memories and treat seizures/insomnia.</p><p><strong>Monitor:</strong> Sedation, respiratory depression, safety.</p></article>
        </div>
      </div>
    </details>

    <details id="eps-antidotes" class="med-class">
      <summary><span class="med-class-icon gold">🛟</span><span><strong>EPS Meds + Antidotes</strong><small>High-yield safety medications that show up with psych-med questions.</small></span></summary>
      <div class="med-class-body">
        <div class="med-card-grid">
          <article class="med-card"><header><span>🛟</span><div><h4>Benztropine</h4><small>Anticholinergic used for Extrapyramidal Symptoms (EPS)</small></div></header><p><strong>Used for:</strong> EPS from antipsychotics, especially dystonia/parkinsonism-type symptoms.</p><p><strong>Monitor:</strong> Urinary retention, constipation, dry mouth, blurred vision, confusion.</p><div class="med-nclex">NCLEX cue: Antipsychotic side effect treatment = benztropine.</div></article>
          <article class="med-card"><header><span>💉</span><div><h4>Flumazenil</h4><small>Benzodiazepine antagonist</small></div></header><p><strong>Used for:</strong> Benzodiazepine overdose/oversedation as ordered.</p><p><strong>Monitor:</strong> Airway/breathing first; seizures/withdrawal can occur.</p><div class="med-nclex">NCLEX cue: Benzo reversal = flumazenil, but ABCs first.</div></article>
        </div>
      </div>
    </details>

    <details id="master-chart" class="med-class">
      <summary><span class="med-class-icon blue">▦</span><span><strong>Master Medication Match-Up</strong><small>Fast review of each medication, category, and biggest NCLEX cue.</small></span></summary>
      <div class="med-class-body">
        <div class="med-table-wrap">
          <table>
            <thead><tr><th>Medication</th><th>Category</th><th>Biggest NCLEX Cue</th></tr></thead>
            <tbody>
              <tr><td>SSRIs</td><td>Antidepressants</td><td>Suicide risk early; serotonin syndrome</td></tr>
              <tr><td>SNRIs</td><td>Antidepressants</td><td>BP changes + serotonin syndrome</td></tr>
              <tr><td>Bupropion</td><td>NDRI</td><td>Seizure risk; tobacco cessation</td></tr>
              <tr><td>Lithium</td><td>Mood stabilizer</td><td>Level 0.6–1.2; toxicity = hold + notify</td></tr>
              <tr><td>First-gen antipsychotics</td><td>Antipsychotics</td><td>Extrapyramidal Symptoms (EPS) / Neuroleptic malignant syndrome (NMS)</td></tr>
              <tr><td>Clozapine</td><td>High-risk antipsychotic</td><td>WBC/ANC; fever/sore throat</td></tr>
              <tr><td>Naloxone</td><td>Opioid antagonist</td><td>Breathing first, then naloxone</td></tr>
              <tr><td>Thiamine</td><td>Alcohol-related vitamin replacement</td><td>Wernicke’s/Korsakoff’s</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </details>

    <footer id="teaching" class="med-footer-tip">
      <span>💡</span>
      <p><strong>Tip:</strong> Know the class, the key side effects, and what to teach. Sort psych meds by danger: suicide, sedation, serotonin syndrome, lithium toxicity, Extrapyramidal Symptoms (EPS), Neuroleptic malignant syndrome (NMS), breathing, seizures, and blood counts.</p>
    </footer>
  </section>

  <nav class="page-nav">
    <a href="{{ '/mental-health/somatic-factitious-dissociative.html' | relative_url }}" class="page-nav-back">← Somatic, Factitious & Dissociative</a>
    <a href="{{ '/mental-health.html' | relative_url }}" class="page-nav-next">Back to Mental Health →</a>
  </nav>
</div>
