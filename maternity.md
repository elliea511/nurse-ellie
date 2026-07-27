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
    padding: 1.35rem 0 2rem !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
  }

  .maternity-study-page,
  .maternity-study-page * {
    box-sizing: border-box;
  }

  .maternity-study-page {
    --mat-navy: #10124a;
    --mat-ink: #161850;
    --mat-muted: #65708f;
    --mat-rose: #f45b9b;
    --mat-rose-deep: #d7377e;
    --mat-rose-soft: #fff0f7;
    --mat-border: rgba(226, 150, 193, 0.42);
    --mat-shadow: 0 10px 24px rgba(39, 31, 78, 0.08);
    width: min(100%, 1320px);
    margin: 0 auto;
    padding: 0 2rem 2rem;
    color: var(--mat-ink);
  }

  .maternity-study-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    width: min(100%, 1320px);
    margin: 0 auto 1.25rem;
    padding: 0;
  }

  .maternity-study-header__icon {
    width: 56px;
    height: 56px;
    object-fit: contain;
    flex: 0 0 auto;
    margin-top: 0.25rem;
    filter: none;
  }

  .maternity-study-header > div {
    min-width: 0;
  }

  .maternity-study-header h1 {
    display: block !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: none !important;
    box-shadow: none !important;
    color: var(--mat-navy) !important;
    -webkit-text-fill-color: var(--mat-navy) !important;
    font-family: "Playfair Display", Georgia, serif !important;
    font-size: clamp(3rem, 4.8vw, 5.2rem) !important;
    font-weight: 800 !important;
    line-height: 0.98 !important;
    letter-spacing: -0.04em;
    white-space: nowrap;
    overflow: visible !important;
  }

  .maternity-study-header p {
    margin: 0.55rem 0 0;
    color: var(--mat-rose);
    font-size: 1.1rem;
    font-weight: 800;
  }

  .maternity-study-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 2.25rem;
    align-items: start;
  }

  .maternity-study-diagram {
    position: relative;
    width: min(100%, 860px);
    height: 660px;
    margin-inline: auto;
  }

  .maternity-study-diagram::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 610px;
    height: 610px;
    transform: translate(-50%, -50%);
    border: 2px dashed rgba(230, 109, 171, 0.42);
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;
  }

  .maternity-connector {
    position: absolute;
    z-index: 1;
    width: var(--line-width, 170px);
    height: 2px;
    border-top: 2px dashed rgba(244, 91, 155, 0.48);
    transform: rotate(var(--line-angle, 0deg));
    transform-origin: left center;
    pointer-events: none;
  }

  .maternity-connector::after {
    content: "";
    position: absolute;
    top: -5px;
    right: -3px;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--mat-rose);
    box-shadow: 0 0 0 5px rgba(244, 91, 155, 0.1);
  }

  .maternity-connector--top { left: 49.5%; top: 18%; --line-width: 90px; --line-angle: 90deg; }
  .maternity-connector--upper-left { left: 28%; top: 37%; --line-width: 148px; --line-angle: 16deg; }
  .maternity-connector--upper-right { left: 60%; top: 37%; --line-width: 148px; --line-angle: -16deg; }
  .maternity-connector--middle-left { left: 28%; top: 61%; --line-width: 140px; --line-angle: -8deg; }
  .maternity-connector--middle-right { left: 60%; top: 61%; --line-width: 140px; --line-angle: 8deg; }
  .maternity-connector--bottom-left { left: 42%; top: 76%; --line-width: 96px; --line-angle: -58deg; }
  .maternity-connector--bottom-right { left: 55%; top: 76%; --line-width: 96px; --line-angle: -122deg; }

  .maternity-hub__center {
    position: absolute;
    left: 50%;
    top: 51%;
    z-index: 3;
    width: clamp(245px, 30%, 320px);
    transform: translate(-50%, -50%);
  }

  .maternity-hub__center-glow {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 360px;
    height: 430px;
    transform: translate(-50%, -50%);
    z-index: 1;
    border: 1px solid rgba(225, 134, 184, 0.16);
    border-radius: 50%;
    background: rgba(241, 184, 215, 0.13);
  }

  .maternity-hub__center-image {
    position: relative;
    z-index: 2;
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    opacity: 1;
    filter: none;
  }

  .maternity-topic-card {
    position: absolute;
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 0.85rem;
    width: 245px;
    min-height: 86px;
    padding: 0.9rem 1rem;
    border: 1px solid rgba(225, 145, 190, 0.35);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: var(--mat-shadow);
    color: inherit;
    text-decoration: none;
    transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
  }

  .maternity-topic-card:hover {
    transform: translateY(-3px);
    border-color: rgba(244, 91, 155, 0.72);
    box-shadow: 0 18px 34px rgba(49, 33, 82, 0.14);
  }

  .maternity-topic-card:focus-visible {
    outline: 3px solid rgba(216, 74, 148, 0.35);
    outline-offset: 3px;
  }

  .maternity-topic-card__icon-wrap {
    display: grid;
    place-items: center;
    flex: 0 0 54px;
    width: 54px;
    height: 54px;
    overflow: hidden;
    border-radius: 50%;
    background: var(--mat-rose-soft);
  }

  .maternity-topic-card__icon {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .maternity-topic-card__title {
    display: block;
    color: var(--mat-navy);
    font-weight: 800;
    font-size: 1rem;
    line-height: 1.15;
  }

  .maternity-topic-card__description {
    display: block;
    margin-top: 0.24rem;
    color: var(--mat-muted);
    font-size: 0.74rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .maternity-topic-card--antepartum {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .maternity-topic-card--antepartum:hover {
    transform: translateX(-50%) translateY(-3px);
  }

  .maternity-topic-card--intrapartum { top: 180px; left: 0; }
  .maternity-topic-card--postpartum { top: 180px; right: 0; }
  .maternity-topic-card--newborn { top: 405px; left: 0; }
  .maternity-topic-card--nurses-role { top: 405px; right: 0; width: 255px; }
  .maternity-topic-card--medications { bottom: 0; left: 145px; }
  .maternity-topic-card--labs { bottom: 0; right: 145px; }

  .maternity-back-link {
    position: absolute;
    left: 50%;
    bottom: -3.65rem;
    z-index: 5;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    width: min(360px, 72%);
    min-height: 58px;
    padding: 0.8rem 1.25rem;
    border: 1px solid rgba(226, 150, 193, 0.55);
    border-radius: 17px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 10px 24px rgba(49, 33, 82, 0.08);
    color: var(--mat-navy);
    font-weight: 900;
    text-decoration: none;
    transform: translateX(-50%);
  }

  .maternity-back-link:hover {
    border-color: rgba(244, 91, 155, 0.65);
    color: var(--mat-rose-deep);
  }

  .maternity-sidebar {
    position: sticky;
    top: 5.25rem;
    align-self: start;
    min-height: 610px;
    padding: 2rem 1.75rem;
    border: 1px solid rgba(225, 145, 190, 0.3);
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 12px 32px rgba(39, 31, 78, 0.07);
  }

  .maternity-sidebar__icon {
    display: block;
    width: 58px;
    height: 58px;
    margin: 0 auto;
    object-fit: contain;
  }

  .maternity-sidebar h2 {
    margin: 1.2rem 0 1.6rem !important;
    padding: 0 !important;
    border: 0 !important;
    background: none !important;
    box-shadow: none !important;
    color: var(--mat-navy) !important;
    -webkit-text-fill-color: var(--mat-navy) !important;
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: 900;
    line-height: 1.2;
    text-align: center;
  }

  .maternity-sidebar__rule {
    width: 100%;
    height: 1px;
    margin: 0 0 1.45rem;
    background: rgba(244, 91, 155, 0.22);
  }

  .maternity-sidebar p {
    margin: 0 0 1.1rem;
    color: var(--mat-navy);
    font-weight: 900;
  }

  .maternity-sidebar ul {
    display: grid;
    gap: 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .maternity-sidebar li {
    display: grid;
    grid-template-columns: 24px 1fr;
    align-items: center;
    gap: 0.7rem;
    color: var(--mat-navy);
    font-size: 0.93rem;
    font-weight: 650;
    line-height: 1.35;
  }

  .maternity-sidebar li img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    flex: 0 0 auto;
  }

  .maternity-quick-link {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    margin-top: 1.5rem;
    padding: 0.9rem;
    border: 1px solid rgba(226, 150, 193, 0.62);
    border-radius: 18px;
    background: #fff1f7;
    color: var(--mat-rose-deep);
    text-decoration: none;
  }

  .maternity-quick-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 22px rgba(124, 49, 92, 0.12);
  }

  .maternity-quick-link:focus-visible,
  .maternity-back-link:focus-visible {
    outline: 3px solid rgba(216, 74, 148, 0.35);
    outline-offset: 3px;
  }

  .maternity-quick-link img {
    width: 34px;
    height: 34px;
    object-fit: contain;
    flex: 0 0 auto;
  }

  .maternity-quick-link strong,
  .maternity-quick-link small {
    display: block;
  }

  .maternity-quick-link small {
    margin-top: 0.15rem;
    color: #a12f67;
    font-weight: 750;
  }

  .maternity-sidebar__tip {
    display: flex;
    gap: 0.7rem;
    margin-top: 1rem;
    padding: 0.9rem;
    border: 1px solid rgba(226, 150, 193, 0.48);
    border-radius: 16px;
    background: rgba(255, 246, 250, 0.92);
    color: #77315c;
    font-weight: 800;
    line-height: 1.45;
  }

  .maternity-quick-cues {
    width: min(100% - 3rem, 980px);
    margin: 5rem auto 0;
    padding: 1.35rem;
    scroll-margin-top: 7rem;
    border: 1px solid rgba(226, 150, 193, 0.54);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 10px 26px rgba(49, 33, 82, 0.07);
  }

  .maternity-quick-cues h2 {
    margin: 0 0 0.75rem !important;
    padding: 0 !important;
    border: 0 !important;
    background: transparent !important;
    color: var(--mat-navy) !important;
    -webkit-text-fill-color: var(--mat-navy) !important;
    font-family: "Playfair Display", Georgia, serif !important;
    font-size: 1.65rem !important;
  }

  .maternity-quick-cues ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.55rem 1rem;
    margin: 0;
    padding-left: 1.2rem;
  }

  .maternity-quick-cues li {
    color: var(--mat-muted);
    font-weight: 750;
    line-height: 1.45;
  }

  [data-theme="dark"] .maternity-study-header h1,
  [data-theme="dark"] .maternity-topic-card__title,
  [data-theme="dark"] .maternity-sidebar h2,
  [data-theme="dark"] .maternity-sidebar p,
  [data-theme="dark"] .maternity-sidebar li,
  [data-theme="dark"] .maternity-back-link,
  [data-theme="dark"] .maternity-quick-cues h2 {
    color: #f7edff !important;
    -webkit-text-fill-color: #f7edff !important;
  }

  [data-theme="dark"] .maternity-topic-card,
  [data-theme="dark"] .maternity-sidebar,
  [data-theme="dark"] .maternity-back-link,
  [data-theme="dark"] .maternity-quick-cues {
    background: rgba(36, 42, 60, 0.96);
    border-color: rgba(226, 150, 193, 0.28);
  }

  [data-theme="dark"] .maternity-topic-card__description,
  [data-theme="dark"] .maternity-quick-cues li {
    color: #cfc7d7;
  }

  [data-theme="dark"] .maternity-quick-link,
  [data-theme="dark"] .maternity-sidebar__tip {
    background: rgba(102, 45, 84, 0.32);
    border-color: rgba(226, 150, 193, 0.32);
    color: #ffd6e8;
  }

  [data-theme="dark"] .maternity-quick-link small {
    color: #f4b8d4;
  }

  [data-theme="dark"] .maternity-hub__center-glow {
    background: radial-gradient(circle, rgba(126, 54, 96, 0.28), rgba(82, 62, 128, 0.18) 60%, rgba(255, 255, 255, 0) 74%);
  }

  @media (max-width: 1220px) {
    .maternity-study-page { width: min(100% - 2rem, 1180px); }
    .maternity-study-layout { grid-template-columns: 1fr; }
    .maternity-sidebar {
      position: static;
      width: min(100%, 740px);
      margin-inline: auto;
    }
  }

  @media (max-width: 900px) {
    .maternity-study-diagram {
      min-height: 0;
      aspect-ratio: auto;
    }

    .maternity-study-diagram::before,
    .maternity-connector {
      display: none;
    }

    .maternity-hub__center {
      position: relative;
      left: auto;
      top: auto;
      width: min(330px, 78vw);
      margin: 0 auto 1.2rem;
      transform: none;
    }

    .maternity-study-diagram {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.78rem;
    }

    .maternity-topic-card,
    .maternity-topic-card:hover,
    .maternity-topic-card--antepartum,
    .maternity-topic-card--antepartum:hover {
      position: relative;
      inset: auto;
      width: 100%;
      min-height: 92px;
      transform: none;
    }

    .maternity-hub__center,
    .maternity-back-link {
      grid-column: 1 / -1;
    }

    .maternity-back-link {
      position: relative;
      left: auto;
      bottom: auto;
      width: 100%;
      margin-top: 0.3rem;
      transform: none;
    }

    .maternity-quick-cues {
      margin-top: 1.5rem;
    }
  }

  @media (max-width: 620px) {
    .maternity-study-page { width: min(100% - 1rem, 1180px); }
    .maternity-study-header {
      align-items: flex-start;
      gap: 0.8rem;
    }
    .maternity-study-header h1 {
      white-space: normal;
      font-size: clamp(2.2rem, 12vw, 3.15rem) !important;
    }
    .maternity-study-header__icon {
      width: 3.15rem;
      height: 3.15rem;
      margin-top: 0.2rem;
    }
    .maternity-study-diagram { grid-template-columns: 1fr; }
    .maternity-topic-card { min-height: 86px; }
    .maternity-quick-cues {
      width: min(100% - 1rem, 980px);
    }
    .maternity-quick-cues ul {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .maternity-topic-card,
    .maternity-quick-link {
      transition: none;
    }

    .maternity-topic-card:hover,
    .maternity-quick-link:hover {
      transform: none;
    }
  }
</style>

<section class="maternity-study-page" aria-labelledby="maternity-study-title">
  <header class="maternity-study-header">
    <img
      class="maternity-study-header__icon"
      src="{{ '/assets/images/maternity/rose_pink_mother_and_baby_icon.png' | relative_url }}"
      alt=""
      aria-hidden="true"
      data-no-lb
    >
    <div>
      <h1 id="maternity-study-title">Maternity Study Hub</h1>
      <p>Your simple hub for maternity nursing.</p>
    </div>
  </header>

  <main class="maternity-study-layout">
    <section class="maternity-study-diagram" aria-label="Maternity study topics">
      <span class="maternity-connector maternity-connector--top" aria-hidden="true"></span>
      <span class="maternity-connector maternity-connector--upper-left" aria-hidden="true"></span>
      <span class="maternity-connector maternity-connector--upper-right" aria-hidden="true"></span>
      <span class="maternity-connector maternity-connector--middle-left" aria-hidden="true"></span>
      <span class="maternity-connector maternity-connector--middle-right" aria-hidden="true"></span>
      <span class="maternity-connector maternity-connector--bottom-left" aria-hidden="true"></span>
      <span class="maternity-connector maternity-connector--bottom-right" aria-hidden="true"></span>

      <div class="maternity-hub__center">
        <div class="maternity-hub__center-glow" aria-hidden="true"></div>
        <img
          class="maternity-hub__center-image"
          src="{{ '/assets/images/maternity/rose_pink_motherhood_and_fetal_portrait.png' | relative_url }}"
          alt="Pregnant mother with a baby visible inside the womb"
          data-no-lb
        >
      </div>

      <a class="maternity-topic-card maternity-topic-card--antepartum" href="{{ '/maternity/antepartum.html' | relative_url }}">
        <span class="maternity-topic-card__icon-wrap" aria-hidden="true">
          <img class="maternity-topic-card__icon" src="{{ '/assets/images/maternity/prenatal_care_uterus_and_fetus_icon.png' | relative_url }}" alt="" data-no-lb>
        </span>
        <span class="maternity-topic-card__text">
          <span class="maternity-topic-card__title">Antepartum</span>
          <span class="maternity-topic-card__description">Prenatal assessment &amp; high-risk pregnancy care</span>
        </span>
      </a>

      <a class="maternity-topic-card maternity-topic-card--intrapartum" href="{{ '/maternity/intrapartum.html' | relative_url }}">
        <span class="maternity-topic-card__icon-wrap" aria-hidden="true">
          <img class="maternity-topic-card__icon" src="{{ '/assets/images/maternity/fetal_monitor_waveform_icon.png' | relative_url }}" alt="" data-no-lb>
        </span>
        <span class="maternity-topic-card__text">
          <span class="maternity-topic-card__title">Intrapartum</span>
          <span class="maternity-topic-card__description">Labor stages, fetal monitoring &amp; delivery priorities</span>
        </span>
      </a>

      <a class="maternity-topic-card maternity-topic-card--postpartum" href="{{ '/maternity/postpartum.html' | relative_url }}">
        <span class="maternity-topic-card__icon-wrap" aria-hidden="true">
          <img class="maternity-topic-card__icon" src="{{ '/assets/images/maternity/mother_cradling_sleeping_baby.png' | relative_url }}" alt="" data-no-lb>
        </span>
        <span class="maternity-topic-card__text">
          <span class="maternity-topic-card__title">Postpartum</span>
          <span class="maternity-topic-card__description">Recovery, lochia &amp; postpartum complications</span>
        </span>
      </a>

      <a class="maternity-topic-card maternity-topic-card--newborn" href="{{ '/maternity/newborn.html' | relative_url }}">
        <span class="maternity-topic-card__icon-wrap" aria-hidden="true">
          <img class="maternity-topic-card__icon" src="{{ '/assets/images/maternity/mint_baby_in_sparkling_swaddle.png' | relative_url }}" alt="" data-no-lb>
        </span>
        <span class="maternity-topic-card__text">
          <span class="maternity-topic-card__title">Newborn</span>
          <span class="maternity-topic-card__description">APGAR, thermoregulation, feeding &amp; jaundice</span>
        </span>
      </a>

      <a class="maternity-topic-card maternity-topic-card--nurses-role" href="{{ '/maternity/nurses-role-ob-ward.html' | relative_url }}">
        <span class="maternity-topic-card__icon-wrap" aria-hidden="true">
          <img class="maternity-topic-card__icon" src="{{ '/assets/images/maternity/clipboard_and_fetal_care_badge.png' | relative_url }}" alt="" data-no-lb>
        </span>
        <span class="maternity-topic-card__text">
          <span class="maternity-topic-card__title">Nurse's Role on OB</span>
          <span class="maternity-topic-card__description">Triage, workflow &amp; unit responsibilities</span>
        </span>
      </a>

      <a class="maternity-topic-card maternity-topic-card--medications" href="{{ '/maternity/medications.html' | relative_url }}">
        <span class="maternity-topic-card__icon-wrap" aria-hidden="true">
          <img class="maternity-topic-card__icon" src="{{ '/assets/images/maternity/rose_pink_ob_medication_icon.png' | relative_url }}" alt="" data-no-lb>
        </span>
        <span class="maternity-topic-card__text">
          <span class="maternity-topic-card__title">OB Medications</span>
          <span class="maternity-topic-card__description">Oxytocin, magnesium sulfate, tocolytics &amp; hemorrhage meds</span>
        </span>
      </a>

      <a class="maternity-topic-card maternity-topic-card--labs" href="{{ '/maternity/maternity-labs.html' | relative_url }}">
        <span class="maternity-topic-card__icon-wrap" aria-hidden="true">
          <img class="maternity-topic-card__icon" src="{{ '/assets/images/maternity/lavender_chemistry_flask_badge.png' | relative_url }}" alt="" data-no-lb>
        </span>
        <span class="maternity-topic-card__text">
          <span class="maternity-topic-card__title">Maternity Labs</span>
          <span class="maternity-topic-card__description">Prenatal screening, Group B Strep &amp; key lab changes</span>
        </span>
      </a>

      <a class="maternity-back-link" href="{{ '/all-topics.html' | relative_url }}">
        <span aria-hidden="true">⌂</span>
        <span>Back to Nursing School Hub</span>
      </a>
    </section>

    <aside class="maternity-sidebar">
      <img
        class="maternity-sidebar__icon"
        src="{{ '/assets/images/maternity/rose_pink_mother_and_baby_icon.png' | relative_url }}"
        alt=""
        aria-hidden="true"
        data-no-lb
      >
      <h2>Select a topic<br>to open notes</h2>
      <div class="maternity-sidebar__rule"></div>
      <p>Study resources include:</p>
      <ul>
        <li><img src="{{ '/assets/images/maternity/pink_checkmark_study_badge.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>Overview &amp; key concepts</span></li>
        <li><img src="{{ '/assets/images/maternity/pink_checkmark_study_badge.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>Assessment &amp; nursing priorities</span></li>
        <li><img src="{{ '/assets/images/maternity/pink_checkmark_study_badge.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>Safety interventions</span></li>
        <li><img src="{{ '/assets/images/maternity/pink_checkmark_study_badge.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>Patient education</span></li>
        <li><img src="{{ '/assets/images/maternity/pink_checkmark_study_badge.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb><span>NCLEX tips &amp; memory cues</span></li>
      </ul>
      <a class="maternity-quick-link" href="{{ '/maternity.html#nclex-quick-cues' | relative_url }}">
        <img src="{{ '/assets/images/maternity/pink_checkmark_study_badge.png' | relative_url }}" alt="" aria-hidden="true" data-no-lb>
        <span>
          <strong>NCLEX Quick Cues</strong>
          <small>Mnemonics &amp; priority rules</small>
        </span>
      </a>
      <div class="maternity-sidebar__tip"><span aria-hidden="true">💡</span><span>Pick any topic around the mother and baby to get started.</span></div>
    </aside>
  </main>
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
