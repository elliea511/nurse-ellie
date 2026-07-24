---
layout: default
title: Sensory Perception
page_type: sensory-hub
---

<style>
  body[data-page-type="sensory-hub"] .page-wrapper {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  body[data-page-type="sensory-hub"] .main-content {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 1.45rem 0 1.75rem !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    overflow-x: hidden !important;
  }

  body[data-page-type="sensory-hub"] .main-content img {
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
  }

  .sensory-page {
    --sensory-navy: #0b174e;
    --sensory-muted: #65708f;
    --sensory-purple: #8060bf;
    --sensory-border: #d7e5eb;
    --sensory-blue: #2876e8;
    --sensory-pink: #f24f87;
    min-height: auto;
    color: var(--sensory-navy);
  }

  .sensory-page * {
    box-sizing: border-box;
  }

  .sensory-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 28px;
    align-items: start;
  }

  .sensory-main {
    min-width: 0;
    text-align: center;
  }

  .sensory-title {
    padding: 0 !important;
    background: transparent !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  .sensory-title h1 {
    display: block !important;
    width: auto !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    background: transparent !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    color: var(--sensory-navy) !important;
    -webkit-text-fill-color: var(--sensory-navy) !important;
    font-family: var(--site-display-font) !important;
    font-size: clamp(3rem, 5.5vw, 4.5rem) !important;
    font-weight: 700 !important;
    letter-spacing: -0.025em;
    line-height: 0.98 !important;
    text-shadow: none !important;
  }

  .sensory-title h1::before,
  .sensory-title h1::after {
    display: none !important;
    content: none !important;
  }

  .sensory-title p {
    margin: 0;
    color: var(--text-muted);
    font-family: var(--site-body-font);
    font-size: clamp(1.05rem, 1.8vw, 1.35rem);
    font-weight: 600;
    line-height: 1.4;
  }

  .sensory-stage {
    position: relative;
    display: grid;
    grid-template-columns: 230px minmax(300px, 380px) 230px;
    gap: 18px;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 880px;
    margin: 0.65rem auto 0;
  }

  .sensory-connectors {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: visible;
    pointer-events: none;
  }

  .sensory-connectors path {
    fill: none;
    stroke-width: 2.15;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .sensory-line-eye,
  .sensory-dot-eye {
    stroke: var(--sensory-blue);
    fill: var(--sensory-blue);
  }

  .sensory-line-ear,
  .sensory-dot-ear {
    stroke: var(--sensory-pink);
    fill: var(--sensory-pink);
  }

  .sensory-connectors circle {
    stroke: #fff;
    stroke-width: 3;
  }

  .sensory-card {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 58px minmax(0, 1fr) auto;
    align-items: center;
    gap: 1rem;
    width: 230px;
    min-height: 96px;
    padding: 1rem 1.15rem;
    border: 1px solid var(--card-accent-soft);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 10px 28px rgba(20, 31, 65, 0.08);
    color: var(--sensory-navy) !important;
    text-align: left;
    text-decoration: none !important;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }

  .sensory-card:hover,
  .sensory-card:focus-visible {
    transform: translateY(-4px);
    border-color: var(--card-accent);
    box-shadow: 0 16px 34px rgba(20, 31, 65, 0.12);
    outline: none;
  }

  .sensory-card:focus-visible {
    box-shadow: 0 0 0 4px rgba(128, 96, 191, 0.18), 0 16px 34px rgba(20, 31, 65, 0.12);
  }

  .sensory-card-eye {
    --card-accent: var(--sensory-blue);
    --card-accent-soft: #c7dcff;
    --card-icon-bg: #e8f2ff;
  }

  .sensory-card-ear {
    --card-accent: var(--sensory-pink);
    --card-accent-soft: #ffc3d5;
    --card-icon-bg: #ffe6ef;
  }

  .sensory-card-icon {
    display: grid;
    place-items: center;
    width: 58px;
    height: 58px;
    border-radius: 999px;
    background: var(--card-icon-bg);
    color: var(--card-accent);
    font-size: 1.75rem;
    font-weight: 900;
  }

  .sensory-card strong,
  .sensory-card small {
    display: block;
  }

  .sensory-card strong {
    color: var(--sensory-navy) !important;
    font-family: var(--site-body-font);
    font-size: clamp(1.25rem, 1.8vw, 1.65rem);
    font-weight: 750;
    line-height: 1.15;
  }

  .sensory-card small {
    margin-top: 0.25rem;
    color: var(--text-muted);
    font-family: var(--site-body-font);
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.4;
  }

  .sensory-card-chevron {
    color: var(--card-accent);
    font-size: 1.25rem;
    font-weight: 900;
    opacity: 0.65;
  }

  .sensory-profile-wrap {
    position: relative;
    z-index: 2;
    min-width: 0;
  }

  .sensory-profile {
    display: block;
    width: 100%;
    max-width: 360px;
    max-height: 420px;
    object-fit: contain;
    margin-inline: auto;
    filter: saturate(1.08) contrast(1.04) drop-shadow(0 18px 22px rgba(85, 65, 150, 0.1));
  }

  .sensory-back {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    width: min(100%, 360px);
    min-height: 54px;
    margin: 1.1rem auto 0;
    padding: 0.72rem 1rem;
    border: 1px solid var(--hub-accent-soft);
    border-radius: 16px;
    background: #fff;
    box-shadow: 0 8px 22px rgba(20, 31, 65, 0.07);
    color: var(--navy) !important;
    text-decoration: none !important;
    font-family: var(--site-body-font);
    font-size: 1rem;
    font-weight: 700;
  }

  .sensory-back svg {
    width: 1.45rem;
    height: 1.45rem;
  }

  .sensory-back:hover,
  .sensory-back:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 13px 28px rgba(76, 47, 168, 0.15);
    outline: none;
  }

  .sensory-sidebar {
    display: flex;
    flex-direction: column;
    align-self: start;
    padding: 1.25rem;
    border: 1px solid var(--border-soft);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 10px 28px rgba(20, 31, 65, 0.08);
  }

  .sensory-sidebar h2 {
    margin: 0 !important;
    color: #0c174d !important;
    font-family: var(--site-body-font) !important;
    font-size: 1.45rem !important;
    line-height: 1.2 !important;
    text-align: center;
    border: 0 !important;
    background: none !important;
  }

  .sensory-guide-rule {
    height: 1px;
    margin: 1.45rem 0;
    background: #e0d6f5;
  }

  .sensory-sidebar > p {
    margin: 0 0 0.7rem;
    font-weight: 900;
    color: var(--sensory-navy);
  }

  .sensory-sidebar ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sensory-sidebar li {
    position: relative;
    margin: 0 0 0.75rem;
    padding-left: 2rem;
    color: var(--sensory-navy);
    font-weight: 800;
    line-height: 1.3;
  }

  .sensory-sidebar li::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0.05rem;
    display: grid;
    place-items: center;
    width: 1.2rem;
    height: 1.2rem;
    border: 1.5px solid var(--sensory-purple);
    border-radius: 50%;
    color: #6a4bb0;
    font-size: 0.75rem;
    font-weight: 900;
  }

  .sensory-guide-tip {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-top: 0.8rem;
    padding: 0.9rem;
    border: 1px solid #e6ddf7;
    border-radius: 15px;
    background: #f5f1fd;
    color: #4a3b74;
    font-size: 0.88rem;
    font-weight: 800;
  }

  .sensory-guide-tip span {
    font-size: 1.35rem;
  }

  [data-theme="dark"] .sensory-page {
    background: #171522;
  }

  [data-theme="dark"] .sensory-title h1,
  [data-theme="dark"] .sensory-sidebar h2,
  [data-theme="dark"] .sensory-sidebar > p,
  [data-theme="dark"] .sensory-sidebar li,
  [data-theme="dark"] .sensory-card strong {
    color: #eef7ff !important;
    -webkit-text-fill-color: #eef7ff !important;
  }

  [data-theme="dark"] .sensory-card,
  [data-theme="dark"] .sensory-sidebar,
  [data-theme="dark"] .sensory-back {
    background: #242a3c;
    border-color: #45526c;
  }

  [data-theme="dark"] .sensory-card small {
    color: #b5bfd1;
  }

  [data-theme="dark"] .sensory-guide-tip {
    background: #2f2749;
    color: #e7dfff;
  }

  @media (prefers-reduced-motion: reduce) {
    .sensory-card,
    .sensory-back {
      transition: none;
    }

    .sensory-card:hover,
    .sensory-card:focus-visible,
    .sensory-back:hover,
    .sensory-back:focus-visible {
      transform: none;
    }
  }

  @media (max-width: 1050px) {
    .sensory-layout {
      grid-template-columns: 1fr;
      width: min(100% - 24px, 860px);
    }

    .sensory-sidebar {
      width: min(100%, 680px);
      margin-inline: auto;
    }

    .sensory-connectors {
      display: none;
    }
  }

  @media (max-width: 760px) {
    body[data-page-type="sensory-hub"] .main-content {
      padding: 1.2rem 0 2rem !important;
    }

    .sensory-layout {
      width: min(100% - 20px, 520px);
    }

    .sensory-title h1 {
      font-size: clamp(2.35rem, 11vw, 3rem) !important;
    }

    .sensory-title p {
      font-size: 1rem;
    }

    .sensory-stage {
      grid-template-columns: 1fr;
      max-width: 380px;
      gap: 0.85rem;
    }

    .sensory-profile-wrap {
      order: 1;
    }

    .sensory-card-eye {
      order: 2;
    }

    .sensory-card-ear {
      order: 3;
    }

    .sensory-card {
      width: 100%;
      min-height: 92px;
    }

    .sensory-profile {
      max-height: 310px;
    }

    .sensory-back {
      margin-top: 0.9rem;
    }
  }
