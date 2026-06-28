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

    // Find the question stem (text nodes/elements between the preceding HR/heading and the first choice)
    var stemHTML = '';
    var stemNode = choiceEls[0].previousElementSibling;
    var stemParts = [];
    while (stemNode) {
      if (stemNode.tagName === 'HR' || /^H[1-6]$/.test(stemNode.tagName)) break;
      stemParts.unshift(stemNode.outerHTML);
      stemNode = stemNode.previousElementSibling;
    }
    stemHTML = stemParts.join('');

    questions.push({
      correctLetters: correctLetters,
      answerText:     answerText,
      isSATA:         isSATA,
      choiceEls:      choiceEls,
      stemHTML:       stemHTML,
      rationaleHTML:  rationaleEl ? rationaleEl.innerHTML : ''
    });

    // Hide original DOM elements
    choiceEls.forEach(function (el) { el.classList.add('quiz-choice-hidden'); });
    details.style.display = 'none';
  });

  if (!questions.length) return;

  // ── Build containers ──────────────────────────────────────────
  var configEl = document.createElement('div');
  configEl.id = 'quiz-config';

  var stageEl = document.createElement('div');
  stageEl.id = 'quiz-stage';
  stageEl.style.display = 'none';

  content.insertBefore(configEl, content.querySelector('details') || content.firstChild);
  content.insertBefore(stageEl, configEl.nextSibling);

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
    stageEl.style.display  = 'none';
    stageEl.innerHTML      = '';
    configEl.style.display = '';
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
    var submitted  = false;  // study mode per-question state
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
          if (quizMode === 'STUDY' && submitted) return;
          if (selected.has(letter)) { selected.delete(letter); btn.classList.remove('selected'); }
          else                      { selected.add(letter);    btn.classList.add('selected'); }
          if (quizMode === 'TEST') updateNextBtn();
        });
      } else {
        btn.addEventListener('click', function () {
          if (submitted) return;
          // single-answer: selecting replaces previous
          selected.clear();
          selected.add(letter);
          allBtns.forEach(function (b) { b.classList.remove('selected'); });
          btn.classList.add('selected');
          if (quizMode === 'TEST') updateNextBtn();
          if (quizMode === 'STUDY' && !q.isSATA) updateSubmitBtn();
        });
      }

      choiceWrap.appendChild(btn);
    });

    stageEl.appendChild(choiceWrap);

    // Rationale panel (hidden until submit in STUDY, never shown in TEST)
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
      submitBtn.textContent = q.isSATA ? 'Submit Answer' : 'Submit Answer';
      submitBtn.disabled    = true;

      var nextBtn = document.createElement('button');
      nextBtn.className   = 'quiz-next-btn';
      nextBtn.textContent = isLastQ ? 'Finish' : 'Next Question →';
      nextBtn.style.display = 'none';

      function updateSubmitBtn() {
        submitBtn.disabled = selected.size === 0;
      }

      submitBtn.addEventListener('click', function () {
        if (submitted) return;
        submitted = true;

        // Freeze choices
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

      // Enable submit once a choice is picked for SATA
      if (q.isSATA) {
        allBtns.forEach(function (btn) {
          btn.addEventListener('click', function () { updateSubmitBtn(); });
        });
      }

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
    // Count correct from testAnswers isn't used in study; tally from DOM choices
    // Simple completion — no per-question tracking needed since they saw each in real time
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
    var correct = testAnswers.filter(function (a) { return a.gotItRight; }).length;
    var gd = gradeData(correct, questions.length);

    stageEl.innerHTML = '';

    // Score card
    var scoreCard = document.createElement('div');
    scoreCard.className = 'quiz-score-card ' + gd.gradeClass;
    scoreCard.innerHTML =
      '<div class="qsc-grade">' + gd.grade + '</div>' +
      '<div class="qsc-details">' +
        '<div class="qsc-pct">' + gd.correct + ' / ' + gd.total + ' <span class="qsc-pct-num">(' + gd.pct + '%)</span></div>' +
        '<div class="qsc-note">' + gd.note + '</div>' +
      '</div>';
    stageEl.appendChild(scoreCard);

    // Per-question breakdown
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
