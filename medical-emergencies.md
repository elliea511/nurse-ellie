---
layout: default
title: Medical Emergencies
page_type: medical-emergencies-hub
---

<style>
  body[data-page-type="medical-emergencies-hub"] {
    background:
      radial-gradient(circle at 22% 20%, rgba(224, 28, 36, 0.045), transparent 25rem),
      radial-gradient(circle at 86% 18%, rgba(58, 86, 214, 0.035), transparent 24rem),
      #fffefe !important;
  }

  body[data-page-type="medical-emergencies-hub"] .page-wrapper {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  body[data-page-type="medical-emergencies-hub"] .main-content {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 2.25rem 0 3rem !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
  }

  body[data-page-type="medical-emergencies-hub"] .print-btn,
  body[data-page-type="medical-emergencies-hub"] .confidence-bar,
  body[data-page-type="medical-emergencies-hub"] #hl-toolbar,
  body[data-page-type="medical-emergencies-hub"] #hl-summary-btn,
  body[data-page-type="medical-emergencies-hub"] #hl-summary-overlay,
  body[data-page-type="medical-emergencies-hub"] #hl-summary-modal {
    display: none !important;
  }

  .emergency-hub,
  .emergency-hub * {
    box-sizing: border-box;
  }

  .emergency-hub {
    --em-ink: #071248;
    --em-muted: #4f5b7f;
    --em-red: #e01c24;
    --em-red-deep: #c70000;
    --em-red-soft: #fff1f1;
    --em-border: rgba(211, 28, 39, 0.24);
    --em-shadow: 0 12px 28px rgba(18, 25, 66, 0.1);
    width: min(100% - 4rem, 1360px);
    margin: 0 auto;
    color: var(--em-ink);
  }

  .emergency-hub img {
    display: block;
    margin: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    object-fit: contain;
  }

  .emergency-hub-header {
    display: flex;
    align-items: center;
    gap: 1.05rem;
    margin: 0 0 1.6rem;
  }

  .emergency-hub-header__icon {
    flex: 0 0 4.7rem;
    width: 4.7rem;
    height: 4.7rem;
  }

  .emergency-hub-header__text {
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .emergency-hub-header h1 {
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: none !important;
    box-shadow: none !important;
    color: var(--em-ink) !important;
    -webkit-text-fill-color: var(--em-ink) !important;
    font-family: "Playfair Display", Georgia, serif !important;
    font-size: clamp(2.45rem, 3.1vw, 3.45rem) !important;
    font-weight: 900 !important;
    line-height: 1 !important;
    letter-spacing: 0;
    white-space: nowrap;
  }

  .emergency-hub-header p {
    margin: 0.35rem 0 0;
    color: #3348d4;
    font-size: 1.16rem;
    font-weight: 850;
    line-height: 1.25;
  }

  .emergency-study-hub {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 310px;
    gap: 2.5rem;
    align-items: start;
  }

  .emergency-study-hub__diagram-section {
    min-width: 0;
  }

  .emergency-hub__diagram {
    position: relative;
    width: min(100%, 930px);
    height: 610px;
    margin-inline: auto;
  }

  .emergency-hub__orbit {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    width: 560px;
    height: 560px;
    transform: translate(-50%, -50%);
    border: 2px dashed rgba(218, 28, 40, 0.58);
    border-radius: 50%;
    pointer-events: none;
  }

  .emergency-hub__connectors {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: visible;
    pointer-events: none;
  }

  .emergency-hub__connectors line {
    fill: none;
    stroke: rgba(218, 28, 40, 0.62);
    stroke-width: 2;
    stroke-dasharray: 6 8;
    vector-effect: non-scaling-stroke;
  }

  .emergency-hub__center {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 51%;
    display: grid;
    place-items: center;
    width: 350px;
    transform: translate(-50%, -50%);
  }

  .emergency-hub__center-glow {
    position: absolute;
    inset: -0.9rem -0.3rem;
    z-index: -1;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(224, 28, 36, 0.09) 0 62%, transparent 63%);
  }

  .emergency-hub__center-image {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    opacity: 1;
    filter: none;
    mix-blend-mode: normal;
    border: 0;
    outline: 0;
    box-shadow: none;
    background: transparent;
  }

  .emergency-hub__cards {
    position: absolute;
    inset: 0;
    z-index: 3;
  }

  .emergency-topic-card {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 0.9rem;
    width: 250px;
    min-height: 82px;
    padding: 0.82rem 0.95rem;
    border: 1px solid rgba(174, 186, 213, 0.52);
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: var(--em-shadow);
    color: var(--em-ink) !important;
    text-decoration: none !important;
    transform: translate(-50%, -50%);
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }

  .emergency-topic-card:hover,
  .emergency-topic-card:focus-visible {
    transform: translate(-50%, calc(-50% - 3px));
    border-color: rgba(224, 28, 36, 0.55);
    box-shadow: 0 16px 32px rgba(18, 25, 66, 0.14);
    outline: 2px solid rgba(224, 28, 36, 0.2);
    outline-offset: 3px;
  }

  .emergency-topic-card__icon-wrap {
    display: grid;
    place-items: center;
    flex: 0 0 3.6rem;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    background: var(--topic-soft, #fff1f1);
  }

  .emergency-topic-card__icon {
    width: 2.95rem;
    height: 2.95rem;
  }

  .emergency-topic-card__title,
  .emergency-topic-card__description {
    display: block;
  }

  .emergency-topic-card__title {
    color: var(--topic-accent, var(--em-red));
    font-size: 0.98rem;
    font-weight: 900;
    line-height: 1.16;
  }

  .emergency-topic-card__description {
    margin-top: 0.24rem;
    color: var(--em-ink);
    font-size: 0.73rem;
    font-weight: 750;
    line-height: 1.27;
  }

  .emergency-topic-card--cardiac {
    --topic-accent: #e01c24;
    --topic-soft: #ffe9ea;
    top: 8%;
    left: 50%;
  }

  .emergency-topic-card--respiratory {
    --topic-accent: #4420d8;
    --topic-soft: #f0ecff;
    top: 28%;
    left: 18%;
  }

  .emergency-topic-card--neurological {
    --topic-accent: #ff5d18;
    --topic-soft: #fff0e8;
    top: 28%;
    left: 82%;
  }

  .emergency-topic-card--shock {
    --topic-accent: #078c55;
    --topic-soft: #e7f8ef;
    top: 52%;
    left: 16%;
  }

  .emergency-topic-card--preparedness {
    --topic-accent: #008c9a;
    --topic-soft: #e6f8f7;
    top: 52%;
    left: 84%;
    width: 280px;
  }

  .emergency-topic-card--poisoning {
    --topic-accent: #e01c24;
    --topic-soft: #fff0ef;
    top: 78%;
    left: 28%;
  }

  .emergency-topic-card--environmental {
    --topic-accent: #0b66e4;
    --topic-soft: #eaf3ff;
    top: 78%;
    left: 72%;
  }

  .emergency-study-hub__sidebar {
    display: flex;
    flex-direction: column;
    min-height: 560px;
    padding: 2.1rem 1.65rem 1.75rem;
    border: 1px solid var(--em-border);
    border-radius: 24px;
    background: linear-gradient(155deg, rgba(255, 255, 255, 0.98), #fffafa);
    box-shadow: 0 14px 34px rgba(18, 25, 66, 0.08);
  }

  .emergency-sidebar__icon {
    width: 4.2rem;
    height: 4.2rem;
    margin: 0 auto 1rem;
  }

  .emergency-study-hub__sidebar h2 {
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    background: none !important;
    color: var(--em-ink) !important;
    -webkit-text-fill-color: var(--em-ink) !important;
    font-family: "Nunito", sans-serif !important;
    font-size: 1.58rem !important;
    font-weight: 900 !important;
    line-height: 1.22 !important;
  }

  .emergency-sidebar__rule {
    height: 2px;
    margin: 1.7rem 0;
    background: var(--em-red);
  }

  .emergency-study-hub__sidebar > p {
    margin: 0 0 0.95rem;
    color: var(--em-ink);
    font-weight: 900;
  }

  .emergency-study-hub__sidebar ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .emergency-study-hub__sidebar li {
    display: grid;
    grid-template-columns: 1.45rem 1fr;
    align-items: center;
    gap: 0.75rem;
    margin: 0 0 0.92rem;
    color: var(--em-ink);
    font-size: 0.93rem;
    font-weight: 800;
    line-height: 1.32;
  }

  .emergency-study-hub__sidebar li img {
    width: 1.45rem;
    height: 1.45rem;
  }

  .emergency-guide-tip {
    display: flex;
    align-items: center;
    gap: 0.72rem;
    margin-top: auto;
    padding: 0.95rem;
    border: 1px solid rgba(224, 28, 36, 0.22);
    border-radius: 14px;
    background: #fff8f8;
    color: #29345f;
    font-size: 0.88rem;
    font-weight: 800;
    line-height: 1.35;
  }

  .emergency-guide-tip img {
    flex: 0 0 2rem;
    width: 2rem;
    height: 2rem;
  }

  [data-theme="dark"] body[data-page-type="medical-emergencies-hub"] {
    background: #161b28 !important;
  }

  [data-theme="dark"] .emergency-hub,
  [data-theme="dark"] .emergency-hub-header h1,
  [data-theme="dark"] .emergency-topic-card__description,
  [data-theme="dark"] .emergency-study-hub__sidebar h2,
  [data-theme="dark"] .emergency-study-hub__sidebar > p,
  [data-theme="dark"] .emergency-study-hub__sidebar li {
    color: #eef4ff !important;
    -webkit-text-fill-color: #eef4ff !important;
  }

  [data-theme="dark"] .emergency-hub-header p {
    color: #c4cbea;
  }

  [data-theme="dark"] .emergency-topic-card,
  [data-theme="dark"] .emergency-study-hub__sidebar,
  [data-theme="dark"] .emergency-guide-tip {
    background: #242a3c;
    border-color: #44516c;
    color: #eef4ff !important;
  }

  [data-theme="dark"] .emergency-topic-card__icon-wrap {
    background: rgba(255, 255, 255, 0.08);
  }

  [data-theme="dark"] .emergency-hub__orbit,
  [data-theme="dark"] .emergency-hub__connectors line {
    border-color: rgba(255, 100, 104, 0.48);
    stroke: rgba(255, 100, 104, 0.48);
  }

  @media (max-width: 1220px) {
    .emergency-hub {
      width: min(100% - 3rem, 1180px);
    }

    .emergency-study-hub {
      grid-template-columns: minmax(0, 1fr) 275px;
      gap: 1.4rem;
    }

    .emergency-hub__diagram {
      height: 590px;
    }

    .emergency-hub__orbit {
      width: 530px;
      height: 530px;
    }

    .emergency-hub__center {
      width: 320px;
    }

    .emergency-topic-card {
      width: 220px;
      min-height: 76px;
      gap: 0.65rem;
      padding: 0.72rem 0.75rem;
    }

    .emergency-topic-card--preparedness {
      width: 240px;
    }

    .emergency-topic-card__icon-wrap {
      flex-basis: 3rem;
      width: 3rem;
      height: 3rem;
    }

    .emergency-topic-card__icon {
      width: 2.45rem;
      height: 2.45rem;
    }

    .emergency-topic-card__title {
      font-size: 0.86rem;
    }

    .emergency-topic-card__description {
      font-size: 0.68rem;
    }
  }

  @media (max-width: 1100px) {
    .emergency-study-hub {
      grid-template-columns: 1fr;
    }

    .emergency-study-hub__sidebar {
      width: min(100%, 740px);
      min-height: 0;
      margin-inline: auto;
    }

  }

  @media (max-width: 760px) {
    body[data-page-type="medical-emergencies-hub"] .main-content {
      padding-top: 1.25rem !important;
    }

    .emergency-hub {
      width: min(100% - 1.5rem, 1540px);
    }

    .emergency-hub-header {
      align-items: flex-start;
      margin-bottom: 1.35rem;
    }

    .emergency-hub-header__icon {
      flex-basis: 3.55rem;
      width: 3.55rem;
      height: 3.55rem;
    }

    .emergency-hub-header h1 {
      white-space: normal;
      font-size: clamp(1.8rem, 8.2vw, 2.45rem) !important;
      line-height: 1.05 !important;
    }

    .emergency-hub-header p {
      font-size: 0.95rem;
    }

    .emergency-hub__diagram {
      display: flex;
      flex-direction: column;
      height: auto;
    }

    .emergency-hub__orbit,
    .emergency-hub__connectors {
      display: none;
    }

    .emergency-hub__center {
      position: relative;
      inset: auto;
      order: 1;
      width: min(84vw, 360px);
      margin: 0.5rem auto 1.2rem;
      transform: none;
    }

    .emergency-hub__cards {
      position: static;
      order: 2;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.8rem;
    }

    .emergency-topic-card,
    .emergency-topic-card:hover,
    .emergency-topic-card:focus-visible,
    .emergency-topic-card--cardiac,
    .emergency-topic-card--environmental {
      position: relative;
      inset: auto;
      width: 100%;
      min-height: 78px;
      transform: none;
    }

    .emergency-topic-card__title {
      font-size: 0.84rem;
    }

    .emergency-topic-card__description {
      display: none;
    }

  }

  @media (max-width: 520px) {
    .emergency-hub__cards {
      grid-template-columns: 1fr;
    }

    .emergency-study-hub__sidebar {
      padding: 1.6rem 1.15rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .emergency-topic-card {
      transition: none;
    }
  }
</style>

<section class="emergency-hub" aria-labelledby="emergency-hub-title">
  <header class="emergency-hub-header">
    <img
      class="emergency-hub-header__icon"
      src="{{ '/assets/images/medical-emergencies/emergency-heart-cross-icon.png' | relative_url }}"
      alt=""
      aria-hidden="true"
      data-no-lb
    >

    <div class="emergency-hub-header__text">
      <h1 id="emergency-hub-title">Medical Emergencies Study Hub</h1>
      <p>Your simple hub for emergency nursing.</p>
    </div>
  </header>

  <div class="emergency-study-hub">
    <section class="emergency-study-hub__diagram-section" aria-label="Medical emergency study topics">
      <div class="emergency-hub__diagram">
        <div class="emergency-hub__orbit" aria-hidden="true"></div>

        <svg class="emergency-hub__connectors" viewBox="0 0 930 690" preserveAspectRatio="none" aria-hidden="true">
          <line x1="465" y1="55" x2="465" y2="232"></line>
          <line x1="167" y1="193" x2="392" y2="292"></line>
          <line x1="763" y1="193" x2="538" y2="292"></line>
          <line x1="149" y1="359" x2="382" y2="350"></line>
          <line x1="781" y1="359" x2="548" y2="350"></line>
          <line x1="260" y1="538" x2="402" y2="445"></line>
          <line x1="670" y1="538" x2="528" y2="445"></line>
        </svg>

        <div class="emergency-hub__center">
          <div class="emergency-hub__center-glow" aria-hidden="true"></div>
          <img
            class="emergency-hub__center-image"
            src="{{ '/assets/images/medical-emergencies/emergency-cpr-center.png' | relative_url }}"
            alt="Nurse performing chest compressions on an adult patient"
            data-no-lb
          >
        </div>

        <div class="emergency-hub__cards">
          <a class="emergency-topic-card emergency-topic-card--cardiac" href="{{ '/medical-emergencies/cardiac-perfusion.html' | relative_url }}">
            <span class="emergency-topic-card__icon-wrap" aria-hidden="true">
              <img class="emergency-topic-card__icon" src="{{ '/assets/images/medical-emergencies/emergency-cardiac-icon.png' | relative_url }}" alt="" data-no-lb>
            </span>
            <span class="emergency-topic-card__content">
              <span class="emergency-topic-card__title">Cardiac &amp; Perfusion Emergencies</span>
              <span class="emergency-topic-card__description">Angina, MI, CHF, hypertensive crisis &amp; hemorrhage.</span>
            </span>
          </a>

          <a class="emergency-topic-card emergency-topic-card--respiratory" href="{{ '/medical-emergencies/respiratory.html' | relative_url }}">
            <span class="emergency-topic-card__icon-wrap" aria-hidden="true">
              <img class="emergency-topic-card__icon" src="{{ '/assets/images/medical-emergencies/emergency-respiratory-icon.png' | relative_url }}" alt="" data-no-lb>
            </span>
            <span class="emergency-topic-card__content">
              <span class="emergency-topic-card__title">Respiratory Emergencies</span>
              <span class="emergency-topic-card__description">PE, anaphylaxis, pneumothorax, airway obstruction &amp; aspiration.</span>
            </span>
          </a>

          <a class="emergency-topic-card emergency-topic-card--neurological" href="{{ '/medical-emergencies/neurological.html' | relative_url }}">
            <span class="emergency-topic-card__icon-wrap" aria-hidden="true">
              <img class="emergency-topic-card__icon" src="{{ '/assets/images/medical-emergencies/emergency-neurological-icon.png' | relative_url }}" alt="" data-no-lb>
            </span>
            <span class="emergency-topic-card__content">
              <span class="emergency-topic-card__title">Neurological Emergencies</span>
              <span class="emergency-topic-card__description">TIA, stroke, increased ICP &amp; hydrocephalus.</span>
            </span>
          </a>

          <a class="emergency-topic-card emergency-topic-card--shock" href="{{ '/medical-emergencies/shock.html' | relative_url }}">
            <span class="emergency-topic-card__icon-wrap" aria-hidden="true">
              <img class="emergency-topic-card__icon" src="{{ '/assets/images/medical-emergencies/emergency-shock-icon.png' | relative_url }}" alt="" data-no-lb>
            </span>
            <span class="emergency-topic-card__content">
              <span class="emergency-topic-card__title">Shock</span>
              <span class="emergency-topic-card__description">Hypovolemic, cardiogenic, septic, neurogenic, anaphylactic &amp; obstructive shock.</span>
            </span>
          </a>

          <a class="emergency-topic-card emergency-topic-card--preparedness" href="{{ '/medical-emergencies/emergencies-prep.html' | relative_url }}">
            <span class="emergency-topic-card__icon-wrap" aria-hidden="true">
              <img class="emergency-topic-card__icon" src="{{ '/assets/images/medical-emergencies/emergency-preparedness-icon.png' | relative_url }}" alt="" data-no-lb>
            </span>
            <span class="emergency-topic-card__content">
              <span class="emergency-topic-card__title">Emergency Preparedness &amp; Crisis Intervention</span>
              <span class="emergency-topic-card__description">ED basics, triage, disaster planning, hazmat &amp; crisis care.</span>
            </span>
          </a>

          <a class="emergency-topic-card emergency-topic-card--poisoning" href="{{ '/medical-emergencies/poisoning-and-ingestions.html' | relative_url }}">
            <span class="emergency-topic-card__icon-wrap" aria-hidden="true">
              <img class="emergency-topic-card__icon" src="{{ '/assets/images/medical-emergencies/emergency-poisoning-icon.png' | relative_url }}" alt="" data-no-lb>
            </span>
            <span class="emergency-topic-card__content">
              <span class="emergency-topic-card__title">Poisoning &amp; Ingestions</span>
              <span class="emergency-topic-card__description">Acetaminophen, salicylates, corrosives, lead &amp; button batteries.</span>
            </span>
          </a>

          <a class="emergency-topic-card emergency-topic-card--environmental" href="{{ '/medical-emergencies/environmental.html' | relative_url }}">
            <span class="emergency-topic-card__icon-wrap" aria-hidden="true">
              <img class="emergency-topic-card__icon" src="{{ '/assets/images/medical-emergencies/emergency-environmental-icon.png' | relative_url }}" alt="" data-no-lb>
            </span>
            <span class="emergency-topic-card__content">
              <span class="emergency-topic-card__title">Environmental Emergencies</span>
              <span class="emergency-topic-card__description">Heat exhaustion, cold injury, drowning, bites &amp; stings.</span>
            </span>
          </a>
        </div>
      </div>

    </section>

    <aside class="emergency-study-hub__sidebar">
      <img class="emergency-sidebar__icon" src="{{ '/assets/images/medical-emergencies/emergency-heart-cross-icon.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb>
      <h2>Select a category<br>to open notes</h2>
      <div class="emergency-sidebar__rule" aria-hidden="true"></div>
      <p>Study resources include:</p>
      <ul>
        <li><img src="{{ '/assets/images/medical-emergencies/emergency-check-icon.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb>Assessment &amp; key concepts</li>
        <li><img src="{{ '/assets/images/medical-emergencies/emergency-check-icon.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb>Priorities &amp; interventions</li>
        <li><img src="{{ '/assets/images/medical-emergencies/emergency-check-icon.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb>Critical safety actions</li>
        <li><img src="{{ '/assets/images/medical-emergencies/emergency-check-icon.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb>Patient education</li>
        <li><img src="{{ '/assets/images/medical-emergencies/emergency-check-icon.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb>Priority cues &amp; memory tips</li>
      </ul>
      <div class="emergency-guide-tip">
        <img src="{{ '/assets/images/medical-emergencies/emergency-heart-cross-icon.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb>
        Pick any emergency category around the CPR scene to get started.
      </div>
    </aside>
  </div>
</section>
