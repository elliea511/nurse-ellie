---
layout: default
title: ATI Pharmacology Priority Match
page_type: pharm-priority-match
---

<link rel="stylesheet" href="{{ '/assets/css/pharm-priority-match.css' | relative_url }}">

<div class="ppm-app" id="pharm-priority-match">
  <header class="ppm-hero">
    <div>
      <a class="ppm-back" href="{{ '/game-hub.html' | relative_url }}">← Game Hub</a>
      <p class="ppm-eyebrow">ATI Pharmacology Review</p>
      <h1>Priority Match</h1>
      <p>Match medications with toxicities, monitoring, antidotes, nursing actions, and patient teaching.</p>
    </div>
    <div class="ppm-hero-badge" aria-hidden="true">🎯</div>
  </header>

  <section class="ppm-shell" aria-label="ATI Pharmacology Priority Match game">
    <div class="ppm-controls">
      <div>
        <p class="ppm-eyebrow">Choose a game mode</p>
        <div class="ppm-mode-grid" aria-label="Game modes"></div>
      </div>
      <div class="ppm-round-tools">
        <label>
          Round length
          <select class="ppm-length">
            <option value="10">10 questions</option>
            <option value="15" selected>15 questions</option>
            <option value="25">25 questions</option>
            <option value="all">All questions</option>
          </select>
        </label>
        <button type="button" class="ppm-start">Start round</button>
        <button type="button" class="ppm-restart">Restart</button>
      </div>
    </div>

    <div class="ppm-status" aria-label="Game progress">
      <div class="ppm-score"><span>Score</span><strong>0</strong></div>
      <div class="ppm-progress"><span>Progress</span><strong>0 / 0</strong></div>
      <div class="ppm-percent"><span>Percent</span><strong>0%</strong></div>
      <div class="ppm-bar" aria-hidden="true"><i class="ppm-bar-fill"></i></div>
    </div>

    <article class="ppm-game-card">
      <div class="ppm-card-head">
        <div>
          <span class="ppm-tag">Pharmacology</span>
          <h2 class="ppm-card-title">Medication</h2>
          <p class="ppm-card-subtitle">Class</p>
        </div>
        <strong class="ppm-question-count">Question 1 of 15</strong>
      </div>
      <p class="ppm-prompt">Question prompt</p>
      <div class="ppm-answers" aria-label="Answer choices"></div>
      <div class="ppm-feedback" role="status" aria-live="polite" hidden></div>
      <button type="button" class="ppm-next" hidden>Next question →</button>
    </article>

    <section class="ppm-results" hidden>
      <h2 class="ppm-results-title">Round complete</h2>
      <p class="ppm-results-score">0 / 0 correct</p>
      <p class="ppm-results-text">Review missed medications below.</p>
      <div class="ppm-missed-list"></div>
      <button type="button" class="ppm-results-restart">Play again</button>
    </section>
  </section>
</div>

<script src="{{ '/assets/js/pharm-priority-match-data.js' | relative_url }}"></script>
<script src="{{ '/assets/js/pharm-priority-match.js' | relative_url }}"></script>
