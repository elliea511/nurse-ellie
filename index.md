---
layout: default
title: Home
section: index
---

<div class="page-wrapper" data-section="index">

  <!-- LEFT SIDE: TITLE / INTRO -->
  <section class="cafe-sign">
    <h1>🩺 Nurse Ellie’s Study Lounge</h1>

    <p class="hero-desc">
      Simple nursing notes, practice questions, and quick review tools made for exam prep.
      <br>
      <span class="highlight">Organized by topic so you can study what you actually need.</span>
    </p>

    <div class="hero-actions">
      <a href="#quickstart" class="hero-btn primary">
        <i class="fas fa-bolt"></i> Start Studying
      </a>

      <a href="{{ '/maternity-practice-test.html' | relative_url }}" class="hero-btn quiz">
        <i class="fas fa-question-circle"></i> Practice Questions
      </a>
    </div>
  </section>


  <!-- RIGHT SIDE: STUDY MENU TILES -->
  <section class="hero-gradient" id="topics">

    <div class="cafe-menu-grid">

      <a href="{{ '/maternity.html' | relative_url }}" class="menu-item maternity" title="Maternity">
        <span class="card-emoji">🤰</span>
        <span class="card-title">Maternity</span>
        <span class="card-desc">Pregnancy, birth, postpartum, newborn care, OB meds, labs, and practice questions.</span>
      </a>

      <a href="{{ '/hematology-oncology.html' | relative_url }}" class="menu-item hematology" title="Hematology and Oncology">
        <span class="card-emoji">🩸</span>
        <span class="card-title">Hematology / Oncology</span>
        <span class="card-desc">Anemias, cancer care, oncologic emergencies, and high-yield review.</span>
      </a>

      <a href="{{ '/medical-emergencies.html' | relative_url }}" class="menu-item emergencies" title="Medical Emergencies">
        <span class="card-emoji">🚑</span>
        <span class="card-title">Medical Emergencies</span>
        <span class="card-desc">Burns, poisonings, shock, increased ICP, hydrocephalus, and priority interventions.</span>
      </a>

      <a href="{{ '/ati/' | relative_url }}" class="menu-item ati" title="ATI Study Guides">
        <span class="card-emoji">📚</span>
        <span class="card-title">ATI Study Guides</span>
        <span class="card-desc">Nutrition, exam review notes, and NCLEX-style study guides.</span>
      </a>

    </div>

  </section>

</div>


<!-- QUICKSTART SECTION -->
<section class="big-action-row" id="quickstart">

  <a href="{{ '/antepartum.html' | relative_url }}" class="big-action maternity">
    <span class="big-emoji">🤰</span>
    <span>Review Antepartum Care</span>
    <i class="fas fa-arrow-right"></i>
  </a>

  <a href="{{ '/anemia-practice-quiz.html' | relative_url }}" class="big-action hematology">
    <span class="big-emoji">🩸</span>
    <span>Take the Anemia Practice Quiz</span>
    <i class="fas fa-arrow-right"></i>
  </a>

  <a href="{{ '/ati/nutrition.html' | relative_url }}" class="big-action ati">
    <span class="big-emoji">📚</span>
    <span>Review ATI Nutrition</span>
    <i class="fas fa-arrow-right"></i>
  </a>

</section>
