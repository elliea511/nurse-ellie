---
layout: default
title: Study for Our Next Exam
---

<style>
  .exam-picker {
    max-width: 960px;
    margin: 1rem auto 3rem;
    text-align: center;
  }
  .exam-picker .exam-kicker {
    color: #8060bf;
    font-weight: 800;
    letter-spacing: .04em;
    text-transform: uppercase;
    font-size: .95rem;
    margin: 0 0 .25rem;
  }
  .exam-picker h1 {
    font-family: "Nunito", sans-serif;
    font-weight: 900;
    font-size: clamp(2rem, 3vw, 2.8rem);
    margin: 0 0 .4rem;
  }
  .exam-picker .exam-sub {
    color: var(--mh-muted, #5a5a72);
    font-size: 1.1rem;
    margin: 0 0 2rem;
  }
  .exam-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }
  .exam-card {
    display: block;
    text-decoration: none;
    text-align: left;
    background: var(--mh-card-bg, #fff);
    border: 1px solid rgba(34,28,80,.12);
    border-top: 5px solid var(--exam-accent);
    border-radius: 18px;
    padding: 1.5rem 1.4rem;
    box-shadow: 0 6px 20px rgba(34,28,80,.07);
    transition: transform .15s ease, box-shadow .15s ease;
  }
  .exam-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(34,28,80,.13);
  }
  .exam-card .exam-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 54px; height: 54px;
    border-radius: 14px;
    font-size: 1.7rem;
    margin-bottom: .9rem;
    background: color-mix(in srgb, var(--exam-accent) 16%, var(--mh-card-bg, #fff));
  }
  .exam-card h2 {
    font-family: "Nunito", sans-serif;
    font-weight: 900;
    font-size: 1.35rem;
    margin: 0 0 .35rem;
    color: var(--exam-accent);
  }
  .exam-card p {
    margin: 0 0 1rem;
    color: var(--mh-muted, #5a5a72);
    font-size: .98rem;
    line-height: 1.45;
  }
  .exam-card .exam-go {
    font-weight: 800;
    color: var(--exam-accent);
  }
  .exam-renal   { --exam-accent: #20afc5; }
  .exam-immune  { --exam-accent: #8060bf; }
  .exam-sensory { --exam-accent: #2876e8; }
</style>

<div class="exam-picker">
  <p class="exam-kicker">✦ Next Exam</p>
  <h1>Study for Our Next Exam</h1>
  <p class="exam-sub">Pick a section to open its topic notes.</p>

  <div class="exam-grid">
    <a class="exam-card exam-renal" href="{{ '/renal-urinary.html' | relative_url }}">
      <span class="exam-icon">🫘</span>
      <h2>Renal &amp; Urinary</h2>
      <p>Kidney and urinary nursing — dialysis, kidney failure, stones, infections, diagnostics, and surgery.</p>
      <span class="exam-go">Open notes →</span>
    </a>

    <a class="exam-card exam-immune" href="{{ '/immune-inflammatory.html' | relative_url }}">
      <span class="exam-icon">🛡️</span>
      <h2>Immune &amp; Inflammatory</h2>
      <p>HIV/AIDS, rheumatoid arthritis, osteoarthritis, gout, lupus, and antimicrobials.</p>
      <span class="exam-go">Open notes →</span>
    </a>

    <a class="exam-card exam-sensory" href="{{ '/sensory-perception.html' | relative_url }}">
      <span class="exam-icon">👁️</span>
      <h2>Sensory Perception</h2>
      <p>Vision and hearing nursing — eye disorders and ear disorders.</p>
      <span class="exam-go">Open notes →</span>
    </a>
  </div>
</div>
