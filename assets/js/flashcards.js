(function () {
  var content = document.querySelector('.main-content');
  if (!content) return;

  var tables = Array.from(content.querySelectorAll('table'));
  if (!tables.length) return;

  // Inject toggle button at top of content
  var toggleBtn = document.createElement('button');
  toggleBtn.id = 'flashcard-toggle';
  toggleBtn.textContent = '🃏 Flashcard Mode';
  content.prepend(toggleBtn);

  var active = false;
  var decks = [];

  function buildCards() {
    // Collect all rows from all tables as cards
    var cards = [];
    tables.forEach(function (table) {
      var rows = Array.from(table.querySelectorAll('tr'));
      // Skip header row
      rows.forEach(function (row, i) {
        var cells = Array.from(row.querySelectorAll('td, th'));
        if (cells.length < 2) return;
        if (i === 0 && row.querySelector('th')) return; // skip pure header
        var front = cells[0].innerHTML;
        var back = cells.slice(1).map(function (c) { return c.innerHTML; }).join('<br>');
        cards.push({ front: front, back: back });
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

    wrap.appendChild(scene);
    wrap.appendChild(controls);

    function show() {
      front.innerHTML = cards[idx].front;
      back.innerHTML = cards[idx].back;
      counter.textContent = (idx + 1) + ' / ' + cards.length;
      flipped = false;
      card.classList.remove('flipped');
    }

    flipBtn.addEventListener('click', function () {
      flipped = !flipped;
      card.classList.toggle('flipped', flipped);
    });

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
