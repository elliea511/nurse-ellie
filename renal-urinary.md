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

      <svg class="renal-anatomy" viewBox="0 0 360 520" role="img" aria-label="Soft illustration of the torso, kidneys, ureters, and bladder">
        <defs>
          <radialGradient id="renalBodyGlow" cx="50%" cy="46%" r="62%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
            <stop offset="58%" stop-color="#edf7ff" stop-opacity=".92"/>
            <stop offset="100%" stop-color="#dcecff" stop-opacity=".08"/>
          </radialGradient>
          <linearGradient id="renalBodyLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#b7d4ff"/>
            <stop offset="100%" stop-color="#7aaeff"/>
          </linearGradient>
          <linearGradient id="renalKidney" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffa8ac"/>
            <stop offset="48%" stop-color="#ee6876"/>
            <stop offset="100%" stop-color="#d94f62"/>
          </linearGradient>
          <linearGradient id="renalBladder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffc1c6"/>
            <stop offset="100%" stop-color="#ed7683"/>
          </linearGradient>
          <filter id="renalSoftShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="10" stdDeviation="9" flood-color="#4679bd" flood-opacity=".14"/>
          </filter>
          <filter id="organSoftShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#cc5264" flood-opacity=".25"/>
          </filter>
        </defs>

        <ellipse cx="180" cy="252" rx="145" ry="218" fill="url(#renalBodyGlow)" filter="url(#renalSoftShadow)"/>

        <g fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M128 18c-.5 30-10 49-34 65-26 17-38 47-42 86-5 54-16 93-27 135-9 36-3 76 2 119 3 25 5 49 2 73" stroke="url(#renalBodyLine)" stroke-width="2.2" opacity=".82"/>
          <path d="M232 18c.5 30 10 49 34 65 26 17 38 47 42 86 5 54 16 93 27 135 9 36 3 76-2 119-3 25-5 49-2 73" stroke="url(#renalBodyLine)" stroke-width="2.2" opacity=".82"/>
          <path d="M105 71c41 15 109 15 150 0" stroke="#bdd8ff" stroke-width="1.8" opacity=".75"/>
          <path d="M85 150c30-42 160-42 190 0" stroke="#cde0fb" stroke-width="1.7" opacity=".82"/>
          <path d="M89 195c31-32 151-32 182 0M96 238c30-25 138-25 168 0" stroke="#d7e7ff" stroke-width="1.55" opacity=".78"/>
          <path d="M96 359c25-34 55-51 84-51s59 17 84 51" stroke="#c7dcfa" stroke-width="1.9" opacity=".82"/>
          <path d="M112 386c18-24 41-35 68-35s50 11 68 35" stroke="#d8e8ff" stroke-width="1.45" opacity=".74"/>
          <path d="M180 78v328" stroke="#c6ddfb" stroke-width="1.5" opacity=".7"/>
        </g>

        <g fill="none" stroke="#c4dcff" stroke-linecap="round" stroke-linejoin="round" opacity=".62">
          <path d="M111 118c21 8 44 13 69 14 25-1 48-6 69-14" stroke-width="1.4"/>
          <path d="M104 145c24 8 49 13 76 14 27-1 52-6 76-14" stroke-width="1.4"/>
          <path d="M101 172c25 8 51 13 79 14 28-1 54-6 79-14" stroke-width="1.4"/>
          <path d="M127 88c-8 34-3 66 53 91M233 88c8 34 3 66-53 91" stroke-width="1.35"/>
        </g>

        <g filter="url(#organSoftShadow)">
          <path d="M132 219c-24-5-42 22-38 56 4 32 24 53 48 43 23-9 30-42 19-71-6-16-16-25-29-28Z" fill="url(#renalKidney)" stroke="#cc4b5c" stroke-width="2.6"/>
          <path d="M228 219c24-5 42 22 38 56-4 32-24 53-48 43-23-9-30-42-19-71 6-16 16-25 29-28Z" fill="url(#renalKidney)" stroke="#cc4b5c" stroke-width="2.6"/>
          <path d="M141 245c-12 11-15 36-6 54M219 245c12 11 15 36 6 54" fill="none" stroke="#ffbcc2" stroke-width="4.4" stroke-linecap="round" opacity=".72"/>
          <path d="M157 296c0 29 5 55 17 78M203 296c0 29-5 55-17 78" fill="none" stroke="#d85966" stroke-width="6" stroke-linecap="round"/>
          <path d="M157 296c0 29 5 55 17 78M203 296c0 29-5 55-17 78" fill="none" stroke="#ffbdc2" stroke-width="2.3" stroke-linecap="round"/>
          <path d="M149 389c2-14 13-24 31-24s29 10 31 24c3 26-8 45-26 51v33c0 8-10 8-10 0v-33c-18-6-29-25-26-51Z" fill="url(#renalBladder)" stroke="#cf5260" stroke-width="2.8"/>
          <path d="M161 397c13 8 25 8 38 0" fill="none" stroke="#ffc0c5" stroke-width="4" stroke-linecap="round" opacity=".75"/>
        </g>
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
