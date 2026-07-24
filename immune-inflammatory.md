---
layout: default
title: Immune & Inflammatory
page_type: immune-hub
---

<style>
  body[data-page-type="immune-hub"] .page-wrapper {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  body[data-page-type="immune-hub"] .main-content {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 1.25rem 0 2rem !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    overflow-x: hidden !important;
  }

  body[data-page-type="immune-hub"] .main-content img {
    margin: 0 auto !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .immune-page {
    --immune-navy: #0b174e;
    --immune-purple: #8060bf;
    --immune-muted: #53649a;
    --immune-border: #d7e5eb;
    min-height: auto;
    color: var(--immune-navy);
  }

  .immune-page * {
    box-sizing: border-box;
  }

  .immune-layout {
    display: grid;
    grid-template-columns: minmax(720px, 1fr) 320px;
    gap: 2.2rem;
    align-items: stretch;
    width: min(100% - 64px, 1320px);
    margin-inline: auto;
  }

  .immune-main {
    min-width: 0;
    text-align: center;
  }

  .immune-heading {
    margin: 0 0 1.1rem;
    text-align: center;
  }

  .immune-kicker {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin: 0 0 0.15rem;
    color: var(--immune-purple);
    font-size: 1.45rem;
  }

  .immune-heading h1 {
    display: block !important;
    width: auto !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    color: var(--immune-navy) !important;
    -webkit-text-fill-color: var(--immune-navy) !important;
    font-family: "Nunito", sans-serif !important;
    font-size: clamp(2rem, 3vw, 3.15rem) !important;
    font-weight: 900 !important;
    letter-spacing: -0.045em;
    line-height: 1 !important;
    text-shadow: none !important;
  }

  .immune-heading h1::before,
  .immune-heading h1::after {
    display: none !important;
    content: none !important;
  }

  .immune-heading p {
    margin: 0.25rem 0 0;
    color: #8060bf;
    font-size: 1.12rem;
    font-weight: 700;
    line-height: 1.4;
  }

  .immune-stage {
    position: relative;
    width: min(100%, 1000px);
    min-height: 700px;
    margin-inline: auto;
  }

  .immune-connectors {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: visible;
    pointer-events: none;
  }

  .immune-connectors path {
    fill: none;
    stroke: #a48fd6;
    stroke-width: 2;
    stroke-dasharray: 5 7;
    stroke-linecap: round;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
  }

  .immune-connectors circle {
    fill: #8060bf;
    stroke: #fff;
    stroke-width: 3;
  }

  .immune-body-wrap {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 0;
    width: min(37vw, 390px);
    transform: translateX(-50%);
    pointer-events: none;
  }

  .immune-body-image {
    display: block;
    width: 100%;
    max-width: 390px;
    max-height: 650px;
    object-fit: contain;
    filter: drop-shadow(0 22px 22px rgba(29, 60, 106, .14));
  }

  .immune-card {
    position: absolute;
    z-index: 3;
    display: grid;
    grid-template-columns: 3.2rem minmax(0, 1fr) auto;
    align-items: center;
    gap: .85rem;
    width: min(245px, 28%);
    min-height: 72px;
    padding: .8rem 1rem;
    border: 1px solid #dbe5e9;
    border-radius: 18px;
    background: rgba(255,255,255,.96);
    box-shadow: 0 8px 20px rgba(27, 50, 82, .10);
    color: #101b50 !important;
    text-align: left;
    text-decoration: none !important;
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  }

  .immune-card:hover,
  .immune-card:focus-visible {
    transform: translateY(-3px);
    border-color: var(--card-accent, #8060bf);
    box-shadow: 0 13px 26px rgba(27, 50, 82, .15);
    outline: none;
  }

  .immune-card:focus-visible {
    outline: 3px solid rgba(128, 96, 191, 0.2);
    outline-offset: 3px;
  }

  .immune-card-icon {
    display: grid;
    place-items: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: var(--icon-bg, #e7e0fb);
    color: var(--card-accent, #6945c2);
    font-size: 1.45rem;
    font-weight: 900;
  }

  .immune-card-title,
  .immune-card-description {
    display: block;
  }

  .immune-card-title {
    color: #101b50 !important;
    font-size: .99rem;
    font-weight: 900;
    line-height: 1.2;
  }

  .immune-card-description {
    margin-top: .22rem;
    color: #68728c;
    font-size: .74rem;
    line-height: 1.25;
    font-weight: 700;
  }

  .immune-card-chevron {
    color: var(--card-accent, #8060bf);
    font-size: 1.55rem;
    font-weight: 900;
    opacity: 0.75;
  }

  .immune-topic-hiv {
    --card-accent: #8060bf;
    --icon-bg: #e7e0fb;
    left: 2%;
    top: 10%;
  }

  .immune-topic-ra {
    --card-accent: #2876e8;
    --icon-bg: #dceeff;
    left: 0;
    top: 37%;
  }

  .immune-topic-gout {
    --card-accent: #2d9c73;
    --icon-bg: #dff5e9;
    left: 3%;
    top: 66%;
  }

  .immune-topic-lupus {
    --card-accent: #e65a8d;
    --icon-bg: #ffe3ef;
    right: 5%;
    top: 10%;
  }

  .immune-topic-antimicrobials {
    --card-accent: #d9922f;
    --icon-bg: #fff0d8;
    right: 0;
    top: 37%;
  }

  .immune-topic-meds {
    --card-accent: #20a7a8;
    --icon-bg: #dff7f7;
    right: 3%;
    top: 66%;
  }

  .immune-sidebar {
    display: flex;
    flex-direction: column;
    align-self: start;
    margin-top: 5.05rem;
    min-height: 590px;
    padding: 2.1rem 1.9rem;
    border: 1px solid #cbdde2;
    border-radius: 24px;
    background: linear-gradient(155deg, #fff, #fbfefe);
    box-shadow: 0 12px 30px rgba(27, 50, 82, .07);
  }

  .immune-sidebar-icon {
    display: grid;
    place-items: center;
    width: 4.4rem;
    height: 4.4rem;
    margin: 0 auto 1rem;
    border-radius: 1.25rem;
    background: #f1ebfb;
    color: #8060bf;
    font-size: 2.25rem;
  }

  .immune-sidebar h2 {
    margin: 0 !important;
    color: #0c174d !important;
    font-family: "Nunito", sans-serif !important;
    font-size: 1.55rem !important;
    line-height: 1.2 !important;
    text-align: center;
    border: 0 !important;
    background: none !important;
  }

  .immune-guide-rule {
    height: 1px;
    margin: 1.8rem 0;
    background: #e0d6f5;
  }

  .immune-sidebar > p {
    margin: 0 0 .7rem;
    color: #101b50;
    font-weight: 800;
  }

  .immune-sidebar ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .immune-sidebar li {
    position: relative;
    margin: 0 0 .8rem;
    padding-left: 2rem;
    color: #101b50;
    line-height: 1.3;
    font-weight: 700;
  }

  .immune-sidebar li::before {
    content: "✓";
    position: absolute;
    left: 0;
    display: grid;
    place-items: center;
    width: 1.2rem;
    height: 1.2rem;
    border: 1.5px solid #8060bf;
    border-radius: 50%;
    color: #6a4bb0;
    font-size: .75rem;
    font-weight: 900;
  }

  .immune-nclex-link,
  .immune-basics-link {
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: .9rem;
    border: 1px solid #cdbff2;
    border-radius: 14px;
    background: #f3effd;
    color: #382875 !important;
    text-decoration: none !important;
  }

  .immune-nclex-link {
    margin: 1.1rem 0;
    transition: transform .18s ease, box-shadow .18s ease;
  }

  .immune-nclex-link:hover,
  .immune-nclex-link:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(76, 47, 168, .14);
    outline: 2px solid #8b73d7;
    outline-offset: 2px;
  }

  .immune-nclex-link > span:first-child {
    display: grid;
    flex: 0 0 2.25rem;
    place-items: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    background: #fff;
    color: #6848c2;
    font-weight: 900;
  }

  .immune-nclex-link strong,
  .immune-nclex-link small {
    display: block;
    line-height: 1.2;
  }

  .immune-nclex-link strong {
    font-size: .9rem;
  }

  .immune-nclex-link small {
    margin-top: .18rem;
    color: #716898;
    font-size: .7rem;
    font-weight: 700;
  }

  .immune-basics-link {
    margin-top: auto;
    color: #4a3b74 !important;
    font-size: .9rem;
    font-weight: 800;
  }

  .immune-basics-link span:first-child {
    font-size: 1.5rem;
  }

  .immune-basics-link strong,
  .immune-basics-link small {
    display: block;
    line-height: 1.2;
  }

  .immune-basics-link strong {
    color: #382875;
    font-size: .9rem;
  }

  .immune-basics-link small {
    margin-top: .18rem;
    color: #716898;
    font-size: .7rem;
    font-weight: 700;
  }

  .immune-back {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .65rem;
    width: min(390px, 92%);
    min-height: 58px;
    margin: 0.85rem auto 0;
    padding: .7rem;
    border: 1px solid #e7e3ed;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 6px 16px rgba(27, 50, 82, .08);
    color: #172153 !important;
    font-size: .95rem;
    font-weight: 900;
    text-decoration: none !important;
    transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
  }

  .immune-back:hover,
  .immune-back:focus-visible {
    transform: translateY(-2px);
    border-color: #8060bf;
    box-shadow: 0 9px 20px rgba(27, 50, 82, .13);
    outline: none;
  }

  .immune-back span {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #f1ebfb;
    color: #6945c2;
    font-size: 1.25rem;
  }

  [data-theme="dark"] .immune-page {
    color: #efeaff;
  }

  [data-theme="dark"] .immune-heading h1,
  [data-theme="dark"] .immune-sidebar h2,
  [data-theme="dark"] .immune-sidebar > p,
  [data-theme="dark"] .immune-sidebar li,
  [data-theme="dark"] .immune-card-title {
    color: #eef7ff !important;
    -webkit-text-fill-color: #eef7ff !important;
  }

  [data-theme="dark"] .immune-card,
  [data-theme="dark"] .immune-sidebar,
  [data-theme="dark"] .immune-back {
    background: #242a3c;
    border-color: #45526c;
  }

  [data-theme="dark"] .immune-card-description,
  [data-theme="dark"] .immune-heading p {
    color: #b5bfd1;
  }

  [data-theme="dark"] .immune-nclex-link,
  [data-theme="dark"] .immune-basics-link {
    background: #302849;
    border-color: #544679;
    color: #eee8ff !important;
  }

  @media (prefers-reduced-motion: reduce) {
    .immune-card,
    .immune-back,
    .immune-nclex-link {
      transition: none;
    }

    .immune-card:hover,
    .immune-card:focus-visible,
    .immune-back:hover,
    .immune-nclex-link:hover {
      transform: none;
    }
  }

  @media (max-width: 1250px) {
    .immune-layout {
      grid-template-columns: minmax(0, 1fr) 245px;
      gap: 1.2rem;
    }

    .immune-stage {
      min-height: 660px;
    }

    .immune-card {
      width: min(245px, 28%);
      min-height: 72px;
      padding: .7rem .8rem;
      gap: .6rem;
    }

    .immune-card-icon {
      width: 2.65rem;
      height: 2.65rem;
      font-size: 1.15rem;
    }

    .immune-card-title {
      font-size: .86rem;
    }

    .immune-card-description {
      display: none;
    }

    .immune-sidebar {
      min-height: 560px;
      margin-top: 4.9rem;
      padding: 1.6rem 1.3rem;
    }
  }

  @media (max-width: 1050px) {
    .immune-layout {
      grid-template-columns: 1fr;
      width: min(100% - 1.5rem, 860px);
    }

    .immune-sidebar {
      width: min(100%, 680px);
      min-height: auto;
      margin-top: 0;
      margin-inline: auto;
    }

    .immune-connectors {
      display: none;
    }

    .immune-stage {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: .8rem;
      min-height: auto;
      max-width: 760px;
    }

    .immune-body-wrap {
      position: relative;
      grid-column: 1 / -1;
      left: auto;
      bottom: auto;
      width: min(100%, 360px);
      transform: none;
      margin-inline: auto;
      order: -1;
    }

    .immune-card,
    .immune-card:hover,
    .immune-card:focus-visible {
      position: relative;
      inset: auto;
      width: 100%;
      transform: none;
    }
  }

  @media (max-width: 700px) {
    body[data-page-type="immune-hub"] .main-content {
      padding-top: 1.25rem !important;
    }

    .immune-layout {
      width: min(100% - 1.25rem, 520px);
    }

    .immune-heading h1 {
      font-size: 1.8rem !important;
    }

    .immune-heading p {
      font-size: .95rem;
    }

    .immune-stage {
      grid-template-columns: 1fr;
      gap: .7rem;
    }

    .immune-body-wrap {
      width: min(100%, 320px);
    }

    .immune-card {
      min-height: 70px;
      padding: .65rem .7rem;
      border-radius: 15px;
    }

    .immune-card-icon {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.05rem;
    }

    .immune-card-title {
      font-size: .82rem;
    }

    .immune-card-description {
      display: none;
    }

    .immune-sidebar {
      padding: 1.6rem;
    }
  }

  /* Final Immune homepage alignment: match the Mental Health hub system without altering Mental Health. */
  body[data-page-type="immune-hub"] .main-content {
    padding: 2.25rem 0 3rem !important;
  }

  body[data-page-type="immune-hub"] .immune-page {
    padding: 0 2rem;
    color: #0d194f;
  }

  body[data-page-type="immune-hub"] .mh-breadcrumb {
    width: 100%;
    padding: 0 2rem;
    margin: 0 0 1.25rem;
  }

  .immune-layout {
    width: 100%;
    margin: 0;
    grid-template-columns: minmax(720px, 1fr) 320px;
    gap: 2.2rem;
    align-items: stretch;
  }

  .immune-main {
    text-align: left;
  }

  .immune-heading {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 2.2rem;
    text-align: left;
  }

  .immune-kicker {
    display: none;
  }

  .immune-brandmark {
    display: grid;
    flex: 0 0 4.6rem;
    place-items: center;
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 0;
    background: transparent;
    overflow: visible;
  }

  .immune-brandmark img {
    width: 4.2rem;
    height: 4.2rem;
    object-fit: contain;
    filter: drop-shadow(0 10px 14px rgba(128, 96, 191, .18));
  }

  .immune-heading h1 {
    font-family: "Nunito", sans-serif !important;
    font-size: clamp(2rem, 3vw, 3.15rem) !important;
    font-weight: 900 !important;
    line-height: 1.05 !important;
    letter-spacing: -0.04em;
    color: #0b174e !important;
    -webkit-text-fill-color: #0b174e !important;
  }

  .immune-heading p {
    margin: 0.25rem 0 0;
    color: #8060bf;
    font-size: 1.12rem;
    font-weight: 700;
  }

  .immune-stage {
    display: block;
    width: 100%;
    min-height: 820px;
    margin: 0;
  }

  .immune-stage::before {
    content: "";
    position: absolute;
    inset: 9% 17%;
    border: 2px dashed rgba(128, 96, 191, 0.28);
    border-radius: 50%;
    pointer-events: none;
  }

  .immune-connectors path {
    stroke: #a48fd6;
    stroke-width: 2;
    stroke-dasharray: 5 7;
    opacity: 1;
    vector-effect: non-scaling-stroke;
  }

  .immune-connectors circle {
    fill: #8060bf;
    stroke: none;
  }

  .immune-body-wrap {
    z-index: 1;
    top: 50%;
    bottom: auto;
    width: 27rem;
    height: 39rem;
    transform: translate(-50%, -50%);
  }

  .immune-body-image {
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    object-fit: contain;
    filter: drop-shadow(0 22px 22px rgba(29, 60, 106, .16));
  }

  .immune-card {
    display: flex;
    align-items: center;
    gap: .85rem;
    width: min(245px, 28%);
    min-height: 72px;
    padding: .8rem 1rem;
    border: 1px solid #dbe5e9;
    border-radius: 18px;
    background: rgba(255,255,255,.96);
    box-shadow: 0 8px 20px rgba(27, 50, 82, .10);
    transform: translate(-50%, -50%);
  }

  .immune-card:hover,
  .immune-card:focus-visible {
    transform: translate(-50%, calc(-50% - 3px));
    border-color: #8060bf;
    box-shadow: 0 13px 26px rgba(27, 50, 82, .15);
  }

  .immune-card-icon {
    flex: 0 0 3.2rem;
    width: 3.2rem;
    height: 3.2rem;
    font-size: 1.45rem;
  }

  .immune-card-title {
    font-size: .99rem;
    line-height: 1.2;
    font-weight: 900;
  }

  .immune-card-description {
    margin-top: .22rem;
    color: #68728c;
    font-size: .74rem;
    line-height: 1.25;
    font-weight: 700;
  }

  .immune-card-chevron {
    display: none;
  }

  .immune-topic-hiv { left: 18%; top: 18%; }
  .immune-topic-ra { left: 12%; top: 42%; }
  .immune-topic-gout { left: 18%; top: 68%; }
  .immune-topic-lupus { right: auto; left: 82%; top: 18%; }
  .immune-topic-antimicrobials { right: auto; left: 88%; top: 42%; }
  .immune-topic-meds { right: auto; left: 82%; top: 68%; }

  .immune-sidebar {
    align-self: stretch;
    margin-top: 0;
    min-height: 0;
    padding: 2.1rem 1.9rem;
    border: 1px solid #cbdde2;
    border-radius: 24px;
    background: linear-gradient(155deg, #fff, #fbfefe);
    box-shadow: 0 12px 30px rgba(27, 50, 82, .07);
  }

  .immune-sidebar-icon {
    width: 4.4rem;
    height: 4.4rem;
    margin: 0 auto 1rem;
    border-radius: 0;
    background: transparent;
    font-size: 2.25rem;
  }

  .immune-guide-rule {
    margin: 1.8rem 0;
  }

  .immune-nclex-link {
    margin: 1.1rem 0;
  }

  .immune-basics-link {
    margin-top: auto;
    border: 1px solid #e6ddf7;
    border-radius: 15px;
    background: #f5f1fd;
  }

  .immune-back-row {
    grid-template-columns: 1fr;
    width: min(360px, 100%);
    margin: 1rem auto 0;
  }

  .immune-back-row .immune-back {
    width: 100%;
    margin: 0;
  }

  .immune-back-row .immune-back span {
    width: auto;
    height: auto;
    border-radius: 0;
    background: transparent;
    font-size: 1.25rem;
  }

  @media (max-width: 1250px) {
    .immune-layout {
      grid-template-columns: minmax(0, 1fr) 245px;
      gap: 1.2rem;
    }

    .immune-stage {
      min-height: 760px;
    }

    .immune-body-wrap {
      width: 24rem;
      height: 36rem;
    }

    .immune-card {
      min-height: 72px;
      padding: .7rem .8rem;
      gap: .6rem;
    }

    .immune-card-icon {
      flex-basis: 2.65rem;
      width: 2.65rem;
      height: 2.65rem;
      font-size: 1.15rem;
    }

    .immune-card-title {
      font-size: .86rem;
    }

    .immune-card-description {
      display: none;
    }

    .immune-sidebar {
      padding: 1.6rem 1.3rem;
    }
  }

  @media (max-width: 980px) {
    .immune-layout {
      grid-template-columns: minmax(0, 1fr) 235px;
      gap: 1rem;
      width: 100%;
    }

    .immune-stage {
      min-height: 720px;
    }

    .immune-body-wrap {
      width: 21rem;
      height: 32rem;
    }

    .immune-card {
      min-height: 70px;
      padding: .65rem .7rem;
      gap: .55rem;
      border-radius: 15px;
    }

    .immune-card-icon {
      flex-basis: 2.5rem;
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.05rem;
    }

    .immune-card-title {
      font-size: .82rem;
    }
  }

  @media (max-width: 740px) {
    .immune-layout {
      grid-template-columns: 1fr;
    }

    .immune-heading {
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }

    .immune-brandmark {
      flex-basis: 3.5rem;
      width: 3.5rem;
      height: 3.5rem;
    }

    .immune-brandmark img {
      width: 3.2rem;
      height: 3.2rem;
    }

    .immune-heading h1 {
      font-size: 1.8rem !important;
    }

    .immune-heading p {
      font-size: .95rem;
    }

    .immune-stage {
      display: grid;
      grid-template-columns: repeat(2, minmax(125px, 1fr));
      gap: .7rem;
      min-height: auto;
    }

    .immune-stage::before,
    .immune-connectors {
      display: none;
    }

    .immune-body-wrap {
      position: relative;
      grid-column: 1 / -1;
      top: auto;
      left: auto;
      width: min(20rem, 100%);
      height: 26rem;
      margin: 0 auto;
      transform: none;
    }

    .immune-card,
    .immune-card:hover,
    .immune-card:focus-visible {
      position: relative;
      left: auto;
      right: auto;
      top: auto;
      width: 100%;
      transform: none;
    }
  }

  @media (max-width: 520px) {
    body[data-page-type="immune-hub"] .immune-page {
      padding: 0 1rem;
    }

    body[data-page-type="immune-hub"] .mh-breadcrumb {
      padding: 0 1rem;
    }

    .immune-stage {
      grid-template-columns: 1fr;
    }
  }

  /* Final polish: white Mental Health-style background and slimmer, sleeker topic cards. */
  body[data-page-type="immune-hub"],
  body[data-page-type="immune-hub"] .page-wrapper,
  body[data-page-type="immune-hub"] .main-content,
  body[data-page-type="immune-hub"] .immune-page {
    background: #fff !important;
    background-image: none !important;
  }

  body[data-page-type="immune-hub"] .immune-card {
    width: 225px;
    min-height: 66px;
    padding: .62rem .75rem;
    gap: .62rem;
    border: 1px solid #dbe5e9;
    border-radius: 16px;
    background: rgba(255, 255, 255, .96);
    box-shadow: 0 7px 17px rgba(27, 50, 82, .08);
  }

  body[data-page-type="immune-hub"] .immune-card:hover,
  body[data-page-type="immune-hub"] .immune-card:focus-visible {
    border-color: #8060bf;
    box-shadow: 0 11px 22px rgba(27, 50, 82, .13);
  }

  body[data-page-type="immune-hub"] .immune-card-icon {
    flex: 0 0 2.65rem;
    width: 2.65rem;
    height: 2.65rem;
    font-size: 1.12rem;
  }

  body[data-page-type="immune-hub"] .immune-card-title {
    font-size: .9rem;
    line-height: 1.18;
    font-weight: 900;
  }

  body[data-page-type="immune-hub"] .immune-card-description {
    margin-top: .18rem;
    font-size: .68rem;
    line-height: 1.22;
    font-weight: 700;
  }

  body[data-page-type="immune-hub"] .immune-topic-hiv { left: 18%; top: 18%; }
  body[data-page-type="immune-hub"] .immune-topic-ra { left: 13%; top: 42%; }
  body[data-page-type="immune-hub"] .immune-topic-gout { left: 18%; top: 68%; }
  body[data-page-type="immune-hub"] .immune-topic-lupus { left: 82%; top: 18%; }
  body[data-page-type="immune-hub"] .immune-topic-antimicrobials { left: 87%; top: 42%; }
  body[data-page-type="immune-hub"] .immune-topic-meds { left: 82%; top: 68%; }

  @media (max-width: 1250px) {
    body[data-page-type="immune-hub"] .immune-card {
      width: 205px;
      min-height: 64px;
      padding: .58rem .68rem;
    }
  }

  @media (max-width: 740px) {
    body[data-page-type="immune-hub"] .immune-card {
      width: 100%;
    }
  }
</style>

<div class="mh-breadcrumb">
  <a href="{{ '/' | relative_url }}">Home</a>
  <a href="{{ '/all-topics.html' | relative_url }}">Nursing School Hub</a>
  <span>Immune &amp; Inflammatory</span>
</div>

<section class="immune-page" aria-labelledby="immune-title">
  <div class="immune-layout">
    <div class="immune-main">
      <header class="immune-heading">
        <div class="immune-kicker" aria-hidden="true">✣ ⚕ ✣</div>
        <div class="immune-brandmark" aria-hidden="true">
          <img src="{{ '/assets/images/immune-inflammatory-body.png' | relative_url }}" alt="" data-no-lb>
        </div>
        <div>
          <h1 id="immune-title">Immune &amp; Inflammatory</h1>
          <p>Choose a topic to study.</p>
        </div>
      </header>

      <div class="immune-stage" aria-label="Immune and inflammatory study topics">
        <svg class="immune-connectors" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
          <path d="M270 110 C345 118 380 195 452 238"></path>
          <circle cx="270" cy="110" r="6"></circle><circle cx="452" cy="238" r="6"></circle>

          <path d="M270 295 C340 310 340 500 404 532"></path>
          <circle cx="270" cy="295" r="6"></circle><circle cx="404" cy="532" r="6"></circle>

          <path d="M300 500 C390 500 455 545 548 572"></path>
          <circle cx="300" cy="500" r="6"></circle><circle cx="548" cy="572" r="6"></circle>

          <path d="M725 110 C670 108 615 110 535 128"></path>
          <circle cx="725" cy="110" r="6"></circle><circle cx="535" cy="128" r="6"></circle>

          <path d="M730 295 C705 320 690 348 652 372"></path>
          <circle cx="730" cy="295" r="6"></circle><circle cx="652" cy="372" r="6"></circle>

          <path d="M730 500 C680 490 650 360 608 270"></path>
          <circle cx="730" cy="500" r="6"></circle><circle cx="608" cy="270" r="6"></circle>
        </svg>

        <div class="immune-body-wrap">
          <img class="immune-body-image" src="{{ '/assets/images/immune-inflammatory-body.png' | relative_url }}" alt="Blue-toned female anatomy illustration showing the lymphatic system, lupus facial rash, inflamed right wrist, inflamed hip joint, and a pill bottle held in the left hand." data-no-lb>
        </div>

        <a class="immune-card immune-topic-hiv" href="{{ '/immune-inflammatory/hiv-aids-immune-function.html' | relative_url }}">
          <span class="immune-card-icon" aria-hidden="true">✣</span>
          <span><strong class="immune-card-title">HIV/AIDS &amp; Immune Function</strong><small class="immune-card-description">Immune system, opportunistic infections &amp; nursing care</small></span>
          <span class="immune-card-chevron" aria-hidden="true">›</span>
        </a>

        <a class="immune-card immune-topic-ra" href="{{ '/immune-inflammatory/rheumatoid-arthritis.html' | relative_url }}">
          <span class="immune-card-icon" aria-hidden="true">🦴</span>
          <span><strong class="immune-card-title">Rheumatoid Arthritis</strong><small class="immune-card-description">Autoimmune joint inflammation &amp; nursing priorities</small></span>
          <span class="immune-card-chevron" aria-hidden="true">›</span>
        </a>

        <a class="immune-card immune-topic-gout" href="{{ '/immune-inflammatory/osteoarthritis-gout.html' | relative_url }}">
          <span class="immune-card-icon" aria-hidden="true">◇</span>
          <span><strong class="immune-card-title">Osteoarthritis &amp; Gout</strong><small class="immune-card-description">Degenerative joint disease &amp; uric acid crystal disorders</small></span>
          <span class="immune-card-chevron" aria-hidden="true">›</span>
        </a>

        <a class="immune-card immune-topic-lupus" href="{{ '/immune-inflammatory/systemic-lupus-erythematosus.html' | relative_url }}">
          <span class="immune-card-icon" aria-hidden="true">🦋</span>
          <span><strong class="immune-card-title">Systemic Lupus Erythematosus</strong><small class="immune-card-description">Autoimmune disease, systemic involvement &amp; care priorities</small></span>
          <span class="immune-card-chevron" aria-hidden="true">›</span>
        </a>

        <a class="immune-card immune-topic-antimicrobials" href="{{ '/immune-inflammatory/antimicrobials.html' | relative_url }}">
          <span class="immune-card-icon" aria-hidden="true">✺</span>
          <span><strong class="immune-card-title">Antimicrobials</strong><small class="immune-card-description">Drug classes, resistance, adverse effects &amp; patient teaching</small></span>
          <span class="immune-card-chevron" aria-hidden="true">›</span>
        </a>

        <a class="immune-card immune-topic-meds" href="{{ '/immune-inflammatory/anti-inflammatory-immunosuppressive-medications.html' | relative_url }}">
          <span class="immune-card-icon" aria-hidden="true">💊</span>
          <span><strong class="immune-card-title">Anti-Inflammatory &amp; Immunosuppressive Medications</strong><small class="immune-card-description">Corticosteroids, DMARDs, biologics, safety monitoring &amp; education</small></span>
          <span class="immune-card-chevron" aria-hidden="true">›</span>
        </a>
      </div>

      <nav class="mh-hub-shortcuts immune-back-row" aria-label="Immune and inflammatory shortcuts">
        <a class="immune-back" href="{{ '/all-topics.html' | relative_url }}"><span aria-hidden="true">⌂</span><strong>Back to Nursing School Hub</strong></a>
      </nav>
    </div>

    <aside class="immune-sidebar">
      <div class="immune-sidebar-icon" aria-hidden="true">🛡</div>
      <h2>Select a topic<br>to open notes</h2>
      <div class="immune-guide-rule"></div>
      <p>Study resources include:</p>
      <ul>
        <li>Overview &amp; key concepts</li>
        <li>Assessment &amp; nursing priorities</li>
        <li>Safety interventions</li>
        <li>Patient education</li>
        <li>NCLEX tips &amp; memory cues</li>
      </ul>
      <a class="immune-nclex-link" href="{{ '/immune-inflammatory/nclex-cues.html' | relative_url }}">
        <span aria-hidden="true">✓</span>
        <span><strong>NCLEX Quick Cues</strong><small>Mnemonics &amp; priority rules</small></span>
      </a>
      <a class="immune-basics-link" href="{{ '/immune-inflammatory/immune-system-basics.html' | relative_url }}">
        <span aria-hidden="true">💡</span>
        <span><strong>Immune System Basics</strong><small>Innate vs. adaptive immunity, T cells, B cells, antibodies &amp; inflammation</small></span>
      </a>
    </aside>
  </div>
</section>
