(function () {
  var container = document.getElementById('review-page-content');
  if (!container) return;

  var PREFIX = 'ellie-annotations-';
  var COLOR_ORDER = ['yellow', 'pink', 'blue', 'green'];
  var COLOR_LABELS = { yellow: 'Yellow', pink: 'Pink', blue: 'Blue', green: 'Green' };

  // Collect all highlight pages from localStorage
  var pages = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (!key.startsWith(PREFIX)) continue;
    var path = key.slice(PREFIX.length);
    var items;
    try { items = JSON.parse(localStorage.getItem(key)) || []; } catch (e) { continue; }
    if (!items.length) continue;
    pages.push({ path: path, items: items });
  }

  container.innerHTML = '';

  // Header
  var header = document.createElement('div');
  header.className = 'review-header';

  var total = pages.reduce(function (n, p) { return n + p.items.length; }, 0);

  if (!pages.length) {
    container.innerHTML =
      '<div class="review-empty">' +
      '<div class="review-empty-icon">🖊</div>' +
      '<h2>No highlights yet</h2>' +
      '<p>Go to any notes page, select text, and choose a highlight color.<br>Everything you highlight across all pages will appear here.</p>' +
      '</div>';
    return;
  }

  header.innerHTML =
    '<h1 class="review-title">My Notes</h1>' +
    '<p class="review-subtitle">' + total + ' highlight' + (total === 1 ? '' : 's') + ' across ' + pages.length + ' page' + (pages.length === 1 ? '' : 's') + '</p>';

  // Clear all button
  var clearBtn = document.createElement('button');
  clearBtn.className = 'review-clear-all';
  clearBtn.textContent = 'Clear all highlights';
  clearBtn.addEventListener('click', function () {
    if (!confirm('Remove all highlights across every page?')) return;
    for (var j = localStorage.length - 1; j >= 0; j--) {
      var k = localStorage.key(j);
      if (k && k.startsWith(PREFIX)) localStorage.removeItem(k);
    }
    container.innerHTML = '<div class="review-empty"><div class="review-empty-icon">🖊</div><h2>All cleared</h2><p>Your highlights have been removed.</p></div>';
  });
  header.appendChild(clearBtn);
  container.appendChild(header);

  // One card per page
  pages.forEach(function (page) {
    var card = document.createElement('div');
    card.className = 'review-card';

    // Page title from path
    var rawName = page.path.replace(/\.html$/, '').replace(/\/$/, '');
    var parts = rawName.split('/').filter(Boolean);
    var pageName = parts[parts.length - 1]
      .replace(/-/g, ' ')
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });

    var cardHeader = document.createElement('div');
    cardHeader.className = 'review-card-header';

    var titleLink = document.createElement('a');
    titleLink.href = page.path;
    titleLink.className = 'review-card-title';
    titleLink.textContent = pageName;

    var count = document.createElement('span');
    count.className = 'review-card-count';
    count.textContent = page.items.length + ' highlight' + (page.items.length === 1 ? '' : 's');

    cardHeader.appendChild(titleLink);
    cardHeader.appendChild(count);
    card.appendChild(cardHeader);

    // Group by color
    var groups = {};
    page.items.forEach(function (item) {
      if (!groups[item.color]) groups[item.color] = [];
      groups[item.color].push(item);
    });

    COLOR_ORDER.forEach(function (color) {
      if (!groups[color]) return;

      var group = document.createElement('div');
      group.className = 'review-color-group';

      var label = document.createElement('span');
      label.className = 'review-color-label hl-' + color;
      label.textContent = COLOR_LABELS[color];
      group.appendChild(label);

      var list = document.createElement('div');
      list.className = 'review-hl-list';

      groups[color].forEach(function (item) {
        var div = document.createElement('div');
        div.className = 'review-hl-item';
        var uid = item.uid || '';
        var href = uid ? page.path + '?hljump=' + encodeURIComponent(uid) : page.path;
        div.innerHTML = '<a href="' + href + '" class="review-hl-link"><mark class="hl hl-' + color + '">' + item.text + '</mark></a>';
        list.appendChild(div);
      });

      group.appendChild(list);
      card.appendChild(group);
    });

    // Per-page clear button
    var pageKey = PREFIX + page.path;
    var pageClear = document.createElement('button');
    pageClear.className = 'review-page-clear';
    pageClear.textContent = 'Clear this page';
    pageClear.addEventListener('click', function () {
      localStorage.removeItem(pageKey);
      card.remove();
      // Update subtitle
      var remaining = container.querySelectorAll('.review-card').length;
      var remainingHL = 0;
      container.querySelectorAll('.review-hl-list li').forEach(function () { remainingHL++; });
      var sub = container.querySelector('.review-subtitle');
      if (sub) sub.textContent = remainingHL + ' highlight' + (remainingHL === 1 ? '' : 's') + ' across ' + remaining + ' page' + (remaining === 1 ? '' : 's');
      if (!remaining) container.innerHTML = '<div class="review-empty"><div class="review-empty-icon">🖊</div><h2>All cleared</h2><p>Your highlights have been removed.</p></div>';
    });
    card.appendChild(pageClear);

    container.appendChild(card);
  });
})();
