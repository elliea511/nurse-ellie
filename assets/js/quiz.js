(function () {
  var content = document.querySelector('.main-content');
  if (!content || content.dataset.quizInit) return;
  content.dataset.quizInit = '1';

  // ── Phase / mode state ────────────────────────────────────────
  var quizPhase   = 'CONFIGURATION'; // 'CONFIGURATION' | 'QUIZ' | 'RESULTS'
  var quizMode    = null;            // 'STUDY' | 'TEST'
  var currentIdx  = 0;
  var testAnswers = [];              // { gotItRight } per question, TEST mode only

  // ── Parse all questions up front ──────────────────────────────
  var detailsBlocks = Array.from(content.querySelectorAll('details'));
  var questions = [];
  var allQuizEls = []; // every DOM element that belongs to the quiz, to hide them all

  detailsBlocks.forEach(function (details) {
    var answerEl    = details.querySelector('.quiz-answer');
    var rationaleEl = details.querySelector('.quiz-rationale');
    if (!answerEl) return;

    var answerText     = answerEl.textContent.replace('Answer:', '').trim();
    var correctLetters = answerText.split(',').map(function (s) { return s.trim().charAt(0).toUpperCase(); });
    var isSATA         = correctLetters.length > 1;

    var choiceEls = [];
    var node = details.previousElementSibling;
    while (node) {
      if (node.classList && node.classList.contains('answer-choice')) {
        choiceEls.unshift(node);
      } else if (node.tagName === 'HR' || /^H[1-6]$/.test(node.tagName)) {
        break;
      }
      node = node.previousElementSibling;
    }
    if (!choiceEls.length) return;

    // Find the question stem elements (between the preceding HR/heading and the first choice)
    var stemEls = [];
    var stemNode = choiceEls[0].previousElementSibling;
    var stemParts = [];
    while (stemNode) {
      if (stemNode.tagName === 'HR' || /^H[1-6]$/.test(stemNode.tagName)) break;
      stemEls.unshift(stemNode);
      stemParts.unshift(stemNode.outerHTML);
      stemNode = stemNode.previousElementSibling;
    }
    var stemHTML = stemParts.join('');

    // The heading immediately before this question block (e.g. "## Question 1")
    var headingEl = null;
    var firstEl = stemEls.length ? stemEls[0] : choiceEls[0];
    var prevEl = firstEl.previousElementSibling;
    if (prevEl && /^H[1-6]$/.test(prevEl.tagName)) {
      headingEl = prevEl;
    }

    // The <hr> before the heading (separator between questions)
    var hrEl = null;
    var beforeHeading = headingEl ? headingEl.previousElementSibling : (stemEls.length ? stemEls[0].previousElementSibling : choiceEls[0].previousElementSibling);
    if (beforeHeading && beforeHeading.tagName === 'HR') {
      hrEl = beforeHeading;
    }

    questions.push({
      correctLetters: correctLetters,
      answerText:     answerText,
      isSATA:         isSATA,
      choiceEls:      choiceEls,
      stemHTML:       stemHTML,
      rationaleHTML:  rationaleEl ? rationaleEl.innerHTML : ''
    });

    // Collect ALL elements that belong to this question for hiding
    var qEls = [];
    if (hrEl)      qEls.push(hrEl);
    if (headingEl) qEls.push(headingEl);
    stemEls.forEach(function (el) { qEls.push(el); });
    choiceEls.forEach(function (el) { qEls.push(el); });
    qEls.push(details);

    qEls.forEach(function (el) { allQuizEls.push(el); });
  });

  if (!questions.length) return;

  // Hide ALL original quiz DOM elements
  allQuizEls.forEach(function (el) { el.style.display = 'none'; });

  // ── Build containers ──────────────────────────────────────────
  var configEl = document.createElement('div');
  configEl.id = 'quiz-config';

  var persistBar = document.createElement('div');
  persistBar.id = 'quiz-persist-bar';
  persistBar.style.display = 'none';

  var stageEl = document.createElement('div');
  stageEl.id = 'quiz-stage';
  stageEl.style.display = 'none';

  // Insert before first hidden quiz element or at top of content
  var insertAnchor = allQuizEls[0] || content.firstChild;
  content.insertBefore(configEl, insertAnchor);
  content.insertBefore(persistBar, configEl.nextSibling);
  content.insertBefore(stageEl, persistBar.nextSibling);

  // ── Persistent bar (shown during QUIZ and RESULTS phases) ─────
  var restartBarBtn = document.createElement('button');
  restartBarBtn.className   = 'quiz-persist-btn quiz-persist-restart';
  restartBarBtn.textContent = '↺ Restart';
  restartBarBtn.addEventListener('click', resetToConfig);

  var submitTestBarBtn = document.createElement('button');
  submitTestBarBtn.className   = 'quiz-persist-btn quiz-persist-submit';
  submitTestBarBtn.textContent = '✔ Submit Test';
  submitTestBarBtn.style.display = 'none';
  submitTestBarBtn.addEventListener('click', function () {
    // Grade whatever has been answered so far; unanswered = wrong
    while (testAnswers.length < questions.length) {
      testAnswers.push({ gotItRight: false, selected: [] });
    }
    quizPhase = 'RESULTS';
    renderResults();
  });

  persistBar.appendChild(restartBarBtn);
  persistBar.appendChild(submitTestBarBtn);

  // ── Mode-selection splash ─────────────────────────────────────
  configEl.innerHTML =
    '<div class="quiz-config-inner">' +
      '<h2 class="quiz-config-title">How do you want to study?</h2>' +
      '<p class="quiz-config-sub">Choose a mode to begin — ' + questions.length + ' questions</p>' +
      '<div class="quiz-mode-row">' +
        '<button class="quiz-mode-btn" data-mode="STUDY">' +
          '<span class="qmb-icon">📖</span>' +
          '<span class="qmb-label">Study Mode</span>' +
          '<span class="qmb-desc">See the rationale after each question</span>' +
        '</button>' +
        '<button class="quiz-mode-btn" data-mode="TEST">' +
          '<span class="qmb-icon">📝</span>' +
          '<span class="qmb-label">Test Mode</span>' +
          '<span class="qmb-desc">Answer all questions, then see your score</span>' +
        '</button>' +
      '</div>' +
    '</div>';

  configEl.querySelectorAll('.quiz-mode-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      quizMode    = btn.dataset.mode;
      quizPhase   = 'QUIZ';
      currentIdx  = 0;
      testAnswers = [];
      configEl.style.display = 'none';
      persistBar.style.display = '';
      submitTestBarBtn.style.display = quizMode === 'TEST' ? '' : 'none';
      stageEl.style.display  = '';
      renderQuestion(0);
    });
  });

  // ── Grade helper (shared) ─────────────────────────────────────
  function gradeData(correct, total) {
    var pct = total ? Math.round((correct / total) * 100) : 0;
    var grade, gradeClass, note;
    if (pct >= 90)      { grade = 'A'; gradeClass = 'grade-a'; note = 'Incredible! You really know this material. NCLEX, watch out!'; }
    else if (pct >= 80) { grade = 'B'; gradeClass = 'grade-b'; note = 'Great job! You\'ve got a solid grasp — just a little more review and you\'re there.'; }
    else if (pct >= 70) { grade = 'C'; gradeClass = 'grade-c'; note = 'Good effort! Go back over the ones you missed and you\'ll nail it next time.'; }
    else if (pct >= 60) { grade = 'D'; gradeClass = 'grade-d'; note = 'Keep pushing! Review your notes and try again — every attempt makes you stronger.'; }
    else                { grade = 'F'; gradeClass = 'grade-f'; note = 'Don\'t give up! This is hard material. Re-read the rationales and try again — you\'ve got this.'; }
    return { pct: pct, grade: grade, gradeClass: gradeClass, note: note, correct: correct, total: total };
  }

  function resetToConfig() {
    quizPhase   = 'CONFIGURATION';
    quizMode    = null;
    currentIdx  = 0;
    testAnswers = [];
    stageEl.style.display    = 'none';
    stageEl.innerHTML        = '';
    persistBar.style.display = 'none';
    submitTestBarBtn.style.display = 'none';
    configEl.style.display   = '';
  }

  // ── Render one question ───────────────────────────────────────
  function renderQuestion(idx) {
    stageEl.innerHTML = '';
    var q = questions[idx];

    // Progress
    var prog = document.createElement('div');
    prog.className = 'quiz-progress';
    var fill = Math.round(((idx) / questions.length) * 100);
    prog.innerHTML =
      '<div class="quiz-progress-text">Question ' + (idx + 1) + ' of ' + questions.length + '</div>' +
      '<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:' + fill + '%"></div></div>';
    stageEl.appendChild(prog);

    // Question stem
    if (q.stemHTML) {
      var stemWrap = document.createElement('div');
      stemWrap.className = 'quiz-stem';
      stemWrap.innerHTML = q.stemHTML;
      stageEl.appendChild(stemWrap);
    }

    // SATA note
    if (q.isSATA) {
      var sataNote = document.createElement('p');
      sataNote.className = 'quiz-sata-note';
      sataNote.textContent = 'Select all that apply — choose all correct answers, then click Submit.';
      stageEl.appendChild(sataNote);
    }

    // Choices
    var choiceWrap = document.createElement('div');
    choiceWrap.className = 'quiz-choices';

    var selected   = new Set();
    var submitted  = false;
    var allBtns    = [];

    q.choiceEls.forEach(function (choice) {
      var letter = choice.textContent.trim().charAt(0).toUpperCase();
      var btn    = document.createElement('button');
      btn.className      = 'quiz-choice-btn';
      btn.dataset.letter = letter;
      btn.innerHTML      = choice.innerHTML;
      allBtns.push(btn);

      if (q.isSATA) {
        btn.addEventListener('click', function () {
          if (submitted) return;
          if (selected.has(letter)) { selected.delete(letter); btn.classList.remove('selected'); }
          else                      { selected.add(letter);    btn.classList.add('selected'); }
          if (quizMode === 'TEST')   updateNextBtn();
          if (quizMode === 'STUDY')  updateSubmitBtn();
        });
      } else {
        btn.addEventListener('click', function () {
          if (submitted) return;
          selected.clear();
          selected.add(letter);
          allBtns.forEach(function (b) { b.classList.remove('selected'); });
          btn.classList.add('selected');
          if (quizMode === 'TEST')   updateNextBtn();
          if (quizMode === 'STUDY')  updateSubmitBtn();
        });
      }

      choiceWrap.appendChild(btn);
    });

    stageEl.appendChild(choiceWrap);

    // Rationale panel
    var rationalePanel = document.createElement('div');
    rationalePanel.className = 'quiz-rationale-panel';

    var answerDisplay = document.createElement('p');
    answerDisplay.className = 'quiz-answer-display';

    var rationaleDisplay = document.createElement('p');
    rationaleDisplay.className = 'quiz-rationale-display';
    rationaleDisplay.innerHTML = q.rationaleHTML;

    rationalePanel.appendChild(answerDisplay);
    rationalePanel.appendChild(rationaleDisplay);
    stageEl.appendChild(rationalePanel);

    // Action buttons row
    var actionRow = document.createElement('div');
    actionRow.className = 'quiz-action-row';
    stageEl.appendChild(actionRow);

    var isLastQ = idx === questions.length - 1;

    if (quizMode === 'STUDY') {
      // ── STUDY MODE ─────────────────────────────────────────
      var submitBtn = document.createElement('button');
      submitBtn.className   = 'quiz-submit-btn';
      submitBtn.textContent = 'Submit Answer';
      submitBtn.disabled    = true;

      var nextBtn = document.createElement('button');
      nextBtn.className     = 'quiz-next-btn';
      nextBtn.textContent   = isLastQ ? 'Finish' : 'Next Question →';
      nextBtn.style.display = 'none';

      function updateSubmitBtn() {
        submitBtn.disabled = selected.size === 0;
      }

      submitBtn.addEventListener('click', function () {
        if (submitted) return;
        submitted = true;

        allBtns.forEach(function (b) {
          var l = b.dataset.letter;
          var isCorrect   = q.correctLetters.indexOf(l) !== -1;
          var wasSelected = selected.has(l);
          b.classList.remove('selected');
          if (isCorrect)                      b.classList.add('correct');
          else if (wasSelected && !isCorrect) b.classList.add('incorrect');
          b.disabled = true;
        });

        var allCorrect = q.correctLetters.every(function (l) { return selected.has(l); });
        var noneWrong  = Array.from(selected).every(function (l) { return q.correctLetters.indexOf(l) !== -1; });
        var gotItRight = q.isSATA ? (allCorrect && noneWrong) : selected.has(q.correctLetters[0]);

        answerDisplay.innerHTML =
          '<strong>' + (gotItRight ? '✅ Correct!' : '❌ Incorrect') + ' — Answer: ' + q.answerText + '</strong>';
        rationalePanel.classList.add('visible');

        submitBtn.style.display = 'none';
        nextBtn.style.display   = '';
      });

      nextBtn.addEventListener('click', function () {
        if (isLastQ) {
          renderStudyComplete();
        } else {
          currentIdx++;
          renderQuestion(currentIdx);
        }
      });

      actionRow.appendChild(submitBtn);
      actionRow.appendChild(nextBtn);

    } else {
      // ── TEST MODE ───────────────────────────────────────────
      var nextBtn = document.createElement('button');
      nextBtn.className   = 'quiz-next-btn';
      nextBtn.textContent = isLastQ ? 'Finish & See Results' : 'Next Question →';
      nextBtn.disabled    = true;

      function updateNextBtn() {
        nextBtn.disabled = selected.size === 0;
      }

      nextBtn.addEventListener('click', function () {
        var allCorrect = q.correctLetters.every(function (l) { return selected.has(l); });
        var noneWrong  = Array.from(selected).every(function (l) { return q.correctLetters.indexOf(l) !== -1; });
        var gotItRight = q.isSATA ? (allCorrect && noneWrong) : selected.has(q.correctLetters[0]);
        testAnswers.push({ gotItRight: gotItRight, selected: Array.from(selected) });

        if (isLastQ) {
          quizPhase = 'RESULTS';
          renderResults();
        } else {
          currentIdx++;
          renderQuestion(currentIdx);
        }
      });

      actionRow.appendChild(nextBtn);
    }
  }

  // ── Study mode completion screen ──────────────────────────────
  function renderStudyComplete() {
    persistBar.style.display = 'none';
    stageEl.innerHTML =
      '<div class="quiz-complete">' +
        '<div class="quiz-complete-icon">🎉</div>' +
        '<h2 class="quiz-complete-title">Quiz Complete!</h2>' +
        '<p class="quiz-complete-sub">You reviewed all ' + questions.length + ' questions and saw the rationale for each one.</p>' +
        '<button class="quiz-retake-btn">↺ Choose a new mode</button>' +
      '</div>';
    stageEl.querySelector('.quiz-retake-btn').addEventListener('click', resetToConfig);
  }

  // ── Test mode results screen ──────────────────────────────────
  function renderResults() {
    submitTestBarBtn.style.display = 'none';
    var correct = testAnswers.filter(function (a) { return a.gotItRight; }).length;
    var gd = gradeData(correct, questions.length);

    stageEl.innerHTML = '';

    var scoreCard = document.createElement('div');
    scoreCard.className = 'quiz-score-card ' + gd.gradeClass;
    scoreCard.innerHTML =
      '<div class="qsc-grade">' + gd.grade + '</div>' +
      '<div class="qsc-details">' +
        '<div class="qsc-pct">' + gd.correct + ' / ' + gd.total + ' <span class="qsc-pct-num">(' + gd.pct + '%)</span></div>' +
        '<div class="qsc-note">' + gd.note + '</div>' +
      '</div>';
    stageEl.appendChild(scoreCard);

    var breakdown = document.createElement('div');
    breakdown.className = 'quiz-breakdown';

    questions.forEach(function (q, i) {
      var ans = testAnswers[i] || {};
      var item = document.createElement('div');
      item.className = 'quiz-result-item ' + (ans.gotItRight ? 'qri-correct' : 'qri-incorrect');

      var selectedStr = (ans.selected || []).join(', ') || '—';

      item.innerHTML =
        '<div class="qri-header">' +
          '<span class="qri-num">Q' + (i + 1) + '</span>' +
          '<span class="qri-verdict">' + (ans.gotItRight ? '✅ Correct' : '❌ Incorrect') + '</span>' +
        '</div>' +
        (q.stemHTML ? '<div class="qri-stem">' + q.stemHTML + '</div>' : '') +
        '<div class="qri-answer-row">' +
          '<span class="qri-label">Your answer:</span> <strong>' + selectedStr + '</strong>' +
          ' &nbsp;|&nbsp; ' +
          '<span class="qri-label">Correct:</span> <strong>' + q.answerText + '</strong>' +
        '</div>' +
        '<div class="qri-rationale">' + q.rationaleHTML + '</div>';

      breakdown.appendChild(item);
    });

    stageEl.appendChild(breakdown);

    var retakeBtn = document.createElement('button');
    retakeBtn.className   = 'quiz-retake-btn';
    retakeBtn.textContent = '↺ Retake — Choose a new mode';
    retakeBtn.addEventListener('click', resetToConfig);
    stageEl.appendChild(retakeBtn);
  }

})();
