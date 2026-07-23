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
    padding: clamp(.9rem, 2vh, 1.35rem) clamp(1.2rem, 4vw, 4.2rem) .95rem;
  }

  .renal-title {
    text-align: center;
    margin-bottom: clamp(.75rem, 1.6vh, 1rem);
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
    font-size: clamp(3.35rem, 5.6vw, 5.25rem) !important;
    line-height: .9 !important;
    letter-spacing: -.04em;
    color: #102a55 !important;
    -webkit-text-fill-color: #102a55 !important;
    text-shadow: 0 6px 18px rgba(28, 72, 129, .14);
  }

  .renal-title p {
    margin: .45rem 0 0;
    color: #59617f;
    font-size: clamp(1.08rem, 1.75vw, 1.45rem);
    font-weight: 900;
  }

  .renal-map {
    position: relative;
    min-height: min(49vh, 430px);
  }

  .renal-anatomy {
    position: absolute;
    left: 50%;
    top: .15rem;
    width: min(30vw, 300px);
    min-width: 255px;
    transform: translateX(-50%);
    z-index: 2;
    filter: drop-shadow(0 20px 34px rgba(66, 121, 173, .16));
  }

  .renal-connectors {
    position: absolute;
    inset: 0;
    width: 100%;
    height: min(49vh, 430px);
    pointer-events: none;
    z-index: 3;
    overflow: visible;
  }

  .renal-connectors path {
    fill: none;
    stroke-width: 3.4;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .renal-connectors circle {
    stroke: #f7fbff;
    stroke-width: 3.4;
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
    width: min(31vw, 340px);
    min-width: 275px;
    min-height: 96px;
    display: grid;
    grid-template-columns: 4.35rem 1fr;
    align-items: center;
    gap: .95rem;
    padding: .8rem 1rem;
    border-radius: 1rem;
    background: rgba(255,255,255,.76);
    border: 2px solid currentColor;
    color: var(--renal-card-color);
    text-decoration: none !important;
    box-shadow: 0 12px 26px rgba(43, 82, 126, .13), inset 0 1px 0 rgba(255,255,255,.88);
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
    font-size: clamp(1.3rem, 2vw, 1.72rem);
    line-height: 1.13;
    color: currentColor;
  }

  .renal-topic-icon {
    width: 3.95rem;
    height: 3.95rem;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: color-mix(in srgb, currentColor 14%, white);
  }

  .renal-topic-icon svg {
    width: 2.55rem;
    height: 2.55rem;
    stroke: currentColor;
    fill: none;
    stroke-width: 2.3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .renal-card-uti {
    --renal-card-color: #276ad6;
    left: 1.2rem;
    top: .85rem;
    background: linear-gradient(135deg, rgba(255,255,255,.84), rgba(231,242,255,.86));
  }

  .renal-card-stones {
    --renal-card-color: #2e8e5b;
    left: 1.2rem;
    top: 10.15rem;
    background: linear-gradient(135deg, rgba(255,255,255,.82), rgba(231,247,237,.88));
  }

  .renal-card-glom {
    --renal-card-color: #159eb2;
    left: 1.2rem;
    top: 19.45rem;
    background: linear-gradient(135deg, rgba(255,255,255,.82), rgba(228,248,251,.9));
  }

  .renal-card-procedure {
    --renal-card-color: #f0604b;
    right: 1.2rem;
    top: 5.9rem;
    background: linear-gradient(135deg, rgba(255,255,255,.84), rgba(255,239,235,.88));
  }

  .renal-card-disease {
    --renal-card-color: #845cc2;
    right: 1.2rem;
    top: 20.35rem;
    background: linear-gradient(135deg, rgba(255,255,255,.84), rgba(243,236,255,.9));
  }

  .renal-home-link {
    width: min(410px, 92%);
    min-height: 58px;
    margin: .55rem auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    border: 2px solid #91bff5;
    border-radius: .85rem;
    background: rgba(255,255,255,.68);
    color: #236ed6 !important;
    text-decoration: none !important;
    font-size: clamp(1rem, 1.45vw, 1.22rem);
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

      <svg class="renal-anatomy" viewBox="0 0 360 520" role="img" aria-label="Illustration of the torso, kidneys, ureters, and bladder">
        <defs>
          <linearGradient id="renalOrgan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff9ca0"/>
            <stop offset="55%" stop-color="#ef6d76"/>
            <stop offset="100%" stop-color="#d84b5c"/>
          </linearGradient>
          <linearGradient id="renalOrganSoft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffc8ca"/>
            <stop offset="100%" stop-color="#ee7280"/>
          </linearGradient>
          <radialGradient id="torsoGlow" cx="50%" cy="48%" r="58%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity=".96"/>
            <stop offset="62%" stop-color="#eaf5ff" stop-opacity=".88"/>
            <stop offset="100%" stop-color="#ddecff" stop-opacity=".22"/>
          </radialGradient>
        </defs>

        <ellipse cx="180" cy="250" rx="150" ry="226" fill="url(#torsoGlow)"/>
        <path d="M127 11c-1 30-11 47-34 62-29 19-40 52-44 94-6 64-19 105-30 152-7 30-2 73 4 121 3 25 5 45 3 67" fill="none" stroke="#8fb8f5" stroke-width="2"/>
        <path d="M233 11c1 30 11 47 34 62 29 19 40 52 44 94 6 64 19 105 30 152 7 30 2 73-4 121-3 25-5 45-3 67" fill="none" stroke="#8fb8f5" stroke-width="2"/>
        <path d="M98 39c48 14 116 14 164 0" fill="none" stroke="#bcd5fb" stroke-width="2"/>
        <path d="M78 156c34-40 170-40 204 0" fill="none" stroke="#bcd5fb" stroke-width="1.8"/>
        <path d="M83 203c32-35 162-35 194 0M86 247c29-30 159-30 188 0" fill="none" stroke="#d1e2fb" stroke-width="1.6"/>

        <g opacity=".68" stroke="#bdd6fa" stroke-width="1.5" fill="none">
          <path d="M111 84c7 45 34 71 69 79 35-8 62-34 69-79"/>
          <path d="M104 109c22 11 46 18 76 20 30-2 54-9 76-20"/>
          <path d="M96 137c27 12 54 19 84 21 30-2 57-9 84-21"/>
          <path d="M92 166c29 11 58 18 88 20 30-2 59-9 88-20"/>
          <path d="M131 50c-9 30-9 78 49 113M229 50c9 30 9 78-49 113"/>
          <path d="M180 74v331"/>
        </g>

        <path d="M92 360c25-36 54-52 88-52s63 16 88 52" fill="none" stroke="#c2d8f7" stroke-width="2"/>
        <path d="M108 385c18-27 42-39 72-39s54 12 72 39" fill="none" stroke="#d4e4fb" stroke-width="1.7"/>

        <path d="M133 214c-24-7-47 18-45 54 1 34 24 57 49 49 24-7 33-39 25-69-5-19-15-30-29-34Z" fill="url(#renalOrgan)" stroke="#ca4959" stroke-width="3"/>
        <path d="M227 214c24-7 47 18 45 54-1 34-24 57-49 49-24-7-33-39-25-69 5-19 15-30 29-34Z" fill="url(#renalOrgan)" stroke="#ca4959" stroke-width="3"/>
        <path d="M141 238c-14 10-18 36-8 55M219 238c14 10 18 36 8 55" fill="none" stroke="#fbb5b9" stroke-width="4" stroke-linecap="round" opacity=".72"/>
        <path d="M156 294c0 31 5 56 17 79M204 294c0 31-5 56-17 79" fill="none" stroke="#df5e68" stroke-width="6" stroke-linecap="round"/>
        <path d="M156 294c0 31 5 56 17 79M204 294c0 31-5 56-17 79" fill="none" stroke="#ffb5b9" stroke-width="2" stroke-linecap="round"/>
        <path d="M149 390c3-32 59-32 62 0 2 26-9 45-26 50v32c0 9-10 9-10 0v-32c-17-5-28-24-26-50Z" fill="url(#renalOrganSoft)" stroke="#cf5260" stroke-width="3"/>
        <path d="M160 397c15 9 25 9 40 0" fill="none" stroke="#f8a1a8" stroke-width="4" stroke-linecap="round"/>
      </svg>

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
