(function () {
  var content = document.querySelector('.main-content');
  if (!content) return;

  // Find all <details> blocks that contain a quiz answer
  var detailsBlocks = Array.from(content.querySelectorAll('details'));
  detailsBlocks.forEach(function (details) {
    var answerEl = details.querySelector('.quiz-answer');
    var rationaleEl = details.querySelector('.quiz-rationale');
    if (!answerEl) return;

    // Parse correct letter(s) from "Answer: A, B, D"
    var answerText = answerEl.textContent.replace('Answer:', '').trim();
    var correctLetters = answerText.split(',').map(function (s) {
      return s.trim().charAt(0).toUpperCase();
    });
    var isSATA = correctLetters.length > 1;

    // Collect the .answer-choice siblings that precede this <details>
    var choices = [];
    var node = details.previousElementSibling;
    while (node) {
      if (node.classList && node.classList.contains('answer-choice')) {
        choices.unshift(node);
      } else if (node.tagName === 'HR' || (node.tagName && node.tagName.match(/^H[1-6]$/))) {
        break;
      }
      node = node.previousElementSibling;
    }
    if (!choices.length) return;

    // Build a wrapper to replace the raw choices + details
    var block = document.createElement('div');
    block.className = 'quiz-block';

    // SATA instruction
    if (isSATA) {
      var sataNote = document.createElement('p');
      sataNote.className = 'quiz-sata-note';
      sataNote.textContent = 'Select all that apply — choose all correct answers, then click Check.';
      block.appendChild(sataNote);
    }

    // Choice buttons
    var choiceWrap = document.createElement('div');
    choiceWrap.className = 'quiz-choices';

    var selected = new Set();
    var answered = false;

    choices.forEach(function (choice) {
      var letter = choice.textContent.trim().charAt(0).toUpperCase();
      var btn = document.createElement('button');
      btn.className = 'quiz-choice-btn';
      btn.dataset.letter = letter;
      btn.innerHTML = choice.innerHTML;

      if (isSATA) {
        btn.addEventListener('click', function () {
          if (answered) return;
          if (selected.has(letter)) {
            selected.delete(letter);
            btn.classList.remove('selected');
          } else {
            selected.add(letter);
            btn.classList.add('selected');
          }
        });
      } else {
        btn.addEventListener('click', function () {
          if (answered) return;
          answered = true;
          revealAnswers(letter);
        });
      }

      choiceWrap.appendChild(btn);
      choice.style.display = 'none'; // hide original
    });

    block.appendChild(choiceWrap);

    // Check button for SATA
    if (isSATA) {
      var checkBtn = document.createElement('button');
      checkBtn.className = 'quiz-check-btn';
      checkBtn.textContent = 'Check answers';
      checkBtn.addEventListener('click', function () {
        if (answered) return;
        answered = true;
        revealAnswers(null);
      });
      block.appendChild(checkBtn);
    }

    // Rationale panel (hidden until answered)
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

    function revealAnswers(clickedLetter) {
      var btns = Array.from(choiceWrap.querySelectorAll('.quiz-choice-btn'));
      btns.forEach(function (b) {
        var letter = b.dataset.letter;
        var isCorrect = correctLetters.indexOf(letter) !== -1;
        var wasSelected = isSATA ? selected.has(letter) : letter === clickedLetter;

        b.classList.remove('selected');
        if (isCorrect) {
          b.classList.add('correct');
        } else if (wasSelected && !isCorrect) {
          b.classList.add('incorrect');
        }
        b.disabled = true;
      });

      if (checkBtn) checkBtn.style.display = 'none';

      // Score for SATA
      var allCorrectSelected = correctLetters.every(function (l) { return selected.has(l); });
      var noWrongSelected = Array.from(selected).every(function (l) { return correctLetters.indexOf(l) !== -1; });
      var gotItRight = isSATA ? (allCorrectSelected && noWrongSelected) : clickedLetter === correctLetters[0];

      answerDisplay.innerHTML =
        '<strong>' + (gotItRight ? '✅ Correct!' : '❌ Incorrect') + ' — Answer: ' + answerText + '</strong>';
      rationalePanel.classList.add('visible');

      // Try again button
      var retryBtn = document.createElement('button');
      retryBtn.className = 'quiz-retry-btn';
      retryBtn.textContent = 'Try again';
      retryBtn.addEventListener('click', function () {
        btns.forEach(function (b) {
          b.classList.remove('correct', 'incorrect', 'selected');
          b.disabled = false;
        });
        selected.clear();
        answered = false;
        rationalePanel.classList.remove('visible');
        if (checkBtn) checkBtn.style.display = '';
        retryBtn.remove();
      });
      rationalePanel.appendChild(retryBtn);
    }

    // Insert block before the details element, hide original details
    details.parentNode.insertBefore(block, details);
    details.style.display = 'none';
  });
})();
