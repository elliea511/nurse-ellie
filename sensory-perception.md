---
layout: default
title: Sensory Perception
page_type: sensory-hub
---

<style>
  body[data-page-type="sensory-hub"] {
    background: #fffaff !important;
  }

  body[data-page-type="sensory-hub"] .page-wrapper {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  body[data-page-type="sensory-hub"] .main-content {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    overflow: hidden;
  }

  body[data-page-type="sensory-hub"] .main-content img {
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
  }

  .sensory-page {
    min-height: calc(100vh - 82px);
    color: #10164a;
    background:
      radial-gradient(circle at 50% 44%, rgba(159, 124, 229, 0.12), transparent 34rem),
      radial-gradient(circle at 12% 66%, rgba(77, 147, 255, 0.12), transparent 24rem),
      radial-gradient(circle at 88% 62%, rgba(255, 89, 143, 0.11), transparent 25rem),
      linear-gradient(180deg, #fffaff 0%, #fff 44%, #f9fbff 100%);
  }

  .sensory-shell {
    width: min(100%, 1240px);
    margin: 0 auto;
    padding: clamp(1.15rem, 2vw, 1.65rem) 2rem 1.2rem;
  }

  body[data-page-type="sensory-hub"] .mh-breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin: 0 0 clamp(0.75rem, 1.6vw, 1.2rem);
    font-size: 0.85rem;
    font-weight: 700;
    color: #6f6386;
  }

  body[data-page-type="sensory-hub"] .mh-breadcrumb a {
    color: #7b43d8 !important;
    text-decoration: none !important;
  }

  body[data-page-type="sensory-hub"] .mh-breadcrumb a:hover,
  body[data-page-type="sensory-hub"] .mh-breadcrumb a:focus-visible {
    color: #4f22b6 !important;
    text-decoration: underline !important;
  }

  body[data-page-type="sensory-hub"] .mh-breadcrumb a + a::before,
  body[data-page-type="sensory-hub"] .mh-breadcrumb a + span::before,
  body[data-page-type="sensory-hub"] .mh-breadcrumb span + span::before {
    content: "›";
    margin-right: 0.45rem;
    color: #6f6386;
  }

  .sensory-title {
    text-align: center;
    margin: 0 auto clamp(1.1rem, 2.5vw, 1.7rem);
  }

  .sensory-title h1 {
    margin: 0 !important;
    font-family: "Playfair Display", Georgia, serif !important;
    font-size: clamp(3.25rem, 6.2vw, 5.75rem) !important;
    line-height: 0.92 !important;
    letter-spacing: -0.045em;
    color: #11184e !important;
    text-shadow: 0 10px 30px rgba(91, 49, 155, 0.12);
  }

  .sensory-title p {
    margin: 0.55rem 0 0;
    font-size: clamp(1.05rem, 1.8vw, 1.55rem);
    font-weight: 800;
    color: #595d82;
  }

  .sensory-stage {
    position: relative;
    display: grid;
    grid-template-columns: minmax(250px, 320px) minmax(330px, 420px) minmax(250px, 320px);
    align-items: center;
    justify-content: center;
    gap: clamp(2.1rem, 4vw, 4rem);
    min-height: min(47vh, 430px);
    isolation: isolate;
  }

  .sensory-connectors {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: visible;
  }

  .sensory-connector {
    fill: none;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .sensory-connector-eye { stroke: #276ee8; }
  .sensory-connector-ear { stroke: #f04f84; }

  .sensory-dot-eye { fill: #276ee8; }
  .sensory-dot-ear { fill: #f04f84; }
  .sensory-dot-light { fill: #fff; stroke-width: 3; }
  .sensory-dot-light.sensory-dot-eye { stroke: #276ee8; }
  .sensory-dot-light.sensory-dot-ear { stroke: #f04f84; }

  .sensory-card {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    min-height: 116px;
    padding: 1.2rem 1.35rem;
    border: 2px solid var(--sensory-accent);
    border-radius: 1.45rem;
    background: linear-gradient(135deg, #fff 0%, var(--sensory-tint) 100%);
    box-shadow: 0 18px 38px rgba(28, 34, 91, 0.08);
    text-decoration: none !important;
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  }

  .sensory-card:hover,
  .sensory-card:focus-visible {
    transform: translateY(-4px);
    box-shadow: 0 24px 46px rgba(28, 34, 91, 0.14);
    border-color: var(--sensory-strong);
    outline: none;
  }

  .sensory-card:focus-visible {
    box-shadow: 0 0 0 4px rgba(123, 67, 216, 0.18), 0 24px 46px rgba(28, 34, 91, 0.14);
  }

  .sensory-card-eye {
    --sensory-accent: #91bcff;
    --sensory-strong: #276ee8;
    --sensory-tint: #edf6ff;
  }

  .sensory-card-ear {
    --sensory-accent: #ff9ebd;
    --sensory-strong: #f04f84;
    --sensory-tint: #fff1f6;
  }

  .sensory-card-icon {
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    width: 4.25rem;
    height: 4.25rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--sensory-accent) 26%, white);
  }

  .sensory-card-icon svg {
    width: 2.7rem;
    height: 2.7rem;
    color: var(--sensory-strong);
  }

  .sensory-card strong {
    display: block;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(1.55rem, 2.3vw, 2rem);
    line-height: 1.03;
    color: var(--sensory-strong);
  }

  .sensory-graphic-wrap {
    position: relative;
    z-index: 2;
    display: grid;
    place-items: center;
    min-width: 0;
  }

  .sensory-graphic-wrap::before {
    content: "";
    position: absolute;
    width: min(100%, 420px);
    aspect-ratio: 1;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(159, 124, 229, 0.16), rgba(159, 124, 229, 0.05) 52%, transparent 72%);
    z-index: -1;
  }

  .sensory-graphic {
    display: block;
    width: min(100%, 410px);
    height: clamp(330px, 43vh, 410px);
    object-fit: contain;
  }

  .sensory-back {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    min-height: 54px;
    width: min(380px, 92%);
    margin: clamp(0.55rem, 1.5vw, 1rem) auto 0;
    padding: 0.75rem 1.25rem;
    border: 2px solid #c8a8f4;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.82);
    color: #8e45dc !important;
    box-shadow: 0 14px 30px rgba(112, 78, 166, 0.08);
    text-decoration: none !important;
    font-weight: 900;
    font-size: 1.05rem;
  }

  .sensory-back svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  .sensory-back:hover,
  .sensory-back:focus-visible {
    transform: translateY(-2px);
    border-color: #8e45dc;
    outline: none;
  }

  [data-theme="dark"] body[data-page-type="sensory-hub"],
  [data-theme="dark"] body[data-page-type="sensory-hub"] .sensory-page {
    background:
      radial-gradient(circle at 50% 44%, rgba(159, 124, 229, 0.2), transparent 34rem),
      linear-gradient(180deg, #16172a 0%, #101426 100%) !important;
  }

  [data-theme="dark"] .sensory-title h1,
  [data-theme="dark"] .sensory-card strong {
    color: #f4f1ff !important;
  }

  [data-theme="dark"] .sensory-title p,
  [data-theme="dark"] body[data-page-type="sensory-hub"] .mh-breadcrumb {
    color: #d8d1ef;
  }

  [data-theme="dark"] .sensory-card,
  [data-theme="dark"] .sensory-back {
    background: linear-gradient(135deg, rgba(39, 42, 68, 0.92), rgba(28, 30, 52, 0.88));
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

  @media (max-width: 960px) {
    .sensory-page {
      min-height: auto;
    }

    .sensory-shell {
      padding: 1rem 1.25rem 2rem;
    }

    .sensory-title {
      margin-bottom: 1rem;
    }

    .sensory-stage {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
      min-height: 0;
    }

    .sensory-connectors {
      display: none;
    }

    .sensory-graphic-wrap {
      grid-column: 1 / -1;
      order: 1;
    }

    .sensory-card-eye,
    .sensory-card-ear {
      order: 2;
    }

    .sensory-graphic {
      height: clamp(250px, 38vh, 340px);
    }
  }

  @media (max-width: 640px) {
    .sensory-shell {
      padding-inline: 1rem;
    }

    body[data-page-type="sensory-hub"] .mh-breadcrumb {
      justify-content: center;
      font-size: 0.78rem;
    }

    .sensory-title h1 {
      font-size: clamp(2.55rem, 13vw, 3.35rem) !important;
    }

    .sensory-stage {
      grid-template-columns: 1fr;
    }

    .sensory-card {
      min-height: 96px;
      padding: 1rem;
    }

    .sensory-card-icon {
      width: 3.65rem;
      height: 3.65rem;
    }

    .sensory-card strong {
      font-size: 1.45rem;
    }

    .sensory-graphic {
      height: 275px;
    }
  }
</style>

<section class="sensory-page" aria-labelledby="sensory-title">
  <div class="sensory-shell">
    <nav class="mh-breadcrumb" aria-label="Breadcrumb">
      <a href="{{ '/' | relative_url }}">Home</a>
      <a href="{{ '/all-topics.html' | relative_url }}">Nursing School</a>
      <span>Sensory Perception</span>
    </nav>

    <header class="sensory-title">
      <h1 id="sensory-title">Sensory Perception</h1>
      <p>Choose a topic to study.</p>
    </header>

    <div class="sensory-stage" aria-label="Sensory perception topic choices">
      <svg class="sensory-connectors" viewBox="0 0 1180 430" preserveAspectRatio="none" aria-hidden="true">
        <path class="sensory-connector sensory-connector-eye" d="M320 205 H382 C427 205 427 176 489 176"></path>
        <circle class="sensory-dot-eye" cx="320" cy="205" r="7"></circle>
        <circle class="sensory-dot-light sensory-dot-eye" cx="489" cy="176" r="8"></circle>

        <path class="sensory-connector sensory-connector-ear" d="M860 218 H806 C760 218 755 235 694 235"></path>
        <circle class="sensory-dot-ear" cx="860" cy="218" r="7"></circle>
        <circle class="sensory-dot-light sensory-dot-ear" cx="694" cy="235" r="8"></circle>
      </svg>

      <a class="sensory-card sensory-card-eye" href="{{ '/sensory-perception/eye-disorders.html' | relative_url }}" aria-label="Open Eye Disorders notes">
        <span class="sensory-card-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M6 32s9.5-15 26-15 26 15 26 15-9.5 15-26 15S6 32 6 32Z" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
            <circle cx="32" cy="32" r="10" fill="currentColor" opacity=".18"/>
            <circle cx="32" cy="32" r="5" fill="currentColor"/>
            <path d="M12 26c6-7 13-10 20-10s14 3 20 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".28"/>
          </svg>
        </span>
        <strong>Eye Disorders</strong>
      </a>

      <div class="sensory-graphic-wrap" aria-hidden="true">
        <img class="sensory-graphic" src="{{ '/assets/images/sensory-head.svg' | relative_url }}" alt="Soft side-profile sensory illustration with eye and ear highlighted" data-no-lb>
      </div>

      <a class="sensory-card sensory-card-ear" href="{{ '/sensory-perception/ear-disorders.html' | relative_url }}" aria-label="Open Ear Disorders notes">
        <span class="sensory-card-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M33 51c10-2 18-12 18-25 0-10-7-18-18-18-10 0-18 7-18 17" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
            <path d="M28 26c0-4 3-7 7-7s7 3 7 7c0 8-10 8-10 16 0 3 2 5 5 5" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
            <path d="M24 25c0-7 5-12 12-12" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".35"/>
            <path d="M24 42c-7-4-10-10-10-17" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".35"/>
          </svg>
        </span>
        <strong>Ear Disorders</strong>
      </a>
    </div>

    <a class="sensory-back" href="{{ '/all-topics.html' | relative_url }}">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 11.4 12 4l9 7.4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 10.8V20h12v-9.2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 20v-5h4v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Back to Nursing School Hub
    </a>
  </div>
</section>