</style>

<section class="subject-hub subject-hub--sensory sensory-page" aria-labelledby="sensory-title">
  <div class="subject-hub__inner sensory-layout">
    <div class="sensory-main">
      <header class="subject-hub__heading sensory-title">
        <h1 class="subject-hub__title" id="sensory-title">Sensory Perception</h1>
        <p class="subject-hub__subtitle">Your simple hub for vision and hearing nursing.</p>
      </header>

      <div class="subject-hub__stage sensory-stage" aria-label="Sensory perception study topics">
        <svg class="sensory-connectors" viewBox="0 0 856 420" preserveAspectRatio="none" aria-hidden="true">
          <path class="sensory-line-eye" d="M230 188 C275 188 320 168 374 164"></path>
          <circle class="sensory-dot-eye" cx="230" cy="188" r="5"></circle>
          <circle class="sensory-dot-eye" cx="374" cy="164" r="5"></circle>

          <path class="sensory-line-ear" d="M626 208 C585 208 540 216 469 216"></path>
          <circle class="sensory-dot-ear" cx="626" cy="208" r="5"></circle>
          <circle class="sensory-dot-ear" cx="469" cy="216" r="5"></circle>
        </svg>

        <a class="subject-hub__card sensory-card sensory-card-eye" href="{{ '/sensory-perception/eye-disorders.html' | relative_url }}">
          <span class="subject-hub__card-icon sensory-card-icon" aria-hidden="true">👁</span>
          <span><strong class="subject-hub__card-title">Eye Disorders</strong><small class="subject-hub__card-description">Vision changes &amp; safety</small></span>
          <span class="sensory-card-chevron" aria-hidden="true">›</span>
        </a>

        <div class="sensory-profile-wrap">
          <img class="sensory-profile" src="{{ '/assets/images/sensory-profile-woman.png' | relative_url }}" alt="Side-profile woman with eye and ear highlighted for sensory perception study" data-no-lb>
        </div>

        <a class="subject-hub__card sensory-card sensory-card-ear" href="{{ '/sensory-perception/ear-disorders.html' | relative_url }}">
          <span class="subject-hub__card-icon sensory-card-icon" aria-hidden="true">👂</span>
          <span><strong class="subject-hub__card-title">Ear Disorders</strong><small class="subject-hub__card-description">Hearing changes &amp; care</small></span>
          <span class="sensory-card-chevron" aria-hidden="true">›</span>
        </a>
      </div>

      <a class="subject-hub__back sensory-back" href="{{ '/all-topics.html' | relative_url }}">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 11.4 12 4l9 7.4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 10.8V20h12v-9.2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 20v-5h4v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Back to Nursing School Hub
      </a>
    </div>

    <aside class="subject-hub__sidebar sensory-sidebar">
      <h2>Select a topic<br>to open notes</h2>
      <div class="sensory-guide-rule"></div>
      <p>Study resources include:</p>
      <ul>
        <li>Overview &amp; key concepts</li>
        <li>Assessment &amp; nursing priorities</li>
        <li>Safety interventions</li>
        <li>Patient education</li>
        <li>NCLEX tips &amp; memory cues</li>
      </ul>
      <div class="sensory-guide-tip"><span aria-hidden="true">💡</span> Choose the eye or ear topic to start reviewing.</div>
    </aside>
  </div>
</section>
