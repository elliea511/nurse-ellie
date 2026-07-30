(function () {
  'use strict';

  var ROOT = document.getElementById('practice-test-root');
  if (!ROOT) return;

  var BASE = (document.querySelector('meta[name="base-url"]') || {}).content || '';

  var PATH = window.location.pathname || '';
  var IS_MENTAL_HEALTH = /\/mental-health\/practice-quiz(\.html)?\/?$/.test(PATH);
  var IS_IMMUNE = /\/immune-inflammatory\/practice-quiz(\.html)?\/?$/.test(PATH);
  var IS_RENAL = /\/renal-urinary\/practice-quiz(\.html)?\/?$/.test(PATH);
  var IS_SENSORY = /\/sensory-perception\/practice-quiz(\.html)?\/?$/.test(PATH);
  var IS_HEME_ONC = /\/hematology-oncology\/practice-quiz(\.html)?\/?$/.test(PATH);
  var IS_MATERNITY = /\/maternity\/practice-quiz(\.html)?\/?$/.test(PATH);

  // Immune & Inflammatory: eight topic selections built by classifying each
  // existing question. Questions are never rewritten — only assigned a topic.
  var IMMUNE_TOPICS = [
    { id: 'hiv',        label: 'HIV & AIDS',                             cat: 'Immune & Inflammatory', immune: true, n: 34 },
    { id: 'ra',         label: 'Rheumatoid Arthritis',                   cat: 'Immune & Inflammatory', immune: true, n: 11 },
    { id: 'oa',         label: 'Osteoarthritis',                         cat: 'Immune & Inflammatory', immune: true, n: 7  },
    { id: 'gout',       label: 'Gout',                                   cat: 'Immune & Inflammatory', immune: true, n: 11 },
    { id: 'sle',        label: 'Systemic Lupus Erythematosus',           cat: 'Immune & Inflammatory', immune: true, n: 8  },
    { id: 'antiinflam', label: 'Anti-Inflammatory Medications',          cat: 'Immune & Inflammatory', immune: true, n: 4  },
    { id: 'dmard',      label: 'DMARDs, Biologics & Immunosuppression',  cat: 'Immune & Inflammatory', immune: true, n: 16 },
    { id: 'antimicro',  label: 'Antimicrobials',                         cat: 'Immune & Inflammatory', immune: true, n: 24 }
  ];

  // Source quizzes feeding the immune topics, and the topic each question maps
  // to (in the order the questions appear on each page). 'hiv' source → all HIV.
  var IMMUNE_SOURCES = [
    { id: 'immune-hiv',       url: '/immune-inflammatory/hiv-aids-quiz.html' },
    { id: 'immune-disorders', url: '/immune-inflammatory/disorders-medications-quiz.html' }
  ];
  var IMMUNE_DISORDER_MAP = [
    'ra','ra','ra','ra','ra','ra','ra','ra','ra','ra','ra',                         // Q1–11
    'oa','oa','oa','oa','oa','oa',                                                   // Q12–17
    'gout','gout','gout','gout','gout','gout','gout','gout','gout',                  // Q18–26
    'sle','sle','sle','sle','sle','sle','sle','sle',                                 // Q27–34
    'antiinflam','antiinflam','antiinflam','antiinflam',                            // Q35–38
    'dmard','dmard','dmard','dmard','dmard','dmard','dmard','dmard','dmard','dmard','dmard','dmard','dmard','dmard', // Q39–52
    'antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro','antimicro', // Q53–74
    'gout',       // Q75  (see-first: allopurinol hypersensitivity)
    'dmard',      // Q76  methotrexate SATA
    'oa',         // Q77  osteoarthritis SATA
    'gout',       // Q78  gout SATA
    'dmard',      // Q79  biologic therapy SATA
    'antimicro',  // Q80  gentamicin toxicity SATA
    'antimicro'   // Q81  antimicrobial therapy SATA
  ];
  var immunePoolPromise = null;
  function loadImmunePool() {
    if (immunePoolPromise) return immunePoolPromise;
    immunePoolPromise = Promise.all(IMMUNE_SOURCES.map(function (src) {
      return fetch(BASE + src.url)
        .then(function (r) { return r.text(); })
        .then(function (html) {
          var qs = parseHTML(html, src.id, src.id);
          qs.forEach(function (q, i) {
            q.immuneCat = (src.id === 'immune-hiv') ? 'hiv' : IMMUNE_DISORDER_MAP[i];
          });
          return qs;
        });
    })).then(function (results) { return [].concat.apply([], results); });
    return immunePoolPromise;
  }

  // Renal & Urinary: seven topic selections built by classifying each existing
  // question. Questions are never rewritten — only assigned a topic.
  var RENAL_TOPICS = [
    { id: 'diag',      label: 'Diagnostics & Catheterization',          cat: 'Renal & Urinary', renal: true, n: 12 },
    { id: 'uti',       label: 'UTI & Pyelonephritis',                   cat: 'Renal & Urinary', renal: true, n: 10 },
    { id: 'stones',    label: 'Kidney Stones',                          cat: 'Renal & Urinary', renal: true, n: 23 },
    { id: 'glom',      label: 'Glomerulonephritis',                     cat: 'Renal & Urinary', renal: true, n: 8  },
    { id: 'surgery',   label: 'Urinary Surgery & Diversions',           cat: 'Renal & Urinary', renal: true, n: 13 },
    { id: 'arf',       label: 'Acute & Chronic Renal Failure',          cat: 'Renal & Urinary', renal: true, n: 19 },
    { id: 'dialysis',  label: 'Dialysis & Kidney Transplant',           cat: 'Renal & Urinary', renal: true, n: 20 }
  ];

  // Single source quiz feeding the renal topics, and the topic each question
  // maps to (in the order the questions appear on the page).
  var RENAL_SOURCES = [
    { id: 'renal', url: '/renal-urinary/renal-disorders-quiz.html' }
  ];
  // Renal & Urinary Disorders quiz (Q1–105)
  var RENAL_MAP = [
    'diag','diag','diag','diag','diag','diag','diag','diag','diag','diag','diag','diag',        // Q1–12
    'uti','uti','uti','uti','uti','uti','uti','uti','uti','uti',                                // Q13–22
    'stones','stones','stones','stones','stones','stones','stones','stones','stones','stones',  // Q23–32
    'stones','stones','stones','stones','stones','stones','stones','stones','stones','stones',  // Q33–42
    'stones','stones',                                                                          // Q43–44
    'glom','glom','glom','glom','glom','glom','glom','glom',                                    // Q45–52
    'surgery','surgery','surgery','surgery','surgery','surgery','surgery','surgery','surgery','surgery', // Q53–62
    'surgery','surgery',                                                                        // Q63–64
    'arf','arf','arf','arf','arf','arf','arf','arf','arf','arf',                                // Q65–74
    'arf','arf','arf','arf','arf','arf','arf','arf',                                            // Q75–82
    'dialysis','dialysis','dialysis','dialysis','dialysis','dialysis','dialysis','dialysis','dialysis','dialysis', // Q83–92
    'dialysis','dialysis','dialysis','dialysis','dialysis','dialysis','dialysis','dialysis','dialysis',            // Q93–101
    'arf',        // Q102 SATA renal failure findings
    'stones',     // Q103 SATA calcium oxalate stone teaching
    'dialysis',   // Q104 SATA preparing for hemodialysis
    'surgery'     // Q105 SATA after kidney surgery
  ];
  var RENAL_CAT_BY_SOURCE = { 'renal': RENAL_MAP };
  var renalPoolPromise = null;
  function loadRenalPool() {
    if (renalPoolPromise) return renalPoolPromise;
    renalPoolPromise = Promise.all(RENAL_SOURCES.map(function (src) {
      return fetch(BASE + src.url)
        .then(function (r) { return r.text(); })
        .then(function (html) {
          var qs = parseHTML(html, src.id, src.id);
          var map = RENAL_CAT_BY_SOURCE[src.id];
          qs.forEach(function (q, i) { q.renalCat = map[i]; });
          return qs;
        });
    })).then(function (results) { return [].concat.apply([], results); });
    return renalPoolPromise;
  }

  // Sensory Perception: two topic selections built by classifying each existing
  // question. Questions are never rewritten — only assigned a topic. In the
  // source quiz, Q1–76 are eye disorders and Q77–117 are ear disorders.
  var SENSORY_TOPICS = [
    { id: 'eye', label: 'Eye Disorders', cat: 'Sensory Perception', sensory: true, n: 76 },
    { id: 'ear', label: 'Ear Disorders', cat: 'Sensory Perception', sensory: true, n: 41 }
  ];
  var SENSORY_SOURCES = [
    { id: 'sensory', url: '/sensory-perception/sensory-perception-quiz.html' }
  ];
  var SENSORY_EYE_COUNT = 76; // first 76 questions are eye disorders
  var sensoryPoolPromise = null;
  function loadSensoryPool() {
    if (sensoryPoolPromise) return sensoryPoolPromise;
    sensoryPoolPromise = Promise.all(SENSORY_SOURCES.map(function (src) {
      return fetch(BASE + src.url)
        .then(function (r) { return r.text(); })
        .then(function (html) {
          var qs = parseHTML(html, src.id, src.id);
          qs.forEach(function (q, i) { q.sensoryCat = (i < SENSORY_EYE_COUNT) ? 'eye' : 'ear'; });
          return qs;
        });
    })).then(function (results) { return [].concat.apply([], results); });
    return sensoryPoolPromise;
  }

  var MEDICAL_EMERGENCY_TOPICS = [
    { id: 'chf',        label: 'CHF & Pulmonary Edema',         cat: 'Cardiac & Perfusion', url: '/medical-emergencies/cardiac-perfusion/chf-quiz.html',        n: 32 },
    { id: 'mi',         label: 'Angina & Myocardial Infarction', cat: 'Cardiac & Perfusion', url: '/medical-emergencies/cardiac-perfusion/mi-quiz.html',         n: 32 },
    { id: 'hemophilia', label: 'Hemophilia & ITP',               cat: 'Cardiac & Perfusion', url: '/medical-emergencies/cardiac-perfusion/hemophilia-quiz.html', n: 20 },
    { id: 'stroke',     label: 'TIA & Stroke',                   cat: 'Neurological',        url: '/medical-emergencies/neurological/stroke-quiz.html',          n: 29 },
    { id: 'icp',        label: 'Increased ICP & Hydrocephalus',  cat: 'Neurological',        url: '/medical-emergencies/neurological/icp-quiz.html',             n: 26 },
    { id: 'pe',         label: 'Pulmonary Embolism',             cat: 'Respiratory',         url: '/medical-emergencies/respiratory/pe-quiz.html',               n: 18 },
    { id: 'shock',      label: 'Shock',                          cat: 'Other',               url: '/medical-emergencies/shock-quiz.html',                        n: 11 },
    { id: 'environ',    label: 'Environmental Emergencies',      cat: 'Other',               url: '/medical-emergencies/environmental-quiz.html',                n: 37 },
    { id: 'poisoning',  label: 'Poisoning & Ingestions',         cat: 'Other',               url: '/medical-emergencies/poisoning-quiz.html',                    n: 24 },
    { id: 'burns',      label: 'Basic Burns',                    cat: 'Other',               url: '/medical-emergencies/burns-quiz.html',                        n: 26 },
    { id: 'prep',       label: 'Emergency Preparedness & Crisis', cat: 'Other',              url: '/medical-emergencies/emergency-prep-quiz.html',               n: 23 },
  ];

  var HEME_ONC_TOPICS = [
    { id: 'anemias',  label: 'Anemias',  cat: 'Hematology', url: '/hematology-oncology/anemia-practice-quiz.html',   n: 46 },
    { id: 'oncology', label: 'Oncology', cat: 'Oncology',   url: '/hematology-oncology/oncology-practice-quiz.html', n: 100 },
  ];

  var MATERNITY_TOPICS = [
    { id: 'antepartum',  label: 'Antepartum',  cat: 'Maternity / OB', url: '/maternity/antepartum-quiz.html',  n: 60 },
    { id: 'intrapartum', label: 'Intrapartum', cat: 'Maternity / OB', url: '/maternity/intrapartum-quiz.html', n: 100 },
    { id: 'postpartum',  label: 'Postpartum',  cat: 'Maternity / OB', url: '/maternity/postpartum-quiz.html',  n: 100 },
    { id: 'newborn',     label: 'Newborn',     cat: 'Maternity / OB', url: '/maternity/newborn-quiz.html',     n: 100 },
  ];

  var MENTAL_HEALTH_SOURCE_TOPICS = [
    { id: 'anxiety-ocd', label: 'Anxiety, OCD & Trauma', cat: 'Mental Health', url: '/mental-health/anxiety-ocd-quiz.html', n: 35 },
    { id: 'depression',  label: 'Depression',            cat: 'Mental Health', url: '/mental-health/depression-quiz.html',  n: 47 },
    { id: 'personality', label: 'Personality Disorders', cat: 'Mental Health', url: '/mental-health/personality-disorders-quiz.html', n: 35 },
    { id: 'psychosis',   label: 'Schizophrenia & Psychosis', cat: 'Mental Health', url: '/mental-health/schizophrenia-psychosis-quiz.html', n: 40 },
    { id: 'abuse-suicide', label: 'Abuse & Suicide', cat: 'Mental Health', url: '/mental-health/abuse-suicide-quiz.html', n: 40 },
    { id: 'eating', label: 'Eating Disorders', cat: 'Mental Health', url: '/mental-health/eating-disorders-quiz.html', n: 40 },
    { id: 'addiction', label: 'Addiction & Substance Use', cat: 'Mental Health', url: '/mental-health/addiction-substance-use-quiz.html', n: 40 },
    { id: 'somatic', label: 'Somatic, Factitious & Dissociative', cat: 'Mental Health', url: '/mental-health/somatic-factitious-dissociative-quiz.html', n: 40 },
  ];

  var MENTAL_HEALTH_DERIVED_TOPICS = [
    {
      id: 'mh-medications',
      label: 'Medication Questions',
      cat: 'Focused Review',
      n: 85,
      derived: true,
      filter: 'medications',
      sourceCounts: {
        'anxiety-ocd': 15,
        depression: 24,
        personality: 1,
        psychosis: 14,
        'abuse-suicide': 7,
        eating: 6,
        addiction: 17,
        somatic: 1
      }
    },
  ];

  var MENTAL_HEALTH_TOPICS = MENTAL_HEALTH_SOURCE_TOPICS.concat(MENTAL_HEALTH_DERIVED_TOPICS);

  var TOPICS = IS_MENTAL_HEALTH ? MENTAL_HEALTH_TOPICS : IS_IMMUNE ? IMMUNE_TOPICS : IS_RENAL ? RENAL_TOPICS : IS_SENSORY ? SENSORY_TOPICS : IS_HEME_ONC ? HEME_ONC_TOPICS : IS_MATERNITY ? MATERNITY_TOPICS : MEDICAL_EMERGENCY_TOPICS;

  var MEDICATION_QUESTION_RE = /\b(medication|medications|prescription|prescribed|dose|doses|administer|ssri|ssris|snri|snris|tca|tcas|maoi|maois|antidepressant|antidepressants|benzodiazepine|benzodiazepines|buspirone|lorazepam|diazepam|alprazolam|fluoxetine|sertraline|escitalopram|citalopram|venlafaxine|duloxetine|bupropion|phenelzine|nortriptyline|amitriptyline|hydroxyzine|propranolol|tricyclic|serotonin syndrome|st\. john|linezolid|meperidine|pseudoephedrine|tyramine|discontinuation syndrome|side effect|adverse effect|adverse effects|toxicity|therapeutic response|antipsychotic|antipsychotics|clozapine|haloperidol|risperidone|fluphenazine|benztropine|diphenhydramine|long-acting injectable|prolactin|agranulocytosis|neutropenia|extrapyramidal|tardive dyskinesia|akathisia|dystonia|pseudoparkinsonism|neuroleptic malignant syndrome|nms|naloxone|flumazenil|disulfiram|naltrexone|acamprosate|methadone|buprenorphine|buprenorphine-naloxone|lisdexamfetamine|thiamine|vitamin b1|medication-assisted treatment)\b/i;

  var CATS = [];
  TOPICS.forEach(function (t) { if (CATS.indexOf(t.cat) === -1) CATS.push(t.cat); });

  // ── State ──────────────────────────────────────────────────────────────────
  var phase = 'SELECT'; // SELECT | LOADING | QUIZ | RESULTS
  var mode  = null;     // 'STUDY' | 'TEST'
  var selectedIds = {};
  var questions = [];   // parsed question objects
  var currentIdx = 0;
  var testAnswers  = []; // { q, gotItRight, userLetters }
  var studyState   = []; // per-question study state: { selected, submitted, correct }
  var fsWrap = null;    // persistent fullscreen wrapper

  // ── Parser (mirrors quiz.js) ───────────────────────────────────────────────
  function parseHTML(html, topicId, topicLabel) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var content = doc.querySelector('.main-content');
    if (!content) return [];
    var out = [];
    Array.from(content.querySelectorAll('details')).forEach(function (det) {
      var ansEl = det.querySelector('.quiz-answer');
      var ratEl = det.querySelector('.quiz-rationale');
      if (!ansEl) return;
      var answerText    = ansEl.textContent.replace(/^Answer:\s*/i, '').trim();
      var correctLetters = answerText.split(',').map(function (s) { return s.trim().charAt(0).toUpperCase(); });
      var isSATA = correctLetters.length > 1;
      var choiceEls = [];
      var node = det.previousElementSibling;
      while (node) {
        if (node.classList && node.classList.contains('answer-choice')) {
          choiceEls.unshift(node);
        } else if (node.tagName === 'HR' || /^H[1-6]$/.test(node.tagName)) {
          break;
        }
        node = node.previousElementSibling;
      }
      if (!choiceEls.length) return;
      var stemParts = [];
      var s = choiceEls[0].previousElementSibling;
      while (s && s.tagName !== 'HR' && !/^H[1-6]$/.test(s.tagName)) {
        stemParts.unshift(s.outerHTML);
        s = s.previousElementSibling;
      }
      out.push({
        topic: topicId,
        topicLabel: topicLabel,
        sourceTopic: topicId,
        sourceTopicLabel: topicLabel,
        questionKey: topicId + '|' + (stemParts.join('') + choiceEls.map(function (el) { return el.textContent.trim(); }).join('|')).replace(/\s+/g, ' ').trim(),
        stemHTML: stemParts.join(''),
        choiceTexts: choiceEls.map(function (el) { return el.textContent.trim(); }),
        answerText: answerText,
        correctLetters: correctLetters,
        rationaleHTML: ratEl ? ratEl.innerHTML : '',
        isSATA: isSATA,
      });
    });
    return out;
  }

  function isMedicationQuestion(q) {
    return MEDICATION_QUESTION_RE.test((q.stemHTML || '') + ' ' + (q.choiceTexts || []).join(' '));
  }

  function loadTopicQuestions(topic) {
    if (topic.immune) {
      return loadImmunePool().then(function (pool) {
        return pool.filter(function (q) { return q.immuneCat === topic.id; })
          .map(function (q) { q.topic = topic.id; q.topicLabel = topic.label; return q; });
      });
    }

    if (topic.renal) {
      return loadRenalPool().then(function (pool) {
        return pool.filter(function (q) { return q.renalCat === topic.id; })
          .map(function (q) { q.topic = topic.id; q.topicLabel = topic.label; return q; });
      });
    }

    if (topic.sensory) {
      return loadSensoryPool().then(function (pool) {
        return pool.filter(function (q) { return q.sensoryCat === topic.id; })
          .map(function (q) { q.topic = topic.id; q.topicLabel = topic.label; return q; });
      });
    }

    if (topic.derived && topic.filter === 'medications') {
      return Promise.all(MENTAL_HEALTH_SOURCE_TOPICS.map(function (sourceTopic) {
        return fetch(BASE + sourceTopic.url)
          .then(function (r) { return r.text(); })
          .then(function (html) { return parseHTML(html, sourceTopic.id, sourceTopic.label); });
      })).then(function (results) {
        return [].concat.apply([], results).filter(isMedicationQuestion).map(function (q) {
          q.topic = topic.id;
          q.topicLabel = topic.label + ' • ' + q.sourceTopicLabel;
          return q;
        });
      });
    }

    return fetch(BASE + topic.url)
      .then(function (r) { return r.text(); })
      .then(function (html) { return parseHTML(html, topic.id, topic.label); });
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  // ── Render helpers ─────────────────────────────────────────────────────────
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function totalSelected() {
    return TOPICS.reduce(function (s, t) {
      if (!selectedIds[t.id]) return s;
      if (t.derived && t.sourceCounts) {
        return s + Object.keys(t.sourceCounts).reduce(function (sum, sourceId) {
          return sum + (selectedIds[sourceId] ? 0 : t.sourceCounts[sourceId]);
        }, 0);
      }
      return s + t.n;
    }, 0);
  }

  // ── SELECT phase ───────────────────────────────────────────────────────────
  var desiredCount = 0; // 0 = all

  function renderSelect() {
    ROOT.innerHTML = '';
    var wrap = el('div', 'pt-select-wrap');

    var title = el('h2', 'pt-select-title', IS_MENTAL_HEALTH ? 'Build Your Mental Health Practice Test' : IS_IMMUNE ? 'Build Your Immune & Inflammatory Practice Test' : IS_RENAL ? 'Build Your Renal & Urinary Practice Test' : IS_SENSORY ? 'Build Your Sensory Perception Practice Test' : IS_MATERNITY ? 'Build Your Maternity / OB Practice Test' : 'Build Your Practice Test');
    var sub   = el('p',  'pt-select-sub',   'Choose the topics you want to include, then select a mode.');
    wrap.appendChild(title);
    wrap.appendChild(sub);

    // Select All / Deselect All
    var bulkRow = el('div', 'pt-bulk-row');
    var selAll   = el('button', 'pt-bulk-btn', 'Select All');
    var deselAll = el('button', 'pt-bulk-btn', 'Deselect All');
    selAll.addEventListener('click', function () {
      TOPICS.forEach(function (t) { selectedIds[t.id] = true; });
      renderSelect();
    });
    deselAll.addEventListener('click', function () {
      selectedIds = {};
      renderSelect();
    });
    bulkRow.appendChild(selAll);
    bulkRow.appendChild(deselAll);
    wrap.appendChild(bulkRow);

    // Category groups
    CATS.forEach(function (cat) {
      var group = el('div', 'pt-cat-group');
      var catLabel = el('div', 'pt-cat-label', cat);
      group.appendChild(catLabel);
      TOPICS.filter(function (t) { return t.cat === cat; }).forEach(function (topic) {
        var row = el('label', 'pt-topic-row');
        var cb  = document.createElement('input');
        cb.type = 'checkbox';
        cb.className = 'pt-topic-cb';
        cb.checked = !!selectedIds[topic.id];
        cb.addEventListener('change', function () {
          selectedIds[topic.id] = cb.checked;
          syncCountInput();
          updateStartBtns();
        });
        var nameSpan = el('span', 'pt-topic-name', topic.label);
        var nSpan    = el('span', 'pt-topic-n', topic.n + ' Qs');
        row.appendChild(cb);
        row.appendChild(nameSpan);
        row.appendChild(nSpan);
        group.appendChild(row);
      });
      wrap.appendChild(group);
    });

    // Mode buttons — declared early so updateStartBtns can reference them
    var modeRow  = el('div', 'pt-mode-row');
    var studyBtn = el('button', 'pt-mode-btn', '<span class="qmb-icon">📖</span><span class="qmb-label">Study Mode</span><span class="qmb-desc">See rationale after each question</span>');
    var testBtn  = el('button', 'pt-mode-btn', '<span class="qmb-icon">📝</span><span class="qmb-label">Test Mode</span><span class="qmb-desc">Get your score at the end</span>');

    function updateStartBtns() {
      var n = totalSelected();
      studyBtn.disabled = n === 0;
      testBtn.disabled  = n === 0;
    }

    // Question count input
    var countWrap = el('div', 'pt-count-wrap');
    var countLabel = el('label', 'pt-count-label');
    countLabel.htmlFor = 'pt-q-count';
    countLabel.textContent = 'Number of questions:';

    var countInput = document.createElement('input');
    countInput.type = 'number';
    countInput.id   = 'pt-q-count';
    countInput.className = 'pt-count-input';
    countInput.min  = '1';
    countInput.step = '1';
    countInput.placeholder = 'All';

    var countNote = el('span', 'pt-count-note', '');

    function syncCountInput() {
      var max = totalSelected();
      countInput.max = max;
      if (max === 0) {
        countInput.value = '';
        countInput.disabled = true;
        countNote.textContent = 'No topics selected.';
        desiredCount = 0;
      } else {
        countInput.disabled = false;
        var cur = parseInt(countInput.value, 10);
        if (!cur || cur < 1) {
          countInput.value = '';
          desiredCount = 0;
          countNote.textContent = max + ' available — leave blank for all.';
        } else {
          if (cur > max) { countInput.value = max; cur = max; }
          desiredCount = cur;
          countNote.textContent = cur + ' of ' + max + ' questions.';
        }
      }
      updateStartBtns();
    }

    countInput.addEventListener('input', function () {
      var max = totalSelected();
      var cur = parseInt(countInput.value, 10);
      if (!cur || cur < 1) {
        desiredCount = 0;
        countNote.textContent = max + ' available — leave blank for all.';
      } else {
        if (cur > max) { countInput.value = max; cur = max; }
        desiredCount = cur;
        countNote.textContent = cur + ' of ' + max + ' questions.';
      }
    });

    // Restore previous value
    if (desiredCount > 0) countInput.value = desiredCount;
    syncCountInput();

    countWrap.appendChild(countLabel);
    countWrap.appendChild(countInput);
    countWrap.appendChild(countNote);
    wrap.appendChild(countWrap);

    studyBtn.addEventListener('click', function () { startQuiz('STUDY'); });
    testBtn.addEventListener('click',  function () { startQuiz('TEST'); });
    modeRow.appendChild(studyBtn);
    modeRow.appendChild(testBtn);
    wrap.appendChild(modeRow);

    ROOT.appendChild(wrap);
  }

  // ── Load + start ──────────────────────────────────────────────────────────
  function startQuiz(m) {
    mode = m;
    var chosen = TOPICS.filter(function (t) { return selectedIds[t.id]; });
    if (!chosen.length) return;

    phase = 'LOADING';
    ROOT.innerHTML = '<div class="pt-loading">Loading questions…</div>';

    var fetches = chosen.map(loadTopicQuestions);

    Promise.all(fetches).then(function (results) {
      var seen = {};
      var all = shuffle([].concat.apply([], results).filter(function (q) {
        var key = q.questionKey || ((q.sourceTopic || q.topic) + '|' + q.stemHTML);
        if (seen[key]) return false;
        seen[key] = true;
        return true;
      }));
      questions = (desiredCount > 0 && desiredCount < all.length) ? all.slice(0, desiredCount) : all;
      currentIdx   = 0;
      testAnswers  = [];
      studyState   = questions.map(function () { return { selected: [], submitted: false, correct: false }; });
      phase = 'QUIZ';
      renderQuestion(0);
    }).catch(function (err) {
      ROOT.innerHTML = '<p class="pt-error">Failed to load questions. Please try again.</p>';
      console.error(err);
    });
  }

  // ── QUIZ phase ─────────────────────────────────────────────────────────────
  function renderQuestion(idx) {
    var q = questions[idx];
    var total = questions.length;

    // Keep fsWrap alive across questions to preserve fullscreen state
    if (!fsWrap || !ROOT.contains(fsWrap)) {
      ROOT.innerHTML = '';
      fsWrap = el('div', '');
      fsWrap.id = 'quiz-fs-wrap';
      ROOT.appendChild(fsWrap);
    }
    fsWrap.innerHTML = '';

    // Persist bar
    var bar = el('div', 'quiz-persist-bar');
    var timerEl = el('span', 'quiz-timer', '0:00');
    var startTime = Date.now();
    var timerInterval = setInterval(function () {
      var sec = Math.floor((Date.now() - startTime) / 1000);
      timerEl.textContent = Math.floor(sec / 60) + ':' + ('0' + (sec % 60)).slice(-2);
    }, 1000);

    var topicTag = el('span', 'pt-topic-tag', q.topicLabel);

    var fsBtn = el('button', 'quiz-persist-btn quiz-persist-fs', '⛶');
    fsBtn.title = 'Fullscreen';
    fsBtn.addEventListener('click', function () {
      if (!document.fullscreenElement) {
        fsWrap.requestFullscreen && fsWrap.requestFullscreen();
      } else {
        document.exitFullscreen && document.exitFullscreen();
      }
    });

    bar.appendChild(timerEl);
    bar.appendChild(topicTag);
    bar.appendChild(fsBtn);
    fsWrap.appendChild(bar);

    // Progress
    var progWrap = el('div', 'quiz-progress');
    var progText = el('span', 'quiz-progress-text', 'Question ' + (idx + 1) + ' of ' + total);
    var progBar  = el('div', 'quiz-progress-bar');
    var progFill = el('div', 'quiz-progress-fill');
    progFill.style.width = ((idx + 1) / total * 100) + '%';
    progBar.appendChild(progFill);
    progWrap.appendChild(progText);
    progWrap.appendChild(progBar);
    fsWrap.appendChild(progWrap);

    // Stem
    if (q.stemHTML) {
      var stemDiv = el('div', 'quiz-stem', q.stemHTML);
      fsWrap.appendChild(stemDiv);
    }

    if (q.isSATA) {
      fsWrap.appendChild(el('p', 'pt-sata-note', 'Select all that apply (SATA).'));
    }

    // Choices
    var choicesWrap = el('div', 'pt-choices-wrap');
    // Study mode remembers each question's answer so the user can move back and forth.
    var st = (mode === 'STUDY') ? studyState[idx] : null;
    var selectedLetters = st ? st.selected.slice() : [];
    var submitted = st ? st.submitted : false;

    q.choiceTexts.forEach(function (text) {
      var letter = text.trim().charAt(0).toUpperCase();
      var btn = el('button', 'quiz-choice-btn', text);
      btn.dataset.letter = letter;
      if (selectedLetters.indexOf(letter) !== -1) btn.classList.add('selected');
      btn.addEventListener('click', function () {
        if (submitted) return;
        if (q.isSATA) {
          var li = selectedLetters.indexOf(letter);
          if (li === -1) { selectedLetters.push(letter); btn.classList.add('selected'); }
          else { selectedLetters.splice(li, 1); btn.classList.remove('selected'); }
        } else {
          selectedLetters = [letter];
          Array.from(choicesWrap.querySelectorAll('.quiz-choice-btn')).forEach(function (b) { b.classList.remove('selected'); });
          btn.classList.add('selected');
        }
        if (st) st.selected = selectedLetters.slice();
        if (mode === 'STUDY') submitBtn.disabled = selectedLetters.length === 0;
        if (mode === 'TEST')  nextBtn.disabled   = selectedLetters.length === 0;
      });
      choicesWrap.appendChild(btn);
    });
    fsWrap.appendChild(choicesWrap);

    // Rationale panel placeholder — appended below the button row (further down)
    // so revealing the answer does not shift the Previous/Next buttons.
    var ratPanel = el('div', 'quiz-rationale-panel');

    // Buttons
    var prevBtn   = el('button', 'quiz-prev-btn', 'Previous');
    prevBtn.disabled = idx === 0;
    var submitBtn = el('button', 'quiz-submit-btn', 'Submit Answer');
    submitBtn.disabled = selectedLetters.length === 0;
    var nextBtn   = el('button', 'quiz-next-btn',   idx + 1 < total ? 'Next Question' : (mode === 'STUDY' ? 'Finish' : 'See Results'));
    nextBtn.disabled = (mode === 'TEST') ? (selectedLetters.length === 0) : !submitted;

    // Reveal the correct answer, color the choices, and show the rationale.
    function revealAnswer() {
      Array.from(choicesWrap.querySelectorAll('.quiz-choice-btn')).forEach(function (b) {
        var l = b.dataset.letter;
        b.disabled = true;
        b.classList.remove('selected');
        if (q.correctLetters.indexOf(l) !== -1) b.classList.add('correct');
        else if (selectedLetters.indexOf(l) !== -1) b.classList.add('incorrect');
      });
      ratPanel.classList.add('visible');
      ratPanel.innerHTML = '<strong>Correct Answer: ' + q.answerText + '</strong><br>' + q.rationaleHTML;
      submitBtn.style.display = 'none';
      nextBtn.disabled = false;
    }

    function doSubmit() {
      if (submitted) return;
      submitted = true;
      clearInterval(timerInterval);
      var correct = q.correctLetters.slice().sort().join(',') === selectedLetters.slice().sort().join(',');
      if (st) { st.submitted = true; st.correct = correct; st.selected = selectedLetters.slice(); }
      if (mode === 'STUDY') revealAnswer();
    }

    function doNext() {
      clearInterval(timerInterval);
      if (mode === 'TEST') {
        var correct = q.correctLetters.slice().sort().join(',') === selectedLetters.slice().sort().join(',');
        testAnswers.push({ q: q, gotItRight: correct, userLetters: selectedLetters.slice() });
      }
      if (idx + 1 < total) {
        renderQuestion(idx + 1);
      } else {
        renderResults();
      }
    }

    function doPrev() {
      clearInterval(timerInterval);
      if (idx > 0) renderQuestion(idx - 1);
    }

    prevBtn.addEventListener('click', doPrev);
    submitBtn.addEventListener('click', doSubmit);
    nextBtn.addEventListener('click', doNext);

    // Already-answered study question: restore its revealed state on revisit.
    if (mode === 'STUDY' && submitted) {
      clearInterval(timerInterval);
      revealAnswer();
    }

    var btnRow = el('div', 'pt-btn-row');
    if (mode === 'STUDY') btnRow.appendChild(prevBtn);
    if (mode === 'STUDY') btnRow.appendChild(submitBtn);
    btnRow.appendChild(nextBtn);
    fsWrap.appendChild(btnRow);
    fsWrap.appendChild(ratPanel);
  }

  // ── RESULTS ───────────────────────────────────────────────────────────────
  function gradeInfo(pct) {
    if (pct >= 90) return { letter: 'A', cls: 'grade-a', note: 'Outstanding! You\'re ready for this content.' };
    if (pct >= 80) return { letter: 'B', cls: 'grade-b', note: 'Great work! Review any missed items.' };
    if (pct >= 70) return { letter: 'C', cls: 'grade-c', note: 'Good effort — revisit weak areas.' };
    if (pct >= 60) return { letter: 'D', cls: 'grade-d', note: 'Keep studying — you\'re getting there.' };
    return { letter: 'F', cls: 'grade-f', note: 'Don\'t give up — review the notes and try again.' };
  }

  function renderResults() {
    phase = 'RESULTS';
    if (document.fullscreenElement) document.exitFullscreen();
    fsWrap = null;
    ROOT.innerHTML = '';

    var correct, total;
    if (mode === 'STUDY') {
      correct = studyState.filter(function (s) { return s.submitted && s.correct; }).length;
      total   = questions.length;
    } else {
      correct = testAnswers.filter(function (a) { return a.gotItRight; }).length;
      total   = testAnswers.length;
    }

    var pct  = total > 0 ? Math.round(correct / total * 100) : 0;
    var info = gradeInfo(pct);

    var card = el('div', 'quiz-score-card');
    var gradeEl = el('div', 'qsc-grade ' + info.cls, info.letter);
    var scoreEl = el('p', '', correct + ' / ' + total + ' correct (' + pct + '%)');
    var noteEl  = el('p', 'qsc-note', info.note);
    card.appendChild(gradeEl);
    card.appendChild(scoreEl);
    card.appendChild(noteEl);
    ROOT.appendChild(card);

    // Full breakdown (test mode)
    if (mode === 'TEST' && testAnswers.length) {
      var breakdown = el('div', 'quiz-breakdown');
      breakdown.appendChild(el('h3', '', 'Question Breakdown'));
      testAnswers.forEach(function (ans, i) {
        var q   = ans.q;
        var row = el('div', 'quiz-result-item ' + (ans.gotItRight ? 'qri-correct' : 'qri-incorrect'));
        var header = el('div', 'qri-header');
        header.appendChild(el('span', 'qri-num', 'Q' + (i + 1)));
        header.appendChild(el('span', 'qri-topic', q.topicLabel));
        header.appendChild(el('span', 'qri-mark', ans.gotItRight ? '✅' : '❌'));
        row.appendChild(header);
        if (q.stemHTML) row.appendChild(el('div', 'qri-stem', q.stemHTML));
        row.appendChild(el('p', 'qri-answers', 'Your answer: <strong>' + (ans.userLetters.join(', ') || '—') + '</strong> &nbsp;|&nbsp; Correct: <strong>' + q.answerText + '</strong>'));
        if (q.rationaleHTML) {
          var rat = el('div', 'qri-rationale', q.rationaleHTML);
          row.appendChild(rat);
        }
        breakdown.appendChild(row);
      });
      ROOT.appendChild(breakdown);
    }

    // Retake button
    var retakeBtn = el('button', 'quiz-retake-btn', 'Retake / New Selection');
    retakeBtn.addEventListener('click', function () {
      phase = 'SELECT';
      renderSelect();
    });
    ROOT.appendChild(retakeBtn);
  }

  // ── Boot ──────────────────────────────────────────────────────────────────
  renderSelect();
})();
