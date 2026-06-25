(function () {
  var content = document.querySelector('.main-content');
  if (!content) return;

  var detailsBlocks = Array.from(content.querySelectorAll('details'));
  var quizBlocks = []; // { gotItRight, answered: false }

  // ── Score card (injected after last question) ─────────────────
  var scoreCard = document.createElement('div');
  scoreCard.className = 'quiz-score-card';
  scoreCard.style.display = 'none';

  function updateScoreCard() {
    var total     = quizBlocks.length;
    var done      = quizBlocks.filter(function (b) { return b.answered; }).length;
    var correct   = quizBlocks.filter(function (b) { return b.answered && b.gotItRight; }).length;
    var pct       = total ? Math.round((correct / total) * 100) : 0;
    var remaining = total - done;

    var grade, gradeClass;
    if (pct >= 90)      { grade = 'A';  gradeClass = 'grade-a'; }
    else if (pct >= 80) { grade = 'B';  gradeClass = 'grade-b'; }
    else if (pct >= 70) { grade = 'C';  gradeClass = 'grade-c'; }
    else if (pct >= 60) { grade = 'D';  gradeClass = 'grade-d'; }
    else                { grade = 'F';  gradeClass = 'grade-f'; }

    var msg = pct >= 80
      ? '🎉 Great work — you\'re ready!'
      : pct >= 70
        ? '📚 Almost there — review the ones you missed.'
        : '💪 Keep studying — you\'ve got this!';

    scoreCard.className = 'quiz-score-card ' + gradeClass;
    scoreCard.innerHTML =
      '<div class="qsc-grade">' + grade + '</div>' +
      '<div class="qsc-details">' +
        '<div class="qsc-pct">' + pct + '%</div>' +
        '<div class="qsc-fraction">' + correct + ' / ' + total + ' correct</div>' +
        (remaining > 0
          ? '<div class="qsc-remaining">' + remaining + ' question' + (remaining === 1 ? '' : 's') + ' left</div>'
          : '<div class="qsc-msg">' + msg + '</div>') +
      '</div>' +
      '<button class="qsc-reset">↺ Retake quiz</button>';

    scoreCard.style.display = done > 0 ? 'flex' : 'none';

    scoreCard.querySelector('.qsc-reset').addEventListener('click', function () {
      // Reset handled per-block via their retry buttons — just scroll to top
      window.scrollTo({ top: content.offsetTop - 80, behavior: 'smooth' });
    });
  }

  // ── Build each question ───────────────────────────────────────
  detailsBlocks.forEach(function (details) {
    var answerEl   = details.querySelector('.quiz-answer');
    var rationaleEl = details.querySelector('.quiz-rationale');
    if (!answerEl) return;

    var answerText     = answerEl.textContent.replace('Answer:', '').trim();
    var correctLetters = answerText.split(',').map(function (s) { return s.trim().charAt(0).toUpperCase(); });
    var isSATA         = correctLetters.length > 1;

    // Collect preceding .answer-choice siblings
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

    // Score tracking entry for this question
    var scoreEntry = { answered: false, gotItRight: false };
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

    choices.forEach(function (choice) {
      var letter = choice.textContent.trim().charAt(0).toUpperCase();
      var btn    = document.createElement('button');
      btn.className      = 'quiz-choice-btn';
      btn.dataset.letter = letter;
      btn.innerHTML      = choice.innerHTML;

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
      choice.style.display = 'none';
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

    var answerDisplay    = document.createElement('p');
    answerDisplay.className = 'quiz-answer-display';

    var rationaleDisplay = document.createElement('p');
    rationaleDisplay.className = 'quiz-rationale-display';
    rationaleDisplay.innerHTML = rationaleEl ? rationaleEl.innerHTML : '';

    rationalePanel.appendChild(answerDisplay);
    rationalePanel.appendChild(rationaleDisplay);
    block.appendChild(rationalePanel);

    function revealAnswers(clickedLetter) {
      var btns = Array.from(choiceWrap.querySelectorAll('.quiz-choice-btn'));
      btns.forEach(function (b) {
        var l = b.dataset.letter;
        var isCorrect   = correctLetters.indexOf(l) !== -1;
        var wasSelected = isSATA ? selected.has(l) : l === clickedLetter;
        b.classList.remove('selected');
        if (isCorrect)                   b.classList.add('correct');
        else if (wasSelected && !isCorrect) b.classList.add('incorrect');
        b.disabled = true;
      });

      if (checkBtn) checkBtn.style.display = 'none';

      var allCorrect  = correctLetters.every(function (l) { return selected.has(l); });
      var noneWrong   = Array.from(selected).every(function (l) { return correctLetters.indexOf(l) !== -1; });
      var gotItRight  = isSATA ? (allCorrect && noneWrong) : clickedLetter === correctLetters[0];

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
        btns.forEach(function (b) { b.classList.remove('correct', 'incorrect', 'selected'); b.disabled = false; });
        selected.clear();
        answered = false;
        scoreEntry.answered = false;
        scoreEntry.gotItRight = false;
        rationalePanel.classList.remove('visible');
        if (checkBtn) checkBtn.style.display = '';
        retryBtn.remove();
        updateScoreCard();
      });
      rationalePanel.appendChild(retryBtn);
    }

    details.parentNode.insertBefore(block, details);
    details.style.display = 'none';
  });

  // ── Append score card after last question ─────────────────────
  if (quizBlocks.length) {
    content.appendChild(scoreCard);
    updateScoreCard();
  }
})();
