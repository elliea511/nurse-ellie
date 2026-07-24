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
    padding: 2.25rem 0 3rem !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  body[data-page-type="sensory-hub"] .system-hub {
    padding: 0 2rem;
  }

  body[data-page-type="sensory-hub"] .system-hub .mh-hub-header h1 {
    display: block !important;
    width: auto !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    color: #0b174e !important;
    -webkit-text-fill-color: #0b174e !important;
    font-family: "Nunito", sans-serif !important;
    font-size: clamp(2rem, 3vw, 3.15rem) !important;
    line-height: 1.05 !important;
    letter-spacing: -0.04em;
    text-shadow: none !important;
  }

  body[data-page-type="sensory-hub"] .system-hub .mh-hub-header h1::before,
  body[data-page-type="sensory-hub"] .system-hub .mh-hub-header h1::after {
    display: none !important;
    content: none !important;
  }

  body[data-page-type="sensory-hub"] .system-hub .mh-hub-header p {
    margin: 0.25rem 0 0;
    color: #8060bf;
    font-size: 1.12rem;
    font-weight: 700;
  }

  body[data-page-type="sensory-hub"] .system-hub .mh-brain-center {
    width: 29rem;
    height: 31rem;
    filter: drop-shadow(0 22px 24px rgba(85, 65, 150, .15));
  }

  body[data-page-type="sensory-hub"] .system-hub .mh-brain-center img,
  body[data-page-type="sensory-hub"] .system-hub .mh-hub-brandmark img,
  body[data-page-type="sensory-hub"] .system-hub .mh-guide-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0 auto !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  body[data-page-type="sensory-hub"] .system-hub .mh-brain-center img {
    filter: saturate(1.08) contrast(1.04);
  }

  body[data-page-type="sensory-hub"] .system-hub .mh-hub-brandmark img,
  body[data-page-type="sensory-hub"] .system-hub .mh-guide-icon img {
    width: 4rem;
    height: 4rem;
  }

  body[data-page-type="sensory-hub"] .system-hub .mh-topic-orbit {
    display: block;
    min-height: 700px;
  }

  body[data-page-type="sensory-hub"] .system-hub .mh-topic-orbit::before {
    inset: 18% 20%;
  }

  body[data-page-type="sensory-hub"] .system-hub .mh-topic-card {
    position: absolute;
    width: min(250px, 30%);
    min-height: 76px;
    transform: translate(-50%, -50%);
  }

  body[data-page-type="sensory-hub"] .system-hub .mh-topic-card:hover,
  body[data-page-type="sensory-hub"] .system-hub .mh-topic-card:focus-visible {
    transform: translate(-50%, calc(-50% - 3px));
  }

  body[data-page-type="sensory-hub"] .system-topic-eye { left: 15%; top: 50%; }
  body[data-page-type="sensory-hub"] .system-topic-ear { left: 85%; top: 50%; }

  body[data-page-type="sensory-hub"] .system-hub .mh-connector-lines line {
    stroke-dasharray: none;
    stroke-width: 2.5;
  }

  body[data-page-type="sensory-hub"] .system-eye-line,
  body[data-page-type="sensory-hub"] .system-eye-dot { stroke: #2876e8 !important; fill: #2876e8 !important; }

  body[data-page-type="sensory-hub"] .system-ear-line,
  body[data-page-type="sensory-hub"] .system-ear-dot { stroke: #f24f87 !important; fill: #f24f87 !important; }

  body[data-page-type="sensory-hub"] .system-hub .mh-topic-card:nth-of-type(odd),
  body[data-page-type="sensory-hub"] .system-hub .mh-topic-card:nth-of-type(even) {
    justify-self: auto;
  }

  @media (max-width: 980px) {
    body[data-page-type="sensory-hub"] .system-hub .mh-topic-orbit {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      min-height: auto;
    }

    body[data-page-type="sensory-hub"] .system-hub .mh-orbit-connectors,
    body[data-page-type="sensory-hub"] .system-hub .mh-topic-orbit::before {
      display: none;
    }

    body[data-page-type="sensory-hub"] .system-hub .mh-brain-center {
      position: relative;
      grid-column: 1 / -1;
      top: auto;
      left: auto;
      width: min(28rem, 100%);
      height: 24rem;
      transform: none;
      margin: 0 auto;
    }

    body[data-page-type="sensory-hub"] .system-hub .mh-topic-orbit .mh-topic-card {
      position: relative;
      left: auto;
      top: auto;
      width: 100%;
      transform: none;
    }

    body[data-page-type="sensory-hub"] .system-hub .mh-topic-orbit .mh-topic-card:hover,
    body[data-page-type="sensory-hub"] .system-hub .mh-topic-orbit .mh-topic-card:focus-visible {
      transform: translateY(-3px);
    }
  }

  @media (max-width: 620px) {
    body[data-page-type="sensory-hub"] .system-hub .mh-topic-orbit {
      grid-template-columns: 1fr;
    }

    body[data-page-type="sensory-hub"] .system-hub .mh-brain-center {
      height: 19rem;
    }
  }
</style>

<section class="mh-hub system-hub sensory-system-hub" aria-labelledby="sensory-hub-title">
  <header class="mh-hub-header">
    <div class="mh-hub-brandmark" aria-hidden="true">
      <img src="{{ '/assets/images/sensory-profile-woman.png' | relative_url }}" alt="" data-no-lb>
    </div>
    <div>
      <h1 id="sensory-hub-title">Sensory Perception</h1>
      <p>Your simple hub for vision and hearing nursing.</p>
    </div>
  </header>

  <div class="mh-hub-layout">
    <div class="mh-hub-main">
      <div class="mh-topic-orbit" aria-label="Sensory perception study topics">
        <svg class="mh-orbit-connectors" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
          <g class="mh-connector-lines">
            <line class="system-eye-line" x1="150" y1="350" x2="420" y2="330"></line>
            <line class="system-ear-line" x1="850" y1="350" x2="610" y2="350"></line>
          </g>
          <g class="mh-connector-dots">
            <circle class="system-eye-dot" cx="150" cy="350" r="6"></circle>
            <circle class="system-eye-dot" cx="420" cy="330" r="6"></circle>
            <circle class="system-ear-dot" cx="850" cy="350" r="6"></circle>
            <circle class="system-ear-dot" cx="610" cy="350" r="6"></circle>
          </g>
        </svg>

        <div class="mh-brain-center" aria-hidden="true">
          <img src="{{ '/assets/images/sensory-profile-woman.png' | relative_url }}" alt="" data-no-lb>
        </div>

        <a class="mh-topic-card system-topic-eye" href="{{ '/sensory-perception/eye-disorders.html' | relative_url }}">
          <span class="mh-topic-icon">👁</span><span><strong>Eye Disorders</strong><small>Vision changes &amp; safety</small></span>
        </a>
        <a class="mh-topic-card system-topic-ear" href="{{ '/sensory-perception/ear-disorders.html' | relative_url }}">
          <span class="mh-topic-icon">👂</span><span><strong>Ear Disorders</strong><small>Hearing changes &amp; care</small></span>
        </a>
      </div>

      <nav class="mh-hub-shortcuts" aria-label="Sensory perception shortcuts">
        <a href="{{ '/all-topics.html' | relative_url }}"><span>⌂</span><strong>Back to Nursing School Hub</strong></a>
      </nav>
    </div>

    <aside class="mh-hub-guide">
      <div class="mh-guide-icon" aria-hidden="true">
        <img src="{{ '/assets/images/sensory-profile-woman.png' | relative_url }}" alt="" data-no-lb>
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
      <div class="mh-guide-tip"><span aria-hidden="true">💡</span> Pick either topic around the profile to get started.</div>
    </aside>
  </div>
</section>
