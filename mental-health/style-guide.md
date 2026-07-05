---
layout: default
title: Mental Health Card Style Guide
---

<div class="mh-breadcrumb">
  <a href="{{ '/mental-health.html' | relative_url }}">Mental Health</a>
  <span>Style Guide</span>
</div>

# Card Style Guide

<p class="mh-subtitle">Copy-paste blocks for the new note design</p>

Each section below shows a **live example** followed by the exact code to copy into any mental health page. Everything works inside normal markdown pages — just paste the HTML block and edit the text.

---

## 1. Page top (breadcrumb, title, subtitle)

Put this at the very top of the page, right after the front matter. The `# Title` line is normal markdown.

```
<div class="mh-breadcrumb">
  <a href="../mental-health.html">Mental Health</a>
  <span>Anxiety Disorders</span>
</div>

# Anxiety Disorders

<p class="mh-subtitle">Nursing study guide & review</p>

Anxiety is a normal response to stress, but when it interferes
with daily life, it may indicate an anxiety disorder.
```

---

## 2. Priority Focus banner

<div class="priority-focus">
  <div>
    <h3>Priority Focus</h3>
    Safety • Therapeutic Communication • Coping Skills • Medications
  </div>
</div>

```
<div class="priority-focus">
  <div>
    <h3>Priority Focus</h3>
    Safety • Therapeutic Communication • Coping Skills • Medications
  </div>
</div>
```

---

## 3. Card grid (purple / pink / blue / green)

Cards sit side by side on desktop and stack on phones automatically. Use any mix of the four colors: `purple`, `pink`, `blue`, `green`. The icon and button are optional.

<div class="mh-cards">
  <div class="mh-card purple">
    <div class="mh-card-icon">🧠</div>
    <h3>What It Is</h3>
    <p>Excessive fear or worry that is difficult to control and affects daily functioning.</p>
  </div>
  <div class="mh-card pink">
    <div class="mh-card-icon">🚩</div>
    <h3>Common Signs</h3>
    <ul>
      <li>Restlessness</li>
      <li>Muscle tension</li>
      <li>Irritability</li>
      <li>Poor concentration</li>
      <li>Sleep disturbances</li>
    </ul>
  </div>
  <div class="mh-card blue">
    <div class="mh-card-icon">🛡️</div>
    <h3>Nursing Priority</h3>
    <p>Ensure safety, reduce anxiety, teach coping strategies, and promote trusting relationships.</p>
  </div>
  <div class="mh-card green">
    <div class="mh-card-icon">🎯</div>
    <h3>Goal</h3>
    <p>Help the patient manage anxiety, improve coping, and restore functioning.</p>
  </div>
</div>

```
<div class="mh-cards">
  <div class="mh-card purple">
    <div class="mh-card-icon">🧠</div>
    <h3>What It Is</h3>
    <p>Excessive fear or worry that is difficult to control.</p>
  </div>
  <div class="mh-card pink">
    <div class="mh-card-icon">🚩</div>
    <h3>Common Signs</h3>
    <ul>
      <li>Restlessness</li>
      <li>Muscle tension</li>
    </ul>
  </div>
  <div class="mh-card blue">
    <div class="mh-card-icon">🛡️</div>
    <h3>Nursing Priority</h3>
    <p>Ensure safety, reduce anxiety, teach coping strategies.</p>
  </div>
  <div class="mh-card green">
    <div class="mh-card-icon">🎯</div>
    <h3>Goal</h3>
    <p>Help the patient manage anxiety and restore functioning.</p>
  </div>
</div>
```

To add a button at the bottom of a card, put this before the card's closing `</div>`:

```
<a class="mh-btn" href="#nursing-interventions">See Interventions</a>
```

<div class="mh-cards">
  <div class="mh-card blue">
    <div class="mh-card-icon">🤝</div>
    <h3>Nursing Interventions</h3>
    <ul>
      <li>Provide a safe environment</li>
      <li>Stay with the patient</li>
      <li>Reduce stimuli</li>
      <li>Teach relaxation techniques</li>
    </ul>
    <a class="mh-btn" href="#7-quick-review-mint-numbered-list">See Interventions</a>
  </div>
  <div class="mh-card green">
    <div class="mh-card-icon">💊</div>
    <h3>Medications (Examples)</h3>
    <ul>
      <li>SSRIs: sertraline, fluoxetine</li>
      <li>SNRIs: venlafaxine</li>
      <li>Benzodiazepines (short-term only)</li>
      <li>Buspirone</li>
    </ul>
    <a class="mh-btn" href="#7-quick-review-mint-numbered-list">View Meds</a>
  </div>
</div>

---

## 4. Key Assessment Findings (checkmark list)

