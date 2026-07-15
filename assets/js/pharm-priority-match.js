(() => {
  "use strict";

  const root = document.getElementById("pharm-priority-match");
  if (!root) return;

  const items = Array.isArray(window.pharmacologyPriorityMatch) ? window.pharmacologyPriorityMatch : [];
  const $ = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character]));

  const modes = [
    { id: "mixed", label: "Mixed Review", icon: "🎲", hint: "Every priority cue", matches: () => true },
    { id: "use-class", label: "Use / Class", icon: "💊", hint: "What it is used for", matches: (item) => item.promptType === "use-class" },
    { id: "priority-danger", label: "Priority Danger", icon: "🚨", hint: "Toxicities + adverse effects", matches: (item) => item.promptType === "priority-danger" },
    { id: "monitor-hold", label: "Monitor / Hold", icon: "📊", hint: "Labs + hold cues", matches: (item) => item.promptType === "monitor-hold" },
    { id: "action-antidote", label: "Action / Antidote", icon: "🛡️", hint: "What to do next", matches: (item) => item.promptType === "action-antidote" },
    { id: "patient-teaching", label: "Teaching Cue", icon: "💬", hint: "Client education", matches: (item) => item.promptType === "patient-teaching" }
  ];

  const palette = ["pink", "purple", "mint", "blue", "peach"];
  const savedBest = Number.parseInt(localStorage.getItem("pharmPriorityMatchBestStreak") || "0", 10);
  const state = {
    mode: "mixed",
    score: 0,
    streak: 0,
    best: Number.isFinite(savedBest) ? savedBest : 0,
    round: 0,
    selected: null,
    roundItems: [],
    answerItems: [],
    matched: new Set(),
    completed: new Set(),
    missed: [],
    hints: 3
  };

  function shuffle(list) {
    const copy = [...list];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapWith = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapWith]] = [copy[swapWith], copy[index]];
    }
    return copy;
  }

  function getMode() {
    return modes.find((mode) => mode.id === state.mode) || modes[0];
  }

  function getPool() {
    return items.filter(getMode().matches);
  }

  function resetGame() {
    state.score = 0;
    state.streak = 0;
    state.round = 0;
    state.selected = null;
    state.matched = new Set();
    state.completed = new Set();
    state.missed = [];
    state.hints = 3;
    $("ppm-complete-card").hidden = true;
  }

  function cueLabel(item) {
    const labels = {
      "use-class": "Use / class",
      "priority-danger": "Priority danger",
      "monitor-hold": "Monitor / hold",
      "action-antidote": "Action / antidote",
      "patient-teaching": "Teaching"
    };
    return labels[item.promptType] || "ATI cue";
  }

  function itemKey(item) {
    return `${item.medication}|${item.prompt}|${item.correctAnswer}`;
  }

  function renderCategories() {
    $("ppm-category-list").innerHTML = modes.map((mode) => {
      const count = items.filter(mode.matches).length;
      const active = mode.id === state.mode;
      return `<button type="button" class="ppm-category${active ? " is-active" : ""}" data-mode="${mode.id}" aria-pressed="${active}">
        <span>${mode.icon}</span>
        <strong>${escapeHtml(mode.label)}</strong>
        <small>${count}</small>
      </button>`;
    }).join("");
  }

  function buildRound() {
    const pool = getPool();
    const remaining = pool.filter((item) => !state.completed.has(itemKey(item)));
    if (!remaining.length) {
      showComplete();
      return;
    }

    state.round += 1;
    state.selected = null;
    state.matched = new Set();
    const usedMedications = new Set();
    state.roundItems = [];
    for (const item of shuffle(remaining)) {
      if (usedMedications.has(item.medication)) continue;
      usedMedications.add(item.medication);
      state.roundItems.push(item);
      if (state.roundItems.length >= Math.min(5, remaining.length)) break;
    }
    if (!state.roundItems.length) state.roundItems = shuffle(remaining).slice(0, Math.min(5, remaining.length));
    state.answerItems = shuffle(state.roundItems);
    $("ppm-next-round").hidden = true;
    $("ppm-complete-card").hidden = true;
    $("ppm-feedback").textContent = "Select a medication or situation to begin.";
    renderBoard();
    updateStats();
  }

  function renderBoard() {
    $("ppm-med-list").innerHTML = state.roundItems.map((item, index) => {
      const key = itemKey(item);
      const matched = state.matched.has(key);
      const selected = state.selected === key;
      return `<button type="button" class="ppm-med-card is-${palette[index % palette.length]}${selected ? " is-selected" : ""}${matched ? " is-matched" : ""}" data-key="${escapeHtml(key)}" ${matched ? "disabled" : ""}>
        <span class="ppm-med-icon">💊</span>
        <strong>${escapeHtml(item.medication)}</strong>
        <i aria-hidden="true">${matched ? "✓" : "›"}</i>
      </button>`;
    }).join("");

    $("ppm-answer-list").innerHTML = state.answerItems.map((item) => {
      const key = itemKey(item);
      const matched = state.matched.has(key);
      return `<button type="button" class="ppm-answer-card${matched ? " is-matched" : ""}" data-answer-key="${escapeHtml(key)}" ${matched ? "disabled" : ""}>
        <span>${escapeHtml(cueLabel(item))}</span>
        <strong>${escapeHtml(item.correctAnswer)}</strong>
      </button>`;
    }).join("");
  }

  function updateStats() {
    const pool = getPool();
    const total = pool.length || 1;
    const complete = pool.filter((item) => state.completed.has(itemKey(item))).length;
    const percent = Math.round((complete / total) * 100);
    const level = Math.max(1, Math.floor(complete / 8) + 1);
    const ranks = ["New Review", "Safety Scout", "ATI Builder", "Priority Pro", "NCLEX Ready"];

    $("ppm-level").textContent = level;
    $("ppm-rank").textContent = ranks[Math.min(ranks.length - 1, level - 1)];
    $("ppm-progress-label").textContent = `${percent}%`;
    $("ppm-progress-bar").style.width = `${percent}%`;
    $("ppm-progress-count").textContent = `${complete} / ${total} cues`;
    $("ppm-match-count").textContent = `${state.matched.size} / ${state.roundItems.length || 0} matches`;
    $("ppm-score").textContent = state.score.toLocaleString();
    $("ppm-streak").textContent = state.streak;
    $("ppm-best").textContent = state.best;
    $("ppm-hints-left").textContent = state.hints;
    $("ppm-streak-note").textContent = state.streak >= 3 ? "Keep going!" : state.streak ? "Nice match!" : "Start matching!";
    $("ppm-round-type").textContent = `${getMode().label} · Round ${state.round}`;
  }

  function showComplete() {
    const pool = getPool();
    const complete = pool.filter((item) => state.completed.has(itemKey(item))).length;
    const missed = state.missed.slice(-8);
    $("ppm-feedback").textContent = `Complete! You matched ${complete} of ${pool.length} priority cues.`;
    $("ppm-complete-title").textContent = getMode().id === "mixed" ? "ATI Pharm review complete!" : `${getMode().label} complete!`;
    $("ppm-complete-text").innerHTML = state.missed.length
      ? `Final score: ${state.score.toLocaleString()} points. Review your missed cues below.`
      : `Final score: ${state.score.toLocaleString()} points. No missed cues in this run.`;
    $("ppm-missed-review").innerHTML = missed.length
      ? missed.map((item) => `<article><strong>${escapeHtml(item.medication)}</strong><p>${escapeHtml(item.correctAnswer)}</p><small>${escapeHtml(item.atiCue || item.rationale)}</small></article>`).join("")
      : "";
    $("ppm-complete-card").hidden = false;
    $("ppm-next-round").hidden = true;
    updateStats();
  }

  function selectMedication(key) {
    if (state.matched.has(key)) return;
    state.selected = key;
    renderBoard();
    const item = state.roundItems.find((roundItem) => itemKey(roundItem) === key);
    $("ppm-feedback").textContent = item ? `Now choose the ATI cue that matches ${item.medication}.` : "Now choose the matching cue.";
  }

  function chooseAnswer(key, button) {
    if (!state.selected) {
      $("ppm-feedback").textContent = "Choose a medication or situation on the left first.";
      return;
    }

    const selectedItem = state.roundItems.find((item) => itemKey(item) === state.selected);
    if (key === state.selected) {
      state.matched.add(key);
      state.completed.add(key);
      state.streak += 1;
      state.score += 100 + Math.min(100, (state.streak - 1) * 10);
      if (state.streak > state.best) {
        state.best = state.streak;
        localStorage.setItem("pharmPriorityMatchBestStreak", String(state.best));
      }
      $("ppm-feedback").innerHTML = `<strong>Correct!</strong> ${escapeHtml(selectedItem.medication)} → ${escapeHtml(selectedItem.correctAnswer)} <span>${escapeHtml(selectedItem.atiCue || selectedItem.rationale)}</span>`;
      state.selected = null;
      renderBoard();
      updateStats();
      if (state.matched.size === state.roundItems.length) {
        if (state.completed.size >= getPool().length) showComplete();
        else {
          $("ppm-feedback").textContent = `Round complete! ${state.completed.size} of ${getPool().length} cues matched.`;
          $("ppm-next-round").hidden = false;
        }
      }
      return;
    }

    state.score = Math.max(0, state.score - 25);
    state.streak = 0;
    if (selectedItem) state.missed.push(selectedItem);
    button.classList.add("is-wrong");
    $("ppm-feedback").textContent = "Not quite — compare the medication, priority danger, and nursing cue, then try again.";
    updateStats();
    window.setTimeout(() => button.classList.remove("is-wrong"), 650);
  }

  function useHint() {
    if (state.hints <= 0 || state.matched.size === state.roundItems.length) {
      $("ppm-feedback").textContent = "No hints remain in this game.";
      return;
    }
    if (!state.selected) {
      const next = state.roundItems.find((item) => !state.matched.has(itemKey(item)));
      if (next) state.selected = itemKey(next);
    }
    state.hints -= 1;
    renderBoard();
    updateStats();
    const correct = [...root.querySelectorAll("[data-answer-key]")].find((answer) => answer.dataset.answerKey === state.selected);
    if (correct) {
      correct.classList.add("is-hint");
      correct.focus();
      window.setTimeout(() => correct.classList.remove("is-hint"), 1800);
    }
    const item = state.roundItems.find((roundItem) => itemKey(roundItem) === state.selected);
    $("ppm-feedback").textContent = item ? `Hint: look for the glowing cue for ${item.medication}.` : "Hint: look for the glowing cue.";
  }

  function showReview() {
    const key = state.selected || itemKey(state.roundItems.find((item) => !state.matched.has(itemKey(item))) || state.roundItems[0] || {});
    const item = state.roundItems.find((roundItem) => itemKey(roundItem) === key) || items.find((entry) => itemKey(entry) === key);
    if (!item) return;
    $("ppm-review-name").textContent = item.medication;
    $("ppm-review-content").innerHTML = [
      ["Class", item.class],
      ["Mode", cueLabel(item)],
      ["Correct match", item.correctAnswer],
      ["Rationale", item.rationale],
      ["ATI cue", item.atiCue]
    ].map(([label, value]) => value ? `<div><strong>${escapeHtml(label)}</strong><p>${escapeHtml(value)}</p></div>` : "").join("");
    const dialog = $("ppm-review-dialog");
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  root.addEventListener("click", (event) => {
    const mode = event.target.closest("[data-mode]");
    if (mode) {
      state.mode = mode.dataset.mode;
      resetGame();
      renderCategories();
      buildRound();
      return;
    }

    const medication = event.target.closest("[data-key]");
    if (medication) {
      selectMedication(medication.dataset.key);
      return;
    }

    const answer = event.target.closest("[data-answer-key]");
    if (answer) chooseAnswer(answer.dataset.answerKey, answer);
  });

  $("ppm-hint").addEventListener("click", useHint);
  $("ppm-shuffle").addEventListener("click", () => {
    state.answerItems = shuffle(state.answerItems);
    renderBoard();
    $("ppm-feedback").textContent = "Cue cards shuffled.";
  });
  $("ppm-review").addEventListener("click", showReview);
  $("ppm-next-round").addEventListener("click", buildRound);
  $("ppm-new-game").addEventListener("click", () => {
    resetGame();
    buildRound();
  });
  $("ppm-dialog-close").addEventListener("click", () => $("ppm-review-dialog").close());
  $("ppm-review-dialog").addEventListener("click", (event) => {
    if (event.target === $("ppm-review-dialog")) $("ppm-review-dialog").close();
  });

  renderCategories();
  buildRound();
})();
