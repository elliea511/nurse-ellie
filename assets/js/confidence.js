(function () {
  var KEY = 'ellie-confidence';
  var PAGE = window.location.pathname;

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function getRating(id) {
    return load().find(function (r) { return r.url === PAGE && r.id === id; });
  }

  function setRating(id, rating) {
    var data = load().filter(function (r) { return !(r.url === PAGE && r.id === id); });
    data.push({ url: PAGE, id: id, rating: rating });
    save(data);
  }

  var headings = document.querySelectorAll('.main-content h2');
  headings.forEach(function (h) {
    if (!h.id) return;

    var bar = document.createElement('div');
    bar.className = 'confidence-bar';
    bar.dataset.for = h.id;

    var buttons = [
      { rating: 'good',   label: '👍 Got it',      cls: 'cf-good' },
      { rating: 'unsure', label: '😐 Unsure',       cls: 'cf-unsure' },
      { rating: 'bad',    label: '👎 Need review',  cls: 'cf-bad' },
    ];

    buttons.forEach(function (b) {
      var btn = document.createElement('button');
      btn.className = 'cf-btn ' + b.cls;
      btn.textContent = b.label;
      btn.dataset.rating = b.rating;
      btn.addEventListener('click', function () {
        setRating(h.id, b.rating);
        bar.querySelectorAll('.cf-btn').forEach(function (el) { el.classList.remove('cf-active'); });
        btn.classList.add('cf-active');
      });
      bar.appendChild(btn);
    });

    // Restore saved rating
    var saved = getRating(h.id);
    if (saved) {
      var active = bar.querySelector('[data-rating="' + saved.rating + '"]');
      if (active) active.classList.add('cf-active');
    }

    h.insertAdjacentElement('afterend', bar);
  });
})();
