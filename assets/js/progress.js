(function () {
  'use strict';

  var STORAGE_KEY = 'ne_progress';

  function load() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (e) { return {}; }
  }
  function save(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
  }

  var progress = load();

  // Normalise a URL to a path-only key (strip origin + hash)
  function key(href) {
    try {
      var u = new URL(href, location.href);
      return u.pathname;
    } catch (e) { return href; }
  }

  // ── Sidebar checkmarks ───────────────────────────────────────────────────
  // Add a small ✓ badge after sidebar links that are marked done
  function decorateSidebar() {
    var links = document.querySelectorAll('.sidebar a');
    links.forEach(function (a) {
      var k = key(a.href);
      if (progress[k]) {
        if (!a.querySelector('.progress-tick')) {
          var tick = document.createElement('span');
          tick.className = 'progress-tick';
          tick.textContent = '✓';
          a.appendChild(tick);
        }
      }
    });
  }

  // ── All Topics page ───────────────────────────────────────────────────────
  function initAllTopics() {
    var content = document.querySelector('.main-content');
    if (!content) return;

    // Collect all note links (skip section anchors — links with # in same page)
    var links = Array.from(content.querySelectorAll('li a[href]')).filter(function (a) {
      return !a.getAttribute('href').startsWith('#');
    });

    var total = links.length;

    // Summary bar
    var bar = document.createElement('div');
    bar.className = 'progress-bar-wrap';
    var fill = document.createElement('div');
    fill.className = 'progress-bar-fill';
    var label = document.createElement('p');
    label.className = 'progress-bar-label';
    bar.appendChild(fill);
    bar.appendChild(label);

    function updateBar() {
      progress = load();
      var done = links.filter(function (a) { return progress[key(a.href)]; }).length;
      var pct = total > 0 ? Math.round(done / total * 100) : 0;
      fill.style.width = pct + '%';
      label.textContent = done + ' of ' + total + ' topics completed (' + pct + '%)';
    }

    // Insert bar after the h1
    var h1 = content.querySelector('h1');
    if (h1 && h1.nextSibling) {
      content.insertBefore(bar, h1.nextSibling);
    } else {
      content.prepend(bar);
    }

    // Inject checkbox before each list item link
    links.forEach(function (a) {
      var li = a.closest('li');
      if (!li) return;

      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'progress-cb';
      cb.checked = !!progress[key(a.href)];

      cb.addEventListener('change', function () {
        progress = load();
        progress[key(a.href)] = cb.checked;
        if (!cb.checked) delete progress[key(a.href)];
        save(progress);
        updateBar();
        decorateSidebar();
      });

      li.insertBefore(cb, li.firstChild);
      if (cb.checked) li.classList.add('progress-done');

      cb.addEventListener('change', function () {
        li.classList.toggle('progress-done', cb.checked);
      });
    });

    updateBar();
  }

  // ── Mark current page as visited ─────────────────────────────────────────
  // Auto-check the current page after spending 10s on it
  function autoMarkCurrentPage() {
    var k = location.pathname;
    // Only auto-mark actual note pages (not home, review, all-topics, quiz pages)
    var skip = ['/', '/all-topics.html', '/review.html', '/index.html'];
    if (skip.indexOf(k) !== -1) return;
    if (k.indexOf('-quiz') !== -1 || k.indexOf('practice-quiz') !== -1) return;
    if (progress[k]) return; // already marked

    setTimeout(function () {
      progress = load();
      progress[k] = true;
      save(progress);
      decorateSidebar();
    }, 10000); // 10 seconds
  }

  // ── Boot ──────────────────────────────────────────────────────────────────
  decorateSidebar();
  autoMarkCurrentPage();
  if (location.pathname.indexOf('all-topics') !== -1) {
    initAllTopics();
  }
})();
