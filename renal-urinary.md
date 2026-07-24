---
layout: default
title: Renal & Urinary
page_type: renal-hub
---

<style>
  body[data-page-type="renal-hub"] {
    margin: 0;
    background: #f7fbff !important;
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
    background: #f7fbff !important;
  }

  .renal-page {
    min-height: calc(100vh - 92px);
    font-family: "Nunito", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background:
      radial-gradient(circle at 50% 28%, rgba(255,255,255,.96) 0 21rem, rgba(232,244,255,.64) 39rem, transparent 58rem),
      linear-gradient(180deg, #fafdff 0%, #edf7ff 100%);
  }

  .renal-hero {
    width: min(100%, 1440px);
    margin: 0 auto;
    padding: clamp(.55rem, 1.2vh, .85rem) clamp(1.2rem, 4vw, 4.2rem) .7rem;
  }

  .renal-title {
    text-align: center;
    margin-bottom: clamp(.45rem, 1vh, .7rem);
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
    font-size: clamp(3.15rem, 5.2vw, 5rem) !important;
    line-height: .9 !important;
    letter-spacing: -.04em;
    color: #102a55 !important;
    -webkit-text-fill-color: #102a55 !important;
    text-shadow: 0 6px 18px rgba(28, 72, 129, .14);
  }

  .renal-title p {
    margin: .25rem 0 0;
    color: #59617f;
    font-size: clamp(1.08rem, 1.75vw, 1.45rem);
    font-weight: 900;
  }

  .renal-map {
    position: relative;
    min-height: min(48vh, 405px);
  }

  .renal-anatomy {
    position: absolute;
    left: 50%;
    top: -.1rem;
    width: auto !important;
    height: min(47vh, 400px) !important;
    max-width: none !important;
    max-height: 400px !important;
    min-width: 0;
    transform: translateX(-50%);
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
    height: min(48vh, 405px);
    pointer-events: none;
    z-index: 3;
    overflow: visible;
  }

  .renal-connectors path {
    fill: none;
    stroke-width: 3.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .renal-connectors circle {
    stroke: #f7fbff;
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
    position: absolute;
    z-index: 4;
    width: min(29vw, 330px);
    min-width: 265px;
    min-height: 84px;
    display: grid;
    grid-template-columns: 3.55rem 1fr;
    align-items: center;
    gap: .75rem;
    padding: .65rem .85rem;
    border-radius: 18px;
    background: rgba(255,255,255,.76);
    border: 2px solid var(--renal-border);
    color: var(--renal-card-color) !important;
    text-decoration: none !important;
    box-shadow: 0 9px 20px rgba(43, 82, 126, .10), inset 0 1px 0 rgba(255,255,255,.9);
    backdrop-filter: blur(12px);
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
  }

  .renal-topic-card:hover,
  .renal-topic-card:focus-visible {
    transform: translateY(-5px);
    background: rgba(255,255,255,.92);
    box-shadow: 0 18px 34px rgba(43, 82, 126, .19), inset 0 1px 0 rgba(255,255,255,.94);
  }

  .renal-topic-card strong {
    font-family: "Playfair Display", Georgia, serif !important;
    font-size: clamp(1.16rem, 1.75vw, 1.58rem);
    line-height: 1.13;
    color: currentColor !important;
    -webkit-text-fill-color: currentColor !important;
  }

  .renal-topic-icon {
    width: 3.15rem;
    height: 3.15rem;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: var(--renal-icon-bg);
    color: inherit !important;
  }

  .renal-topic-icon svg {
    width: 2rem;
    height: 2rem;
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
    left: 1.2rem;
    top: .65rem;
    background: linear-gradient(135deg, rgba(255,255,255,.84), rgba(231,242,255,.86));
  }

  .renal-card-stones {
    --renal-card-color: #2e8e5b;
    --renal-border: #a9d8bd;
    --renal-icon-bg: #dff3e7;
    left: 1.2rem;
    top: 9.15rem;
    background: linear-gradient(135deg, rgba(255,255,255,.82), rgba(231,247,237,.88));
  }

  .renal-card-glom {
    --renal-card-color: #159eb2;
    --renal-border: #9fdae4;
    --renal-icon-bg: #dcf5f8;
    left: 1.2rem;
    top: 17.65rem;
    background: linear-gradient(135deg, rgba(255,255,255,.82), rgba(228,248,251,.9));
  }

  .renal-card-procedure {
    --renal-card-color: #f0604b;
    --renal-border: #f5b0a4;
    --renal-icon-bg: #ffe0da;
    right: 1.2rem;
    top: 5.1rem;
    background: linear-gradient(135deg, rgba(255,255,255,.84), rgba(255,239,235,.88));
  }

  .renal-card-disease {
    --renal-card-color: #845cc2;
    --renal-border: #cdb6ed;
    --renal-icon-bg: #ece2fb;
    right: 1.2rem;
    top: 17.85rem;
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
    width: min(410px, 92%);
    min-height: 52px;
    margin: .2rem auto 0;
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

  @media (max-width: 1050px) {
    .renal-map {
      min-height: auto;
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 1rem;
    }

    .renal-anatomy {
      position: relative;
      top: auto;
      left: auto;
      transform: none;
      width: min(440px, 82vw);
      min-width: 0;
      justify-self: center;
      margin: 0 auto .5rem;
    }

    .renal-connectors {
      display: none;
    }

    .renal-topic-card {
      position: relative;
      inset: auto;
      width: min(720px, 100%);
      min-width: 0;
      justify-self: center;
    }
  }

  @media (max-width: 620px) {
    .renal-hero {
      padding: 2.4rem 1rem 3rem;
    }

    .renal-title h1 {
      font-size: clamp(3rem, 15vw, 4.1rem) !important;
    }

    .renal-title p {
      font-size: 1.15rem;
    }

    .renal-topic-card {
      grid-template-columns: 4.2rem 1fr;
      min-height: 96px;
      border-radius: 1rem;
      padding: .9rem 1rem;
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
      <svg class="renal-connectors" viewBox="0 0 1280 590" aria-hidden="true">
        <path class="renal-line-uti" d="M365 95 H438 C475 95 488 167 529 167"/>
        <circle class="renal-dot-uti" cx="365" cy="95" r="9"/>
        <circle class="renal-dot-uti" cx="529" cy="167" r="9"/>

        <path class="renal-line-stones" d="M365 246 H530"/>
        <circle class="renal-dot-stones" cx="365" cy="246" r="9"/>
        <circle class="renal-dot-stones" cx="530" cy="246" r="9"/>

        <path class="renal-line-glom" d="M365 397 H410 C447 397 475 282 534 272"/>
        <circle class="renal-dot-glom" cx="365" cy="397" r="9"/>
        <circle class="renal-dot-glom" cx="534" cy="272" r="9"/>

        <path class="renal-line-procedure" d="M914 180 H856 C817 180 795 219 741 229"/>
        <circle class="renal-dot-procedure" cx="914" cy="180" r="9"/>
        <circle class="renal-dot-procedure" cx="741" cy="229" r="9"/>

        <path class="renal-line-disease" d="M914 396 H675"/>
        <circle class="renal-dot-disease" cx="914" cy="396" r="9"/>
        <circle class="renal-dot-disease" cx="675" cy="396" r="9"/>
      </svg>

      <img class="renal-anatomy" src="{{ '/assets/images/renal-urinary-system.png' | relative_url }}" alt="Soft illustration of the torso, kidneys, ureters, and bladder" data-no-lb>

      <a class="renal-topic-card renal-card-uti" href="{{ '/renal-urinary/urinary-tract-infections.html' | relative_url }}">
        <span class="renal-topic-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64">
            <path d="M17 16c2-4 8-5 15-5s13 1 15 5M14 23c-2 14 3 26 18 31 15-5 20-17 18-31"/>
            <path d="M24 52v7M40 52v7M32 54v-8M20 29c5 7 19 7 24 0"/>
          </svg>
        </span>
        <strong>Urinary Tract<br>Infections</strong>
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

      <a class="renal-topic-card renal-card-procedure" href="{{ '/renal-urinary/dialysis-transplant-procedures.html' | relative_url }}">
        <span class="renal-topic-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64">
            <rect x="13" y="10" width="30" height="44" rx="5"/>
            <path d="M20 18h16v16H20zM20 42h16M20 48h16M47 24h5v21c0 5-4 9-9 9"/>
            <path d="M27 42v5M32 42v5"/>
          </svg>
        </span>
        <strong>Dialysis, Transplant &amp;<br>Urinary Procedures</strong>
      </a>

      <a class="renal-topic-card renal-card-disease" href="{{ '/renal-urinary/acute-chronic-kidney-disease.html' | relative_url }}">
        <span class="renal-topic-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64">
            <path d="M24 12c-12 5-17 18-11 30 4 8 12 11 18 6 6-5 4-14-2-19-5-4-5-11-5-17Z"/>
            <path d="M40 12c12 5 17 18 11 30-4 8-12 11-18 6-6-5-4-14 2-19 5-4 5-11 5-17Z"/>
            <path d="M24 48v8M40 48v8"/>
          </svg>
        </span>
        <strong>Acute &amp; Chronic<br>Kidney Disease</strong>
      </a>
    </div>

    <a class="renal-home-link" href="{{ '/all-topics.html' | relative_url }}">
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 31 32 10l24 21"/>
        <path d="M15 29v25h13V39h8v15h13V29"/>
      </svg>
      <span>Back to Nursing School Hub</span>
    </a>
  </div>
</section>
