---
layout: default
title: Immune & Inflammatory
page_type: immune-hub
---

<style>
  body[data-page-type="immune-hub"] .page-wrapper {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  body[data-page-type="immune-hub"] .main-content {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 1.35rem 0 2rem !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    overflow-x: hidden !important;
  }

  body[data-page-type="immune-hub"] .main-content img {
    margin: 0 auto !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .immune-page {
    --immune-navy: #0b174e;
    --immune-purple: #8060bf;
    --immune-muted: #53649a;
    --immune-border: #d7e5eb;
    min-height: auto;
    color: var(--immune-navy);
  }

  .immune-page * {
    box-sizing: border-box;
  }

  .immune-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 28px;
    align-items: start;
    width: min(100% - 32px, 1320px);
    margin-inline: auto;
  }

  .immune-main {
    min-width: 0;
    text-align: center;
  }

  .immune-heading {
    margin: 0 0 0.9rem;
    text-align: center;
  }

  .immune-kicker {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin: 0 0 0.25rem;
    color: var(--immune-purple);
    font-size: 1.7rem;
  }

  .immune-heading h1 {
    display: block !important;
    width: auto !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    color: var(--immune-navy) !important;
    -webkit-text-fill-color: var(--immune-navy) !important;
    font-family: "Nunito", sans-serif !important;
    font-size: clamp(2.35rem, 4.4vw, 3.75rem) !important;
    font-weight: 900 !important;
    letter-spacing: -0.045em;
    line-height: 1 !important;
    text-shadow: none !important;
  }

  .immune-heading h1::before,
  .immune-heading h1::after {
    display: none !important;
    content: none !important;
  }

  .immune-heading p {
    margin: 0.35rem 0 0;
    color: #65708f;
    font-size: clamp(1.05rem, 1.6vw, 1.28rem);
    font-weight: 800;
    line-height: 1.3;
  }

  .immune-stage {
    position: relative;
    width: min(100%, 990px);
    min-height: 640px;
    margin-inline: auto;
  }

  .immune-connectors {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: visible;
    pointer-events: none;
  }

  .immune-connectors path {
    fill: none;
    stroke: #a48fd6;
    stroke-width: 2;
    stroke-dasharray: 7 8;
    stroke-linecap: round;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
  }

  .immune-connectors circle {
    fill: #8060bf;
    stroke: #fff;
    stroke-width: 3;
  }

  .immune-body-wrap {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 0;
    width: min(43vw, 440px);
    transform: translateX(-50%);
    pointer-events: none;
  }

  .immune-body-image {
    display: block;
    width: 100%;
    max-width: 440px;
    max-height: 650px;
    object-fit: contain;
    filter: drop-shadow(0 22px 22px rgba(29, 60, 106, .14));
  }

  .immune-card {
    position: absolute;
    z-index: 3;
    display: grid;
    grid-template-columns: 3.2rem minmax(0, 1fr) auto;
    align-items: center;
    gap: .85rem;
    width: min(286px, 29%);
    min-height: 112px;
    padding: .85rem 1rem;
    border: 1px solid #d8ccf4;
    border-radius: 18px;
    background: rgba(255,255,255,.96);
    box-shadow: 0 8px 20px rgba(27, 50, 82, .10);
    color: #101b50 !important;
    text-align: left;
    text-decoration: none !important;
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  }

  .immune-card:hover,
  .immune-card:focus-visible {
    transform: translateY(-3px);
    border-color: var(--card-accent, #8060bf);
    box-shadow: 0 13px 26px rgba(27, 50, 82, .15);
    outline: none;
  }

  .immune-card:focus-visible {
    outline: 3px solid rgba(128, 96, 191, 0.2);
    outline-offset: 3px;
  }

  .immune-card-icon {
    display: grid;
    place-items: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: var(--icon-bg, #e7e0fb);
    color: var(--card-accent, #6945c2);
    font-size: 1.45rem;
    font-weight: 900;
  }

  .immune-card-title,
  .immune-card-description {
    display: block;
  }

  .immune-card-title {
    color: #101b50 !important;
    font-size: .99rem;
    font-weight: 900;
    line-height: 1.2;
  }

  .immune-card-description {
    margin-top: .22rem;
    color: #68728c;
    font-size: .74rem;
    line-height: 1.25;
    font-weight: 700;
  }

  .immune-card-chevron {
    color: var(--card-accent, #8060bf);
    font-size: 1.55rem;
    font-weight: 900;
    opacity: 0.75;
  }

  .immune-topic-hiv {
    --card-accent: #8060bf;
    --icon-bg: #e7e0fb;
    left: 0;
    top: 7%;
  }

  .immune-topic-ra {
    --card-accent: #2876e8;
    --icon-bg: #dceeff;
    left: 0;
    top: 39%;
  }

  .immune-topic-gout {
    --card-accent: #2d9c73;
    --icon-bg: #dff5e9;
    left: 3%;
    top: 72%;
  }

  .immune-topic-lupus {
    --card-accent: #e65a8d;
    --icon-bg: #ffe3ef;
    right: 4%;
    top: 8%;
  }

  .immune-topic-allergy {
    --card-accent: #d9922f;
    --icon-bg: #fff0d8;
    right: 0;
    top: 39%;
  }

  .immune-topic-meds {
    --card-accent: #20a7a8;
    --icon-bg: #dff7f7;
    right: 3%;
    top: 72%;
  }

  .immune-sidebar {
    display: flex;
    flex-direction: column;
    align-self: start;
    min-height: 590px;
    padding: 2.1rem 1.9rem;
    border: 1px solid #cbdde2;
    border-radius: 24px;
    background: linear-gradient(155deg, #fff, #fbfefe);
    box-shadow: 0 12px 30px rgba(27, 50, 82, .07);
  }

  .immune-sidebar-icon {
    display: grid;
    place-items: center;
    width: 4.4rem;
    height: 4.4rem;
    margin: 0 auto 1rem;
    border-radius: 1.25rem;
    background: #f1ebfb;
    color: #8060bf;
    font-size: 2.25rem;
  }

  .immune-sidebar h2 {
    margin: 0 !important;
    color: #0c174d !important;
    font-family: "Nunito", sans-serif !important;
    font-size: 1.55rem !important;
    line-height: 1.2 !important;
    text-align: center;
    border: 0 !important;
    background: none !important;
  }

  .immune-guide-rule {
    height: 1px;
    margin: 1.8rem 0;
    background: #e0d6f5;
  }

  .immune-sidebar > p {
    margin: 0 0 .7rem;
    color: #101b50;
    font-weight: 800;
  }

  .immune-sidebar ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .immune-sidebar li {
    position: relative;
    margin: 0 0 .8rem;
    padding-left: 2rem;
    color: #101b50;
    line-height: 1.3;
    font-weight: 700;
  }

  .immune-sidebar li::before {
    content: "✓";
    position: absolute;
    left: 0;
    display: grid;
    place-items: center;
    width: 1.2rem;
    height: 1.2rem;
    border: 1.5px solid #8060bf;
    border-radius: 50%;
    color: #6a4bb0;
    font-size: .75rem;
    font-weight: 900;
  }

  .immune-nclex-link,
  .immune-guide-tip {
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: .9rem;
    border: 1px solid #cdbff2;
    border-radius: 14px;
    background: #f3effd;
    color: #382875 !important;
    text-decoration: none !important;
  }

  .immune-nclex-link {
    margin: 1.1rem 0;
    transition: transform .18s ease, box-shadow .18s ease;
  }

  .immune-nclex-link:hover,
  .immune-nclex-link:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(76, 47, 168, .14);
    outline: 2px solid #8b73d7;
    outline-offset: 2px;
  }

  .immune-nclex-link > span:first-child {
    display: grid;
    flex: 0 0 2.25rem;
    place-items: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    background: #fff;
    color: #6848c2;
    font-weight: 900;
  }

  .immune-nclex-link strong,
  .immune-nclex-link small {
    display: block;
    line-height: 1.2;
  }

  .immune-nclex-link strong {
    font-size: .9rem;
  }

  .immune-nclex-link small {
    margin-top: .18rem;
    color: #716898;
    font-size: .7rem;
    font-weight: 700;
  }

  .immune-guide-tip {
    margin-top: auto;
    color: #4a3b74 !important;
    font-size: .9rem;
    font-weight: 800;
  }

  .immune-guide-tip span {
    font-size: 1.5rem;
  }

  .immune-back {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .65rem;
    width: min(390px, 92%);
    min-height: 58px;
    margin: 0.85rem auto 0;
    padding: .7rem;
    border: 1px solid #e7e3ed;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 6px 16px rgba(27, 50, 82, .08);
    color: #172153 !important;
    font-size: .95rem;
    font-weight: 900;
    text-decoration: none !important;
    transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
  }

  .immune-back:hover,
  .immune-back:focus-visible {
    transform: translateY(-2px);
    border-color: #8060bf;
    box-shadow: 0 9px 20px rgba(27, 50, 82, .13);
    outline: none;
  }

  .immune-back span {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #f1ebfb;
    color: #6945c2;
    font-size: 1.25rem;
  }

  [data-theme="dark"] .immune-page {
    color: #efeaff;
  }

  [data-theme="dark"] .immune-heading h1,
  [data-theme="dark"] .immune-sidebar h2,
  [data-theme="dark"] .immune-sidebar > p,
  [data-theme="dark"] .immune-sidebar li,
  [data-theme="dark"] .immune-card-title {
    color: #eef7ff !important;
    -webkit-text-fill-color: #eef7ff !important;
  }

  [data-theme="dark"] .immune-card,
  [data-theme="dark"] .immune-sidebar,
  [data-theme="dark"] .immune-back {
    background: #242a3c;
    border-color: #45526c;
  }

  [data-theme="dark"] .immune-card-description,
  [data-theme="dark"] .immune-heading p {
    color: #b5bfd1;
  }

  [data-theme="dark"] .immune-nclex-link,
  [data-theme="dark"] .immune-guide-tip {
    background: #302849;
    border-color: #544679;
    color: #eee8ff !important;
  }

  @media (prefers-reduced-motion: reduce) {
    .immune-card,
    .immune-back,
    .immune-nclex-link {
      transition: none;
    }

    .immune-card:hover,
    .immune-card:focus-visible,
    .immune-back:hover,
    .immune-nclex-link:hover {
      transform: none;
    }
  }

  @media (max-width: 1180px) {
    .immune-layout {
      grid-template-columns: minmax(0, 1fr) 260px;
      gap: 1rem;
    }

    .immune-stage {
      min-height: 610px;
    }

    .immune-card {
      width: min(245px, 28%);
      min-height: 100px;
      padding: .7rem .8rem;
      gap: .6rem;
    }

    .immune-card-icon {
      width: 2.65rem;
      height: 2.65rem;
      font-size: 1.15rem;
    }

    .immune-card-title {
      font-size: .86rem;
    }

    .immune-card-description {
      font-size: .68rem;
    }

    .immune-sidebar {
      min-height: 560px;
      padding: 1.6rem 1.3rem;
    }
  }

  @media (max-width: 1050px) {
    .immune-layout {
      grid-template-columns: 1fr;
      width: min(100% - 1.5rem, 860px);
    }

    .immune-sidebar {
      width: min(100%, 680px);
      min-height: auto;
      margin-inline: auto;
    }

    .immune-connectors {
      display: none;
    }

    .immune-stage {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: .8rem;
      min-height: auto;
      max-width: 760px;
    }

    .immune-body-wrap {
      position: relative;
      grid-column: 1 / -1;
      left: auto;
      bottom: auto;
      width: min(100%, 360px);
      transform: none;
      margin-inline: auto;
      order: -1;
    }

    .immune-card,
    .immune-card:hover,
    .immune-card:focus-visible {
      position: relative;
      inset: auto;
      width: 100%;
      transform: none;
    }
  }

  @media (max-width: 700px) {
    body[data-page-type="immune-hub"] .main-content {
      padding-top: 1.25rem !important;
    }

    .immune-layout {
      width: min(100% - 1.25rem, 520px);
    }

    .immune-heading h1 {
      font-size: 1.8rem !important;
    }

    .immune-heading p {
      font-size: .95rem;
    }

    .immune-stage {
      grid-template-columns: 1fr;
      gap: .7rem;
    }

    .immune-body-wrap {
      width: min(100%, 320px);
    }

    .immune-card {
      min-height: 70px;
      padding: .65rem .7rem;
      border-radius: 15px;
    }

    .immune-card-icon {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.05rem;
    }

    .immune-card-title {
      font-size: .82rem;
    }

    .immune-card-description {
      display: none;
    }

    .immune-sidebar {
      padding: 1.6rem;
    }
  }
</style>

<div class="mh-breadcrumb">
  <a href="{{ '/' | relative_url }}">Home</a>
  <a href="{{ '/all-topics.html' | relative_url }}">Nursing School Hub</a>
  <span>Immune &amp; Inflammatory</span>
</div>

<section class="immune-page" aria-labelledby="immune-title">
  <div class="immune-layout">
    <div class="immune-main">
      <header class="immune-heading">
        <div class="immune-kicker" aria-hidden="true">✣ ⚕ ✣</div>
        <h1 id="immune-title">Immune &amp; Inflammatory</h1>
        <p>Choose a topic to study.</p>
      </header>

      <div class="immune-stage" aria-label="Immune and inflammatory study topics">
        <svg class="immune-connectors" viewBox="0 0 1000 640" preserveAspectRatio="none" aria-hidden="true">
          <path d="M250 112 C340 112 365 205 445 230"></path>
          <circle cx="250" cy="112" r="6"></circle><circle cx="445" cy="230" r="6"></circle>

          <path d="M250 315 C330 315 335 450 410 470"></path>
          <circle cx="250" cy="315" r="6"></circle><circle cx="410" cy="470" r="6"></circle>

          <path d="M280 525 C370 525 450 520 525 545"></path>
          <circle cx="280" cy="525" r="6"></circle><circle cx="525" cy="545" r="6"></circle>

          <path d="M760 112 C670 112 640 118 558 122"></path>
          <circle cx="760" cy="112" r="6"></circle><circle cx="558" cy="122" r="6"></circle>

          <path d="M760 315 C690 315 655 270 602 255"></path>
          <circle cx="760" cy="315" r="6"></circle><circle cx="602" cy="255" r="6"></circle>

          <path d="M750 525 C675 525 655 438 620 410"></path>
          <circle cx="750" cy="525" r="6"></circle><circle cx="620" cy="410" r="6"></circle>
        </svg>

        <div class="immune-body-wrap">
          <img class="immune-body-image" src="{{ '/assets/images/immune-inflammatory-body.png' | relative_url }}" alt="Blue-toned female anatomy illustration showing the lymphatic system, lupus facial rash, inflamed right wrist, inflamed hip joint, and a pill bottle held in the left hand." data-no-lb>
        </div>

        <a class="immune-card immune-topic-hiv" href="{{ '/immune-inflammatory/hiv-aids-immune-function.html' | relative_url }}">
          <span class="immune-card-icon" aria-hidden="true">✣</span>
          <span><strong class="immune-card-title">HIV/AIDS &amp; Immune Function</strong><small class="immune-card-description">Immune system, opportunistic infections &amp; nursing care</small></span>
          <span class="immune-card-chevron" aria-hidden="true">›</span>
        </a>

        <a class="immune-card immune-topic-ra" href="{{ '/immune-inflammatory/rheumatoid-arthritis.html' | relative_url }}">
          <span class="immune-card-icon" aria-hidden="true">🦴</span>
          <span><strong class="immune-card-title">Rheumatoid Arthritis</strong><small class="immune-card-description">Autoimmune joint inflammation &amp; nursing priorities</small></span>
          <span class="immune-card-chevron" aria-hidden="true">›</span>
        </a>

        <a class="immune-card immune-topic-gout" href="{{ '/immune-inflammatory/osteoarthritis-gout.html' | relative_url }}">
          <span class="immune-card-icon" aria-hidden="true">◇</span>
          <span><strong class="immune-card-title">Osteoarthritis &amp; Gout</strong><small class="immune-card-description">Degenerative joint disease &amp; uric acid crystal disorders</small></span>
          <span class="immune-card-chevron" aria-hidden="true">›</span>
        </a>

        <a class="immune-card immune-topic-lupus" href="{{ '/immune-inflammatory/systemic-lupus-erythematosus.html' | relative_url }}">
          <span class="immune-card-icon" aria-hidden="true">🦋</span>
          <span><strong class="immune-card-title">Systemic Lupus Erythematosus</strong><small class="immune-card-description">Autoimmune disease, systemic involvement &amp; care priorities</small></span>
          <span class="immune-card-chevron" aria-hidden="true">›</span>
        </a>

        <a class="immune-card immune-topic-allergy" href="{{ '/immune-inflammatory/hypersensitivity-allergic-reactions.html' | relative_url }}">
          <span class="immune-card-icon" aria-hidden="true">✺</span>
          <span><strong class="immune-card-title">Hypersensitivity &amp; Allergic Reactions</strong><small class="immune-card-description">Allergic responses, anaphylaxis &amp; nursing care</small></span>
          <span class="immune-card-chevron" aria-hidden="true">›</span>
        </a>

        <a class="immune-card immune-topic-meds" href="{{ '/immune-inflammatory/antimicrobials-immunosuppressants.html' | relative_url }}">
          <span class="immune-card-icon" aria-hidden="true">💊</span>
          <span><strong class="immune-card-title">Antimicrobials &amp; Immunosuppressants</strong><small class="immune-card-description">Medications, safety monitoring &amp; patient education</small></span>
          <span class="immune-card-chevron" aria-hidden="true">›</span>
        </a>
      </div>

      <a class="immune-back" href="{{ '/all-topics.html' | relative_url }}"><span aria-hidden="true">⌂</span>Back to Nursing School Hub</a>
    </div>

    <aside class="immune-sidebar">
      <div class="immune-sidebar-icon" aria-hidden="true">🛡</div>
      <h2>Select a topic<br>to open notes</h2>
      <div class="immune-guide-rule"></div>
      <p>Study resources include:</p>
      <ul>
        <li>Overview &amp; key concepts</li>
        <li>Assessment &amp; nursing priorities</li>
        <li>Safety interventions</li>
        <li>Patient education</li>
        <li>NCLEX tips &amp; memory cues</li>
      </ul>
      <a class="immune-nclex-link" href="{{ '/immune-inflammatory/nclex-cues.html' | relative_url }}">
        <span aria-hidden="true">✓</span>
        <span><strong>NCLEX Quick Cues</strong><small>Mnemonics &amp; priority rules</small></span>
      </a>
      <div class="immune-guide-tip"><span aria-hidden="true">💡</span> Pick any topic around the body to get started.</div>
    </aside>
  </div>
</section>
