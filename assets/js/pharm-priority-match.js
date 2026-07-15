(() => {
  "use strict";

  const root = document.getElementById("pharm-priority-match");
  if (!root) return;

  const questions = Array.isArray(window.pharmacologyPriorityMatch) ? window.pharmacologyPriorityMatch : [];
  const $ = (selector) => root.querySelector(selector);
  const $$ = (selector) => [...root.querySelectorAll(selector)];
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character]));

  const modes = [
    { id: "mixed", label: "Mixed Review", hint: "Questions from every category.", matches: () => true },
    { id: "priority-danger", label: "Priority Danger", hint: "Toxicities and serious adverse effects.", matches: (item) => item.promptType === "priority-danger" },
    { id: "nursing-action", label: "Nursing Action", hint: "Hold, give, stop, assess, or notify.", matches: (item) => item.promptType === "nursing-action" },
    { id: "monitor", label: "Monitor", hint: "Key labs and assessments.", matches: (item) => item.promptType === "monitor" },
    { id: "antidote", label: "Antidote", hint: "Toxicity and reversal agents.", matches: (item) => item.promptType === "antidote" },
    { id: "patient-teaching", label: "Patient Teaching", hint: "What the client needs to know.", matches: (item) => item.promptType === "patient-teaching" },
    { id: "contraindication-interaction", label: "Interactions", hint: "Unsafe foods, meds, and conditions.", matches: (item) => item.promptType === "contraindication-interaction" }
  ];

  const categoryLabels = {
    "high-alert": "High-alert",
    cardiovascular: "Cardiovascular",
    endocrine: "Endocrine",
    "neuro-psych": "Neuro/Psych",
    "anti-infective": "Anti-infective",
    respiratory: "Respiratory",
    "gi-pain": "GI/Pain",
    "vaccines-pregnancy": "Vaccines/Pregnancy",
    "medication-safety": "Med Safety",
    antidotes: "Antidotes",
    monitoring: "Monitoring",
    interactions: "Interactions",
    "patient-teaching": "Teaching"
  };

  const state = {
    mode: "mixed",
    requestedLength: 15,
    round: [],
    index: 0,
    score: 0,
    answered: false,
    missed: [],
    selectedAnswer: null
  };

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapWith = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapWith]] = [copy[swapWith], copy[index]];
    }
    return copy;
  }

  function activeMode() {
    return modes.find((mode) => mode.id === state.mode) || modes[0];
  }

  function questionPool() {
    return questions.filter(activeMode().matches);
  }

  function roundLength(pool) {
    if (state.requestedLength === "all") return pool.length;
    return Math.min(Number(state.requestedLength), pool.length);
  }

  function answerChoices(question) {
    return shuffle([question.correctAnswer, ...question.distractors]).slice(0, 4);
  }

  function renderModes() {
    $(".ppm-mode-grid").innerHTML = modes.map((mode) => {
      const count = questions.filter(mode.matches).length;
      const active = mode.id === state.mode;
      return `<button type="button" class="ppm-mode${active ? " is-active" : ""}" data-mode="${mode.id}" aria-pressed="${active}">
        <strong>${escapeHtml(mode.label)}</strong>
        <span>${escapeHtml(mode.hint)}</span>
        <small>${count} questions</small>
      </button>`;
    }).join("");
  }

  function updateStats() {
    const total = state.round.length || 1;
    const answered = Math.min(state.index + (state.answered ? 1 : 0), state.round.length);
    const percent = Math.round((answered / total) * 100);
    $(".ppm-score strong").textContent = String(state.score);
    $(".ppm-progress strong").textContent = `${answered} / ${state.round.length || 0}`;
    $(".ppm-percent strong").textContent = `${percent}%`;
    $(".ppm-bar-fill").style.width = `${percent}%`;
  }

  function renderQuestion() {
    const question = state.round[state.index];
    state.answered = false;
    state.selectedAnswer = null;

    if (!question) {
      renderResults();
      return;
    }

    const choices = answerChoices(question);
    $(".ppm-question-count").textContent = `Question ${state.index + 1} of ${state.round.length}`;
    $(".ppm-tag").textContent = categoryLabels[question.category] || question.category || "Pharmacology";
    $(".ppm-card-title").textContent = question.medication;
    $(".ppm-card-subtitle").textContent = question.class;
    $(".ppm-prompt").textContent = question.prompt;
    $(".ppm-answers").innerHTML = choices.map((choice, index) => `<button type="button" class="ppm-answer" data-answer="${escapeHtml(choice)}">
      <span>${String.fromCharCode(65 + index)}</span>
      <strong>${escapeHtml(choice)}</strong>
    </button>`).join("");
    $(".ppm-feedback").hidden = true;
    $(".ppm-next").hidden = true;
    $(".ppm-results").hidden = true;
    $(".ppm-game-card").hidden = false;
    updateStats();
  }

  function answerQuestion(answer) {
    if (state.answered) return;
    state.answered = true;
    state.selectedAnswer = answer;
    const question = state.round[state.index];
    const correct = answer === question.correctAnswer;

    if (correct) state.score += 100;
    else state.missed.push({ ...question, selectedAnswer: answer });

    $$(".ppm-answer").forEach((button) => {
      const value = button.dataset.answer;
      button.disabled = true;
      if (value === question.correctAnswer) button.classList.add("is-correct");
      if (value === answer && !correct) button.classList.add("is-wrong");
    });

    $(".ppm-feedback").hidden = false;
    $(".ppm-feedback").className = `ppm-feedback ${correct ? "is-correct" : "is-wrong"}`;
    $(".ppm-feedback").innerHTML = `<strong>${correct ? "Correct!" : "Try again next time."}</strong>
      <p><b>Correct match:</b> ${escapeHtml(question.medication)} → ${escapeHtml(question.correctAnswer)}</p>
      <p>${escapeHtml(question.rationale)}</p>
      ${question.atiCue ? `<small><b>ATI Cue:</b> ${escapeHtml(question.atiCue)}</small>` : ""}`;
    $(".ppm-next").hidden = false;
    $(".ppm-next").textContent = state.index === state.round.length - 1 ? "See results →" : "Next question →";
    updateStats();
  }

  function resultLabel(percent) {
    if (percent >= 90) return "Priority Pharmacology Pro";
    if (percent >= 80) return "Strong ATI Readiness";
    if (percent >= 70) return "Almost There";
    return "Review the Danger Cues";
  }

  function renderResults() {
    const total = state.round.length || 1;
    const correct = total - state.missed.length;
    const percent = Math.round((correct / total) * 100);
    $(".ppm-game-card").hidden = true;
    $(".ppm-results").hidden = false;
    $(".ppm-results-title").textContent = resultLabel(percent);
    $(".ppm-results-score").textContent = `${correct} / ${total} correct · ${percent}%`;
    $(".ppm-results-text").textContent = state.missed.length
      ? "Here are the meds and cues to review before you play again."
      : "You matched every priority cue in this round.";
    $(".ppm-missed-list").innerHTML = state.missed.length
      ? state.missed.map((item) => `<article>
          <strong>${escapeHtml(item.medication)}</strong>
          <p><b>Correct:</b> ${escapeHtml(item.correctAnswer)}</p>
          <p><b>Your answer:</b> ${escapeHtml(item.selectedAnswer)}</p>
          <small>${escapeHtml(item.atiCue || item.rationale)}</small>
        </article>`).join("")
      : `<article class="ppm-perfect"><strong>🏆 No missed questions</strong><p>Beautiful. That is the exact energy ATI pharmacology wants.</p></article>`;
    updateStats();
  }

  function startRound() {
    const pool = shuffle(questionPool());
    state.round = pool.slice(0, roundLength(pool));
    state.index = 0;
    state.score = 0;
    state.answered = false;
    state.missed = [];
    renderQuestion();
  }

  root.addEventListener("click", (event) => {
    const modeButton = event.target.closest("[data-mode]");
    if (modeButton) {
      state.mode = modeButton.dataset.mode;
      renderModes();
      return;
    }

    const answerButton = event.target.closest("[data-answer]");
    if (answerButton) answerQuestion(answerButton.dataset.answer);
  });

  $(".ppm-length").addEventListener("change", (event) => {
    state.requestedLength = event.target.value === "all" ? "all" : Number(event.target.value);
  });

  $(".ppm-start").addEventListener("click", startRound);
  $(".ppm-restart").addEventListener("click", startRound);
  $(".ppm-results-restart").addEventListener("click", startRound);
  $(".ppm-next").addEventListener("click", () => {
    state.index += 1;
    renderQuestion();
  });

  renderModes();
  startRound();
})();
