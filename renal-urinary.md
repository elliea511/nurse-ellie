---
layout: default
title: Renal & Urinary
page_type: renal-hub
---

<style>
  body[data-page-type="renal-hub"] {
    margin: 0;
    background: #fbfdff !important;
    color: #102a55;
  }

  body[data-page-type="renal-hub"] .page-wrapper {
    display: block !important;
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  body[data-page-type="renal-hub"] .main-content {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: #fbfdff !important;
  }

  .renal-page {
    min-height: calc(100vh - 92px);
    font-family: "Nunito", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background:
      radial-gradient(circle at 50% 43%, rgba(238,248,255,.75), transparent 28rem),
      linear-gradient(180deg, #ffffff 0%, #f5fbff 100%);
  }

  .renal-hero {
    width: min(100%, 1340px);
    margin: 0 auto;
    padding: clamp(.65rem, 1.4vh, 1rem) clamp(1rem, 3vw, 2.5rem) .9rem;
  }

  .renal-title {
    text-align: center;
    margin-bottom: clamp(.6rem, 1.2vh, .95rem);
  }

  .renal-title h1 {
    display: block !important;
    margin: 0 auto !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    font-family: "Playfair Display", Georgia, serif !important;
    font-size: clamp(4rem, 5.2vw, 4.75rem) !important;
    line-height: .9 !important;
    letter-spacing: -.04em;
    color: #102a55 !important;
    -webkit-text-fill-color: #102a55 !important;
    text-shadow: 0 6px 18px rgba(28, 72, 129, .14);
  }

  .renal-title p {
    margin: .25rem 0 0;
    color: #59617f;
    font-size: clamp(1.05rem, 1.6vw, 1.35rem);
    font-weight: 900;
  }

  .renal-map {
    position: relative;
    width: min(100%, 1300px);
    min-height: 510px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(300px, 340px) minmax(430px, 480px) minmax(300px, 340px);
    gap: clamp(55px, 5vw, 75px);
    align-items: center;
    justify-content: center;
  }

  .renal-topic-column {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 2.05rem;
  }

  .renal-topic-column-right {
    justify-content: center;
    gap: 5rem;
  }

  .renal-stage {
    position: relative;
    z-index: 2;
    display: grid;
    justify-items: center;
    align-items: start;
    min-width: 0;
  }

  .renal-anatomy {
    position: relative;
    left: auto;
    top: auto;
    width: auto !important;
    height: clamp(430px, 54vh, 500px) !important;
    max-width: none !important;
    max-height: 500px !important;
    min-width: 0;
    transform: none;
    z-index: 2;
    display: block !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    outline: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    object-fit: contain !important;
    filter: drop-shadow(0 18px 24px rgba(66, 121, 173, .15));
  }

  .renal-connectors {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    overflow: visible;
  }

  .renal-connectors path {
    fill: none;
    stroke-width: 3.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .renal-connectors circle {
    stroke: #fbfdff;
    stroke-width: 3.8;
  }

  .renal-line-uti,
  .renal-dot-uti { stroke: #3177e8; fill: #3177e8; }

  .renal-line-stones,
  .renal-dot-stones { stroke: #339763; fill: #339763; }

  .renal-line-glom,
  .renal-dot-glom { stroke: #20afc5; fill: #20afc5; }

  .renal-line-procedure,
  .renal-dot-procedure { stroke: #ff654d; fill: #ff654d; }

  .renal-line-disease,
  .renal-dot-disease { stroke: #8c60cf; fill: #8c60cf; }

  .renal-topic-card {
    position: relative;
    z-index: 3;
    width: 100%;
    min-height: 102px;
    display: grid;
    grid-template-columns: 4rem 1fr;
    align-items: center;
    gap: .95rem;
    padding: .82rem 1rem;
    border-radius: 24px;
    background: rgba(255,255,255,.76);
    border: 1.5px solid var(--renal-border);
    color: var(--renal-card-color) !important;
    text-decoration: none !important;
    box-shadow: 0 10px 24px rgba(43, 82, 126, .10), inset 0 1px 0 rgba(255,255,255,.92);
    backdrop-filter: blur(12px);
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
  }

  .renal-topic-card:hover,
  .renal-topic-card:focus-visible {
    transform: translateY(-4px);
    background: rgba(255,255,255,.92);
    box-shadow: 0 18px 34px rgba(43, 82, 126, .19), inset 0 1px 0 rgba(255,255,255,.94);
  }

  .renal-topic-card strong {
    font-family: "Playfair Display", Georgia, serif !important;
    font-size: clamp(1.32rem, 1.85vw, 1.72rem);
    line-height: 1.12;
    color: currentColor !important;
    -webkit-text-fill-color: currentColor !important;
  }

  .renal-topic-icon {
    width: 3.85rem;
    height: 3.85rem;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: var(--renal-icon-bg);
    color: inherit !important;
  }

  .renal-topic-icon svg {
    width: 2.4rem;
    height: 2.4rem;
    stroke: currentColor;
    fill: none;
    stroke-width: 2.3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .renal-card-uti {
    --renal-card-color: #276ad6;
    --renal-border: #98bef7;
    --renal-icon-bg: #dceaff;
    background: linear-gradient(135deg, rgba(255,255,255,.84), rgba(231,242,255,.86));
  }

  .renal-card-stones {
    --renal-card-color: #2e8e5b;
    --renal-border: #a9d8bd;
    --renal-icon-bg: #dff3e7;
    background: linear-gradient(135deg, rgba(255,255,255,.82), rgba(231,247,237,.88));
  }

  .renal-card-glom {
    --renal-card-color: #159eb2;
    --renal-border: #9fdae4;
    --renal-icon-bg: #dcf5f8;
    background: linear-gradient(135deg, rgba(255,255,255,.82), rgba(228,248,251,.9));
  }

  .renal-card-procedure {
    --renal-card-color: #f0604b;
    --renal-border: #f5b0a4;
    --renal-icon-bg: #ffe0da;
    background: linear-gradient(135deg, rgba(255,255,255,.84), rgba(255,239,235,.88));
  }

  .renal-card-disease {
    --renal-card-color: #845cc2;
    --renal-border: #cdb6ed;
    --renal-icon-bg: #ece2fb;
    background: linear-gradient(135deg, rgba(255,255,255,.84), rgba(243,236,255,.9));
  }

  body[data-page-type="renal-hub"] .main-content .renal-topic-card,
  body[data-page-type="renal-hub"] .main-content .renal-topic-card:visited {
    color: var(--renal-card-color) !important;
    border-color: var(--renal-border) !important;
  }

  body[data-page-type="renal-hub"] .main-content .renal-topic-card strong,
  body[data-page-type="renal-hub"] .main-content .renal-topic-card svg {
    color: inherit !important;
    stroke: currentColor !important;
  }

  body[data-page-type="renal-hub"] .main-content img.renal-anatomy {
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .renal-home-link {
    width: min(390px, 92%);
    min-height: 52px;
    margin: .35rem auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    border: 2px solid #91bff5;
    border-radius: .85rem;
    background: rgba(255,255,255,.68);
    color: #236ed6 !important;
    text-decoration: none !important;
    font-size: clamp(.9rem, 1.25vw, 1.06rem);
    font-weight: 1000;
    box-shadow: 0 10px 24px rgba(62, 112, 170, .11);
    backdrop-filter: blur(12px);
  }

  .renal-home-link:hover,
  .renal-home-link:focus-visible {
    transform: translateY(-3px);
    background: rgba(255,255,255,.9);
  }

  .renal-home-link svg {
    width: 1.8rem;
    height: 1.8rem;
    stroke: currentColor;
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (prefers-reduced-motion: reduce) {
    .renal-topic-card,
    .renal-home-link {
      transition: none;
    }

    .renal-topic-card:hover,
    .renal-topic-card:focus-visible,
    .renal-home-link:hover,
    .renal-home-link:focus-visible {
      transform: none;
    }
  }

  @media (max-width: 1050px) {
    .renal-map {
      min-height: auto;
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 1rem;
    }

    .renal-stage {
      order: 1;
    }

    .renal-topic-column {
      order: 2;
      width: min(720px, 100%);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .renal-topic-column-right {
      order: 3;
      justify-content: initial;
    }

    .renal-anatomy {
      position: relative;
      top: auto;
      left: auto;
      transform: none;
      width: auto !important;
      height: min(480px, 62vh) !important;
      min-width: 0;
      justify-self: center;
      margin: 0 auto .5rem;
    }

    .renal-connectors {
      display: none;
    }

    .renal-topic-card { min-width: 0; }
  }

  @media (max-width: 620px) {
    .renal-hero {
      padding: 1.6rem 1rem 3rem;
    }

    .renal-title h1 {
      font-size: clamp(3rem, 15vw, 4.1rem) !important;
    }

    .renal-title p {
      font-size: 1.15rem;
    }

    .renal-topic-card {
      grid-template-columns: 4rem 1fr;
      min-height: 96px;
      border-radius: 20px;
      padding: .9rem 1rem;
    }

    .renal-topic-column {
      grid-template-columns: 1fr;
    }

    .renal-topic-icon {
      width: 3.8rem;
      height: 3.8rem;
    }

    .renal-topic-icon svg {
      width: 2.45rem;
      height: 2.45rem;
    }

    .renal-topic-card strong {
      font-size: 1.32rem;
    }

    .renal-home-link {
      min-height: 74px;
      font-size: 1.05rem;
    }
  }
</style>

<section class="renal-page" aria-labelledby="renal-title">
  <div class="renal-hero">
    <div class="renal-title">
      <h1 id="renal-title">Renal &amp; Urinary</h1>
      <p>Select a topic to study.</p>
    </div>

    <div class="renal-map" aria-label="Renal and urinary topic map">
      <svg class="renal-connectors" viewBox="0 0 1300 510" preserveAspectRatio="none" aria-hidden="true">
        <path class="renal-line-uti" d="M340 120 H402 C432 120 448 145 500 145"/>
        <circle class="renal-dot-uti" cx="340" cy="120" r="7"/>
        <circle class="renal-dot-uti" cx="500" cy="145" r="7"/>

        <path class="renal-line-stones" d="M340 254 H500"/>
        <circle class="renal-dot-stones" cx="340" cy="254" r="7"/>
        <circle class="renal-dot-stones" cx="500" cy="254" r="7"/>

        <path class="renal-line-glom" d="M340 390 H390 C430 390 456 305 500 305"/>
        <circle class="renal-dot-glom" cx="340" cy="390" r="7"/>
        <circle class="renal-dot-glom" cx="500" cy="305" r="7"/>

        <path class="renal-line-procedure" d="M960 166 H900 C858 166 830 206 780 214"/>
        <circle class="renal-dot-procedure" cx="960" cy="166" r="7"/>
        <circle class="renal-dot-procedure" cx="780" cy="214" r="7"/>

        <path class="renal-line-disease" d="M960 352 H745"/>
        <circle class="renal-dot-disease" cx="960" cy="352" r="7"/>
        <circle class="renal-dot-disease" cx="745" cy="352" r="7"/>
      </svg>

      <div class="renal-topic-column renal-topic-column-left">
        <a class="renal-topic-card renal-card-uti" href="{{ '/renal-urinary/urinary-tract-infections.html' | relative_url }}">
          <span class="renal-topic-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64">
              <path d="M17 16c2-4 8-5 15-5s13 1 15 5M14 23c-2 14 3 26 18 31 15-5 20-17 18-31"/>
              <path d="M24 52v7M40 52v7M32 54v-8M20 29c5 7 19 7 24 0"/>
            </svg>
          </span>
          <strong>Urinary Tract Infections</strong>
        </a>

        <a class="renal-topic-card renal-card-stones" href="{{ '/renal-urinary/kidney-stones.html' | relative_url }}">
          <span class="renal-topic-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64">
              <path d="M34 7c-13 9-23 23-23 36 0 8 5 14 13 14 6 0 10-4 10-10 0-10-13-12-13-23 0-7 5-13 13-17Z"/>
              <path d="M42 16c7 7 11 16 11 26 0 9-5 15-13 15M38 34l4-4 5 3-2 6-6 1Z"/>
              <circle cx="28" cy="41" r="3"/>
            </svg>
          </span>
          <strong>Kidney Stones</strong>
        </a>

        <a class="renal-topic-card renal-card-glom" href="{{ '/renal-urinary/glomerulonephritis.html' | relative_url }}">
          <span class="renal-topic-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64">
              <path d="M31 55V38M31 38c-13 1-22-5-22-15 0-8 6-14 14-14 7 0 12 4 14 10"/>
              <path d="M31 38c13 1 24-5 24-16 0-8-6-14-14-14-7 0-12 4-14 10"/>
              <path d="M31 38 16 50M31 38l16 11M31 38 15 30M31 38l18-12M31 38V20"/>
              <circle cx="31" cy="38" r="5"/>
            </svg>
          </span>
          <strong>Glomerulonephritis</strong>
        </a>
      </div>

      <div class="renal-stage">
        <img class="renal-anatomy" src="{{ '/assets/images/renal-urinary-system.png' | relative_url }}" alt="Soft illustration of the torso, kidneys, ureters, and bladder" data-no-lb>

        <a class="renal-home-link" href="{{ '/all-topics.html' | relative_url }}">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <path d="M8 31 32 10l24 21"/>
            <path d="M15 29v25h13V39h8v15h13V29"/>
          </svg>
          <span>Back to Nursing School Hub</span>
        </a>
      </div>

      <div class="renal-topic-column renal-topic-column-right">
        <a class="renal-topic-card renal-card-procedure" href="{{ '/renal-urinary/dialysis-transplant-procedures.html' | relative_url }}">
          <span class="renal-topic-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64">
              <rect x="13" y="10" width="30" height="44" rx="5"/>
              <path d="M20 18h16v16H20zM20 42h16M20 48h16M47 24h5v21c0 5-4 9-9 9"/>
              <path d="M27 42v5M32 42v5"/>
            </svg>
          </span>
          <strong>Dialysis, Transplant &amp; Urinary Procedures</strong>
        </a>

        <a class="renal-topic-card renal-card-disease" href="{{ '/renal-urinary/acute-chronic-kidney-disease.html' | relative_url }}">
          <span class="renal-topic-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64">
              <path d="M24 12c-12 5-17 18-11 30 4 8 12 11 18 6 6-5 4-14-2-19-5-4-5-11-5-17Z"/>
              <path d="M40 12c12 5 17 18 11 30-4 8-12 11-18 6-6-5-4-14 2-19 5-4 5-11 5-17Z"/>
              <path d="M24 48v8M40 48v8"/>
            </svg>
          </span>
          <strong>Acute &amp; Chronic Kidney Disease</strong>
        </a>
      </div>
    </div>
  </div>
</section>
