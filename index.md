<main class="main-content homepage-vibrant">

  <!-- HERO SECTION -->
  <section class="hero-gradient">
    <h1>
      <span class="emoji">🩺</span> Nurse Ellie’s Study Lounge
    </h1>

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

      <a href="#topics" class="hero-btn outline">
        <i class="fas fa-folder-open"></i> Browse Topics
      </a>
    </div>
  </section>


  <!-- TOPIC CARDS -->
  <section class="quick-nav-card-row" id="topics">

    <div class="quicknav-card maternity">
      <a href="{{ '/maternity.html' | relative_url }}" title="Maternity">
        <span class="card-emoji">🤰</span>
        <span class="card-title">Maternity</span>
        <span class="card-desc">Antepartum, intrapartum, postpartum, newborn, meds, labs, and practice questions.</span>
      </a>
    </div>

    <div class="quicknav-card hematology">
      <a href="{{ '/hematology-oncology.html' | relative_url }}" title="Hematology and Oncology">
        <span class="card-emoji">🩸</span>
        <span class="card-title">Hematology / Oncology</span>
        <span class="card-desc">Anemias, cancer care, oncologic emergencies, and high-yield review.</span>
      </a>
    </div>

    <div class="quicknav-card emergencies">
      <a href="{{ '/medical-emergencies.html' | relative_url }}" title="Medical Emergencies">
        <span class="card-emoji">🚑</span>
        <span class="card-title">Medical Emergencies</span>
        <span class="card-desc">Burns, poisonings, shock, increased ICP, hydrocephalus, and priority interventions.</span>
      </a>
    </div>

    <div class="quicknav-card ati">
      <a href="{{ '/ati/' | relative_url }}" title="ATI Study Guides">
        <span class="card-emoji">📚</span>
        <span class="card-title">ATI Study Guides</span>
        <span class="card-desc">Nutrition, exam review notes, and NCLEX-style study guides.</span>
      </a>
    </div>

  </section>


  <!-- STUDY REMINDERS -->
  <section class="study-highlight">

    <div class="motivation-card">
      <span class="motiv-emoji">💡</span>
      <span class="motiv-msg">
        <strong>Study Tip:</strong> Review one topic, answer practice questions, then go back and fix what you missed.
      </span>
    </div>

    <div class="motivation-card">
      <span class="motiv-emoji">📝</span>
      <span class="motiv-msg">
        <strong>Quick Reminder:</strong> Focus on priority actions, safety, expected findings, and what the nurse should do first.
      </span>
    </div>

  </section>


  <!-- QUICKSTART -->
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

</main>
```
