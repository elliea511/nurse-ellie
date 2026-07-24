---
layout: default
title: Sensory Perception
page_type: sensory-hub
---

<style>
  body[data-page-type="sensory-hub"] {
    background: #fff !important;
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
    overflow-x: hidden !important;
  }

  body[data-page-type="sensory-hub"] .main-content img {
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
  }

  .sensory-page {
    --sensory-navy: #11184e;
    --sensory-muted: #5b5f82;
    --sensory-purple: #8b48e6;
    width: 100%;
    min-height: calc(100vh - 86px);
    color: var(--sensory-navy);
    background: linear-gradient(180deg, #fff 0%, #fffafd 60%, #f8fbff 100%);
  }

  .sensory-page * {
    box-sizing: border-box;
  }

  .sensory-shell {
    width: min(100%, 1220px);
    margin-inline: auto;
    padding: 1rem 2rem 1.15rem;
  }

  body[data-page-type="sensory-hub"] .mh-breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin: 0 0 0.8rem;
    font-size: 0.85rem;
    font-weight: 700;
    color: #6d6687;
  }

  body[data-page-type="sensory-hub"] .mh-breadcrumb a {
    color: var(--sensory-purple) !important;
    text-decoration: none !important;
  }

  body[data-page-type="sensory-hub"] .mh-breadcrumb a:hover,
  body[data-page-type="sensory-hub"] .mh-breadcrumb a:focus-visible {
    color: #5723b8 !important;
    text-decoration: underline !important;
  }

  body[data-page-type="sensory-hub"] .mh-breadcrumb a + a::before,
  body[data-page-type="sensory-hub"] .mh-breadcrumb a + span::before,
  body[data-page-type="sensory-hub"] .mh-breadcrumb span + span::before {
    content: "›";
    margin-right: 0.45rem;
    color: #7d7596;
  }

  .sensory-title {
    width: 100%;
    margin: 0 auto 1rem;
    padding: 0 !important;
    text-align: center;
    background: none !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  .sensory-title h1 {
    display: block !important;
    width: auto !important;
    margin: 0 0 0.55rem !important;
    padding: 0 !important;
    background: none !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    font-family: "Playfair Display", Georgia, serif !important;
    font-size: clamp(4rem, 6vw, 4.6rem) !important;
    font-weight: 900 !important;
    line-height: 1 !important;
    letter-spacing: -0.035em;
    color: var(--sensory-navy) !important;
    text-shadow: none !important;
  }

  .sensory-title p {
    margin: 0;
    padding: 0 !important;
    background: none !important;
    border: 0 !important;
    box-shadow: none !important;
    color: var(--sensory-muted);
    font-size: clamp(1.25rem, 2vw, 1.45rem);
    font-weight: 800;
    line-height: 1.25;
  }

  .sensory-stage {
    position: relative;
    display: grid;
    grid-template-columns: 300px 430px 300px;
    align-items: center;
    justify-content: center;
    gap: 50px;
    max-width: 1180px;
    margin: 1rem auto 0;
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

  .sensory-connector {
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .sensory-connector-eye { stroke: #2876e8; }
  .sensory-connector-ear { stroke: #f24f87; }

  .sensory-dot {
    stroke: #fff;
    stroke-width: 3;
  }

  .sensory-dot-eye { fill: #2876e8; }
  .sensory-dot-ear { fill: #f24f87; }

  .sensory-card {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 1.05rem;
    width: 300px;
    min-height: 112px;
    padding: 1rem 1.15rem;
    border: 1.5px solid var(--card-border);
    border-radius: 24px;
    background: linear-gradient(135deg, #fff 0%, var(--card-tint) 100%);
    box-shadow: 0 15px 34px rgba(28, 34, 91, 0.08);
    color: var(--card-accent) !important;
    text-decoration: none !important;
    transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
  }

  .sensory-card:hover,
  .sensory-card:focus-visible {
    transform: translateY(-3px);
    border-color: var(--card-accent);
    box-shadow: 0 20px 42px rgba(28, 34, 91, 0.13);
    outline: none;
  }

  .sensory-card:focus-visible {
    box-shadow: 0 0 0 4px rgba(139, 72, 230, 0.18), 0 20px 42px rgba(28, 34, 91, 0.13);
  }

  .sensory-card-eye {
    --card-accent: #236ee6;
    --card-border: #91bbff;
    --card-tint: #eef7ff;
  }

  .sensory-card-ear {
    --card-accent: #ef477f;
    --card-border: #ffa6c4;
    --card-tint: #fff2f7;
  }

  .sensory-card-icon {
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 999px;
    background: var(--icon-bg);
  }

  .sensory-card-eye .sensory-card-icon { --icon-bg: #e7f1ff; }
  .sensory-card-ear .sensory-card-icon { --icon-bg: #ffe5ef; }

  .sensory-card-icon svg {
    width: 43px;
    height: 43px;
    color: currentColor;
  }

  .sensory-card strong {
    display: block;
    color: currentColor !important;
    font-family: "Nunito", system-ui, sans-serif;
    font-size: clamp(1.65rem, 2.1vw, 2rem);
    font-weight: 900;
    letter-spacing: -0.035em;
    line-height: 1.04;
  }

  .sensory-card-chevron {
    margin-left: auto;
    color: currentColor;
    font-size: 1.6rem;
    font-weight: 900;
    opacity: 0.56;
  }

  .sensory-graphic-wrap {
    position: relative;
    z-index: 2;
    display: grid;
    place-items: center;
    width: 430px;
    min-width: 0;
  }

  .sensory-graphic-wrap::before {
    content: "";
    position: absolute;
    width: 405px;
    aspect-ratio: 1;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(164, 134, 230, 0.13) 0%, rgba(164, 134, 230, 0.05) 56%, transparent 73%);
    z-index: -1;
  }

  .sensory-graphic {
    display: block;
    width: 100%;
    height: 420px;
    object-fit: contain;
  }

  .sensory-back {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.72rem;
    width: min(380px, 92%);
    min-height: 54px;
    margin: 1.15rem auto 0;
    padding: 0.75rem 1.15rem;
    border: 1.5px solid #cdb5f2;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 12px 28px rgba(105, 72, 165, 0.08);
    color: #8b48e6 !important;
    text-align: center;
    text-decoration: none !important;
    font-size: 1.05rem;
    font-weight: 900;
  }

  .sensory-back svg {
    width: 1.55rem;
    height: 1.55rem;
  }

  .sensory-back:hover,
  .sensory-back:focus-visible {
    transform: translateY(-2px);
    border-color: #8b48e6;
    outline: none;
  }

  [data-theme="dark"] body[data-page-type="sensory-hub"],
  [data-theme="dark"] body[data-page-type="sensory-hub"] .sensory-page {
    background: linear-gradient(180deg, #121629 0%, #171a2d 100%) !important;
  }

  [data-theme="dark"] .sensory-title h1,
  [data-theme="dark"] .sensory-title p {
    color: #f4f1ff !important;
  }

  [data-theme="dark"] body[data-page-type="sensory-hub"] .mh-breadcrumb {
    color: #d8d1ef;
  }

  [data-theme="dark"] .sensory-card,
  [data-theme="dark"] .sensory-back {
    background: linear-gradient(135deg, rgba(40, 42, 66, 0.96), rgba(28, 31, 54, 0.96));
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

  @media (max-width: 1060px) {
    .sensory-shell {
      padding: 1rem 1.25rem 1.75rem;
    }

    .sensory-stage {
      grid-template-columns: repeat(2, minmax(0, 300px));
      gap: 1rem;
      margin-top: 0.85rem;
    }

    .sensory-connectors {
      display: none;
    }

    .sensory-graphic-wrap {
      grid-column: 1 / -1;
      order: 1;
      width: min(430px, 100%);
      margin-inline: auto;
    }

    .sensory-card-eye,
    .sensory-card-ear {
      order: 2;
      width: 100%;
    }

    .sensory-graphic {
      height: clamp(305px, 42vh, 380px);
    }
  }

  @media (max-width: 640px) {
    .sensory-page {
      min-height: auto;
    }

    .sensory-shell {
      padding-inline: 1rem;
    }

    body[data-page-type="sensory-hub"] .mh-breadcrumb {
      justify-content: center;
      margin-bottom: 0.7rem;
      font-size: 0.78rem;
    }

    .sensory-title {
      margin-bottom: 0.85rem;
    }

    .sensory-title h1 {
      font-size: clamp(2.75rem, 13vw, 3.45rem) !important;
    }

    .sensory-title p {
      font-size: 1.08rem;
    }

    .sensory-stage {
      grid-template-columns: 1fr;
      gap: 0.8rem;
      max-width: 360px;
    }

    .sensory-card {
      min-height: 98px;
      width: 100%;
      padding: 0.95rem 1rem;
    }

    .sensory-card-icon {
      width: 58px;
      height: 58px;
    }

    .sensory-card-icon svg {
      width: 38px;
      height: 38px;
    }

    .sensory-card strong {
      font-size: 1.45rem;
    }

    .sensory-graphic {
      height: 290px;
    }

    .sensory-back {
      margin-top: 1rem;
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
      <svg class="sensory-connectors" viewBox="0 0 1180 360" preserveAspectRatio="none" aria-hidden="true">
        <path class="sensory-connector sensory-connector-eye" d="M300 180 H386 C428 180 440 204 492 204"></path>
        <circle class="sensory-dot sensory-dot-eye" cx="300" cy="180" r="6"></circle>
        <circle class="sensory-dot sensory-dot-eye" cx="492" cy="204" r="6"></circle>

        <path class="sensory-connector sensory-connector-ear" d="M880 180 H794 C750 180 738 214 617 214"></path>
        <circle class="sensory-dot sensory-dot-ear" cx="880" cy="180" r="6"></circle>
        <circle class="sensory-dot sensory-dot-ear" cx="617" cy="214" r="6"></circle>
      </svg>

      <a class="sensory-card sensory-card-eye" href="{{ '/sensory-perception/eye-disorders.html' | relative_url }}" aria-label="Open Eye Disorders notes">
        <span class="sensory-card-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M6 32s9.5-15 26-15 26 15 26 15-9.5 15-26 15S6 32 6 32Z" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
            <circle cx="32" cy="32" r="11" fill="currentColor" opacity=".16"/>
            <circle cx="32" cy="32" r="6" fill="currentColor"/>
            <circle cx="29" cy="29" r="2" fill="#fff"/>
          </svg>
        </span>
        <strong>Eye Disorders</strong>
        <span class="sensory-card-chevron" aria-hidden="true">›</span>
      </a>

      <div class="sensory-graphic-wrap">
        <img class="sensory-graphic" src="{{ '/assets/images/sensory-profile.svg' | relative_url }}" alt="Soft side-profile head illustration with the eye highlighted blue and the ear highlighted pink" data-no-lb>
      </div>

      <a class="sensory-card sensory-card-ear" href="{{ '/sensory-perception/ear-disorders.html' | relative_url }}" aria-label="Open Ear Disorders notes">
        <span class="sensory-card-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M33 51c10-2 18-12 18-25 0-10-7-18-18-18-10 0-18 7-18 17" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
            <path d="M28 26c0-4 3-7 7-7s7 3 7 7c0 8-10 8-10 16 0 3 2 5 5 5" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
            <path d="M24 42c-7-4-10-10-10-17" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".32"/>
          </svg>
        </span>
        <strong>Ear Disorders</strong>
        <span class="sensory-card-chevron" aria-hidden="true">›</span>
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
