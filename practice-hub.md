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
      <a class="is-active" href="{{ '/practice-hub.html' | relative_url }}"><span>▦</span> Practice hub</a>
      <a href="{{ '/mental-health/practice-quiz.html' | relative_url }}"><span>🧠</span> Mental Health</a>
      <a href="{{ '/medical-emergencies/practice-quiz.html' | relative_url }}"><span>⚕️</span> Medical Emergencies</a>
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
      <div class="practice-hero-actions" aria-label="Start a practice test">
        <a class="practice-start-button" href="{{ '/mental-health/practice-quiz.html' | relative_url }}"><span>＋</span> Mental Health</a>
        <a class="practice-start-button secondary" href="{{ '/medical-emergencies/practice-quiz.html' | relative_url }}"><span>＋</span> Medical Emergencies</a>
      </div>
    </header>

    <section class="practice-topic-grid" id="practice-topics" aria-label="Practice topic cards">
      <article class="practice-test-card theme-purple">
        <span class="practice-card-icon">🧠</span>
        <div>
          <h2>Mental Health</h2>
          <p>Anxiety/OCD, depression, suicide safety, antidepressants, plus a focused medication review filter.</p>
          <div class="practice-meta"><span>▤ 75 Questions + Med Filter</span><b>Active</b></div>
        </div>
        <footer><span>Ready now</span><a href="{{ '/mental-health/practice-quiz.html' | relative_url }}">Start</a></footer>
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
          <h2 id="status-title">↺ Available Tests</h2>
        </div>
        <div class="practice-attempt-list">
          <div><span>⚕️ Medical Emergencies</span><small>Practice test</small><strong>Ready</strong><b>Active</b><a href="{{ '/medical-emergencies/practice-quiz.html' | relative_url }}">Start</a></div>
          <div><span>🧠 Mental Health</span><small>Anxiety/OCD + Depression + Med Filter</small><strong>75 questions</strong><b>Active</b><a href="{{ '/mental-health/practice-quiz.html' | relative_url }}">Start</a></div>
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
          <li><span>◎ Mental Health questions</span><strong>75</strong></li>
          <li><span>🔥 Available now</span><strong>Mental Health + Medical Emergencies</strong></li>
          <li><span>▣ Next set</span><strong>More Mental Health topics</strong></li>
        </ul>
      </section>
    </div>

    <aside class="practice-tip">
      <span>💡</span>
      <p><strong>Tip:</strong> Mental Health now has Anxiety/OCD, Depression, and a Medication Questions filter that pulls med questions from the topic sets.</p>
    </aside>
  </div>
</section>
