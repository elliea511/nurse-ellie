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
      <a href="#recent-attempts"><span>↺</span> Recent attempts</a>
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
      <a class="practice-start-button" href="#practice-topics"><span>＋</span> Start New Test</a>
    </header>

    <div class="practice-toolbar" aria-label="Practice filters preview">
      <label class="practice-search">
        <span aria-hidden="true">⌕</span>
        <input type="search" placeholder="Search tests by topic or keyword..." disabled>
      </label>
      <button type="button" disabled>All Topics <span>⌄</span></button>
      <button type="button" disabled>Timed & Untimed <span>⌄</span></button>
      <button type="button" disabled>All Difficulties <span>⌄</span></button>
      <div class="practice-view-toggle" aria-hidden="true"><span>▦</span><span>☰</span></div>
    </div>

    <section class="practice-topic-grid" id="practice-topics" aria-label="Practice topic cards">
      <article class="practice-test-card theme-purple">
        <span class="practice-card-icon">🧠</span>
        <div>
          <h2>Mental Health</h2>
          <p>Anxiety disorders, mood disorders, medications, safety, and priority cues.</p>
          <div class="practice-meta"><span>▤ 20 Questions</span><b>Moderate</b></div>
        </div>
        <footer><span>Last score: <strong>82%</strong></span><a href="{{ '/mental-health/basics-quiz.html' | relative_url }}">Review</a></footer>
      </article>

      <article class="practice-test-card theme-mint">
        <span class="practice-card-icon">💊</span>
        <div>
          <h2>Pharmacology</h2>
          <p>Med classes, side effects, patient teaching, and NCLEX safety priorities.</p>
          <div class="practice-meta"><span>▤ 25 Questions</span><b>Moderate</b></div>
        </div>
        <footer><span>Last score: <strong>88%</strong></span><a href="{{ '/mental-health/medication-game.html' | relative_url }}">Resume</a></footer>
      </article>

      <article class="practice-test-card theme-pink">
        <span class="practice-card-icon">👶</span>
        <div>
          <h2>Maternity</h2>
          <p>Pregnancy, labor and delivery, postpartum, and newborn care basics.</p>
          <div class="practice-meta"><span>▤ 20 Questions</span><b>Easy</b></div>
        </div>
        <footer><span>Last score: <strong>76%</strong></span><a href="{{ '/maternity.html' | relative_url }}">Start</a></footer>
      </article>

      <article class="practice-test-card theme-rose">
        <span class="practice-card-icon">🩸</span>
        <div>
          <h2>Perfusion</h2>
          <p>Cardiovascular system, blood flow, perfusion concepts, and interventions.</p>
          <div class="practice-meta"><span>▤ 15 Questions</span><b>Hard</b></div>
        </div>
        <footer><span>Last score: <strong>70%</strong></span><a href="{{ '/medical-emergencies.html' | relative_url }}">Start</a></footer>
      </article>

      <article class="practice-test-card theme-blue">
        <span class="practice-card-icon">🫁</span>
        <div>
          <h2>Respiratory</h2>
          <p>Gas exchange, airway priorities, respiratory distress, and oxygenation.</p>
          <div class="practice-meta"><span>▤ 20 Questions</span><b>Moderate</b></div>
        </div>
        <footer><span>Last score: <strong>84%</strong></span><a href="{{ '/medical-emergencies/practice-quiz.html' | relative_url }}">Resume</a></footer>
      </article>

      <article class="practice-test-card theme-orange">
        <span class="practice-card-icon">🩺</span>
        <div>
          <h2>Med-Surg</h2>
          <p>Priority decisions across body systems, acute changes, and nursing care.</p>
          <div class="practice-meta"><span>◔ 14/30 completed</span><b>Hard</b></div>
        </div>
        <footer><span>In progress</span><a href="{{ '/all-topics.html' | relative_url }}">Resume</a></footer>
      </article>
    </section>

    <div class="practice-lower-grid">
      <section class="practice-panel recent" id="recent-attempts" aria-labelledby="recent-title">
        <div class="practice-panel-heading">
          <h2 id="recent-title">↺ Recent Attempts</h2>
          <a href="{{ '/review.html' | relative_url }}">View all →</a>
        </div>
        <div class="practice-attempt-list">
          <div><span>🧠 Mental Health</span><small>Timed</small><strong>82%</strong><b>Completed</b><a href="{{ '/mental-health/basics-quiz.html' | relative_url }}">Review</a></div>
          <div><span>💊 Pharmacology</span><small>Timed</small><strong>88%</strong><b>Completed</b><a href="{{ '/mental-health/medication-game.html' | relative_url }}">Review</a></div>
          <div><span>🫁 Respiratory</span><small>Untimed</small><strong>84%</strong><b>Completed</b><a href="{{ '/medical-emergencies/practice-quiz.html' | relative_url }}">Review</a></div>
          <div><span>🩺 Med-Surg</span><small>Timed</small><strong>—</strong><b class="in-progress">In progress</b><a href="{{ '/all-topics.html' | relative_url }}">Resume</a></div>
        </div>
      </section>

      <section class="practice-panel performance" id="performance" aria-labelledby="performance-title">
        <div class="practice-panel-heading">
          <h2 id="performance-title">⌁ Performance Overview</h2>
          <button type="button" disabled>This Month ⌄</button>
        </div>
        <div class="practice-score-ring" aria-label="Average score 81 percent">
          <span>81%</span>
          <small>Average Score</small>
        </div>
        <ul>
          <li><span>✓ Quizzes completed</span><strong>12</strong></li>
          <li><span>◎ Average score</span><strong>81%</strong></li>
          <li><span>🔥 Best score</span><strong>92%</strong></li>
          <li><span>▣ Study streak</span><strong>7 days</strong></li>
        </ul>
      </section>
    </div>

    <aside class="practice-tip">
      <span>💡</span>
      <p><strong>Tip:</strong> Use timed tests to simulate exam day, then save missed concepts to your review list.</p>
      <button type="button" aria-label="Dismiss tip">×</button>
    </aside>
  </div>
</section>
