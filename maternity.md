---
layout: default
title: Maternity
page_type: maternity-hub
---

<style>
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
    --mat-navy: #0b174e;
    --mat-rose: #f35a9a;
    --mat-rose-deep: #d83378;
    --mat-blush: #fff0f6;
    --mat-blush-2: #fde8f2;
    --mat-lavender: #8060bf;
    --mat-lavender-soft: #f2ecff;
    --mat-peach: #f47b4f;
    --mat-peach-soft: #fff0e8;
    --mat-mint: #35a96f;
    --mat-mint-soft: #e8f8ef;
    --mat-aqua: #25b5c8;
    --mat-aqua-soft: #e8f9fc;
    --mat-blue: #5f6fea;
    --mat-blue-soft: #efefff;
    --mat-muted: #68728c;
    padding: 0 2rem;
    color: var(--mat-navy);
  }

  .maternity-hub .mh-hub-header h1 {
    color: var(--mat-navy) !important;
    -webkit-text-fill-color: var(--mat-navy) !important;
    font-family: "Playfair Display", Georgia, serif !important;
    font-size: clamp(2.45rem, 4.6vw, 4.35rem) !important;
    font-weight: 900 !important;
    line-height: .98 !important;
    letter-spacing: -.04em;
  }

  .maternity-hub .mh-hub-header p {
    color: var(--mat-rose);
    font-weight: 900;
  }

  .maternity-brandmark,
  .maternity-sidebar-icon,
  .maternity-topic-icon,
  .maternity-shortcut-icon {
    color: var(--mat-rose);
  }

  .maternity-brandmark svg {
    width: 4.15rem;
    height: 4.15rem;
    stroke: currentColor;
    filter: drop-shadow(0 10px 14px rgba(243, 90, 154, .14));
  }

  .maternity-orbit {
    min-height: 820px;
  }

  .maternity-orbit::before {
    inset: 10% 18%;
    border-color: rgba(243, 90, 154, .38);
  }

  .maternity-orbit .mh-connector-lines line {
    stroke: rgba(243, 90, 154, .64);
    stroke-width: 2;
    stroke-dasharray: 5 8;
  }

  .maternity-orbit .mh-connector-dots circle {
    fill: var(--mat-rose);
  }

  .maternity-center {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 29rem;
    height: 34rem;
    transform: translate(-50%, -50%);
    color: var(--mat-rose);
  }

  .maternity-hub__illustration-wrap {
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
  }

  .maternity-hub__illustration-glow {
    position: absolute;
    inset: 11% 11% 12%;
    border: 1px solid rgba(243, 90, 154, .1);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(253, 232, 242, .9), rgba(242, 236, 255, .5) 58%, rgba(255, 255, 255, 0) 72%);
  }

  .maternity-hub__illustration {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: visible;
    color: var(--mat-rose);
    filter: drop-shadow(0 20px 22px rgba(122, 56, 96, .12));
  }

  .maternity-hub__illustration .soft-fill {
    fill: rgba(243, 90, 154, .055);
    stroke: none;
  }

  .maternity-hub__illustration .womb-fill {
    fill: rgba(243, 90, 154, .075);
    stroke: rgba(243, 90, 154, .72);
  }

  .maternity-hub__illustration .line {
    fill: none;
    stroke: currentColor;
    stroke-width: 2.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .maternity-hub__illustration .line-soft {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.55;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: .44;
  }

  .maternity-orbit .mh-topic-card {
    width: min(245px, 28%);
    border-color: rgba(243, 178, 207, .75);
    box-shadow: 0 8px 20px rgba(84, 45, 74, .09);
  }

  .maternity-orbit .mh-topic-card:hover,
  .maternity-orbit .mh-topic-card:focus-visible {
    border-color: var(--mat-rose);
    box-shadow: 0 13px 26px rgba(84, 45, 74, .14);
  }

  .maternity-orbit .mh-topic-card strong {
    color: var(--mat-navy);
  }

  .maternity-orbit .mh-topic-card small {
    color: var(--mat-muted);
  }

  .maternity-topic-antepartum { left: 50%; top: 15%; }
  .maternity-topic-intrapartum { left: 17%; top: 33%; }
  .maternity-topic-newborn { left: 14%; top: 58%; }
  .maternity-topic-meds { left: 28%; top: 82%; }
  .maternity-topic-labs { left: 72%; top: 82%; }
  .maternity-topic-role { left: 86%; top: 58%; }
  .maternity-topic-postpartum { left: 83%; top: 33%; }

  .maternity-icon-rose { background: var(--mat-blush-2); color: var(--mat-rose-deep); }
  .maternity-icon-lavender { background: var(--mat-lavender-soft); color: var(--mat-lavender); }
  .maternity-icon-peach { background: var(--mat-peach-soft); color: var(--mat-peach); }
  .maternity-icon-mint { background: var(--mat-mint-soft); color: var(--mat-mint); }
  .maternity-icon-aqua { background: var(--mat-aqua-soft); color: var(--mat-aqua); }
  .maternity-icon-blue { background: var(--mat-blue-soft); color: var(--mat-blue); }

  .maternity-topic-icon svg,
  .maternity-sidebar-icon svg,
  .maternity-shortcut-icon svg {
    width: 1.75rem;
    height: 1.75rem;
    stroke: currentColor;
  }

  .maternity-sidebar {
    border-color: rgba(243, 178, 207, .7);
    background: linear-gradient(155deg, #fff, #fffafb);
  }

  .maternity-sidebar h2 {
    color: var(--mat-navy) !important;
  }

  .maternity-sidebar .mh-guide-rule {
    background: rgba(243, 90, 154, .25);
  }

  .maternity-sidebar li::before {
    border-color: var(--mat-rose);
    color: var(--mat-rose-deep);
  }

  .maternity-sidebar .mh-nclex-link {
    border-color: rgba(243, 178, 207, .9);
    background: var(--mat-blush);
    color: #a61f62 !important;
  }

  .maternity-sidebar .mh-nclex-link > span:first-child {
    color: var(--mat-rose);
  }

  .maternity-sidebar .mh-guide-tip {
    border-color: rgba(243, 178, 207, .75);
    background: #fff6fa;
    color: #7d2d5a;
  }

  .maternity-shortcuts {
    grid-template-columns: 1fr;
    width: min(360px, 100%);
    margin-inline: auto;
  }

  .maternity-shortcuts a {
    border-color: rgba(243, 178, 207, .72);
  }

  .maternity-quick-cues {
    width: min(100% - 4rem, 980px);
    margin: 1.5rem auto 0;
    padding: 1.35rem;
    scroll-margin-top: 7rem;
    border: 1px solid rgba(243, 178, 207, .72);
    border-radius: 22px;
    background: rgba(255, 255, 255, .96);
    box-shadow: 0 10px 26px rgba(84, 45, 74, .07);
  }

  .maternity-quick-cues h2 {
    margin: 0 0 .75rem !important;
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
    gap: .55rem 1rem;
    margin: 0;
    padding-left: 1.2rem;
  }

  .maternity-quick-cues li {
    color: var(--mat-muted);
    font-weight: 750;
    line-height: 1.45;
  }

  [data-theme="dark"] .maternity-hub .mh-hub-header h1,
  [data-theme="dark"] .maternity-hub .mh-topic-card strong,
  [data-theme="dark"] .maternity-sidebar h2,
  [data-theme="dark"] .maternity-quick-cues h2 {
    color: #f7edff !important;
    -webkit-text-fill-color: #f7edff !important;
  }

  [data-theme="dark"] .maternity-orbit .mh-topic-card,
  [data-theme="dark"] .maternity-sidebar,
  [data-theme="dark"] .maternity-shortcuts a,
  [data-theme="dark"] .maternity-quick-cues {
    background: #242a3c;
    border-color: #56394d;
  }

  [data-theme="dark"] .maternity-orbit .mh-topic-card small,
  [data-theme="dark"] .maternity-quick-cues li {
    color: #c9bfd1;
  }

  [data-theme="dark"] .maternity-hub__illustration-glow {
    background: radial-gradient(circle, rgba(126, 54, 96, .36), rgba(82, 62, 128, .24) 58%, rgba(255,255,255,0) 72%);
  }

  @media (max-width: 1250px) {
    .maternity-center { width: 25rem; height: 30rem; }
    .maternity-orbit { min-height: 760px; }
  }

  @media (max-width: 980px) {
    .maternity-center { width: 21rem; height: 27rem; }
    .maternity-orbit { min-height: 720px; }
    .maternity-quick-cues { width: min(100% - 1.5rem, 820px); }
  }

  @media (max-width: 740px) {
    .maternity-hub { padding: 0 1rem; }
    .maternity-brandmark svg { width: 3.2rem; height: 3.2rem; }
    .maternity-orbit {
      display: grid;
      grid-template-columns: repeat(2, minmax(125px, 1fr));
      gap: .7rem;
      min-height: auto;
    }
    .maternity-orbit::before,
    .maternity-orbit .mh-orbit-connectors { display: none; }
    .maternity-center {
      position: relative;
      grid-column: 1 / -1;
      top: auto;
      left: auto;
      width: min(22rem, 100%);
      height: 25rem;
      margin: 0 auto;
      transform: none;
    }
    .maternity-orbit .mh-topic-card,
    .maternity-orbit .mh-topic-card:hover,
    .maternity-orbit .mh-topic-card:focus-visible {
      position: relative;
      left: auto;
      top: auto;
      width: 100%;
      transform: none;
    }
    .maternity-quick-cues ul { grid-template-columns: 1fr; }
  }

  @media (max-width: 520px) {
    .maternity-orbit { grid-template-columns: 1fr; }
    .maternity-center { height: 22rem; }
    .maternity-quick-cues { width: min(100% - 1rem, 820px); }
  }

  @media (prefers-reduced-motion: reduce) {
    .maternity-hub .mh-topic-card,
    .maternity-hub .mh-nclex-link,
    .maternity-hub .mh-hub-shortcuts a {
      transition: none;
    }
  }
</style>

<section class="mh-hub maternity-hub" aria-labelledby="maternity-hub-title">
  <header class="mh-hub-header">
    <div class="mh-hub-brandmark maternity-brandmark" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M29 8c-6 2-10 7-10 14 0 4 1 8 4 11"></path>
        <path d="M35 10c8 3 12 11 9 20"></path>
        <path d="M27 21c4-5 10-5 14-1"></path>
        <path d="M31 22c-2 4-1 8 2 11"></path>
        <path d="M24 34c-5 4-8 9-8 15 0 5 4 8 10 8h17c5 0 8-3 8-8 0-9-7-17-16-17"></path>
        <path d="M34 38c7 1 11 5 11 11 0 4-3 6-8 6"></path>
        <path d="M30 42c-5 2-8 6-8 10"></path>
        <path d="M31 49c1-4 4-6 8-5"></path>
      </svg>
    </div>
    <div>
      <h1 id="maternity-hub-title">Maternity Study Hub</h1>
      <p>Your simple hub for maternity nursing.</p>
    </div>
  </header>

  <div class="mh-hub-layout">
    <div class="mh-hub-main">
      <div class="mh-topic-orbit maternity-orbit" aria-label="Maternity study topics">
        <svg class="mh-orbit-connectors" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
          <g class="mh-connector-lines">
            <line x1="500" y1="105" x2="500" y2="240"></line>
            <line x1="170" y1="240" x2="410" y2="320"></line>
            <line x1="140" y1="405" x2="390" y2="375"></line>
            <line x1="280" y1="575" x2="455" y2="440"></line>
            <line x1="720" y1="575" x2="545" y2="440"></line>
            <line x1="860" y1="405" x2="610" y2="375"></line>
            <line x1="830" y1="240" x2="590" y2="320"></line>
          </g>
          <g class="mh-connector-dots">
            <circle cx="500" cy="105" r="6"></circle>
            <circle cx="170" cy="240" r="6"></circle><circle cx="140" cy="405" r="6"></circle><circle cx="280" cy="575" r="6"></circle>
            <circle cx="720" cy="575" r="6"></circle><circle cx="860" cy="405" r="6"></circle><circle cx="830" cy="240" r="6"></circle>
          </g>
        </svg>

        <div class="maternity-center">
          <div class="maternity-hub__illustration-wrap">
            <div class="maternity-hub__illustration-glow" aria-hidden="true"></div>
            <svg class="maternity-hub__illustration" viewBox="0 0 420 520" role="img" aria-labelledby="maternity-illustration-title">
              <title id="maternity-illustration-title">Outline illustration of a pregnant mother and baby</title>
              <ellipse class="soft-fill" cx="226" cy="294" rx="138" ry="180"></ellipse>
              <g class="maternity-svg__hair">
                <path class="line" d="M220 86c-38 4-69 31-76 69-7 36 9 72 35 91"></path>
                <path class="line" d="M252 94c44 18 67 55 65 102-1 36-20 66-47 84"></path>
                <path class="line-soft" d="M159 161c31-7 57-17 77-45"></path>
                <path class="line-soft" d="M162 186c40-5 72-24 95-60"></path>
                <path class="line-soft" d="M170 215c40-7 73-26 98-59"></path>
                <path class="line-soft" d="M181 238c43-8 74-29 96-63"></path>
                <path class="line-soft" d="M141 197c-19 25-21 55-8 82"></path>
              </g>
              <g class="maternity-svg__face">
                <path class="line" d="M249 151c-13 1-24 9-29 21-4 12 0 25 10 33"></path>
                <path class="line" d="M246 154c18 6 30 21 31 39 1 22-13 38-33 43"></path>
                <path class="line-soft" d="M237 171c10 4 18 12 23 23"></path>
                <path class="line-soft" d="M234 188c8 5 17 7 27 6"></path>
                <path class="line" d="M231 201c6 4 13 5 21 3"></path>
              </g>
              <g class="maternity-svg__body">
                <path class="line" d="M233 237c-7 24-6 47 3 70"></path>
                <path class="line" d="M275 238c21 34 31 71 31 109"></path>
                <path class="line" d="M216 275c-23 36-31 74-23 114"></path>
                <path class="line" d="M202 334c-27 36-45 77-54 122"></path>
                <path class="line" d="M296 330c32 42 48 85 47 130"></path>
                <path class="line" d="M186 381c21 38 56 61 101 71"></path>
                <path class="line" d="M191 401c32 51 77 74 135 69"></path>
              </g>
              <g class="maternity-svg__hands">
                <path class="line" d="M167 286c-18 52-21 103-8 151"></path>
                <path class="line" d="M158 432c20 17 41 27 63 31"></path>
                <path class="line" d="M314 355c21 24 31 53 30 85"></path>
                <path class="line" d="M343 440c-10 13-24 20-42 20"></path>
                <path class="line-soft" d="M278 454c9 8 19 11 31 9"></path>
                <path class="line-soft" d="M291 459c4 5 10 7 17 7"></path>
                <path class="line-soft" d="M304 461c4 3 8 4 13 3"></path>
              </g>
              <g class="maternity-svg__womb">
                <path class="line womb-fill" d="M231 318c24-39 86-31 103 15 13 35-5 83-43 99-37 15-77-8-83-46-4-25 4-49 23-68Z"></path>
                <path class="line-soft" d="M247 330c19-19 55-15 69 10 16 28 2 67-28 78"></path>
              </g>
              <g class="maternity-svg__baby">
                <path class="line" d="M274 349c-17-3-32 7-36 23-4 18 8 35 27 37"></path>
                <path class="line" d="M272 348c16 1 29 12 32 27 3 16-5 31-20 38"></path>
                <path class="line-soft" d="M262 365c8 3 14 8 17 16"></path>
                <path class="line-soft" d="M250 386c12 5 25 4 36-3"></path>
                <path class="line" d="M274 395c-7 8-7 18 0 27"></path>
                <path class="line" d="M259 407c-11 6-20 4-29-5"></path>
                <path class="line" d="M285 415c11 5 21 4 30-3"></path>
                <path class="line-soft" d="M309 370c-8 11-9 23-3 36"></path>
                <path class="line-soft" d="M241 330c18 27 48 42 88 45"></path>
                <path class="line-soft" d="M222 399c23 19 50 25 80 18"></path>
                <path class="line-soft" d="M288 356c5-4 10-5 16-2"></path>
              </g>
            </svg>
          </div>
        </div>

        <a class="mh-topic-card maternity-topic-antepartum" href="{{ '/maternity/antepartum.html' | relative_url }}">
          <span class="mh-topic-icon maternity-topic-icon maternity-icon-rose" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17c4-5 8-6 12-1 4-5 8-4 12 1"></path><path d="M14 18c0 13 4 20 10 22 6-2 10-9 10-22"></path><path d="M18 24h12"></path><path d="M24 16v21"></path></svg></span>
          <span><strong>Antepartum</strong><small>Prenatal assessment &amp; high-risk pregnancy care</small></span>
        </a>
        <a class="mh-topic-card maternity-topic-intrapartum" href="{{ '/maternity/intrapartum.html' | relative_url }}">
          <span class="mh-topic-icon maternity-topic-icon maternity-icon-lavender" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 30h8l4-13 6 21 4-14 4 6h8"></path><path d="M8 12h32v24H8z"></path></svg></span>
          <span><strong>Intrapartum</strong><small>Labor stages, fetal monitoring &amp; delivery priorities</small></span>
        </a>
        <a class="mh-topic-card maternity-topic-newborn" href="{{ '/maternity/newborn.html' | relative_url }}">
          <span class="mh-topic-icon maternity-topic-icon maternity-icon-mint" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M29 13c8 2 13 9 13 17 0 9-7 16-16 16H13V34"></path><path d="M18 30c-7-2-11-7-11-13 0-7 5-12 12-12 6 0 11 4 12 10"></path><path d="M17 16h.1"></path><path d="M22 22c4 4 9 6 15 6"></path><path d="M15 34c5 2 10 2 15 0"></path></svg></span>
          <span><strong>Newborn</strong><small>APGAR, thermoregulation, feeding &amp; jaundice</small></span>
        </a>
        <a class="mh-topic-card maternity-topic-meds" href="{{ '/maternity/medications.html' | relative_url }}">
          <span class="mh-topic-icon maternity-topic-icon maternity-icon-rose" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M17 6h14"></path><path d="M20 6v9l-5 5v19c0 2 2 4 4 4h10c2 0 4-2 4-4V20l-5-5V6"></path><path d="M17 28h14"></path><path d="M24 24v10"></path><path d="M19 29h10"></path></svg></span>
          <span><strong>OB Medications</strong><small>Oxytocin, magnesium sulfate, tocolytics &amp; hemorrhage meds</small></span>
        </a>
        <a class="mh-topic-card maternity-topic-labs" href="{{ '/maternity/maternity-labs.html' | relative_url }}">
          <span class="mh-topic-icon maternity-topic-icon maternity-icon-lavender" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5h10"></path><path d="M21 5v13L11 38c-1 3 1 5 4 5h18c3 0 5-2 4-5L27 18V5"></path><path d="M16 34h16"></path><path d="M20 28h8"></path></svg></span>
          <span><strong>Maternity Labs</strong><small>Prenatal screening, Group B Strep &amp; key lab changes</small></span>
        </a>
        <a class="mh-topic-card maternity-topic-role" href="{{ '/maternity/nurses-role-ob-ward.html' | relative_url }}">
          <span class="mh-topic-icon maternity-topic-icon maternity-icon-aqua" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h14l3 6v28H14V14l3-6Z"></path><path d="M18 17h12"></path><path d="M19 26l3 3 7-8"></path><path d="M19 36h12"></path></svg></span>
          <span><strong>Nurse's Role on OB</strong><small>Triage, workflow &amp; unit responsibilities</small></span>
        </a>
        <a class="mh-topic-card maternity-topic-postpartum" href="{{ '/maternity/postpartum.html' | relative_url }}">
          <span class="mh-topic-icon maternity-topic-icon maternity-icon-peach" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8c7 0 13 6 13 13 0 10-8 18-13 22-5-4-13-12-13-22 0-7 6-13 13-13Z"></path><path d="M18 25c3 4 9 4 12 0"></path><path d="M20 18h.1"></path><path d="M28 18h.1"></path></svg></span>
          <span><strong>Postpartum</strong><small>Recovery, lochia &amp; postpartum complications</small></span>
        </a>
      </div>

      <nav class="mh-hub-shortcuts maternity-shortcuts" aria-label="Maternity extra resources">
        <a href="{{ '/all-topics.html' | relative_url }}"><span aria-hidden="true">⌂</span><strong>Back to Nursing School Hub</strong></a>
      </nav>
    </div>

    <aside class="mh-hub-guide maternity-sidebar">
      <div class="mh-guide-icon maternity-sidebar-icon" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M29 8c-6 2-10 7-10 14 0 4 1 8 4 11"></path>
          <path d="M35 10c8 3 12 11 9 20"></path>
          <path d="M24 34c-5 4-8 9-8 15 0 5 4 8 10 8h17c5 0 8-3 8-8 0-9-7-17-16-17"></path>
          <path d="M34 38c7 1 11 5 11 11 0 4-3 6-8 6"></path>
        </svg>
      </div>
      <h2>Select a topic<br>to open notes</h2>
      <div class="mh-guide-rule"></div>
      <p>Study resources include:</p>
      <ul>
        <li>Overview &amp; key concepts</li>
        <li>Assessment &amp; nursing priorities</li>
        <li>Safety interventions</li>
        <li>Patient education</li>
        <li>NCLEX tips &amp; memory cues</li>
      </ul>
      <a class="mh-nclex-link" href="{{ '/maternity.html#nclex-quick-cues' | relative_url }}">
        <span aria-hidden="true">✓</span>
        <span><strong>NCLEX Quick Cues</strong><small>Mnemonics &amp; priority rules</small></span>
      </a>
      <div class="mh-guide-tip"><span aria-hidden="true">💡</span> Pick any topic around the mother and baby to get started.</div>
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
