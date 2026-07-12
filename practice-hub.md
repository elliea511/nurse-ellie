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
      <a class="practice-start-button" href="{{ '/mental-health/anxiety-ocd-quiz.html' | relative_url }}"><span>＋</span> Start Mental Health</a>
    </header>

    <section class="practice-topic-grid" id="practice-topics" aria-label="Practice topic cards">
      <article class="practice-test-card theme-purple">
        <span class="practice-card-icon">🧠</span>
        <div>
          <h2>Mental Health</h2>
          <p>Anxiety, OCD, trauma responses, medication teaching, and safety-priority cues.</p>
          <div class="practice-meta"><span>▤ 35 Questions</span><b>Active</b></div>
        </div>
        <footer><span>Ready now</span><a href="{{ '/mental-health/anxiety-ocd-quiz.html' | relative_url }}">Start</a></footer>
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
          <a href="{{ '/mental-health/anxiety-ocd-quiz.html' | relative_url }}">Open Mental Health →</a>
        </div>
        <div class="practice-attempt-list">
          <div><span>⚕️ Medical Emergencies</span><small>Practice test</small><strong>Ready</strong><b>Active</b><a href="{{ '/medical-emergencies/practice-quiz.html' | relative_url }}">Start</a></div>
          <div><span>🧠 Mental Health</span><small>Anxiety/OCD set</small><strong>35 questions</strong><b>Active</b><a href="{{ '/mental-health/anxiety-ocd-quiz.html' | relative_url }}">Start</a></div>
        </div>
      </section>

      <section class="practice-panel performance" id="performance" aria-labelledby="performance-title">
        <div class="practice-panel-heading">
          <h2 id="performance-title">⌁ Performance Overview</h2>
        </div>
        <div class="practice-score-ring" aria-label="Two of two practice areas are ready">
          <span>2/2</span>
          <small>Tests Ready</small>
        </div>
        <ul>
          <li><span>✓ Active tests</span><strong>2</strong></li>
          <li><span>◎ Mental Health questions</span><strong>35</strong></li>
          <li><span>🔥 Available now</span><strong>Mental Health + Medical Emergencies</strong></li>
          <li><span>▣ Next set</span><strong>More Mental Health topics</strong></li>
        </ul>
      </section>
    </div>

    <aside class="practice-tip">
      <span>💡</span>
      <p><strong>Tip:</strong> Mental Health now starts with Anxiety/OCD. Add more topic sets here as you send them.</p>
    </aside>
  </div>
</section>
