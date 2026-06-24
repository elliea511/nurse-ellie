---
layout: home
title: Nursing Notes
---

<main class="main-content homepage-vibrant">

  <!-- HERO SECTION -->
  <section class="hero-gradient">
    <h1>
      <span class="emoji">🩺</span> Nurse Ellie's Study Notes
    </h1>
    <p class="hero-desc">
      Nursing notes built for the way you actually study —
      organized by topic, easy to scan, and packed with the stuff that shows up on the NCLEX.<br>
      <span class="highlight">Less overwhelm. More confidence.</span>
    </p>
    <div class="hero-actions">
      <a href="#topics" class="hero-btn primary">Pick a Topic</a>
      <a href="{{ '/hematology-oncology/anemia-practice-quiz.html' | relative_url }}" class="hero-btn quiz">Practice Quiz</a>
      <a href="#quickstart" class="hero-btn outline">Quick Links</a>
    </div>
  </section>

  <!-- DASHBOARD -->
  <section class="quick-nav-card-row" id="topics">
    <div class="quicknav-card maternity">
      <a href="{{ '/maternity.html' | relative_url }}" title="Maternity">
        <span class="card-emoji">🤰</span>
        <span class="card-title">Maternity</span>
        <span class="card-desc">Pregnancy, birth, newborn, postpartum</span>
      </a>
    </div>
    <div class="quicknav-card hematology">
      <a href="{{ '/hematology-oncology.html' | relative_url }}">
        <span class="card-emoji">🩸</span>
        <span class="card-title">Hematology/Oncology</span>
        <span class="card-desc">Blood disorders, cancer, pediatric cancers</span>
      </a>
    </div>
    <div class="quicknav-card emergencies">
      <a href="{{ '/medical-emergencies.html' | relative_url }}">
        <span class="card-emoji">🚨</span>
        <span class="card-title">Emergencies</span>
        <span class="card-desc">Burns, urgent actions, triage skills</span>
      </a>
    </div>
    <div class="quicknav-card ati">
      <a href="{{ '/ati/' | relative_url }}">
        <span class="card-emoji">📚</span>
        <span class="card-title">ATI Study Guides</span>
        <span class="card-desc">Exam tricks, nutrition, review notes</span>
      </a>
    </div>
  </section>

  <!-- FEATURED / NEWS / MOTIVATION -->
  <section class="study-highlight">
    <div class="motivation-card">
      <span class="motiv-emoji">💡</span>
      <span class="motiv-msg">
        <strong>Tip of the Week:</strong> Study in short bursts and review memory tricks after practice questions for best recall!
      </span>
    </div>
    <div class="motivation-card">
      <span class="motiv-emoji">🧠</span>
      <span class="motiv-msg">
        <strong>Memory Trick:</strong> For GTPAL pregnancy terms, remember "<span style="color:#c060a0;font-weight:bold;">G</span>et <span style="color:#60a8d0;font-weight:bold;">T</span>hat <span style="color:#a9c060;font-weight:bold;">P</span>encil <span style="color:#f7b84b;font-weight:bold;">A</span>nd <span style="color:#66c84c;font-weight:bold;">L</span>earn!"
      </span>
    </div>
  </section>

  <!-- QUICKSTART -->
  <section class="big-action-row" id="quickstart">
    <a href="{{ '/maternity/antepartum.html' | relative_url }}" class="big-action maternity">
      <span class="big-emoji">🤰</span>
      <span>Review Antepartum Care</span>
    </a>
    <a href="{{ '/hematology-oncology/anemia-practice-quiz.html' | relative_url }}" class="big-action hematology">
      <span class="big-emoji">🩸</span>
      <span>Take Anemia Practice Quiz</span>
    </a>
    <a href="{{ '/ati/nutrition.html' | relative_url }}" class="big-action ati">
      <span class="big-emoji">📖</span>
      <span>ATI Nutrition Review</span>
    </a>
  </section>

</main>
