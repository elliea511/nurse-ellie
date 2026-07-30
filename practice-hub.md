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
      <article class="practice-test-card theme-orange practice-random-card">
        <span class="practice-card-icon">🎲</span>
        <div>
          <h2>Random Quiz</h2>
          <p>A random mix of questions pulled from every section. Choose how many and go.</p>
          <div class="practice-meta practice-random-controls">
            <label for="rand-n">Questions:</label>
            <input type="number" id="rand-n" class="rand-n-input" min="1" value="25" aria-label="Number of questions">
          </div>
        </div>
        <footer><a href="{{ '/random-quiz.html' | relative_url }}" id="rand-go">Generate</a></footer>
      </article>

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
          <div class="practice-meta"><span>▤ 278 Questions • 11 topics</span></div>
        </div>
        <footer><a href="{{ '/medical-emergencies/practice-quiz.html' | relative_url }}">Start</a></footer>
      </article>

      <article class="practice-test-card theme-orange">
        <span class="practice-card-icon">🫘</span>
        <div>
          <h2>Renal &amp; Urinary</h2>
          <p>Diagnostics and catheterization, UTI and pyelonephritis, kidney stones, glomerulonephritis, urinary surgery and diversions, acute and chronic renal failure, and dialysis and kidney transplant — pick your topics.</p>
          <div class="practice-meta"><span>▤ 105 Questions • 7 topics</span></div>
        </div>
        <footer><a href="{{ '/renal-urinary/practice-quiz.html' | relative_url }}">Start</a></footer>
      </article>

      <article class="practice-test-card theme-pink">
        <span class="practice-card-icon">🛡️</span>
        <div>
          <h2>Immune &amp; Inflammatory</h2>
          <p>HIV/AIDS, rheumatoid arthritis, osteoarthritis, gout, lupus, anti-inflammatory medications, DMARDs and biologics, and antimicrobials — pick your topics.</p>
          <div class="practice-meta"><span>▤ 115 Questions • 8 topics</span></div>
        </div>
        <footer><a href="{{ '/immune-inflammatory/practice-quiz.html' | relative_url }}">Start</a></footer>
      </article>

      <article class="practice-test-card theme-purple">
        <span class="practice-card-icon">🩸</span>
        <div>
          <h2>Hematology / Oncology</h2>
          <p>Anemias — iron-deficiency, pernicious, sickle cell, aplastic, and hemolytic — plus oncology: staging, chemotherapy, radiation, side effect management, and oncologic emergencies.</p>
          <div class="practice-meta"><span>▤ 146 Questions</span></div>
        </div>
        <footer><a href="{{ '/hematology-oncology/practice-quiz.html' | relative_url }}">Start</a></footer>
      </article>

      <article class="practice-test-card theme-pink">
        <span class="practice-card-icon">🤰</span>
        <div>
          <h2>Maternity / OB</h2>
          <p>Antepartum, intrapartum, postpartum, and newborn care — physiologic adaptations, labor and fetal monitoring, postpartum complications, and newborn assessment. Pick your topics.</p>
          <div class="practice-meta"><span>▤ 360 Questions • 4 topics</span></div>
        </div>
        <footer><a href="{{ '/maternity/practice-quiz.html' | relative_url }}">Start</a></footer>
      </article>

      <article class="practice-test-card theme-blue">
        <span class="practice-card-icon">👁️</span>
        <div>
          <h2>Sensory Perception</h2>
          <p>Eye disorders — visual acuity, cataracts, glaucoma, retinal detachment, eye trauma, and ophthalmic medications — and ear disorders — hearing loss, otosclerosis, otitis media, ototoxicity, and Ménière disease. Pick your topics.</p>
          <div class="practice-meta"><span>▤ 117 Questions • 2 topics</span></div>
        </div>
        <footer><a href="{{ '/sensory-perception/practice-quiz.html' | relative_url }}">Start</a></footer>
      </article>
    </section>

    <aside class="practice-tip">
      <span>💡</span>
      <p><strong>Tip:</strong> Mental Health now includes eight topic sets plus a Medication Questions filter that pulls med-related questions from every set.</p>
    </aside>
  </div>
</section>

<script>
(function () {
  var input = document.getElementById('rand-n');
  var go = document.getElementById('rand-go');
  if (!input || !go) return;
  var base = go.getAttribute('href');
  function update() {
    var n = parseInt(input.value, 10);
    go.setAttribute('href', base + (n > 0 ? ('?n=' + n) : ''));
  }
  input.addEventListener('input', update);
  update();
})();
</script>
