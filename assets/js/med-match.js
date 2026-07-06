(() => {
  "use strict";

  const medications = [
    { medication: "Citalopram / Escitalopram", category: "Antidepressant", class: "SSRI", usedFor: "Depression and anxiety", keySideEffect: "GI upset, headache, sexual dysfunction", monitor: "Mood changes, suicidal thoughts, serotonin syndrome symptoms", patientTeaching: "Takes several weeks to work; do not stop suddenly", nclexCue: "SSRIs are not immediate. New suicidal thoughts, severe agitation, sweating, fever, confusion, or tremors are priority concerns." },
    { medication: "Fluoxetine", category: "Antidepressant", class: "SSRI", usedFor: "Depression, anxiety, OCD", keySideEffect: "GI upset, insomnia, sexual dysfunction", monitor: "Mood changes, suicidal thoughts, serotonin syndrome symptoms", patientTeaching: "Takes several weeks to work; do not stop suddenly", nclexCue: "New agitation, sweating, fever, confusion, or tremors may indicate serotonin syndrome." },
    { medication: "Sertraline", category: "Antidepressant", class: "SSRI", usedFor: "Depression, anxiety, PTSD", keySideEffect: "GI upset, sexual dysfunction", monitor: "Mood changes, suicidal thoughts, serotonin syndrome symptoms", patientTeaching: "Take consistently every day; effects are not immediate", nclexCue: "Worsening depression or suicidal thoughts after starting medication is priority." },
    { medication: "Venlafaxine / Duloxetine", category: "Antidepressant", class: "SNRI", usedFor: "Depression, anxiety, neuropathic pain", keySideEffect: "Nausea, insomnia, increased blood pressure", monitor: "Blood pressure, mood changes, suicidal thoughts, serotonin syndrome symptoms", patientTeaching: "Do not stop suddenly; report severe headache, high blood pressure symptoms, or mood changes", nclexCue: "SNRIs can increase blood pressure, so blood pressure changes matter." },
    { medication: "Bupropion / Wellbutrin", category: "Antidepressant", class: "Atypical antidepressant", usedFor: "Depression and smoking cessation", keySideEffect: "Insomnia, dry mouth, increased seizure risk", monitor: "Seizure history, eating disorder history, mood changes, suicidal thoughts", patientTeaching: "Take as prescribed; avoid taking late in the day if it causes insomnia", nclexCue: "Avoid with seizure disorders or eating disorders because it lowers the seizure threshold." },
    { medication: "Imipramine", category: "Antidepressant", class: "Tricyclic antidepressant", usedFor: "Depression; sometimes used for enuresis", keySideEffect: "Anticholinergic effects and orthostatic hypotension", monitor: "Heart rhythm, blood pressure, urinary retention, constipation, overdose risk", patientTeaching: "Change positions slowly; report chest pain, palpitations, or urinary retention", nclexCue: "TCAs are dangerous in overdose and can cause cardiac rhythm problems." },
    { medication: "Phenelzine / Tranylcypromine", category: "Antidepressant", class: "MAOI", usedFor: "Depression when other medications have not worked", keySideEffect: "Hypertensive crisis risk with tyramine foods", monitor: "Blood pressure, severe headache, chest pain, medication and food interactions", patientTeaching: "Avoid tyramine foods such as aged cheese, cured meats, fermented foods, and some wines", nclexCue: "Severe headache, high blood pressure, chest pain, or neck stiffness after eating tyramine foods is an emergency." },
    { medication: "Trazodone", category: "Antidepressant", class: "Serotonin modulator", usedFor: "Depression and sleep", keySideEffect: "Sedation, orthostatic hypotension", monitor: "Dizziness, falls, blood pressure changes, excessive sedation", patientTeaching: "Change positions slowly; take at bedtime if prescribed for sleep", nclexCue: "Fall precautions are important because this medication can cause sedation and dizziness." },
    { medication: "Lithium Carbonate", category: "Mood stabilizer", class: "Mood stabilizer", usedFor: "Bipolar disorder, especially mania", keySideEffect: "Tremor, GI upset, weight gain", monitor: "Blood level, kidney function, thyroid function, fluid and sodium balance", patientTeaching: "Maintain consistent fluid and sodium intake; report vomiting, diarrhea, confusion, or severe tremor", nclexCue: "Vomiting, diarrhea, confusion, and worsening tremor may indicate toxicity." },
    { medication: "Haloperidol", category: "Antipsychotic", class: "Typical antipsychotic", usedFor: "Schizophrenia, agitation, psychosis", keySideEffect: "Extrapyramidal symptoms, also called EPS", monitor: "Muscle stiffness, tremors, restlessness, abnormal movements, fever", patientTeaching: "Report uncontrollable movements, severe stiffness, or fever", nclexCue: "Fever, muscle rigidity, and altered mental status may indicate neuroleptic malignant syndrome." },
    { medication: "Risperidone", category: "Antipsychotic", class: "Atypical antipsychotic", usedFor: "Schizophrenia, bipolar disorder, irritability/agitation", keySideEffect: "Weight gain, metabolic changes, sedation", monitor: "Weight, blood glucose, lipids, movement changes", patientTeaching: "Rise slowly; report abnormal movements or signs of high blood sugar", nclexCue: "Atypical antipsychotics have lower EPS risk than typical antipsychotics, but metabolic effects are important." },
    { medication: "Diazepam / Librium / Ativan", category: "Anxiolytic / Sedative", class: "Benzodiazepine", usedFor: "Anxiety, agitation, seizures, alcohol withdrawal", keySideEffect: "Sedation, impaired coordination, respiratory depression", monitor: "Respiratory rate, level of sedation, fall risk, withdrawal symptoms", patientTeaching: "Avoid alcohol, driving, and other sedating medications unless approved", nclexCue: "Respiratory depression and oversedation are priority concerns." },
    { medication: "Naloxone / Narcan", category: "Substance use / Emergency medication", class: "Opioid antagonist", usedFor: "Reverses opioid overdose", keySideEffect: "Acute withdrawal symptoms", monitor: "Respiratory status, level of consciousness, return of overdose symptoms", patientTeaching: "Emergency help is still needed after use because opioids may last longer than the reversal medication", nclexCue: "Respiratory depression after opioid use is the priority cue." },
    { medication: "Methadone", category: "Substance use medication", class: "Opioid agonist", usedFor: "Opioid use disorder and withdrawal management", keySideEffect: "Sedation, respiratory depression, QT prolongation", monitor: "Respiratory rate, sedation level, heart rhythm risk, signs of misuse", patientTeaching: "Take only as prescribed; avoid alcohol and other sedatives", nclexCue: "Even when used for treatment, this medication can still cause respiratory depression." },
    { medication: "Vyvanse", category: "ADHD / Eating disorder medication", class: "CNS stimulant", usedFor: "ADHD and binge eating disorder", keySideEffect: "Insomnia, decreased appetite, increased heart rate, increased blood pressure", monitor: "Blood pressure, heart rate, weight, appetite, sleep, misuse risk", patientTeaching: "Take early in the day; avoid taking late because it may cause insomnia", nclexCue: "Stimulants can decrease appetite and increase blood pressure and heart rate." },
    { medication: "Topamax / Topiramate", category: "Mood / Eating disorder related medication", class: "Anticonvulsant", usedFor: "Seizures, migraine prevention, and sometimes mood or binge-eating related symptoms", keySideEffect: "Cognitive slowing, dizziness, weight loss, kidney stone risk", monitor: "Confusion, memory problems, hydration status, kidney stone symptoms", patientTeaching: "Stay hydrated; report severe confusion, vision changes, or flank pain", nclexCue: "This medication may cause slowed thinking and increases kidney stone risk." },
    { medication: "Contrave", category: "Weight management / Eating disorder related medication", class: "Bupropion and naltrexone combination", usedFor: "Weight management", keySideEffect: "Nausea, headache, insomnia, increased blood pressure", monitor: "Blood pressure, mood changes, suicidal thoughts, seizure risk", patientTeaching: "Do not use with opioid medications; report mood changes or severe headache", nclexCue: "Because it contains bupropion, seizure risk and mood changes are important safety concerns." },
    { medication: "Amobarbital", category: "Sedative / Hypnotic", class: "Barbiturate", usedFor: "Sedation, anxiety, sleep, seizure-related use", keySideEffect: "CNS depression and respiratory depression", monitor: "Respiratory rate, level of consciousness, blood pressure, overdose risk", patientTeaching: "Avoid alcohol and other sedatives; do not drive until effects are known", nclexCue: "Barbiturates can strongly depress the central nervous system and respirations." },
    { medication: "Donepezil", category: "Cognitive disorder medication", class: "Cholinesterase inhibitor", usedFor: "Alzheimer’s disease symptoms", keySideEffect: "GI upset, bradycardia", monitor: "Heart rate, dizziness, GI symptoms", patientTeaching: "This does not cure Alzheimer’s but may help slow symptom progression", nclexCue: "A low heart rate or syncope is a priority concern." },
    { medication: "Memantine", category: "Cognitive disorder medication", class: "NMDA receptor antagonist", usedFor: "Moderate to severe Alzheimer’s disease symptoms", keySideEffect: "Dizziness, confusion, headache", monitor: "Dizziness, fall risk, worsening confusion", patientTeaching: "Take as prescribed; use safety precautions to prevent falls", nclexCue: "Fall prevention is important because dizziness and confusion can worsen safety risk." },
    { medication: "Benztropine", category: "EPS treatment medication", class: "Anticholinergic", usedFor: "Extrapyramidal symptoms caused by antipsychotics", keySideEffect: "Dry mouth, constipation, urinary retention, blurred vision", monitor: "Urinary retention, bowel function, confusion, overheating", patientTeaching: "Increase fluids and fiber if allowed; report trouble urinating", nclexCue: "This medication may be used when an antipsychotic causes tremors, stiffness, or abnormal movements." }
  ];

  const root = document.getElementById("mind-med-match");
  if (!root) return;

  const $ = (id) => document.getElementById(id);
  const shuffle = (items) => {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapWith = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapWith]] = [copy[swapWith], copy[index]];
    }
    return copy;
  };
  const escapeHtml = (value) => String(value).replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character]));

  const categoryDefinitions = [
    { id: "all", label: "All medications", icon: "🧠", matches: () => true },
    { id: "antidepressants", label: "Antidepressants", icon: "💜", matches: (med) => med.category === "Antidepressant" },
    { id: "antipsychotics", label: "Antipsychotics", icon: "🛡️", matches: (med) => med.category === "Antipsychotic" },
    { id: "mood", label: "Mood stabilizers", icon: "⚡", matches: (med) => med.category.includes("Mood") },
    { id: "anxiety", label: "Anxiety & sedatives", icon: "🌿", matches: (med) => /Anxiolytic|Sedative/.test(med.category) },
    { id: "substance", label: "Substance use", icon: "🚑", matches: (med) => med.category.includes("Substance") },
    { id: "eating", label: "Eating & weight", icon: "♡", matches: (med) => /Eating|Weight/.test(med.category) },
    { id: "cognition", label: "Cognition & EPS", icon: "🧩", matches: (med) => /Cognitive|EPS/.test(med.category) }
  ];

  const clueFields = [
    { key: "class", label: "Class" },
    { key: "usedFor", label: "Used for" },
    { key: "keySideEffect", label: "Key side effect" },
    { key: "monitor", label: "Monitor" },
    { key: "patientTeaching", label: "Teaching" },
    { key: "nclexCue", label: "NCLEX cue" }
  ];

  const savedBest = Number.parseInt(localStorage.getItem("mindMedMatchBestStreak") || "0", 10);
  const state = {
    category: "all",
    round: 0,
    score: 0,
    streak: 0,
    best: Number.isFinite(savedBest) ? savedBest : 0,
    totalCorrect: 0,
    hints: 3,
    selectedMedication: null,
    roundMedications: [],
    answers: [],
    matched: new Set()
  };

  function getCategory() {
    return categoryDefinitions.find((category) => category.id === state.category) || categoryDefinitions[0];
  }

  function createAnswers(roundMedications) {
    const usedClues = new Set();
    return roundMedications.map((medication, index) => {
      let field;
      for (let offset = 0; offset < clueFields.length; offset += 1) {
        const candidate = clueFields[(state.round + index + offset) % clueFields.length];
        const identity = `${candidate.key}:${medication[candidate.key]}`;
        if (!usedClues.has(identity)) {
          usedClues.add(identity);
          field = candidate;
          break;
        }
      }
      field = field || clueFields[index % clueFields.length];
      return { medication: medication.medication, label: field.label, value: medication[field.key] };
    });
  }

  function buildRound() {
    state.round += 1;
    state.selectedMedication = null;
    state.matched = new Set();
    const pool = medications.filter(getCategory().matches);
    state.roundMedications = shuffle(pool).slice(0, Math.min(5, pool.length));
    state.answers = shuffle(createAnswers(state.roundMedications));
    $("mmm-next-round").hidden = true;
    $("mmm-feedback").textContent = "Select a medication to begin.";
    renderBoard();
    updateStats();
  }

  function renderCategories() {
    $("mmm-category-list").innerHTML = categoryDefinitions.map((category) => {
      const count = medications.filter(category.matches).length;
      const active = category.id === state.category;
      return `<button type="button" class="mmm-category${active ? " is-active" : ""}" data-category="${category.id}" aria-pressed="${active}"><span>${category.icon}</span><strong>${escapeHtml(category.label)}</strong><small>${count}</small></button>`;
    }).join("");
  }

  function renderBoard() {
    const palette = ["purple", "blue", "green", "gold", "pink"];
    $("mmm-med-list").innerHTML = state.roundMedications.map((medication, index) => {
      const matched = state.matched.has(medication.medication);
      const selected = state.selectedMedication === medication.medication;
      return `<button type="button" class="mmm-med-card is-${palette[index % palette.length]}${selected ? " is-selected" : ""}${matched ? " is-matched" : ""}" data-medication="${escapeHtml(medication.medication)}" ${matched ? "disabled" : ""}><span class="mmm-med-icon">💊</span><strong>${escapeHtml(medication.medication)}</strong><small>${escapeHtml(medication.class)}</small><i aria-hidden="true">${matched ? "✓" : "›"}</i></button>`;
    }).join("");

    $("mmm-answer-list").innerHTML = state.answers.map((answer) => {
      const matched = state.matched.has(answer.medication);
      return `<button type="button" class="mmm-answer-card${matched ? " is-matched" : ""}" data-answer="${escapeHtml(answer.medication)}" ${matched ? "disabled" : ""}><span>${escapeHtml(answer.label)}</span><strong>${escapeHtml(answer.value)}</strong></button>`;
    }).join("");
  }

  function updateStats() {
    const total = state.roundMedications.length || 1;
    const complete = state.matched.size;
    const percent = Math.round((complete / total) * 100);
    const level = Math.max(1, Math.floor(state.totalCorrect / 10) + 1);
    const ranks = ["New Nurse", "Med Rookie", "Safety Scout", "Psych Pro", "NCLEX Ready"];
    $("mmm-level").textContent = level;
    $("mmm-rank").textContent = ranks[Math.min(ranks.length - 1, level - 1)];
    $("mmm-progress-label").textContent = `${percent}%`;
    $("mmm-progress-bar").style.width = `${percent}%`;
    $("mmm-progress-count").textContent = `${complete} / ${total} matches`;
    $("mmm-match-count").textContent = `${complete} / ${total} matches`;
    $("mmm-score").textContent = state.score.toLocaleString();
    $("mmm-streak").textContent = state.streak;
    $("mmm-best").textContent = state.best;
    $("mmm-hints-left").textContent = state.hints;
    $("mmm-streak-note").textContent = state.streak >= 3 ? "Keep it going!" : state.streak ? "Nice match!" : "Start matching!";
    $("mmm-round-type").textContent = `${getCategory().label} · Round ${state.round}`;
  }

  function selectMedication(name) {
    if (state.matched.has(name)) return;
    state.selectedMedication = name;
    renderBoard();
    $("mmm-feedback").textContent = `Now choose the clue that matches ${name}.`;
  }

  function chooseAnswer(name, button) {
    if (!state.selectedMedication) {
      $("mmm-feedback").textContent = "Choose a medication on the left first.";
      return;
    }
    if (name === state.selectedMedication) {
      state.matched.add(name);
      state.streak += 1;
      state.totalCorrect += 1;
      state.score += 100 + Math.min(100, (state.streak - 1) * 10);
      if (state.streak > state.best) {
        state.best = state.streak;
        localStorage.setItem("mindMedMatchBestStreak", String(state.best));
      }
      $("mmm-feedback").textContent = `Correct! ${name} is matched.`;
      state.selectedMedication = null;
      renderBoard();
      updateStats();
      if (state.matched.size === state.roundMedications.length) {
        $("mmm-feedback").textContent = `Round complete! You earned ${state.score.toLocaleString()} total points.`;
        $("mmm-next-round").hidden = false;
      }
      return;
    }

    state.score = Math.max(0, state.score - 25);
    state.streak = 0;
    button.classList.add("is-wrong");
    $("mmm-feedback").textContent = "Not quite—compare the class, use, and safety cues, then try again.";
    updateStats();
    window.setTimeout(() => button.classList.remove("is-wrong"), 650);
  }

  function useHint() {
    if (state.hints <= 0 || state.matched.size === state.roundMedications.length) {
      $("mmm-feedback").textContent = "No hints remain in this game.";
      return;
    }
    if (!state.selectedMedication) {
      const nextMedication = state.roundMedications.find((medication) => !state.matched.has(medication.medication));
      if (nextMedication) state.selectedMedication = nextMedication.medication;
    }
    state.hints -= 1;
    renderBoard();
    updateStats();
    const correct = [...root.querySelectorAll("[data-answer]")].find((answer) => answer.dataset.answer === state.selectedMedication);
    if (correct) {
      correct.classList.add("is-hint");
      correct.focus();
      window.setTimeout(() => correct.classList.remove("is-hint"), 1800);
    }
    $("mmm-feedback").textContent = `Hint: look for the glowing clue for ${state.selectedMedication}.`;
  }

  function showReview() {
    const name = state.selectedMedication || state.roundMedications.find((medication) => !state.matched.has(medication.medication))?.medication || state.roundMedications[0]?.medication;
    const medication = medications.find((item) => item.medication === name);
    if (!medication) return;
    $("mmm-review-name").textContent = medication.medication;
    $("mmm-review-content").innerHTML = [
      ["Category", medication.category], ["Class", medication.class], ["Used for", medication.usedFor], ["Key side effect", medication.keySideEffect], ["Monitor", medication.monitor], ["Patient teaching", medication.patientTeaching], ["NCLEX cue", medication.nclexCue]
    ].map(([label, value]) => `<div><strong>${escapeHtml(label)}</strong><p>${escapeHtml(value)}</p></div>`).join("");
    const dialog = $("mmm-review-dialog");
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  root.addEventListener("click", (event) => {
    const category = event.target.closest("[data-category]");
    if (category) {
      state.category = category.dataset.category;
      renderCategories();
      buildRound();
      return;
    }
    const medication = event.target.closest("[data-medication]");
    if (medication) {
      selectMedication(medication.dataset.medication);
      return;
    }
    const answer = event.target.closest("[data-answer]");
    if (answer) chooseAnswer(answer.dataset.answer, answer);
  });

  $("mmm-hint").addEventListener("click", useHint);
  $("mmm-shuffle").addEventListener("click", () => { state.answers = shuffle(state.answers); renderBoard(); $("mmm-feedback").textContent = "Match cards shuffled."; });
  $("mmm-review").addEventListener("click", showReview);
  $("mmm-next-round").addEventListener("click", buildRound);
  $("mmm-new-game").addEventListener("click", () => {
    Object.assign(state, { round: 0, score: 0, streak: 0, totalCorrect: 0, hints: 3, selectedMedication: null });
    buildRound();
  });
  $("mmm-dialog-close").addEventListener("click", () => $("mmm-review-dialog").close());
  $("mmm-review-dialog").addEventListener("click", (event) => { if (event.target === $("mmm-review-dialog")) $("mmm-review-dialog").close(); });

  renderCategories();
  buildRound();
})();
