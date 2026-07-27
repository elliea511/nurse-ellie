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

  .maternity-hub,
  .maternity-hub * {
    box-sizing: border-box;
  }

  .maternity-hub {
    --mat-ink: #10124a;
    --mat-muted: #65708f;
    --mat-pink: #f45b9b;
    --mat-pink-deep: #d7377e;
    --mat-pink-soft: #fff0f7;
    --mat-border: rgba(226, 150, 193, 0.42);
    --mat-shadow: 0 8px 20px rgba(39, 31, 78, 0.1);
    width: min(100% - 4rem, 1320px);
    margin: 0 auto;
    color: var(--mat-ink);
  }

  .maternity-hub .print-btn,
  .maternity-hub .confidence-bar {
    display: none !important;
  }

  .maternity-hub-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin: 0 0 2.2rem;
  }

  .maternity-hub-brandmark {
    display: grid;
    place-items: center;
    flex: 0 0 4.6rem;
    width: 4.6rem;
    height: 4.6rem;
    overflow: visible;
  }

  .maternity-hub-brandmark img,
  .maternity-topic-icon img,
  .maternity-center img,
  .maternity-guide-icon img,
  .maternity-nclex-link img {
    display: block;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    object-fit: contain;
  }

  .maternity-hub-brandmark img {
    width: 4.2rem;
    height: 4.2rem;
  }

  .maternity-hub-header h1 {
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    background: none !important;
    color: var(--mat-ink) !important;
    -webkit-text-fill-color: var(--mat-ink) !important;
    font-family: "Nunito", sans-serif !important;
    font-size: clamp(2.35rem, 3.35vw, 3.45rem) !important;
    font-weight: 900 !important;
    line-height: 1 !important;
    letter-spacing: 0;
    white-space: nowrap;
  }

  .maternity-hub-header p {
    margin: 0.28rem 0 0;
    color: var(--mat-pink);
    font-size: 1.12rem;
    font-weight: 800;
  }

  .maternity-hub-layout {
    display: grid;
    grid-template-columns: minmax(720px, 1fr) 320px;
    gap: 2.2rem;
    align-items: stretch;
  }

  .maternity-hub-main {
    min-width: 0;
  }

  .maternity-topic-orbit {
    position: relative;
    min-height: 700px;
  }

  .maternity-topic-orbit::before {
    content: "";
    position: absolute;
    inset: 10% 18%;
    border: 2px dashed rgba(244, 91, 155, 0.34);
    border-radius: 50%;
    pointer-events: none;
  }

  .maternity-orbit-connectors {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }

  .maternity-orbit-connectors line {
    fill: none;
    stroke: rgba(244, 91, 155, 0.56);
    stroke-width: 2;
    stroke-dasharray: 5 7;
    vector-effect: non-scaling-stroke;
  }

  .maternity-orbit-connectors circle {
    fill: var(--mat-pink);
  }

  .maternity-center {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    display: grid;
    place-items: center;
    width: 16rem;
    height: 19.5rem;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 20px 22px rgba(124, 49, 92, 0.14));
  }

  .maternity-center img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .maternity-topic-card {
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 0.85rem;
    width: clamp(150px, 24%, 245px);
    min-height: 76px;
    padding: 0.78rem 0.95rem;
    border: 1px solid rgba(225, 145, 190, 0.42);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: var(--mat-shadow);
    color: var(--mat-ink) !important;
    text-decoration: none !important;
    transform: translate(-50%, -50%);
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }

  .maternity-topic-card:hover,
  .maternity-topic-card:focus-visible {
    transform: translate(-50%, calc(-50% - 3px));
    border-color: rgba(244, 91, 155, 0.76);
    box-shadow: 0 13px 26px rgba(49, 33, 82, 0.14);
    outline: none;
  }

  .maternity-topic-icon {
    display: grid;
    place-items: center;
    flex: 0 0 3.2rem;
    width: 3.2rem;
    height: 3.2rem;
    overflow: hidden;
    border-radius: 50%;
    background: var(--mat-pink-soft);
  }

  .maternity-topic-icon img {
    width: 100%;
    height: 100%;
  }

  .maternity-topic-card strong,
  .maternity-topic-card small {
    display: block;
  }

  .maternity-topic-card strong {
    color: var(--mat-ink);
    font-size: 0.98rem;
    font-weight: 900;
    line-height: 1.16;
  }

  .maternity-topic-card small {
    margin-top: 0.22rem;
    color: var(--mat-muted);
    font-size: 0.72rem;
    font-weight: 750;
    line-height: 1.25;
  }

  .maternity-topic-antepartum { left: 50%; top: 8%; }
  .maternity-topic-intrapartum { left: 20%; top: 28%; }
  .maternity-topic-postpartum { left: 80%; top: 28%; }
  .maternity-topic-newborn { left: 15%; top: 52%; }
  .maternity-topic-ob-role { left: 85%; top: 52%; }
  .maternity-topic-ob-meds { left: 23%; top: 79%; }
  .maternity-topic-labs { left: 77%; top: 79%; }

  .maternity-hub-shortcuts {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .maternity-hub-shortcuts a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    min-height: 58px;
    padding: 0.7rem;
    border: 1px solid rgba(225, 145, 190, 0.38);
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 6px 16px rgba(39, 31, 78, 0.08);
    color: var(--mat-ink) !important;
    text-align: center;
    text-decoration: none !important;
    transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .maternity-hub-shortcuts a:hover,
  .maternity-hub-shortcuts a:focus-visible {
    transform: translateY(-2px);
    border-color: var(--mat-pink);
    box-shadow: 0 9px 20px rgba(49, 33, 82, 0.12);
    outline: none;
  }

  .maternity-hub-shortcuts img {
    flex: 0 0 2rem;
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }

  .maternity-hub-shortcuts strong {
    font-size: 0.82rem;
    font-weight: 900;
    line-height: 1.15;
  }

  .maternity-hub-guide {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    padding: 2.1rem 1.9rem;
    border: 1px solid rgba(225, 145, 190, 0.34);
    border-radius: 24px;
    background: linear-gradient(155deg, #fff, #fff8fb);
    box-shadow: 0 12px 30px rgba(39, 31, 78, 0.07);
  }

  .maternity-guide-icon {
    display: grid;
    place-items: center;
    width: 4.4rem;
    height: 4.4rem;
    margin: 0 auto 1rem;
    overflow: visible;
  }

  .maternity-guide-icon img {
    width: 3.7rem;
    height: 3.7rem;
  }

  .maternity-hub-guide h2 {
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    background: none !important;
    color: var(--mat-ink) !important;
    -webkit-text-fill-color: var(--mat-ink) !important;
    font-family: "Nunito", sans-serif !important;
    font-size: 1.55rem !important;
    font-weight: 900 !important;
    line-height: 1.2 !important;
    text-align: center;
  }

  .maternity-guide-rule {
    height: 1px;
    margin: 1.8rem 0;
    background: rgba(244, 91, 155, 0.22);
  }

  .maternity-hub-guide > p {
    margin: 0 0 0.7rem;
    color: var(--mat-ink);
    font-weight: 900;
  }

  .maternity-hub-guide ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .maternity-hub-guide li {
    display: grid;
    grid-template-columns: 1.35rem 1fr;
    align-items: center;
    gap: 0.75rem;
    margin: 0 0 0.8rem;
    color: var(--mat-ink);
    font-size: 0.93rem;
    font-weight: 750;
    line-height: 1.3;
  }

  .maternity-hub-guide li img {
    width: 1.35rem;
    height: 1.35rem;
    object-fit: contain;
  }

  .maternity-nclex-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 1.1rem 0;
    padding: 0.9rem;
    border: 1px solid rgba(226, 150, 193, 0.62);
    border-radius: 14px;
    background: var(--mat-pink-soft);
    color: #7a1f51 !important;
    text-decoration: none !important;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .maternity-nclex-link:hover,
  .maternity-nclex-link:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(124, 49, 92, 0.14);
    outline: 2px solid rgba(244, 91, 155, 0.45);
    outline-offset: 2px;
  }

  .maternity-nclex-link img {
    flex: 0 0 2.25rem;
    width: 2.25rem;
    height: 2.25rem;
  }

  .maternity-nclex-link strong,
  .maternity-nclex-link small {
    display: block;
    line-height: 1.2;
  }

  .maternity-nclex-link strong {
    font-size: 0.9rem;
  }

  .maternity-nclex-link small {
    margin-top: 0.18rem;
    color: #a12f67;
    font-size: 0.7rem;
    font-weight: 750;
  }

  .maternity-guide-tip {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-top: auto;
    padding: 1rem;
    border: 1px solid rgba(226, 150, 193, 0.48);
    border-radius: 15px;
    background: #fff6fa;
    color: #77315c;
    font-size: 0.9rem;
    font-weight: 800;
    line-height: 1.35;
  }

  .maternity-guide-tip img {
    flex: 0 0 1.85rem;
    width: 1.85rem;
    height: 1.85rem;
    object-fit: contain;
  }

  .maternity-quick-cues {
    scroll-margin-top: 7rem;
  }

  [data-theme="dark"] .maternity-hub {
    color: #efeaff;
  }

  [data-theme="dark"] .maternity-hub-header h1,
  [data-theme="dark"] .maternity-topic-card strong,
  [data-theme="dark"] .maternity-hub-guide h2,
  [data-theme="dark"] .maternity-hub-guide > p,
  [data-theme="dark"] .maternity-hub-guide li {
    color: #eef7ff !important;
    -webkit-text-fill-color: #eef7ff !important;
  }

  [data-theme="dark"] .maternity-topic-card,
  [data-theme="dark"] .maternity-hub-shortcuts a,
  [data-theme="dark"] .maternity-hub-guide {
    background: #242a3c;
    border-color: #45526c;
    color: #f2f6ff !important;
  }

  [data-theme="dark"] .maternity-topic-card small {
    color: #b5bfd1;
  }

  [data-theme="dark"] .maternity-nclex-link,
  [data-theme="dark"] .maternity-guide-tip {
    background: #302849;
    border-color: #544679;
    color: #eee8ff !important;
  }

  [data-theme="dark"] .maternity-nclex-link small {
    color: #f4b8d4;
  }

  @media (max-width: 1250px) {
    .maternity-hub {
      width: min(100% - 3rem, 1180px);
    }

    .maternity-hub-layout {
      grid-template-columns: minmax(0, 1fr) 245px;
      gap: 1.2rem;
    }

    .maternity-topic-orbit {
      min-height: 660px;
    }

    .maternity-center {
      width: 15rem;
      height: 18.3rem;
    }

    .maternity-topic-card {
      min-height: 70px;
      padding: 0.68rem 0.75rem;
      gap: 0.6rem;
    }

    .maternity-topic-icon {
      flex-basis: 2.65rem;
      width: 2.65rem;
      height: 2.65rem;
    }

    .maternity-topic-card strong {
      font-size: 0.86rem;
    }

    .maternity-topic-card small {
      display: none;
    }

    .maternity-hub-guide {
      padding: 1.6rem 1.3rem;
    }

    .maternity-hub-guide h2 {
      font-size: 1.3rem !important;
    }

    .maternity-hub-guide li {
      font-size: 0.84rem;
    }
  }

  @media (max-width: 980px) {
    .maternity-hub-layout {
      grid-template-columns: 1fr;
    }

    .maternity-hub-guide {
      width: min(100%, 740px);
      margin-inline: auto;
    }
  }

  @media (max-width: 740px) {
    body[data-page-type="maternity-hub"] .main-content {
      padding-top: 1.25rem !important;
    }

    .maternity-hub {
      width: min(100% - 1.5rem, 1540px);
    }

    .maternity-hub-header {
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }

    .maternity-hub-brandmark {
      flex-basis: 3.5rem;
      width: 3.5rem;
      height: 3.5rem;
    }

    .maternity-hub-brandmark img {
      width: 3.3rem;
      height: 3.3rem;
    }

    .maternity-hub-header h1 {
      white-space: normal;
      font-size: clamp(1.75rem, 8.5vw, 2.45rem) !important;
      line-height: 1.05 !important;
    }

    .maternity-hub-header p {
      font-size: 0.95rem;
    }

    .maternity-topic-orbit {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.7rem;
      min-height: 0;
    }

    .maternity-topic-orbit::before,
    .maternity-orbit-connectors {
      display: none;
    }

    .maternity-center {
      position: relative;
      top: auto;
      left: auto;
      grid-column: 1 / -1;
      width: min(16rem, 72vw);
      height: min(19.5rem, 84vw);
      margin: 0 auto 0.3rem;
      transform: none;
    }

    .maternity-topic-card,
    .maternity-topic-card:hover,
    .maternity-topic-card:focus-visible {
      position: relative;
      left: auto;
      top: auto;
      width: 100%;
      min-height: 70px;
      transform: none;
    }

    .maternity-topic-card strong {
      font-size: 0.8rem;
    }

    .maternity-hub-shortcuts {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 520px) {
    .maternity-topic-orbit {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .maternity-topic-card,
    .maternity-hub-shortcuts a,
    .maternity-nclex-link {
      transition: none;
    }

    .maternity-topic-card:hover,
    .maternity-topic-card:focus-visible,
    .maternity-hub-shortcuts a:hover,
    .maternity-hub-shortcuts a:focus-visible,
    .maternity-nclex-link:hover,
    .maternity-nclex-link:focus-visible {
      transform: translate(-50%, -50%);
    }

    @media (max-width: 740px) {
      .maternity-topic-card:hover,
      .maternity-topic-card:focus-visible {
        transform: none;
      }
    }
  }
</style>

<section class="maternity-hub" aria-labelledby="maternity-hub-title">
  <header class="maternity-hub-header">
    <div class="maternity-hub-brandmark" aria-hidden="true">
      <img src="{{ '/assets/images/maternity/icon-maternity-sidebar.png' | relative_url }}" alt="" data-no-lb>
    </div>
    <div>
      <h1 id="maternity-hub-title">Maternity Study Hub</h1>
      <p>Your simple hub for maternity nursing.</p>
    </div>
  </header>

  <div class="maternity-hub-layout">
    <div class="maternity-hub-main">
      <section class="maternity-topic-orbit" aria-label="Maternity study topics">
        <svg class="maternity-orbit-connectors" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
          <g>
            <line x1="500" y1="56" x2="500" y2="245"></line>
            <line x1="200" y1="196" x2="425" y2="294"></line>
            <line x1="800" y1="196" x2="575" y2="294"></line>
            <line x1="150" y1="364" x2="392" y2="350"></line>
            <line x1="850" y1="364" x2="608" y2="350"></line>
            <line x1="230" y1="553" x2="430" y2="445"></line>
            <line x1="770" y1="553" x2="570" y2="445"></line>
          </g>
          <g>
            <circle cx="500" cy="56" r="6"></circle>
            <circle cx="200" cy="196" r="6"></circle>
            <circle cx="800" cy="196" r="6"></circle>
            <circle cx="150" cy="364" r="6"></circle>
            <circle cx="850" cy="364" r="6"></circle>
            <circle cx="230" cy="553" r="6"></circle>
            <circle cx="770" cy="553" r="6"></circle>
          </g>
        </svg>

        <div class="maternity-center" aria-hidden="true">
          <img src="{{ '/assets/images/maternity/mother-baby-outline.png' | relative_url }}" alt="" data-no-lb>
        </div>

        <a class="maternity-topic-card maternity-topic-antepartum" href="{{ '/maternity/antepartum.html' | relative_url }}">
          <span class="maternity-topic-icon" aria-hidden="true"><img src="{{ '/assets/images/maternity/icon-antepartum.png' | relative_url }}" alt="" data-no-lb></span>
          <span><strong>Antepartum</strong><small>Prenatal assessment &amp; high-risk pregnancy care</small></span>
        </a>
        <a class="maternity-topic-card maternity-topic-intrapartum" href="{{ '/maternity/intrapartum.html' | relative_url }}">
          <span class="maternity-topic-icon" aria-hidden="true"><img src="{{ '/assets/images/maternity/icon-intrapartum.png' | relative_url }}" alt="" data-no-lb></span>
          <span><strong>Intrapartum</strong><small>Labor stages, fetal monitoring &amp; delivery priorities</small></span>
        </a>
        <a class="maternity-topic-card maternity-topic-postpartum" href="{{ '/maternity/postpartum.html' | relative_url }}">
          <span class="maternity-topic-icon" aria-hidden="true"><img src="{{ '/assets/images/maternity/icon-postpartum.png' | relative_url }}" alt="" data-no-lb></span>
          <span><strong>Postpartum</strong><small>Recovery, lochia &amp; postpartum complications</small></span>
        </a>
        <a class="maternity-topic-card maternity-topic-newborn" href="{{ '/maternity/newborn.html' | relative_url }}">
          <span class="maternity-topic-icon" aria-hidden="true"><img src="{{ '/assets/images/maternity/icon-newborn.png' | relative_url }}" alt="" data-no-lb></span>
          <span><strong>Newborn</strong><small>APGAR, thermoregulation, feeding &amp; jaundice</small></span>
        </a>
        <a class="maternity-topic-card maternity-topic-ob-role" href="{{ '/maternity/nurses-role-ob-ward.html' | relative_url }}">
          <span class="maternity-topic-icon" aria-hidden="true"><img src="{{ '/assets/images/maternity/icon-ob-role.png' | relative_url }}" alt="" data-no-lb></span>
          <span><strong>Nurse's Role on OB</strong><small>Triage, workflow &amp; unit responsibilities</small></span>
        </a>
        <a class="maternity-topic-card maternity-topic-ob-meds" href="{{ '/maternity/medications.html' | relative_url }}">
          <span class="maternity-topic-icon" aria-hidden="true"><img src="{{ '/assets/images/maternity/icon-ob-meds.png' | relative_url }}" alt="" data-no-lb></span>
          <span><strong>OB Medications</strong><small>Oxytocin, magnesium sulfate &amp; hemorrhage meds</small></span>
        </a>
        <a class="maternity-topic-card maternity-topic-labs" href="{{ '/maternity/maternity-labs.html' | relative_url }}">
          <span class="maternity-topic-icon" aria-hidden="true"><img src="{{ '/assets/images/maternity/icon-maternity-labs.png' | relative_url }}" alt="" data-no-lb></span>
          <span><strong>Maternity Labs</strong><small>Prenatal screening, Group B Strep &amp; key lab changes</small></span>
        </a>
      </section>

      <nav class="maternity-hub-shortcuts" aria-label="Maternity shortcuts">
        <a href="{{ '/all-topics.html' | relative_url }}">
          <img src="{{ '/assets/images/maternity/icon-maternity-sidebar.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb>
          <strong>Back to Nursing School Hub</strong>
        </a>
        <a href="{{ '/maternity.html#nclex-quick-cues' | relative_url }}">
          <img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb>
          <strong>NCLEX Quick Cues</strong>
        </a>
      </nav>
    </div>

    <aside class="maternity-hub-guide">
      <div class="maternity-guide-icon" aria-hidden="true">
        <img src="{{ '/assets/images/maternity/icon-maternity-sidebar.png' | relative_url }}" alt="" data-no-lb>
      </div>
      <h2>Select a topic<br>to open notes</h2>
      <div class="maternity-guide-rule"></div>
      <p>Study resources include:</p>
      <ul>
        <li><img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>Overview &amp; key concepts</span></li>
        <li><img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>Assessment &amp; nursing priorities</span></li>
        <li><img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>Safety interventions</span></li>
        <li><img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>Patient education</span></li>
        <li><img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>NCLEX tips &amp; memory cues</span></li>
      </ul>
      <a class="maternity-nclex-link" href="{{ '/maternity.html#nclex-quick-cues' | relative_url }}">
        <img src="{{ '/assets/images/maternity/icon-check-circle.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb>
        <span><strong>NCLEX Quick Cues</strong><small>Mnemonics &amp; priority rules</small></span>
      </a>
      <div class="maternity-guide-tip">
        <img src="{{ '/assets/images/maternity/icon-maternity-sidebar.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb>
        <span>Pick any topic around the mother and baby to get started.</span>
      </div>
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
