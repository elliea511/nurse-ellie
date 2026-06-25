(function () {
  var KEY = 'ellie-confidence';
  var PAGE = window.location.pathname;

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function getPageRating() {
    return load().find(function (r) { return r.url === PAGE; });
  }

  function setPageRating(rating, title) {
    var data = load().filter(function (r) { return r.url !== PAGE; });
    if (rating) data.push({ url: PAGE, title: title, rating: rating });
    save(data);
  }

  function getTitle() {
    var h1 = document.querySelector('.main-content h1');
    return h1 ? h1.textContent.trim() : document.title;
  }

  // ── Per-page rating bar ──────────────────────────────────────
  // Skip the highlights review page
  if (/\/review(\.html)?\/?$/.test(window.location.pathname)) return;

  var content = document.querySelector('.main-content');
  if (!content) return;

  var title = getTitle();

  var bar = document.createElement('div');
  bar.className = 'confidence-bar';

  var label = document.createElement('span');
  label.className = 'cf-label';
  label.textContent = 'How confident are you with this topic?';
  bar.appendChild(label);

  var buttons = [
    { rating: 'good',   label: '👍 Got it',     cls: 'cf-good' },
    { rating: 'unsure', label: '😐 Unsure',      cls: 'cf-unsure' },
    { rating: 'bad',    label: '👎 Need review', cls: 'cf-bad' },
  ];

  buttons.forEach(function (b) {
    var btn = document.createElement('button');
    btn.className = 'cf-btn ' + b.cls;
    btn.textContent = b.label;
    btn.dataset.rating = b.rating;
    btn.addEventListener('click', function () {
      var already = getPageRating();
      // clicking active rating un-rates the page
      if (already && already.rating === b.rating) {
        setPageRating(null, title);
        bar.querySelectorAll('.cf-btn').forEach(function (el) { el.classList.remove('cf-active'); });
      } else {
        setPageRating(b.rating, title);
        bar.querySelectorAll('.cf-btn').forEach(function (el) { el.classList.remove('cf-active'); });
        btn.classList.add('cf-active');
      }
      buildReviewPanel();
    });
    bar.appendChild(btn);
  });

  // Restore saved rating
  var saved = getPageRating();
  if (saved) {
    var active = bar.querySelector('[data-rating="' + saved.rating + '"]');
    if (active) active.classList.add('cf-active');
  }

  // Insert bar after the first H1 (or at top of content)
  var h1 = content.querySelector('h1');
  if (h1) {
    h1.insertAdjacentElement('afterend', bar);
  } else {
    content.prepend(bar);
  }

  // ── Review panel in sidebar ──────────────────────────────────
  var sidebar = document.querySelector('.sidebar');

  function buildReviewPanel() {
    var existing = document.getElementById('cf-review-panel');
    if (existing) existing.remove();

    var needReview = load().filter(function (r) { return r.rating === 'bad'; });
    if (!needReview.length || !sidebar) return;

    var panel = document.createElement('div');
    panel.id = 'cf-review-panel';
    panel.className = 'cf-review-panel';

    var heading = document.createElement('div');
    heading.className = 'cf-review-heading';
    heading.textContent = '📋 Needs Review (' + needReview.length + ')';
    panel.appendChild(heading);

    var list = document.createElement('ul');
    list.className = 'cf-review-list';
    needReview.forEach(function (r) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = r.url;
      a.textContent = r.title;
      li.appendChild(a);
      list.appendChild(li);
    });
    panel.appendChild(list);

    // Insert at bottom of sidebar
    sidebar.appendChild(panel);
  }

  buildReviewPanel();
})();
