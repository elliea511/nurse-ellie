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
    padding: 1.45rem 0 1.75rem !important;
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
    --sensory-navy: #0b174e;
    --sensory-muted: #65708f;
    --sensory-purple: #8060bf;
    --sensory-border: #d7e5eb;
    --sensory-blue: #2876e8;
    --sensory-pink: #f24f87;
    min-height: auto;
    color: var(--sensory-navy);
    background: transparent;
  }

  .sensory-page * {
    box-sizing: border-box;
  }

  .sensory-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 2.2rem;
    align-items: stretch;
    width: min(100% - 32px, 1280px);
    margin-inline: auto;
  }

  .sensory-main {
    min-width: 0;
    text-align: center;
  }

  .sensory-title {
    margin: 0 0 2.2rem;
    padding: 0 !important;
    background: transparent !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  .sensory-title h1 {
    display: block !important;
    width: auto !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    background: transparent !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    color: var(--sensory-navy) !important;
    -webkit-text-fill-color: var(--sensory-navy) !important;
    font-family: "Nunito", sans-serif !important;
    font-size: clamp(2rem, 3vw, 3.15rem) !important;
    font-weight: 900 !important;
    letter-spacing: -0.045em;
    line-height: 1 !important;
    text-shadow: none !important;
  }

  .sensory-title h1::before,
  .sensory-title h1::after {
    display: none !important;
    content: none !important;
  }

  .sensory-title p {
    margin: 0;
    color: #8060bf;
    font-size: 1.12rem;
    font-weight: 700;
    line-height: 1.4;
  }

  .sensory-stage {
    position: relative;
    display: grid;
    grid-template-columns: 245px minmax(300px, 380px) 245px;
    gap: 1.4rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 930px;
    margin: 0.65rem auto 0;
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

  .sensory-connectors path {
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .sensory-line-eye,
  .sensory-dot-eye {
    stroke: var(--sensory-blue);
    fill: var(--sensory-blue);
  }

  .sensory-line-ear,
  .sensory-dot-ear {
    stroke: var(--sensory-pink);
    fill: var(--sensory-pink);
  }

  .sensory-connectors circle {
    stroke: #fff;
    stroke-width: 3;
  }

  .sensory-card {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 3.2rem minmax(0, 1fr) auto;
    align-items: center;
    gap: .85rem;
    width: 245px;
    min-height: 78px;
    padding: .8rem 1rem;
    border: 1px solid var(--card-border);
    border-radius: 18px;
    background: rgba(255,255,255,.96);
    box-shadow: 0 8px 20px rgba(27, 50, 82, .10);
    color: var(--sensory-navy) !important;
    text-align: left;
    text-decoration: none !important;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }

  .sensory-card:hover,
  .sensory-card:focus-visible {
    transform: translateY(-3px);
    border-color: var(--card-accent);
    box-shadow: 0 13px 26px rgba(27, 50, 82, 0.15);
    outline: none;
  }

  .sensory-card:focus-visible {
    box-shadow: 0 0 0 4px rgba(128, 96, 191, 0.18), 0 13px 26px rgba(27, 50, 82, 0.15);
  }

  .sensory-card-eye {
    --card-accent: var(--sensory-blue);
    --card-border: #c7dcff;
  }

  .sensory-card-ear {
    --card-accent: var(--sensory-pink);
    --card-border: #ffc3d5;
  }

  .sensory-card-icon {
    display: grid;
    place-items: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 999px;
    background: var(--icon-bg);
    color: var(--card-accent);
    font-size: 1.45rem;
    font-weight: 900;
  }

  .sensory-card-eye .sensory-card-icon { --icon-bg: #e8f2ff; }
  .sensory-card-ear .sensory-card-icon { --icon-bg: #ffe6ef; }

  .sensory-card strong,
  .sensory-card small {
    display: block;
  }

  .sensory-card strong {
    color: var(--sensory-navy) !important;
    font-size: .99rem;
    font-weight: 900;
    line-height: 1.2;
  }

  .sensory-card small {
    margin-top: .22rem;
    color: #68728c;
    font-size: .74rem;
    font-weight: 700;
    line-height: 1.25;
  }

  .sensory-card-chevron {
    color: var(--card-accent);
    font-size: 1.25rem;
    font-weight: 900;
    opacity: 0.65;
  }

  .sensory-profile-wrap {
    position: relative;
    z-index: 2;
    min-width: 0;
  }

  .sensory-profile {
    display: block;
    width: 100%;
    max-width: 360px;
    max-height: 420px;
    object-fit: contain;
    margin-inline: auto;
    filter: saturate(1.08) contrast(1.04) drop-shadow(0 18px 22px rgba(85, 65, 150, 0.1));
  }

  .sensory-back {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    width: min(360px, 92%);
    min-height: 58px;
    margin: 1rem auto 0;
    padding: .7rem;
    border: 1px solid #e7e3ed;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 6px 16px rgba(27, 50, 82, .08);
    color: #172153 !important;
    text-decoration: none !important;
    font-size: .9rem;
    font-weight: 900;
  }

  .sensory-back svg {
    width: 1.45rem;
    height: 1.45rem;
  }

  .sensory-back:hover,
  .sensory-back:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 13px 28px rgba(76, 47, 168, 0.15);
    outline: none;
  }

  .sensory-sidebar {
    display: flex;
    flex-direction: column;
    align-self: start;
    padding: 2.1rem 1.9rem;
    border: 1px solid #cbdde2;
    border-radius: 24px;
    background: linear-gradient(155deg, #fff, #fbfefe);
    box-shadow: 0 12px 30px rgba(27, 50, 82, 0.07);
  }

  .sensory-sidebar h2 {
    margin: 0 !important;
    color: #0c174d !important;
    font-family: "Nunito", sans-serif !important;
    font-size: 1.55rem !important;
    line-height: 1.2 !important;
    text-align: center;
    border: 0 !important;
    background: none !important;
  }

  .sensory-guide-rule {
    height: 1px;
    margin: 1.45rem 0;
    background: #e0d6f5;
  }

  .sensory-sidebar > p {
    margin: 0 0 0.7rem;
    font-weight: 900;
    color: var(--sensory-navy);
  }

  .sensory-sidebar ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sensory-sidebar li {
    position: relative;
    margin: 0 0 0.75rem;
    padding-left: 2rem;
    color: var(--sensory-navy);
    font-weight: 800;
    line-height: 1.3;
  }

  .sensory-sidebar li::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0.05rem;
    display: grid;
    place-items: center;
    width: 1.2rem;
    height: 1.2rem;
    border: 1.5px solid var(--sensory-purple);
    border-radius: 50%;
    color: #6a4bb0;
    font-size: 0.75rem;
    font-weight: 900;
  }

  .sensory-guide-tip {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-top: auto;
    padding: 1rem;
    border: 1px solid #e6ddf7;
    border-radius: 15px;
    background: #f5f1fd;
    color: #4a3b74;
    font-size: .9rem;
    font-weight: 800;
  }

  .sensory-guide-tip span {
    font-size: 1.35rem;
  }

  [data-theme="dark"] .sensory-page {
    background: #171522;
  }

  [data-theme="dark"] .sensory-title h1,
  [data-theme="dark"] .sensory-sidebar h2,
  [data-theme="dark"] .sensory-sidebar > p,
  [data-theme="dark"] .sensory-sidebar li,
  [data-theme="dark"] .sensory-card strong {
    color: #eef7ff !important;
    -webkit-text-fill-color: #eef7ff !important;
  }

  [data-theme="dark"] .sensory-card,
  [data-theme="dark"] .sensory-sidebar,
  [data-theme="dark"] .sensory-back {
    background: #242a3c;
    border-color: #45526c;
  }

  [data-theme="dark"] .sensory-card small {
    color: #b5bfd1;
  }

  [data-theme="dark"] .sensory-guide-tip {
    background: #2f2749;
    color: #e7dfff;
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

  @media (max-width: 1050px) {
    .sensory-layout {
      grid-template-columns: 1fr;
      width: min(100% - 1.5rem, 860px);
    }

    .sensory-sidebar {
      width: min(100%, 680px);
      margin-inline: auto;
      align-self: auto;
    }

    .sensory-connectors {
      display: none;
    }
  }

  @media (max-width: 760px) {
    body[data-page-type="sensory-hub"] .main-content {
      padding-top: 1.25rem !important;
    }

    .sensory-layout {
      width: min(100% - 20px, 520px);
    }

    .sensory-title h1 {
      font-size: 1.8rem !important;
    }

    .sensory-title p {
      font-size: .95rem;
    }

    .sensory-stage {
      grid-template-columns: 1fr;
      max-width: 380px;
      gap: .7rem;
    }

    .sensory-profile-wrap {
      order: 1;
    }

    .sensory-card-eye {
      order: 2;
    }

    .sensory-card-ear {
      order: 3;
    }

    .sensory-card {
      width: 100%;
      min-height: 70px;
      padding: .65rem .7rem;
      border-radius: 15px;
    }

    .sensory-card-icon {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.05rem;
    }

    .sensory-card strong {
      font-size: .82rem;
    }

    .sensory-card small {
      display: none;
    }

    .sensory-profile {
      max-height: 310px;
    }

    .sensory-back {
      margin-top: 0.9rem;
    }
  }

  /* Match the Mental Health hub composition while keeping Sensory-specific art and links. */
  body[data-page-type="sensory-hub"] .main-content {
    padding: 2.25rem 0 3rem !important;
  }

  .sensory-page {
    padding: 0 2rem;
  }

  .sensory-layout {
    grid-template-columns: minmax(720px, 1fr) 320px;
    gap: 2.2rem;
    width: 100%;
    margin: 0;
  }

  .sensory-main {
    text-align: left;
  }

  .sensory-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 2.2rem;
    text-align: left;
  }

  .sensory-brandmark {
    display: grid;
    flex: 0 0 4.6rem;
    place-items: center;
    width: 4.6rem;
    height: 4.6rem;
    overflow: visible;
  }

  .sensory-brandmark img {
    width: 4.2rem;
    height: 4.2rem;
    object-fit: contain;
    filter: drop-shadow(0 10px 14px rgba(128, 96, 191, .14));
  }

  .sensory-title h1 {
    letter-spacing: -0.04em;
    line-height: 1.05 !important;
  }

  .sensory-title p {
    margin: 0.25rem 0 0;
  }

  .sensory-stage {
    width: 100%;
    max-width: 1000px;
    min-height: 560px;
    margin: 0;
    grid-template-columns: minmax(190px, 245px) minmax(300px, 410px) minmax(190px, 245px);
    gap: clamp(1rem, 3vw, 2.2rem);
  }

  .sensory-profile {
    max-width: 410px;
    max-height: 470px;
  }

  .sensory-sidebar {
    align-self: stretch;
  }

  .sensory-sidebar-icon {
    display: grid;
    place-items: center;
    width: 4.4rem;
    height: 4.4rem;
    margin: 0 auto 1rem;
  }

  .sensory-sidebar-icon img {
    width: 3.7rem;
    height: 3.7rem;
    object-fit: contain;
  }

  @media (max-width: 1250px) {
    .sensory-layout {
      grid-template-columns: minmax(0, 1fr) 245px;
      gap: 1.2rem;
    }

    .sensory-stage {
      min-height: 520px;
      grid-template-columns: minmax(160px, 210px) minmax(250px, 360px) minmax(160px, 210px);
      gap: 1rem;
    }

    .sensory-card {
      min-height: 72px;
      padding: .7rem .8rem;
      gap: .6rem;
    }

    .sensory-card-icon {
      width: 2.65rem;
      height: 2.65rem;
      font-size: 1.15rem;
    }

    .sensory-card strong {
      font-size: .86rem;
    }

    .sensory-card small {
      display: none;
    }

    .sensory-sidebar {
      padding: 1.6rem 1.3rem;
    }
  }

  @media (max-width: 980px) {
    .sensory-layout {
      grid-template-columns: 1fr;
      width: 100%;
    }

    .sensory-sidebar {
      width: min(100%, 680px);
      margin-inline: auto;
    }
  }

  @media (max-width: 740px) {
    .sensory-page {
      padding: 0 1rem;
    }

    .sensory-title {
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }

    .sensory-brandmark {
      flex-basis: 3.5rem;
      width: 3.5rem;
      height: 3.5rem;
    }

    .sensory-brandmark img {
      width: 3.2rem;
      height: 3.2rem;
    }

    .sensory-stage {
      grid-template-columns: 1fr;
      max-width: 380px;
      min-height: auto;
      margin-inline: auto;
    }
  }

  /* Final polish: keep the hub background white and make topic cards match the sleeker Mental Health style. */
  body[data-page-type="sensory-hub"],
  body[data-page-type="sensory-hub"] .page-wrapper,
  body[data-page-type="sensory-hub"] .main-content,
  body[data-page-type="sensory-hub"] .sensory-page {
    background: #fff !important;
    background-image: none !important;
  }

  body[data-page-type="sensory-hub"] .sensory-card {
    display: flex;
    align-items: center;
    grid-template-columns: none;
    width: 225px;
    min-height: 66px;
    padding: .62rem .75rem;
    gap: .62rem;
    border: 1px solid #dbe5e9;
    border-radius: 16px;
    background: rgba(255, 255, 255, .96);
    box-shadow: 0 7px 17px rgba(27, 50, 82, .08);
  }

  body[data-page-type="sensory-hub"] .sensory-card:hover,
  body[data-page-type="sensory-hub"] .sensory-card:focus-visible {
    box-shadow: 0 11px 22px rgba(27, 50, 82, .13);
  }

  body[data-page-type="sensory-hub"] .sensory-card-icon {
    flex: 0 0 2.65rem;
    width: 2.65rem;
    height: 2.65rem;
    font-size: 1.12rem;
  }

  body[data-page-type="sensory-hub"] .sensory-card strong {
    font-size: .9rem;
    line-height: 1.18;
    font-weight: 900;
  }

  body[data-page-type="sensory-hub"] .sensory-card small {
    margin-top: .18rem;
    font-size: .68rem;
    line-height: 1.22;
    font-weight: 700;
  }

  body[data-page-type="sensory-hub"] .sensory-card-chevron {
    display: none;
  }

  @media (max-width: 1250px) {
    body[data-page-type="sensory-hub"] .sensory-card {
      width: 205px;
      min-height: 64px;
      padding: .58rem .68rem;
    }
  }

  @media (max-width: 740px) {
    body[data-page-type="sensory-hub"] .sensory-card {
      width: 100%;
    }
  }
</style>

<section class="sensory-page" aria-labelledby="sensory-title">
  <div class="sensory-layout">
    <div class="sensory-main">
      <header class="sensory-title">
        <div class="sensory-brandmark" aria-hidden="true">
          <img src="{{ '/assets/images/sensory-profile-woman.png' | relative_url }}" alt="" data-no-lb>
        </div>
        <div>
          <h1 id="sensory-title">Sensory Perception</h1>
          <p>Your simple hub for vision and hearing nursing.</p>
        </div>
      </header>

      <div class="sensory-stage" aria-label="Sensory perception study topics">
        <svg class="sensory-connectors" viewBox="0 0 856 420" preserveAspectRatio="none" aria-hidden="true">
          <path class="sensory-line-eye" d="M230 188 C275 188 320 168 374 164"></path>
          <circle class="sensory-dot-eye" cx="230" cy="188" r="5"></circle>
          <circle class="sensory-dot-eye" cx="374" cy="164" r="5"></circle>

          <path class="sensory-line-ear" d="M626 208 C585 208 540 216 469 216"></path>
          <circle class="sensory-dot-ear" cx="626" cy="208" r="5"></circle>
          <circle class="sensory-dot-ear" cx="469" cy="216" r="5"></circle>
        </svg>

        <a class="sensory-card sensory-card-eye" href="{{ '/sensory-perception/eye-disorders.html' | relative_url }}">
          <span class="sensory-card-icon" aria-hidden="true">👁</span>
          <span><strong>Eye Disorders</strong><small>Vision changes &amp; safety</small></span>
          <span class="sensory-card-chevron" aria-hidden="true">›</span>
        </a>

        <div class="sensory-profile-wrap">
          <img class="sensory-profile" src="{{ '/assets/images/sensory-profile-woman.png' | relative_url }}" alt="Side-profile woman with eye and ear highlighted for sensory perception study" data-no-lb>
        </div>

        <a class="sensory-card sensory-card-ear" href="{{ '/sensory-perception/ear-disorders.html' | relative_url }}">
          <span class="sensory-card-icon" aria-hidden="true">👂</span>
          <span><strong>Ear Disorders</strong><small>Hearing changes &amp; care</small></span>
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

    <aside class="sensory-sidebar">
      <div class="sensory-sidebar-icon" aria-hidden="true">
        <img src="{{ '/assets/images/sensory-profile-woman.png' | relative_url }}" alt="" data-no-lb>
      </div>
      <h2>Select a topic<br>to open notes</h2>
      <div class="sensory-guide-rule"></div>
      <p>Study resources include:</p>
      <ul>
        <li>Overview &amp; key concepts</li>
        <li>Assessment &amp; nursing priorities</li>
        <li>Safety interventions</li>
        <li>Patient education</li>
        <li>NCLEX tips &amp; memory cues</li>
      </ul>
      <div class="sensory-guide-tip"><span aria-hidden="true">💡</span> Choose the eye or ear topic to start reviewing.</div>
    </aside>
  </div>
</section>
