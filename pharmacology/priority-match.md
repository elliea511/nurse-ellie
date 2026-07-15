---
layout: default
title: ATI Pharmacology Priority Match
page_type: pharm-priority-match
---

<link rel="stylesheet" href="{{ '/assets/css/pharm-priority-match.css' | relative_url }}">

<div class="ppm-app" id="pharm-priority-match">
  <header class="ppm-hero">
    <div class="ppm-title-block">
      <span class="ppm-logo" aria-hidden="true">🎯</span>
      <div>
        <a class="ppm-back-link" href="{{ '/game-hub.html' | relative_url }}">← Game Hub</a>
        <p class="ppm-eyebrow">ATI Pharmacology Review Game</p>
        <h1>Priority Match</h1>
        <p>Match each med with its danger cue, monitor, antidote, action, or teaching.</p>
      </div>
    </div>

    <div class="ppm-stats" aria-label="Game statistics">
      <div><span>Level</span><strong id="ppm-level">1</strong><small id="ppm-rank">New Review</small></div>
      <div class="ppm-progress-stat">
        <span>Progress</span>
        <strong id="ppm-progress-label">0%</strong>
        <div class="ppm-progress-track"><i id="ppm-progress-bar"></i></div>
        <small id="ppm-progress-count">0 / 5 cues</small>
      </div>
      <div><span>Score</span><strong id="ppm-score">0</strong><small>points</small></div>
      <div><span>Streak</span><strong id="ppm-streak">0</strong><small id="ppm-streak-note">Start matching!</small></div>
      <div><span>Best streak</span><strong id="ppm-best">0</strong><small>saved here</small></div>
    </div>
  </header>

  <div class="ppm-layout">
    <aside class="ppm-panel ppm-categories" aria-label="ATI pharmacology game modes">
      <h2>Categories</h2>
      <div id="ppm-category-list"></div>
      <div class="ppm-tip-card">
        <span aria-hidden="true">💡</span>
        <div><strong>ATI Tip</strong><p>Think: biggest danger, what to monitor, when to hold, and what reverses toxicity.</p></div>
      </div>
    </aside>

    <section class="ppm-board" aria-labelledby="ppm-board-title">
      <div class="ppm-board-heading">
        <div>
          <p class="ppm-eyebrow" id="ppm-round-type">Match the medication</p>
          <h2 id="ppm-board-title">Choose a medication, then choose its matching ATI cue.</h2>
        </div>
        <span class="ppm-match-count" id="ppm-match-count">0 / 5 matches</span>
      </div>

      <div class="ppm-column-labels" aria-hidden="true"><span>Medications / situations</span><span>Match to the priority cue</span></div>
      <div class="ppm-game-grid">
        <div class="ppm-med-list" id="ppm-med-list" aria-label="Medications and situations"></div>
        <div class="ppm-answer-list" id="ppm-answer-list" aria-label="Priority cues"></div>
      </div>

      <div class="ppm-feedback" id="ppm-feedback" role="status" aria-live="polite">Select a medication or situation to begin.</div>
      <div class="ppm-complete-card" id="ppm-complete-card" hidden>
        <span aria-hidden="true">🏆</span>
        <div>
          <strong id="ppm-complete-title">Game complete!</strong>
          <p id="ppm-complete-text">You matched every priority cue in this set.</p>
          <div class="ppm-missed-review" id="ppm-missed-review"></div>
        </div>
      </div>
      <button class="ppm-next-round" id="ppm-next-round" type="button" hidden>Start next round →</button>
    </section>

    <aside class="ppm-panel ppm-tools" aria-label="Game tools">
      <h2>⚡ Power-ups</h2>
      <button type="button" id="ppm-hint"><span>💡</span><strong>Hint<small>Reveal one correct match</small></strong><b id="ppm-hints-left">3</b></button>
      <button type="button" id="ppm-shuffle"><span>🔀</span><strong>Shuffle<small>Reorder the cue cards</small></strong></button>
      <button type="button" id="ppm-review"><span>📖</span><strong>Review<small>See the selected medication</small></strong></button>
      <button type="button" id="ppm-new-game"><span>↻</span><strong>New game<small>Reset score and progress</small></strong></button>

      <div class="ppm-confidence-card">
        <span aria-hidden="true">💊</span>
        <p>Know the danger.<br>Check the monitor.<br>Teach it clearly.</p>
      </div>
    </aside>
  </div>

  <footer class="ppm-pro-tip"><strong>🛡️ Pro Tip:</strong> ATI pharmacology loves safety patterns: hold parameters, toxicities, antidotes, and patient teaching.</footer>
</div>

<dialog class="ppm-review-dialog" id="ppm-review-dialog">
  <button class="ppm-dialog-close" id="ppm-dialog-close" type="button" aria-label="Close review">×</button>
  <p class="ppm-eyebrow">Priority Cue Review</p>
  <h2 id="ppm-review-name">Choose a medication first</h2>
  <div id="ppm-review-content"></div>
</dialog>

<noscript><p class="warning">ATI Pharmacology Priority Match needs JavaScript enabled to play.</p></noscript>
<script src="{{ '/assets/js/pharm-priority-match-data.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/pharm-priority-match.js' | relative_url }}" defer></script>