<div class="key-findings">
  <h3>📋 Key Assessment Findings</h3>
  <ul>
    <li>Excessive worry or fear</li>
    <li>Restlessness, feeling "on edge"</li>
    <li>Muscle tension, headaches, fatigue</li>
    <li>Difficulty concentrating</li>
    <li>Irritability</li>
    <li>Sleep disturbances</li>
    <li>May report panic attacks</li>
  </ul>
</div>

```
<div class="key-findings">
  <h3>📋 Key Assessment Findings</h3>
  <ul>
    <li>Excessive worry or fear</li>
    <li>Restlessness, feeling "on edge"</li>
    <li>Muscle tension, headaches, fatigue</li>
  </ul>
</div>
```

---

## 5. Report Immediately (red) and NCLEX Tip (yellow)

<div class="report-now">
  <h3>Report Immediately</h3>
  <ul>
    <li>Suicidal thoughts or statements</li>
    <li>Severe panic attacks</li>
    <li>Inability to care for self</li>
    <li>New or worsening symptoms</li>
    <li>Substance use with anxiety</li>
  </ul>
</div>

<div class="nclex-tip">
  <h3>NCLEX Tip</h3>
  The nurse's first action is always safety. Assess for SI/HI before teaching or discussing coping skills.
</div>

```
<div class="report-now">
  <h3>Report Immediately</h3>
  <ul>
    <li>Suicidal thoughts or statements</li>
    <li>Severe panic attacks</li>
  </ul>
</div>

<div class="nclex-tip">
  <h3>NCLEX Tip</h3>
  The nurse's first action is always safety.
</div>
```

---

## 6. Comparison table in a card

Wrap a normal markdown table in a `mh-table-card` div — the `markdown="1"` part is required so the table still renders. (Plain tables outside the wrapper also get the new lavender style automatically.)

<div class="mh-table-card" markdown="1">

<h3>Anxiety Disorders Comparison</h3>

| Disorder | Key Feature | Nursing Focus |
|---|---|---|
| GAD | Excessive worry most days | Teach coping skills |
| Panic Disorder | Sudden panic attacks | Safety, breathing techniques |
| Social Anxiety | Fear of social situations | Build confidence |
| Phobias | Intense fear of objects/situations | Exposure therapy support |
| OCD | Obsessions & compulsions | Structure, meds |
| PTSD | Trauma-related symptoms | Safety, support |

</div>

````
<div class="mh-table-card" markdown="1">

<h3>Anxiety Disorders Comparison</h3>

| Disorder | Key Feature | Nursing Focus |
|---|---|---|
| GAD | Excessive worry most days | Teach coping skills |
| Panic Disorder | Sudden panic attacks | Safety, breathing techniques |

</div>
````

---

## 7. Quick Review (mint numbered list)

<div class="quick-review">
  <h3>Quick Review</h3>
  <ol>
    <li>Assess for safety (SI/HI)</li>
    <li>Identify trigger(s)</li>
    <li>Reduce anxiety using coping skills</li>
    <li>Administer medications as ordered</li>
    <li>Teach and reinforce coping strategies</li>
    <li>Encourage follow-up and support</li>
  </ol>
</div>

```
<div class="quick-review">
  <h3>Quick Review</h3>
  <ol>
    <li>Assess for safety (SI/HI)</li>
    <li>Identify trigger(s)</li>
    <li>Reduce anxiety using coping skills</li>
  </ol>
</div>
```

---

## 8. Do Not Miss (blue star card)

<div class="do-not-miss">
  <h3>Do Not Miss</h3>
  <ul>
    <li>Anxiety can increase risk for depression & suicide</li>
    <li>Always assess safety first</li>
    <li>Teach skills the patient can use daily</li>
  </ul>
</div>

```
<div class="do-not-miss">
  <h3>Do Not Miss</h3>
  <ul>
    <li>Anxiety can increase risk for depression & suicide</li>
    <li>Always assess safety first</li>
  </ul>
</div>
```

---

## 9. Cheer banner (page footer)

<div class="cheer-banner">
  💜 You are making a difference. Stay consistent, stay positive, and keep going! 💜
</div>

```
<div class="cheer-banner">
  💜 You are making a difference. Stay consistent, stay positive, and keep going! 💜
</div>
```

---

## Bonus: your existing boxes got a makeover

The `note`, `warning`, `tip`, and `nclex` boxes already used on mental health pages automatically pick up the new card look — no changes needed:

<div class="note">
This is an existing <strong>note</strong> box — now styled as a soft blue card.
</div>

<div class="warning">
This is an existing <strong>warning</strong> box — now styled as a red "do not miss" card.
</div>

<div class="tip">
This is an existing <strong>tip</strong> box — now styled as a yellow NCLEX tip card.
</div>
