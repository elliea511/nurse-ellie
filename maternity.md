---
layout: default
title: Maternity
page_type: maternity-hub
---

<style>
  body[data-page-type="maternity-hub"] {
    background:
      radial-gradient(circle at 15% 20%, rgba(244, 186, 215, 0.08), transparent 28rem),
      radial-gradient(circle at 85% 15%, rgba(191, 220, 255, 0.08), transparent 24rem),
      #fffefe !important;
  }

  body[data-page-type="maternity-hub"] .page-wrapper {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  body[data-page-type="maternity-hub"] .main-content {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 2.25rem 0 3rem !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
  }

  body[data-page-type="maternity-hub"] .font-controls {
    position: fixed !important;
    bottom: 1.25rem !important;
    left: 1.25rem !important;
    z-index: 500 !important;
    display: flex !important;
    gap: 4px !important;
  }

  body[data-page-type="maternity-hub"] .font-controls button {
    padding: 5px 11px !important;
    border: 1.5px solid var(--border) !important;
    border-radius: 999px !important;
    background: white !important;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08) !important;
    color: var(--muted) !important;
    font-family: "Nunito", sans-serif !important;
    font-size: 0.82rem !important;
    font-weight: 700 !important;
    line-height: 1 !important;
  }

  body[data-page-type="maternity-hub"] .dark-mode-toggle {
    position: fixed !important;
    right: 1.25rem !important;
    bottom: 8rem !important;
    z-index: 9000 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 2.4rem !important;
    height: 2.4rem !important;
    padding: 0 !important;
    border: 1.5px solid var(--border) !important;
    border-radius: 999px !important;
    background: var(--paper) !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12) !important;
    color: var(--ink) !important;
    font-size: 1.1rem !important;
  }

  body[data-page-type="maternity-hub"] #back-to-top,
  body[data-page-type="maternity-hub"] #hl-summary-btn,
  body[data-page-type="maternity-hub"] #hl-toolbar {
    display: none !important;
  }

  body[data-page-type="maternity-hub"] #hl-summary-overlay {
    position: fixed !important;
    inset: 0 !important;
    z-index: 9999 !important;
    display: none !important;
    align-items: center !important;
    justify-content: center !important;
    background: rgba(16, 18, 74, 0.35) !important;
  }

  body[data-page-type="maternity-hub"] #hl-summary-overlay.visible {
    display: flex !important;
  }

  body[data-page-type="maternity-hub"] #hl-summary-modal {
    width: min(34rem, calc(100vw - 2rem)) !important;
    max-height: min(75vh, 38rem) !important;
    overflow: hidden !important;
    border: 1px solid rgba(225, 145, 190, 0.42) !important;
    border-radius: 0.9rem !important;
    background: #fff !important;
    box-shadow: 0 20px 44px rgba(39, 31, 78, 0.22) !important;
  }

  body[data-page-type="maternity-hub"] #hl-summary-header {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 1rem !important;
    padding: 0.9rem 1rem !important;
    border-bottom: 1px solid rgba(225, 145, 190, 0.28) !important;
    color: #10124a !important;
    font-family: "Nunito", sans-serif !important;
    font-weight: 900 !important;
  }

  body[data-page-type="maternity-hub"] #hl-summary-body {
    max-height: calc(min(75vh, 38rem) - 4rem) !important;
    overflow: auto !important;
    padding: 1rem !important;
    color: #10124a !important;
  }

  body[data-page-type="maternity-hub"] #hl-summary-close {
    display: grid !important;
    place-items: center !important;
    width: 2rem !important;
    height: 2rem !important;
    border: 1px solid rgba(225, 145, 190, 0.42) !important;
    border-radius: 999px !important;
    background: #fff5fa !important;
    color: #10124a !important;
  }

  body[data-page-type="maternity-hub"] .mh-hub {
    padding: 0 2rem;
    color: #10124a;
  }

  body[data-page-type="maternity-hub"] .mh-hub .print-btn,
  body[data-page-type="maternity-hub"] .mh-hub .confidence-bar {
    display: none !important;
  }

  body[data-page-type="maternity-hub"] .mh-hub-header h1 {
    color: #10124a !important;
    -webkit-text-fill-color: #10124a !important;
    white-space: nowrap;
  }

  body[data-page-type="maternity-hub"] .mh-hub-header p {
    color: #f45b9b;
    font-weight: 800;
  }

  body[data-page-type="maternity-hub"] .mh-hub-brandmark img,
  body[data-page-type="maternity-hub"] .mh-brain-center img,
  body[data-page-type="maternity-hub"] .mh-guide-icon img,
  body[data-page-type="maternity-hub"] .mh-topic-icon img,
  body[data-page-type="maternity-hub"] .mh-hub-shortcuts img,
  body[data-page-type="maternity-hub"] .mh-nclex-link img,
  body[data-page-type="maternity-hub"] .mh-guide-tip img {
    display: block;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    object-fit: contain;
  }

  body[data-page-type="maternity-hub"] .mh-hub-brandmark img {
    width: 4.2rem;
    height: 4.2rem;
  }

  body[data-page-type="maternity-hub"] .mh-topic-orbit::before {
    border-color: rgba(244, 91, 155, 0.34);
  }

  body[data-page-type="maternity-hub"] .mh-connector-lines line {
    stroke: rgba(244, 91, 155, 0.56);
  }

  body[data-page-type="maternity-hub"] .mh-connector-dots circle {
    fill: #f45b9b;
  }

  body[data-page-type="maternity-hub"] .mh-brain-center {
    top: 51%;
    width: 19.5rem;
    height: 23.75rem;
    filter: drop-shadow(0 20px 22px rgba(124, 49, 92, 0.14));
  }

  body[data-page-type="maternity-hub"] .mh-brain-center img {
    width: 100%;
    height: 100%;
  }

  body[data-page-type="maternity-hub"] .mh-topic-card {
    border-color: rgba(225, 145, 190, 0.42);
    box-shadow: 0 8px 20px rgba(39, 31, 78, 0.1);
    color: #10124a !important;
  }

  body[data-page-type="maternity-hub"] .mh-topic-card:hover,
  body[data-page-type="maternity-hub"] .mh-topic-card:focus-visible {
    border-color: rgba(244, 91, 155, 0.76);
    box-shadow: 0 13px 26px rgba(49, 33, 82, 0.14);
  }

  body[data-page-type="maternity-hub"] .mh-topic-icon {
    overflow: hidden;
    background: #fff0f7;
  }

  body[data-page-type="maternity-hub"] .mh-topic-icon img {
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    max-height: none !important;
    object-fit: cover !important;
    transform: scale(1.85);
    transform-origin: center;
  }

  body[data-page-type="maternity-hub"] .mh-topic-card strong,
  body[data-page-type="maternity-hub"] .mh-hub-guide h2,
  body[data-page-type="maternity-hub"] .mh-hub-guide > p,
  body[data-page-type="maternity-hub"] .mh-hub-guide li {
    color: #10124a !important;
  }

  body[data-page-type="maternity-hub"] .mh-topic-card small {
    color: #65708f;
  }

  body[data-page-type="maternity-hub"] .mh-topic-orbit {
    min-height: 760px;
  }

  body[data-page-type="maternity-hub"] .mh-topic-7  { left: 50%; top: 9%; }
  body[data-page-type="maternity-hub"] .mh-topic-4  { left: 18%; top: 28%; }
  body[data-page-type="maternity-hub"] .mh-topic-5  { left: 13%; top: 52%; }
  body[data-page-type="maternity-hub"] .mh-topic-6  { left: 20%; top: 77%; }
  body[data-page-type="maternity-hub"] .mh-topic-8  { left: 82%; top: 28%; }
  body[data-page-type="maternity-hub"] .mh-topic-9  { left: 87%; top: 52%; }
  body[data-page-type="maternity-hub"] .mh-topic-10 { left: 80%; top: 77%; }

  body[data-page-type="maternity-hub"] .mh-hub-guide {
    border-color: rgba(225, 145, 190, 0.34);
    background: linear-gradient(155deg, #fff, #fff8fb);
  }

  body[data-page-type="maternity-hub"] .mh-guide-rule {
    background: rgba(244, 91, 155, 0.22);
  }

  body[data-page-type="maternity-hub"] .mh-hub-guide li::before {
    content: none;
  }

  body[data-page-type="maternity-hub"] .mh-hub-guide li {
    display: grid;
    grid-template-columns: 1.35rem 1fr;
    gap: 0.75rem;
    padding-left: 0;
  }

  body[data-page-type="maternity-hub"] .mh-hub-guide li img {
    width: 1.35rem;
    height: 1.35rem;
    object-fit: contain;
  }

  body[data-page-type="maternity-hub"] .mh-nclex-link {
    border-color: rgba(226, 150, 193, 0.62);
    background: #fff0f7;
    color: #7a1f51 !important;
  }

  body[data-page-type="maternity-hub"] .mh-nclex-link > span:first-child {
    background: #fff;
    color: #d7377e;
    overflow: hidden;
  }

  body[data-page-type="maternity-hub"] .mh-nclex-link > span:first-child img {
    width: 1.35rem;
    height: 1.35rem;
  }

  body[data-page-type="maternity-hub"] .mh-nclex-link small {
    color: #a12f67;
  }

  body[data-page-type="maternity-hub"] .mh-guide-tip {
    border-color: rgba(226, 150, 193, 0.48);
    background: #fff6fa;
    color: #77315c;
  }

  body[data-page-type="maternity-hub"] .mh-guide-tip img {
    flex: 0 0 1.85rem;
    width: 1.85rem;
    height: 1.85rem;
    object-fit: contain;
  }

  body[data-page-type="maternity-hub"] .mh-hub-shortcuts {
    grid-template-columns: minmax(0, 1fr);
  }

  body[data-page-type="maternity-hub"] .mh-hub-shortcuts a {
    border-color: rgba(225, 145, 190, 0.38);
    color: #10124a !important;
  }

  body[data-page-type="maternity-hub"] .mh-hub-shortcuts a:hover,
  body[data-page-type="maternity-hub"] .mh-hub-shortcuts a:focus-visible {
    border-color: #f45b9b;
  }

  body[data-page-type="maternity-hub"] .mh-hub-shortcuts a > span {
    background: #fff0f7;
    color: #d7377e;
    overflow: hidden;
  }

  body[data-page-type="maternity-hub"] .mh-hub-shortcuts a > span img {
    width: 1.35rem;
    height: 1.35rem;
  }

  .maternity-quick-cues {
    display: none;
    scroll-margin-top: 7rem;
  }

  [data-theme="dark"] body[data-page-type="maternity-hub"] .mh-hub,
  [data-theme="dark"] body[data-page-type="maternity-hub"] .mh-hub-header h1,
  [data-theme="dark"] body[data-page-type="maternity-hub"] .mh-topic-card strong,
  [data-theme="dark"] body[data-page-type="maternity-hub"] .mh-hub-guide h2,
  [data-theme="dark"] body[data-page-type="maternity-hub"] .mh-hub-guide > p,
  [data-theme="dark"] body[data-page-type="maternity-hub"] .mh-hub-guide li {
    color: #eef7ff !important;
    -webkit-text-fill-color: #eef7ff !important;
  }

  [data-theme="dark"] body[data-page-type="maternity-hub"] .mh-topic-card,
  [data-theme="dark"] body[data-page-type="maternity-hub"] .mh-hub-shortcuts a,
  [data-theme="dark"] body[data-page-type="maternity-hub"] .mh-hub-guide {
    background: #242a3c;
    border-color: #45526c;
    color: #f2f6ff !important;
  }

  [data-theme="dark"] body[data-page-type="maternity-hub"] .mh-topic-card small {
    color: #b5bfd1;
  }

  [data-theme="dark"] body[data-page-type="maternity-hub"] .mh-nclex-link,
  [data-theme="dark"] body[data-page-type="maternity-hub"] .mh-guide-tip {
    background: #302849;
    border-color: #544679;
    color: #eee8ff !important;
  }

  @media (max-width: 1250px) {
    body[data-page-type="maternity-hub"] .mh-brain-center {
      width: 18rem;
      height: 22rem;
    }
  }

  @media (max-width: 980px) {
    body[data-page-type="maternity-hub"] .mh-hub-layout {
      grid-template-columns: 1fr;
    }

    body[data-page-type="maternity-hub"] .mh-hub-guide {
      width: min(100%, 740px);
      margin-inline: auto;
    }
  }

  @media (max-width: 740px) {
    body[data-page-type="maternity-hub"] .mh-hub-header h1 {
      white-space: normal;
    }

    body[data-page-type="maternity-hub"] .mh-topic-orbit {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.7rem;
      min-height: 0;
    }

    body[data-page-type="maternity-hub"] .mh-topic-orbit::before,
    body[data-page-type="maternity-hub"] .mh-orbit-connectors {
      display: none;
    }

    body[data-page-type="maternity-hub"] .mh-brain-center {
      position: relative;
      top: auto;
      left: auto;
      grid-column: 1 / -1;
      width: min(16rem, 72vw);
      height: min(19.5rem, 84vw);
      margin: 0 auto 0.3rem;
      transform: none;
    }

    body[data-page-type="maternity-hub"] .mh-topic-orbit .mh-topic-card,
    body[data-page-type="maternity-hub"] .mh-topic-orbit .mh-topic-card:hover,
    body[data-page-type="maternity-hub"] .mh-topic-orbit .mh-topic-card:focus-visible {
      position: relative;
      left: auto;
      top: auto;
      width: 100%;
      min-height: 70px;
      transform: none;
    }

    body[data-page-type="maternity-hub"] .mh-hub-shortcuts {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 520px) {
    body[data-page-type="maternity-hub"] .mh-topic-orbit {
      grid-template-columns: 1fr;
    }
  }
</style>

<section class="mh-hub maternity-hub" aria-labelledby="maternity-hub-title">
  <header class="mh-hub-header">
    <div class="mh-hub-brandmark" aria-hidden="true"><img src="{{ '/assets/images/maternity/icon-maternity-sidebar.png' | relative_url }}" alt="" data-no-lb></div>
    <div>
      <h1 id="maternity-hub-title">Maternity Study Hub</h1>
      <p>Your simple hub for maternity nursing.</p>
    </div>
  </header>

  <div class="mh-hub-layout">
    <div class="mh-hub-main">
    <div class="mh-topic-orbit" aria-label="Maternity study topics">
      <svg class="mh-orbit-connectors" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
        <g class="mh-connector-lines">
          <line x1="500" y1="65" x2="500" y2="235"></line>
          <line x1="190" y1="190" x2="420" y2="285"></line>
          <line x1="140" y1="360" x2="390" y2="350"></line>
          <line x1="220" y1="560" x2="430" y2="445"></line>
          <line x1="810" y1="190" x2="580" y2="285"></line>
          <line x1="860" y1="360" x2="610" y2="350"></line>
          <line x1="780" y1="560" x2="570" y2="445"></line>
        </g>
        <g class="mh-connector-dots">
          <circle cx="500" cy="65" r="6"></circle>
          <circle cx="190" cy="190" r="6"></circle><circle cx="140" cy="360" r="6"></circle><circle cx="220" cy="560" r="6"></circle>
          <circle cx="810" cy="190" r="6"></circle><circle cx="860" cy="360" r="6"></circle><circle cx="780" cy="560" r="6"></circle>
        </g>
      </svg>

      <div class="mh-brain-center" aria-hidden="true">
        <img src="{{ '/assets/images/maternity/mother-baby-outline-corrected-transparent.png' | relative_url }}" alt="" data-no-lb>
      </div>

      <a class="mh-topic-card mh-topic-4" href="{{ '/maternity/intrapartum.html' | relative_url }}">
        <span class="mh-topic-icon"><img src="{{ '/assets/images/maternity/fetal_monitor_waveform_icon.png' | relative_url }}" alt="" data-no-lb></span><span><strong>Intrapartum</strong><small>Labor stages, fetal monitoring &amp; delivery priorities</small></span>
      </a>
      <a class="mh-topic-card mh-topic-5" href="{{ '/maternity/newborn.html' | relative_url }}">
        <span class="mh-topic-icon"><img src="{{ '/assets/images/maternity/mint_baby_in_sparkling_swaddle.png' | relative_url }}" alt="" data-no-lb></span><span><strong>Newborn</strong><small>APGAR, thermoregulation, feeding &amp; jaundice</small></span>
      </a>
      <a class="mh-topic-card mh-topic-6" href="{{ '/maternity/medications.html' | relative_url }}">
        <span class="mh-topic-icon"><img src="{{ '/assets/images/maternity/rose_pink_ob_medication_icon.png' | relative_url }}" alt="" data-no-lb></span><span><strong>OB Medications</strong><small>Oxytocin, magnesium sulfate &amp; hemorrhage meds</small></span>
      </a>
      <a class="mh-topic-card mh-topic-7" href="{{ '/maternity/antepartum.html' | relative_url }}">
        <span class="mh-topic-icon"><img src="{{ '/assets/images/maternity/prenatal_care_uterus_and_fetus_icon.png' | relative_url }}" alt="" data-no-lb></span><span><strong>Antepartum</strong><small>Prenatal assessment &amp; high-risk pregnancy care</small></span>
      </a>
      <a class="mh-topic-card mh-topic-8" href="{{ '/maternity/postpartum.html' | relative_url }}">
        <span class="mh-topic-icon"><img src="{{ '/assets/images/maternity/mother_cradling_sleeping_baby.png' | relative_url }}" alt="" data-no-lb></span><span><strong>Postpartum</strong><small>Recovery, lochia &amp; postpartum complications</small></span>
      </a>
      <a class="mh-topic-card mh-topic-9" href="{{ '/maternity/nurses-role-ob-ward.html' | relative_url }}">
        <span class="mh-topic-icon"><img src="{{ '/assets/images/maternity/clipboard_and_fetal_care_badge.png' | relative_url }}" alt="" data-no-lb></span><span><strong>Nurse's Role on OB</strong><small>Triage, workflow &amp; unit responsibilities</small></span>
      </a>
      <a class="mh-topic-card mh-topic-10" href="{{ '/maternity/maternity-labs.html' | relative_url }}">
        <span class="mh-topic-icon"><img src="{{ '/assets/images/maternity/lavender_chemistry_flask_badge.png' | relative_url }}" alt="" data-no-lb></span><span><strong>Maternity Labs</strong><small>Prenatal screening, Group B Strep &amp; key lab changes</small></span>
      </a>
    </div>

    <nav class="mh-hub-shortcuts" aria-label="Maternity resources">
      <a href="{{ '/all-topics.html' | relative_url }}"><span aria-hidden="true"><img src="{{ '/assets/images/maternity/icon-maternity-sidebar.png' | relative_url }}" alt="" data-no-lb></span><strong>Back to Nursing School Hub</strong></a>
    </nav>
    </div>

    <aside class="mh-hub-guide">
      <div class="mh-guide-icon" aria-hidden="true"><img src="{{ '/assets/images/maternity/icon-maternity-sidebar.png' | relative_url }}" alt="" data-no-lb></div>
      <h2>Select a topic<br>to open notes</h2>
      <div class="mh-guide-rule"></div>
      <p>Study resources include:</p>
      <ul>
        <li><img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>Overview &amp; key concepts</span></li>
        <li><img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>Assessment &amp; nursing priorities</span></li>
        <li><img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>Safety interventions</span></li>
        <li><img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>Patient education</span></li>
        <li><img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>NCLEX tips &amp; memory cues</span></li>
      </ul>
      <a class="mh-nclex-link" href="{{ '/maternity.html#nclex-quick-cues' | relative_url }}">
        <span aria-hidden="true"><img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" data-no-lb></span>
        <span><strong>NCLEX Quick Cues</strong><small>Mnemonics &amp; priority rules</small></span>
      </a>
      <div class="mh-guide-tip"><img src="{{ '/assets/images/maternity/icon-maternity-sidebar.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb> Pick any topic around the mother and baby to get started.</div>
    </aside>
  </div>
</section>

<section id="nclex-quick-cues" class="maternity-quick-cues" aria-labelledby="maternity-quick-cues-title">
  <h2 id="maternity-quick-cues-title">NCLEX Quick Cues</h2>
  <ul>
    <li>Severe headache, vision changes, RUQ pain, or sudden swelling can point toward preeclampsia.</li>
    <li>Late decelerations mean uteroplacental insufficiency: reposition, oxygen as ordered, stop oxytocin, and notify.</li>
    <li>Magnesium sulfate toxicity: absent reflexes, respiratory depression, and low urine output.</li>
    <li>Postpartum boggy uterus means massage first, then escalate if bleeding continues.</li>
    <li>Newborn cold stress can cause hypoglycemia and respiratory distress.</li>
  </ul>
</section>
