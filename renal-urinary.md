---
layout: default
title: Renal & Urinary
page_type: renal-hub
---

<style>
  body[data-page-type="renal-hub"] .page-wrapper {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  body[data-page-type="renal-hub"] .main-content {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 2.25rem 0 3rem !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  body[data-page-type="renal-hub"] .system-hub {
    padding: 0 2rem;
  }

  body[data-page-type="renal-hub"] .system-hub .mh-brain-center {
    width: 27rem;
    height: 28rem;
    filter: drop-shadow(0 22px 24px rgba(47, 112, 168, .18));
  }

  body[data-page-type="renal-hub"] .system-hub .mh-brain-center img,
  body[data-page-type="renal-hub"] .system-hub .mh-hub-brandmark img,
  body[data-page-type="renal-hub"] .system-hub .mh-guide-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0 auto !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  body[data-page-type="renal-hub"] .system-hub .mh-hub-brandmark img,
  body[data-page-type="renal-hub"] .system-hub .mh-guide-icon img {
    width: 3.8rem;
    height: 4rem;
  }

  body[data-page-type="renal-hub"] .system-hub .mh-topic-orbit {
    display: block;
    min-height: 760px;
  }

  body[data-page-type="renal-hub"] .system-hub .mh-topic-orbit .mh-topic-card {
    position: absolute;
    width: min(250px, 29%);
    min-height: 76px;
    transform: translate(-50%, -50%);
  }

  body[data-page-type="renal-hub"] .system-hub .mh-topic-card:hover,
  body[data-page-type="renal-hub"] .system-hub .mh-topic-card:focus-visible {
    transform: translate(-50%, calc(-50% - 3px));
  }

  body[data-page-type="renal-hub"] .renal-topic-uti { left: 18%; top: 25%; }
  body[data-page-type="renal-hub"] .renal-topic-stones { left: 12%; top: 48%; }
  body[data-page-type="renal-hub"] .renal-topic-glom { left: 20%; top: 72%; }
  body[data-page-type="renal-hub"] .renal-topic-procedures { left: 84%; top: 34%; }
  body[data-page-type="renal-hub"] .renal-topic-disease { left: 82%; top: 66%; }

  body[data-page-type="renal-hub"] .renal-line-uti,
  body[data-page-type="renal-hub"] .renal-dot-uti { stroke: #3177e8 !important; fill: #3177e8 !important; }
  body[data-page-type="renal-hub"] .renal-line-stones,
  body[data-page-type="renal-hub"] .renal-dot-stones { stroke: #339763 !important; fill: #339763 !important; }
  body[data-page-type="renal-hub"] .renal-line-glom,
  body[data-page-type="renal-hub"] .renal-dot-glom { stroke: #20afc5 !important; fill: #20afc5 !important; }
  body[data-page-type="renal-hub"] .renal-line-procedure,
  body[data-page-type="renal-hub"] .renal-dot-procedure { stroke: #ff654d !important; fill: #ff654d !important; }
  body[data-page-type="renal-hub"] .renal-line-disease,
  body[data-page-type="renal-hub"] .renal-dot-disease { stroke: #8c60cf !important; fill: #8c60cf !important; }

  @media (max-width: 980px) {
    body[data-page-type="renal-hub"] .system-hub .mh-topic-orbit {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
      min-height: auto;
    }

    body[data-page-type="renal-hub"] .system-hub .mh-orbit-connectors,
    body[data-page-type="renal-hub"] .system-hub .mh-topic-orbit::before {
      display: none;
    }

    body[data-page-type="renal-hub"] .system-hub .mh-brain-center {
      position: relative;
      grid-column: 1 / -1;
      top: auto;
      left: auto;
      width: min(27rem, 100%);
      height: 24rem;
      transform: none;
      margin: 0 auto;
    }

    body[data-page-type="renal-hub"] .system-hub .mh-topic-orbit .mh-topic-card {
      position: relative;
      left: auto;
      top: auto;
      width: 100%;
      transform: none;
    }

    body[data-page-type="renal-hub"] .system-hub .mh-topic-orbit .mh-topic-card:hover,
    body[data-page-type="renal-hub"] .system-hub .mh-topic-orbit .mh-topic-card:focus-visible {
      transform: translateY(-3px);
    }
  }

  @media (max-width: 620px) {
    body[data-page-type="renal-hub"] .system-hub .mh-topic-orbit {
      grid-template-columns: 1fr;
    }

    body[data-page-type="renal-hub"] .system-hub .mh-brain-center {
      height: 20rem;
    }
  }
</style>

<section class="mh-hub system-hub renal-system-hub" aria-labelledby="renal-hub-title">
  <header class="mh-hub-header">
    <div class="mh-hub-brandmark" aria-hidden="true">
      <img src="{{ '/assets/images/renal-urinary-system.png' | relative_url }}" alt="" data-no-lb>
    </div>
    <div>
      <h1 id="renal-hub-title">Renal &amp; Urinary Study Hub</h1>
      <p>Your simple hub for kidney and urinary nursing.</p>
    </div>
  </header>

  <div class="mh-hub-layout">
    <div class="mh-hub-main">
      <div class="mh-topic-orbit" aria-label="Renal and urinary study topics">
        <svg class="mh-orbit-connectors" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
          <g class="mh-connector-lines">
            <line class="renal-line-uti" x1="180" y1="175" x2="430" y2="280"></line>
            <line class="renal-line-stones" x1="120" y1="336" x2="425" y2="330"></line>
            <line class="renal-line-glom" x1="200" y1="504" x2="435" y2="382"></line>
            <line class="renal-line-procedure" x1="840" y1="238" x2="590" y2="310"></line>
            <line class="renal-line-disease" x1="820" y1="462" x2="570" y2="400"></line>
          </g>
          <g class="mh-connector-dots">
            <circle class="renal-dot-uti" cx="180" cy="175" r="6"></circle><circle class="renal-dot-uti" cx="430" cy="280" r="6"></circle>
            <circle class="renal-dot-stones" cx="120" cy="336" r="6"></circle><circle class="renal-dot-stones" cx="425" cy="330" r="6"></circle>
            <circle class="renal-dot-glom" cx="200" cy="504" r="6"></circle><circle class="renal-dot-glom" cx="435" cy="382" r="6"></circle>
            <circle class="renal-dot-procedure" cx="840" cy="238" r="6"></circle><circle class="renal-dot-procedure" cx="590" cy="310" r="6"></circle>
            <circle class="renal-dot-disease" cx="820" cy="462" r="6"></circle><circle class="renal-dot-disease" cx="570" cy="400" r="6"></circle>
          </g>
        </svg>

        <div class="mh-brain-center" aria-hidden="true">
          <img src="{{ '/assets/images/renal-urinary-system.png' | relative_url }}" alt="" data-no-lb>
        </div>

        <a class="mh-topic-card renal-topic-uti" href="{{ '/renal-urinary/urinary-tract-infections.html' | relative_url }}">
          <span class="mh-topic-icon">⌁</span><span><strong>Urinary Tract Infections</strong><small>Infection cues &amp; care</small></span>
        </a>
        <a class="mh-topic-card renal-topic-stones" href="{{ '/renal-urinary/kidney-stones.html' | relative_url }}">
          <span class="mh-topic-icon">◌</span><span><strong>Kidney Stones</strong><small>Pain, fluids &amp; teaching</small></span>
        </a>
        <a class="mh-topic-card renal-topic-glom" href="{{ '/renal-urinary/glomerulonephritis.html' | relative_url }}">
          <span class="mh-topic-icon">✣</span><span><strong>Glomerulonephritis</strong><small>Inflammation &amp; findings</small></span>
        </a>
        <a class="mh-topic-card renal-topic-procedures" href="{{ '/renal-urinary/dialysis-transplant-procedures.html' | relative_url }}">
          <span class="mh-topic-icon">▣</span><span><strong>Dialysis, Transplant &amp; Procedures</strong><small>Priority procedure care</small></span>
        </a>
        <a class="mh-topic-card renal-topic-disease" href="{{ '/renal-urinary/acute-chronic-kidney-disease.html' | relative_url }}">
          <span class="mh-topic-icon">♢</span><span><strong>Acute &amp; Chronic Kidney Disease</strong><small>Kidney failure priorities</small></span>
        </a>
      </div>

      <nav class="mh-hub-shortcuts" aria-label="Renal and urinary shortcuts">
        <a href="{{ '/all-topics.html' | relative_url }}"><span>⌂</span><strong>Back to Nursing School Hub</strong></a>
      </nav>
    </div>

    <aside class="mh-hub-guide">
      <div class="mh-guide-icon" aria-hidden="true">
        <img src="{{ '/assets/images/renal-urinary-system.png' | relative_url }}" alt="" data-no-lb>
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
      <div class="mh-guide-tip"><span aria-hidden="true">💡</span> Pick any topic around the urinary system to get started.</div>
    </aside>
  </div>
</section>
