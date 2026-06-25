(function () {
  var content = document.querySelector('.main-content');
  if (!content) return;

  var tables = Array.from(content.querySelectorAll('table.flashcards'));
  if (!tables.length) return;

  // Inject toggle button at top of content
  var toggleBtn = document.createElement('button');
  toggleBtn.id = 'flashcard-toggle';
  toggleBtn.textContent = '🃏 Flashcard Mode';
  content.prepend(toggleBtn);

  var active = false;
  var decks = [];

  function buildCards() {
    var cards = [];
    tables.forEach(function (table) {
      var rows = Array.from(table.querySelectorAll('tr'));
      // Grab header cells for column labels
      var headers = [];
      var headerRow = table.querySelector('tr');
      if (headerRow) {
        headers = Array.from(headerRow.querySelectorAll('th')).map(function (th) { return th.textContent.trim(); });
      }
      rows.forEach(function (row, i) {
        var cells = Array.from(row.querySelectorAll('td, th'));
        if (cells.length < 2) return;
        if (i === 0 && row.querySelector('th')) return; // skip pure header
        var columnLabel = headers[0] || '';
        var front = cells[0].innerHTML;
        var back = cells.slice(1).map(function (c, ci) {
          var colHead = headers[ci + 1] ? '<span class="fc-col-label">' + headers[ci + 1] + '</span>' : '';
          return colHead + c.innerHTML;
        }).join('<hr class="fc-divider">');
        cards.push({ front: front, column: columnLabel, back: back });
      });
    });
    return cards;
  }

  function createDeck(cards) {
    var idx = 0;
    var flipped = false;

    var wrap = document.createElement('div');
    wrap.className = 'flashcard-deck';

    var scene = document.createElement('div');
    scene.className = 'flashcard-scene';

    var card = document.createElement('div');
    card.className = 'flashcard';

    var front = document.createElement('div');
    front.className = 'flashcard-face flashcard-front';

    var back = document.createElement('div');
    back.className = 'flashcard-face flashcard-back';

    card.appendChild(front);
    card.appendChild(back);
    scene.appendChild(card);

    var controls = document.createElement('div');
    controls.className = 'flashcard-controls';

    var prevBtn = document.createElement('button');
    prevBtn.className = 'fc-btn fc-prev';
    prevBtn.textContent = '← Prev';

    var counter = document.createElement('span');
    counter.className = 'fc-counter';

    var flipBtn = document.createElement('button');
    flipBtn.className = 'fc-btn fc-flip';
    flipBtn.textContent = 'Flip ↺';

    var nextBtn = document.createElement('button');
    nextBtn.className = 'fc-btn fc-next';
    nextBtn.textContent = 'Next →';

    controls.appendChild(prevBtn);
    controls.appendChild(counter);
    controls.appendChild(flipBtn);
    controls.appendChild(nextBtn);

    var hint = document.createElement('div');
    hint.className = 'flashcard-hint';
    hint.textContent = 'Click card or press Flip to reveal the answer';

    wrap.appendChild(hint);
    wrap.appendChild(scene);
    wrap.appendChild(controls);

    function show() {
      var c = cards[idx];
      var colTag = c.column ? '<div class="fc-column-tag">' + c.column + '</div>' : '';
      front.innerHTML = colTag + '<div class="fc-term">' + c.front + '</div>';
      back.innerHTML = c.back;
      counter.textContent = (idx + 1) + ' / ' + cards.length;
      flipped = false;
      card.classList.remove('flipped');
    }

    function doFlip() {
      flipped = !flipped;
      card.classList.toggle('flipped', flipped);
    }

    flipBtn.addEventListener('click', doFlip);
    scene.addEventListener('click', doFlip);

    prevBtn.addEventListener('click', function () {
      idx = (idx - 1 + cards.length) % cards.length;
      show();
    });

    nextBtn.addEventListener('click', function () {
      idx = (idx + 1) % cards.length;
      show();
    });

    show();
    return wrap;
  }

  toggleBtn.addEventListener('click', function () {
    active = !active;
    toggleBtn.textContent = active ? '✕ Exit Flashcard Mode' : '🃏 Flashcard Mode';
    toggleBtn.classList.toggle('fc-active', active);

    if (active) {
      var cards = buildCards();
      if (!cards.length) { active = false; toggleBtn.textContent = '🃏 Flashcard Mode'; return; }
      tables.forEach(function (t) { t.style.display = 'none'; });
      var deck = createDeck(cards);
      decks.push(deck);
      toggleBtn.insertAdjacentElement('afterend', deck);
      deck.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      tables.forEach(function (t) { t.style.display = ''; });
      decks.forEach(function (d) { d.remove(); });
      decks = [];
    }
  });
})();
