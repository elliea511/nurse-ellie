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
    </header>

    <section class="practice-topic-grid" id="practice-topics" aria-label="Practice topic cards">
      <article class="practice-test-card theme-purple">
        <span class="practice-card-icon">🧠</span>
        <div>
          <h2>Mental Health</h2>
          <p>Anxiety/OCD, depression, personality disorders, psychosis, abuse/suicide, eating disorders, addiction, somatic/dissociative, plus a med filter.</p>
          <div class="practice-meta"><span>▤ 317 Questions + Med Filter</span></div>
        </div>
        <footer><a href="{{ '/mental-health/practice-quiz.html' | relative_url }}">Start</a></footer>
      </article>

      <article class="practice-test-card theme-blue">
        <span class="practice-card-icon">⚕️</span>
        <div>
          <h2>Medical Emergencies</h2>
          <p>Cardiac, respiratory, neuro, trauma, environmental, and priority interventions.</p>
          <div class="practice-meta"><span>▤ Practice test</span></div>
        </div>
        <footer><a href="{{ '/medical-emergencies/practice-quiz.html' | relative_url }}">Start</a></footer>
      </article>

      <article class="practice-test-card theme-orange">
        <span class="practice-card-icon">🫘</span>
        <div>
          <h2>Renal System</h2>
          <p>Acute and chronic kidney disease, electrolyte emergencies, hemodialysis, peritoneal dialysis, glomerular and urinary disorders, procedures, and transplantation.</p>
          <div class="practice-meta"><span>▤ 50 Questions</span></div>
        </div>
        <footer><a href="{{ '/renal-urinary/renal-system-quiz.html' | relative_url }}">Start</a></footer>
      </article>

      <article class="practice-test-card theme-pink">
        <span class="practice-card-icon">🛡️</span>
        <div>
          <h2>Immune System</h2>
          <p>Lupus, rheumatoid arthritis, gout, immunosuppressive therapy, neutropenia, HIV/AIDS, opportunistic infections, anaphylaxis, transplant precautions, and infection prevention.</p>
          <div class="practice-meta"><span>▤ 52 Questions</span></div>
        </div>
        <footer><a href="{{ '/immune-inflammatory/immune-system-quiz.html' | relative_url }}">Start</a></footer>
      </article>

      <article class="practice-test-card theme-blue">
        <span class="practice-card-icon">👁️</span>
        <div>
          <h2>Sensory Perception</h2>
          <p>Glaucoma, cataracts, retinal disorders, eye emergencies, ophthalmic medications, hearing loss, Ménière disease, ototoxicity, ear care, aphasia, and neuropathy.</p>
          <div class="practice-meta"><span>▤ 56 Questions</span></div>
        </div>
        <footer><a href="{{ '/sensory-perception/sensory-perception-quiz.html' | relative_url }}">Start</a></footer>
      </article>
    </section>

    <div class="practice-lower-grid single-panel">
      <section class="practice-panel performance" id="performance" aria-labelledby="performance-title">
        <div class="practice-panel-heading">
          <h2 id="performance-title">⌁ Practice Snapshot</h2>
        </div>
        <div class="practice-score-ring" aria-label="Five practice tests">
          <span>5</span>
          <small>Practice Tests</small>
        </div>
        <ul>
          <li><span>✓ Practice tests</span><strong>5</strong></li>
          <li><span>◎ Mental Health questions</span><strong>317</strong></li>
          <li><span>🔥 Sections</span><strong>Mental Health, Medical Emergencies, Renal, Immune, Sensory</strong></li>
        </ul>
      </section>
    </div>

    <aside class="practice-tip">
      <span>💡</span>
      <p><strong>Tip:</strong> Mental Health now includes eight topic sets plus a Medication Questions filter that pulls med-related questions from every set.</p>
    </aside>
  </div>
</section>
