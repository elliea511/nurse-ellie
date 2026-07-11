---
layout: default
title: Mind Med Match
page_type: mental-health-med-game
---

<link rel="stylesheet" href="{{ '/assets/css/med-match.css' | relative_url }}">

<div class="mmm-app" id="mind-med-match">
  <header class="mmm-hero">
    <div class="mmm-title-block">
      <span class="mmm-logo" aria-hidden="true">🧠</span>
      <div>
        <a class="mmm-back-link" href="{{ '/mental-health/medications.html' | relative_url }}">← Medication notes</a>
        <p class="mmm-eyebrow">Mental Health Medication Game</p>
        <h1>Mind Med Match</h1>
        <p>Learn psych meds through play</p>
      </div>
    </div>

    <div class="mmm-stats" aria-label="Game statistics">
      <div><span>Level</span><strong id="mmm-level">1</strong><small id="mmm-rank">New Nurse</small></div>
      <div class="mmm-progress-stat">
        <span>Progress</span>
        <strong id="mmm-progress-label">0%</strong>
        <div class="mmm-progress-track"><i id="mmm-progress-bar"></i></div>
        <small id="mmm-progress-count">0 / 5 matches</small>
      </div>
      <div><span>Score</span><strong id="mmm-score">0</strong><small>points</small></div>
      <div><span>Streak</span><strong id="mmm-streak">0</strong><small id="mmm-streak-note">Start matching!</small></div>
      <div><span>Best streak</span><strong id="mmm-best">0</strong><small>saved here</small></div>
    </div>
  </header>

  <div class="mmm-layout">
    <aside class="mmm-panel mmm-categories" aria-label="Medication categories">
      <h2>Categories</h2>
      <div id="mmm-category-list"></div>
      <div class="mmm-tip-card">
        <span aria-hidden="true">💡</span>
        <div><strong>Nursing Tip</strong><p>Know the class, what to monitor, and the biggest safety cue.</p></div>
      </div>
    </aside>

    <section class="mmm-board" aria-labelledby="mmm-board-title">
      <div class="mmm-board-heading">
        <div>
          <p class="mmm-eyebrow" id="mmm-round-type">Match the medication</p>
          <h2 id="mmm-board-title">Choose a medication, then choose its match.</h2>
        </div>
        <span class="mmm-match-count" id="mmm-match-count">0 / 5 matches</span>
      </div>

      <div class="mmm-column-labels" aria-hidden="true"><span>Medications</span><span>Match to the correct clue</span></div>
      <div class="mmm-game-grid">
        <div class="mmm-med-list" id="mmm-med-list" aria-label="Medications"></div>
        <div class="mmm-answer-list" id="mmm-answer-list" aria-label="Possible matches"></div>
      </div>

      <div class="mmm-feedback" id="mmm-feedback" role="status" aria-live="polite">Select a medication to begin.</div>
      <div class="mmm-complete-card" id="mmm-complete-card" hidden>
        <span aria-hidden="true">🏆</span>
        <div>
          <strong id="mmm-complete-title">Game complete!</strong>
          <p id="mmm-complete-text">You matched every medication in this set.</p>
        </div>
      </div>
      <button class="mmm-next-round" id="mmm-next-round" type="button" hidden>Start next round →</button>
    </section>

    <aside class="mmm-panel mmm-tools" aria-label="Game tools">
      <h2>⚡ Power-ups</h2>
      <button type="button" id="mmm-hint"><span>💡</span><strong>Hint<small>Reveal one correct match</small></strong><b id="mmm-hints-left">3</b></button>
      <button type="button" id="mmm-shuffle"><span>🔀</span><strong>Shuffle<small>Reorder the match cards</small></strong></button>
      <button type="button" id="mmm-review"><span>📖</span><strong>Review<small>See the selected medication</small></strong></button>
      <button type="button" id="mmm-new-game"><span>↻</span><strong>New game<small>Reset score and progress</small></strong></button>

      <div class="mmm-confidence-card">
        <span aria-hidden="true">🧠</span>
        <p>Build knowledge.<br>Boost confidence.<br>Support safer care.</p>
      </div>
    </aside>
  </div>

  <footer class="mmm-pro-tip"><strong>🛡️ Pro Tip:</strong> Always learn the “why” behind the medication—class, clinical use, monitoring, and patient safety.</footer>
</div>

<dialog class="mmm-review-dialog" id="mmm-review-dialog">
  <button class="mmm-dialog-close" id="mmm-dialog-close" type="button" aria-label="Close review">×</button>
  <p class="mmm-eyebrow">Medication Review</p>
  <h2 id="mmm-review-name">Choose a medication first</h2>
  <div id="mmm-review-content"></div>
</dialog>

<noscript><p class="warning">Mind Med Match needs JavaScript enabled to play.</p></noscript>
<script src="{{ '/assets/js/med-match-data.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/med-match.js' | relative_url }}" defer></script>
