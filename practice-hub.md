---
layout: default
title: Practice Hub
page_type: practice-hub
---

<link rel="stylesheet" href="{{ '/assets/css/practice-hub.css' | relative_url }}?v={{ site.time | date: '%s' }}">

<section class="practice-hub" aria-labelledby="practice-hub-title">
  <aside class="practice-sidebar" aria-label="Practice hub sections">
    <div class="practice-mini-brand">
      <span>✦</span>
      <div>
        <strong>Practice Hub</strong>
        <small>quiz. review. repeat.</small>
      </div>
    </div>

    <nav class="practice-side-nav">
      <a class="is-active" href="#practice-topics"><span>▦</span> Topic tests</a>
      <a href="#test-status"><span>↺</span> Test status</a>
      <a href="#performance"><span>◌</span> Progress snapshot</a>
      <a href="{{ '/review.html' | relative_url }}"><span>♡</span> My review list</a>
    </nav>

    <div class="practice-streak-card">
      <span>🔥</span>
      <strong>Study streak</strong>
      <b>7 days</b>
      <small>Keep showing up.</small>
    </div>
  </aside>

  <div class="practice-main">
    <header class="practice-hero">
      <span class="practice-hero-icon" aria-hidden="true">📋</span>
      <div>
        <p class="practice-eyebrow">Practice tools</p>
        <h1 id="practice-hub-title">Practice Tests</h1>
        <p>Build confidence with topic-based quizzes, mock exams, and quick reviews.</p>
      </div>
      <a class="practice-start-button" href="{{ '/medical-emergencies/practice-quiz.html' | relative_url }}"><span>＋</span> Start Medical Emergencies</a>
    </header>

    <section class="practice-topic-grid" id="practice-topics" aria-label="Practice topic cards">
      <article class="practice-test-card theme-purple">
        <span class="practice-card-icon">🧠</span>
        <div>
          <h2>Mental Health</h2>
          <p>Psych safety, disorders, medications, communication, and NCLEX priority cues.</p>
          <div class="practice-meta"><span>▤ Questions coming soon</span><b>Planned</b></div>
        </div>
        <footer><span>Status: <strong>Coming soon</strong></span><a href="{{ '/mental-health.html' | relative_url }}">Study</a></footer>
      </article>

      <article class="practice-test-card theme-blue">
        <span class="practice-card-icon">⚕️</span>
        <div>
          <h2>Medical Emergencies</h2>
          <p>Cardiac, respiratory, neuro, trauma, environmental, and priority interventions.</p>
          <div class="practice-meta"><span>▤ Practice test ready</span><b>Active</b></div>
        </div>
        <footer><span>Ready now</span><a href="{{ '/medical-emergencies/practice-quiz.html' | relative_url }}">Start</a></footer>
      </article>
    </section>

    <div class="practice-lower-grid">
      <section class="practice-panel recent" id="test-status" aria-labelledby="status-title">
        <div class="practice-panel-heading">
          <h2 id="status-title">↺ Test Status</h2>
          <a href="{{ '/medical-emergencies/practice-quiz.html' | relative_url }}">Open active test →</a>
        </div>
        <div class="practice-attempt-list">
          <div><span>⚕️ Medical Emergencies</span><small>Practice test</small><strong>Ready</strong><b>Active</b><a href="{{ '/medical-emergencies/practice-quiz.html' | relative_url }}">Start</a></div>
          <div><span>🧠 Mental Health</span><small>Question set</small><strong>—</strong><b class="in-progress">Coming soon</b><a href="{{ '/mental-health.html' | relative_url }}">Study</a></div>
        </div>
      </section>

      <section class="practice-panel performance" id="performance" aria-labelledby="performance-title">
        <div class="practice-panel-heading">
          <h2 id="performance-title">⌁ Performance Overview</h2>
        </div>
        <div class="practice-score-ring" aria-label="Average score 81 percent">
          <span>1/2</span>
          <small>Tests Ready</small>
        </div>
        <ul>
          <li><span>✓ Active tests</span><strong>1</strong></li>
          <li><span>◎ Planned tests</span><strong>1</strong></li>
          <li><span>🔥 Available now</span><strong>Medical Emergencies</strong></li>
          <li><span>▣ Coming next</span><strong>Mental Health</strong></li>
        </ul>
      </section>
    </div>

    <aside class="practice-tip">
      <span>💡</span>
      <p><strong>Tip:</strong> Start with Medical Emergencies now. Mental Health will unlock here once the question set is added.</p>
    </aside>
  </div>
</section>
