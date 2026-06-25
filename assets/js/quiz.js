(function () {
  var content = document.querySelector('.main-content');
  if (!content || content.dataset.quizInit) return;
  content.dataset.quizInit = '1';

  var detailsBlocks = Array.from(content.querySelectorAll('details'));
  var quizBlocks = []; // { answered, gotItRight, reset }

  // ── Score card ────────────────────────────────────────────────
  var scoreCard = document.createElement('div');
  scoreCard.className = 'quiz-score-card';
  scoreCard.style.display = 'none';

  function updateScoreCard() {
    var total    = quizBlocks.length;
    var done     = quizBlocks.filter(function (b) { return b.answered; }).length;
    var correct  = quizBlocks.filter(function (b) { return b.answered && b.gotItRight; }).length;
    var wrong    = quizBlocks.filter(function (b) { return b.answered && !b.gotItRight; }).length;
    var remaining = total - done;

    // Assume unanswered = correct, so score goes DOWN as you get things wrong
    var assumed  = correct + remaining;
    var pct      = total ? Math.round((assumed / total) * 100) : 100;

    var grade, gradeClass;
    if (pct >= 90)      { grade = 'A';  gradeClass = 'grade-a'; }
    else if (pct >= 80) { grade = 'B';  gradeClass = 'grade-b'; }
    else if (pct >= 70) { grade = 'C';  gradeClass = 'grade-c'; }
    else if (pct >= 60) { grade = 'D';  gradeClass = 'grade-d'; }
    else                { grade = 'F';  gradeClass = 'grade-f'; }

    var allDone = remaining === 0;
    var finalPct = allDone ? Math.round((correct / total) * 100) : pct;
    var finalGrade = grade;
    if (allDone) {
      if (finalPct >= 90)      { finalGrade = 'A'; gradeClass = 'grade-a'; }
      else if (finalPct >= 80) { finalGrade = 'B'; gradeClass = 'grade-b'; }
      else if (finalPct >= 70) { finalGrade = 'C'; gradeClass = 'grade-c'; }
      else if (finalPct >= 60) { finalGrade = 'D'; gradeClass = 'grade-d'; }
      else                     { finalGrade = 'F'; gradeClass = 'grade-f'; }
    }

    var msg = finalPct >= 80
      ? '🎉 Great work — you\'re ready!'
      : finalPct >= 70
        ? '📚 Almost there — review the ones you missed.'
        : '💪 Keep studying — you\'ve got this!';

    scoreCard.className = 'quiz-score-card ' + gradeClass;
    scoreCard.innerHTML =
      '<div class="qsc-grade">' + finalGrade + '</div>' +
      '<div class="qsc-details">' +
        '<div class="qsc-pct">' + (allDone ? correct : assumed) + ' / ' + total + ' &nbsp;<span class="qsc-pct-num">' + (allDone ? finalPct : pct) + '%</span></div>' +
        (allDone
          ? '<div class="qsc-msg">' + msg + '</div>'
          : '<div class="qsc-remaining">' + remaining + ' question' + (remaining === 1 ? '' : 's') + ' remaining</div>') +
      '</div>' +
      '<button class="qsc-reset">↺ Retake</button>';

    scoreCard.style.display = done > 0 ? 'flex' : 'none';

    scoreCard.querySelector('.qsc-reset').addEventListener('click', function () {
      quizBlocks.forEach(function (b) { if (b.reset) b.reset(); });
      scoreCard.style.display = 'none';
      window.scrollTo({ top: content.offsetTop - 80, behavior: 'smooth' });
    });
  }

  // ── Build each question ───────────────────────────────────────
  detailsBlocks.forEach(function (details) {
    var answerEl    = details.querySelector('.quiz-answer');
    var rationaleEl = details.querySelector('.quiz-rationale');
    if (!answerEl) return;

    var answerText     = answerEl.textContent.replace('Answer:', '').trim();
    var correctLetters = answerText.split(',').map(function (s) { return s.trim().charAt(0).toUpperCase(); });
    var isSATA         = correctLetters.length > 1;

    var choices = [];
    var node = details.previousElementSibling;
    while (node) {
      if (node.classList && node.classList.contains('answer-choice')) {
        choices.unshift(node);
      } else if (node.tagName === 'HR' || /^H[1-6]$/.test(node.tagName)) {
        break;
      }
      node = node.previousElementSibling;
    }
    if (!choices.length) return;

    var scoreEntry = { answered: false, gotItRight: false, reset: null };
    quizBlocks.push(scoreEntry);

    var block = document.createElement('div');
    block.className = 'quiz-block';

    if (isSATA) {
      var sataNote = document.createElement('p');
      sataNote.className = 'quiz-sata-note';
      sataNote.textContent = 'Select all that apply — choose all correct answers, then click Check.';
      block.appendChild(sataNote);
    }

    var choiceWrap = document.createElement('div');
    choiceWrap.className = 'quiz-choices';

    var selected = new Set();
    var answered = false;
    var checkBtn;
    var allBtns = [];

    choices.forEach(function (choice) {
      var letter = choice.textContent.trim().charAt(0).toUpperCase();
      var btn    = document.createElement('button');
      btn.className      = 'quiz-choice-btn';
      btn.dataset.letter = letter;
      btn.innerHTML      = choice.innerHTML;
      allBtns.push(btn);

      if (isSATA) {
        btn.addEventListener('click', function () {
          if (answered) return;
          if (selected.has(letter)) { selected.delete(letter); btn.classList.remove('selected'); }
          else                      { selected.add(letter);    btn.classList.add('selected'); }
        });
      } else {
        btn.addEventListener('click', function () {
          if (answered) return;
          answered = true;
          revealAnswers(letter);
        });
      }

      choiceWrap.appendChild(btn);
      choice.classList.add('quiz-choice-hidden');
    });

    block.appendChild(choiceWrap);

    if (isSATA) {
      checkBtn = document.createElement('button');
      checkBtn.className   = 'quiz-check-btn';
      checkBtn.textContent = 'Check answers';
      checkBtn.addEventListener('click', function () {
        if (answered) return;
        answered = true;
        revealAnswers(null);
      });
      block.appendChild(checkBtn);
    }

    var rationalePanel = document.createElement('div');
    rationalePanel.className = 'quiz-rationale-panel';

    var answerDisplay = document.createElement('p');
    answerDisplay.className = 'quiz-answer-display';

    var rationaleDisplay = document.createElement('p');
    rationaleDisplay.className = 'quiz-rationale-display';
    rationaleDisplay.innerHTML = rationaleEl ? rationaleEl.innerHTML : '';

    rationalePanel.appendChild(answerDisplay);
    rationalePanel.appendChild(rationaleDisplay);
    block.appendChild(rationalePanel);

    function resetBlock() {
      allBtns.forEach(function (b) {
        b.classList.remove('correct', 'incorrect', 'selected');
        b.disabled = false;
      });
      selected.clear();
      answered = false;
      scoreEntry.answered   = false;
      scoreEntry.gotItRight = false;
      rationalePanel.classList.remove('visible');
      var retryBtn = rationalePanel.querySelector('.quiz-retry-btn');
      if (retryBtn) retryBtn.remove();
      if (checkBtn) checkBtn.style.display = '';
    }

    scoreEntry.reset = resetBlock;

    function revealAnswers(clickedLetter) {
      allBtns.forEach(function (b) {
        var l = b.dataset.letter;
        var isCorrect   = correctLetters.indexOf(l) !== -1;
        var wasSelected = isSATA ? selected.has(l) : l === clickedLetter;
        b.classList.remove('selected');
        if (isCorrect)                      b.classList.add('correct');
        else if (wasSelected && !isCorrect) b.classList.add('incorrect');
        b.disabled = true;
      });

      if (checkBtn) checkBtn.style.display = 'none';

      var allCorrect = correctLetters.every(function (l) { return selected.has(l); });
      var noneWrong  = Array.from(selected).every(function (l) { return correctLetters.indexOf(l) !== -1; });
      var gotItRight = isSATA ? (allCorrect && noneWrong) : clickedLetter === correctLetters[0];

      scoreEntry.answered   = true;
      scoreEntry.gotItRight = gotItRight;
      updateScoreCard();

      answerDisplay.innerHTML =
        '<strong>' + (gotItRight ? '✅ Correct!' : '❌ Incorrect') + ' — Answer: ' + answerText + '</strong>';
      rationalePanel.classList.add('visible');

      var retryBtn = document.createElement('button');
      retryBtn.className   = 'quiz-retry-btn';
      retryBtn.textContent = 'Try again';
      retryBtn.addEventListener('click', function () {
        resetBlock();
        updateScoreCard();
      });
      rationalePanel.appendChild(retryBtn);
    }

    details.parentNode.insertBefore(block, details);
    details.style.display = 'none';
  });

  if (quizBlocks.length) {
    content.appendChild(scoreCard);
  }
})();
