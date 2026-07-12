(function () {
  'use strict';

  var ROOT = document.getElementById('practice-test-root');
  if (!ROOT) return;

  var BASE = (document.querySelector('meta[name="base-url"]') || {}).content || '';

  var PATH = window.location.pathname || '';
  var IS_MENTAL_HEALTH = /\/mental-health\/practice-quiz(\.html)?\/?$/.test(PATH);

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

  var MENTAL_HEALTH_TOPICS = [
    { id: 'anxiety-ocd', label: 'Anxiety, OCD & Trauma', cat: 'Mental Health', url: '/mental-health/anxiety-ocd-quiz.html', n: 35 },
    { id: 'depression',  label: 'Depression',            cat: 'Mental Health', url: '/mental-health/depression-quiz.html',  n: 40 },
  ];

  var TOPICS = IS_MENTAL_HEALTH ? MENTAL_HEALTH_TOPICS : MEDICAL_EMERGENCY_TOPICS;

  var CATS = [];
  TOPICS.forEach(function (t) { if (CATS.indexOf(t.cat) === -1) CATS.push(t.cat); });

  // ── State ──────────────────────────────────────────────────────────────────
  var phase = 'SELECT'; // SELECT | LOADING | QUIZ | RESULTS
  var mode  = null;     // 'STUDY' | 'TEST'
  var selectedIds = {};
  var questions = [];   // parsed question objects
  var currentIdx = 0;
  var studyCorrect = 0;
  var testAnswers  = []; // { q, gotItRight, userLetters }
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
    return TOPICS.reduce(function (s, t) { return selectedIds[t.id] ? s + t.n : s; }, 0);
  }

  // ── SELECT phase ───────────────────────────────────────────────────────────
  var desiredCount = 0; // 0 = all

  function renderSelect() {
    ROOT.innerHTML = '';
    var wrap = el('div', 'pt-select-wrap');

    var title = el('h2', 'pt-select-title', IS_MENTAL_HEALTH ? 'Build Your Mental Health Practice Test' : 'Build Your Practice Test');
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

    var fetches = chosen.map(function (topic) {
      return fetch(BASE + topic.url)
        .then(function (r) { return r.text(); })
        .then(function (html) { return parseHTML(html, topic.id, topic.label); });
    });

    Promise.all(fetches).then(function (results) {
      var all = shuffle([].concat.apply([], results));
      questions = (desiredCount > 0 && desiredCount < all.length) ? all.slice(0, desiredCount) : all;
      currentIdx   = 0;
      studyCorrect = 0;
      testAnswers  = [];
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
    var selectedLetters = [];
    var submitted = false;

    q.choiceTexts.forEach(function (text) {
      var letter = text.trim().charAt(0).toUpperCase();
      var btn = el('button', 'quiz-choice-btn', text);
      btn.dataset.letter = letter;
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
        if (mode === 'STUDY') submitBtn.disabled = selectedLetters.length === 0;
        if (mode === 'TEST')  nextBtn.disabled   = selectedLetters.length === 0;
      });
      choicesWrap.appendChild(btn);
    });
    fsWrap.appendChild(choicesWrap);

    // Rationale panel placeholder
    var ratPanel = el('div', 'quiz-rationale-panel');
    ratPanel.style.display = 'none';
    fsWrap.appendChild(ratPanel);

    // Buttons
    var submitBtn = el('button', 'quiz-submit-btn', 'Submit Answer');
    submitBtn.disabled = true;
    var nextBtn   = el('button', 'quiz-next-btn',   idx + 1 < total ? 'Next Question' : (mode === 'STUDY' ? 'Finish' : 'See Results'));
    nextBtn.disabled = true;

    function doSubmit() {
      if (submitted) return;
      submitted = true;
      clearInterval(timerInterval);

      var correct = q.correctLetters.slice().sort().join(',') === selectedLetters.slice().sort().join(',');
      if (mode === 'STUDY') studyCorrect += correct ? 1 : 0;

      // Color choices
      Array.from(choicesWrap.querySelectorAll('.quiz-choice-btn')).forEach(function (b) {
        var l = b.dataset.letter;
        b.disabled = true;
        if (q.correctLetters.indexOf(l) !== -1) b.classList.add('correct');
        else if (selectedLetters.indexOf(l) !== -1) b.classList.add('incorrect');
      });

      // Show rationale (study mode)
      if (mode === 'STUDY') {
        ratPanel.classList.add('visible');
        ratPanel.innerHTML = '<strong>Correct Answer: ' + q.answerText + '</strong><br>' + q.rationaleHTML;
        submitBtn.style.display = 'none';
        nextBtn.disabled = false;
      }
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

    submitBtn.addEventListener('click', doSubmit);
    nextBtn.addEventListener('click', doNext);

    var btnRow = el('div', 'pt-btn-row');
    if (mode === 'STUDY') btnRow.appendChild(submitBtn);
    btnRow.appendChild(nextBtn);
    fsWrap.appendChild(btnRow);
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
      correct = studyCorrect;
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
