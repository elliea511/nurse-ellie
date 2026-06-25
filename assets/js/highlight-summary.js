(function () {
  var KEY = 'ellie-annotations-' + window.location.pathname;

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }

  // Only add button if there's a main-content
  var content = document.querySelector('.main-content');
  if (!content) return;

  // Button fixed on screen
  var btn = document.createElement('button');
  btn.id = 'hl-summary-btn';
  btn.title = 'View highlight summary';
  btn.innerHTML = '🖊';
  document.body.appendChild(btn);

  // Modal overlay
  var overlay = document.createElement('div');
  overlay.id = 'hl-summary-overlay';
  overlay.innerHTML = '<div id="hl-summary-modal"><div id="hl-summary-header"><span id="hl-summary-title">My Highlights</span><button id="hl-summary-close">✕</button></div><div id="hl-summary-body"></div></div>';
  document.body.appendChild(overlay);

  var modal = overlay.querySelector('#hl-summary-modal');
  var body  = overlay.querySelector('#hl-summary-body');

  var COLOR_LABELS = { yellow: 'Yellow', pink: 'Pink', blue: 'Blue', green: 'Green' };
  var COLOR_ORDER  = ['yellow', 'pink', 'blue', 'green'];

  function renderSummary() {
    var annotations = load();
    body.innerHTML = '';

    if (!annotations.length) {
      body.innerHTML = '<p class="hl-summary-empty">No highlights on this page yet.<br>Select any text and choose a color to highlight it.</p>';
      return;
    }

    // Group by color
    var groups = {};
    annotations.forEach(function (a) {
      if (!groups[a.color]) groups[a.color] = [];
      groups[a.color].push(a);
    });

    COLOR_ORDER.forEach(function (color) {
      if (!groups[color]) return;
      var section = document.createElement('div');
      section.className = 'hl-summary-group';

      var heading = document.createElement('div');
      heading.className = 'hl-summary-group-heading hl-' + color;
      heading.textContent = COLOR_LABELS[color];
      section.appendChild(heading);

      var list = document.createElement('ul');
      list.className = 'hl-summary-list';
      groups[color].forEach(function (a) {
        var li = document.createElement('li');
        li.className = 'hl-summary-item';
        var mark = document.createElement('mark');
        mark.className = 'hl hl-' + color;
        mark.textContent = a.text;
        li.appendChild(mark);
        list.appendChild(li);
      });
      section.appendChild(list);
      body.appendChild(section);
    });
  }

  btn.addEventListener('click', function () {
    renderSummary();
    overlay.classList.add('visible');
  });

  overlay.querySelector('#hl-summary-close').addEventListener('click', function () {
    overlay.classList.remove('visible');
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) overlay.classList.remove('visible');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') overlay.classList.remove('visible');
  });
})();
