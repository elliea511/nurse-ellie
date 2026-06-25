(function () {
  var container = document.getElementById('review-page-content');
  if (!container) return;

  var ANN_PREFIX  = 'ellie-annotations-';
  var THL_PREFIX  = 'ellie-table-hl-';
  var EDIT_KEY    = 'ellie-notes-edit-content';
  var COLOR_ORDER = ['yellow', 'pink', 'blue', 'green'];
  var COLOR_LABELS = { yellow: 'Yellow', pink: 'Pink', blue: 'Blue', green: 'Green' };

  // Collect text highlights grouped by page path
  var pageMap = {}; // path -> { items: [], tables: [] }

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (!key) continue;

    if (key.startsWith(ANN_PREFIX)) {
      var path = key.slice(ANN_PREFIX.length);
      var items;
      try { items = JSON.parse(localStorage.getItem(key)) || []; } catch (e) { continue; }
      if (!items.length) continue;
      if (!pageMap[path]) pageMap[path] = { items: [], tables: [] };
      pageMap[path].items = items;
    }

    if (key.startsWith(THL_PREFIX)) {
      var tpath = key.slice(THL_PREFIX.length);
      var thlData;
      try { thlData = JSON.parse(localStorage.getItem(key)) || {}; } catch (e) { continue; }
      var tables = [];
      Object.keys(thlData).forEach(function (tableId) {
        var entry = thlData[tableId];
        if (!entry) return;
        var color = entry.color || (typeof entry === 'string' ? entry : null);
        var html  = entry.html  || null;
        if (color && html) tables.push({ tableId: tableId, color: color, html: html });
      });
      if (!tables.length) continue;
      if (!pageMap[tpath]) pageMap[tpath] = { items: [], tables: [] };
      pageMap[tpath].tables = tables;
    }
  }

  var paths = Object.keys(pageMap);
  container.innerHTML = '';

  var totalHL  = paths.reduce(function (n, p) { return n + pageMap[p].items.length; }, 0);
  var totalTbl = paths.reduce(function (n, p) { return n + pageMap[p].tables.length; }, 0);

  if (!paths.length) {
    // Check for saved edited content
    var saved = localStorage.getItem(EDIT_KEY);
    if (saved) {
      renderSavedMode(saved);
    } else {
      container.innerHTML =
        '<div class="review-empty">' +
        '<div class="review-empty-icon">🖊</div>' +
        '<h2>No highlights yet</h2>' +
        '<p>Go to any notes page, select text, and choose a highlight color.<br>Everything you highlight will appear here.</p>' +
        '</div>';
    }
    return;
  }

  // ── Header ──────────────────────────────────────────────────────
  var header = document.createElement('div');
  header.className = 'review-header';

  var titleRow = document.createElement('div');
  titleRow.className = 'review-header-title-row';

  var h1 = document.createElement('h1');
  h1.className = 'review-title';
  h1.textContent = 'My Notes';
  titleRow.appendChild(h1);

  // Pencil edit button
  var editBtn = document.createElement('button');
  editBtn.className = 'review-edit-btn';
  editBtn.title = 'Edit notes';
  editBtn.innerHTML = '&#9998;';
  titleRow.appendChild(editBtn);

  // PDF button
  var pdfBtn = document.createElement('button');
  pdfBtn.className = 'review-pdf-btn';
  pdfBtn.title = 'Save as PDF';
  pdfBtn.innerHTML = '&#128438; Save as PDF';
  pdfBtn.addEventListener('click', function () { window.print(); });
  titleRow.appendChild(pdfBtn);

  header.appendChild(titleRow);

  var subtitle = document.createElement('p');
  subtitle.className = 'review-subtitle';
  subtitle.textContent =
    totalHL + ' text highlight' + (totalHL === 1 ? '' : 's') +
    (totalTbl ? ' · ' + totalTbl + ' table' + (totalTbl === 1 ? '' : 's') : '') +
    ' across ' + paths.length + ' page' + (paths.length === 1 ? '' : 's');
  header.appendChild(subtitle);

  var clearBtn = document.createElement('button');
  clearBtn.className = 'review-clear-all';
  clearBtn.textContent = 'Clear all highlights';
  clearBtn.addEventListener('click', function () {
    if (!confirm('Remove all highlights across every page?')) return;
    for (var j = localStorage.length - 1; j >= 0; j--) {
      var k = localStorage.key(j);
      if (k && (k.startsWith(ANN_PREFIX) || k.startsWith(THL_PREFIX))) localStorage.removeItem(k);
    }
    localStorage.removeItem(EDIT_KEY);
    container.innerHTML = '<div class="review-empty"><div class="review-empty-icon">🖊</div><h2>All cleared</h2><p>Your highlights have been removed.</p></div>';
  });
  header.appendChild(clearBtn);
  container.appendChild(header);

  // ── Cards container ──────────────────────────────────────────────
  var cardsContainer = document.createElement('div');
  cardsContainer.id = 'review-cards';

  // Check for previously saved edit
  var savedEdit = localStorage.getItem(EDIT_KEY);
  if (savedEdit) {
    renderSavedMode(savedEdit);
    return;
  }

  paths.forEach(function (path) {
    var data = pageMap[path];
    var card = document.createElement('div');
    card.className = 'review-card';

    var rawName = path.replace(/\.html$/, '').replace(/\/$/, '');
    var parts = rawName.split('/').filter(Boolean);
    var pageName = parts[parts.length - 1]
      .replace(/-/g, ' ')
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });

    var cardHeader = document.createElement('div');
    cardHeader.className = 'review-card-header';
    var titleLink = document.createElement('a');
    titleLink.href = path;
    titleLink.className = 'review-card-title';
    titleLink.textContent = pageName;
    var countSpan = document.createElement('span');
    countSpan.className = 'review-card-count';
    var total = data.items.length + data.tables.length;
    countSpan.textContent = total + ' highlight' + (total === 1 ? '' : 's');
    cardHeader.appendChild(titleLink);
    cardHeader.appendChild(countSpan);
    card.appendChild(cardHeader);

    // ── All highlights (text + tables) grouped by color ──────────
    var groups = {};
    data.items.forEach(function (item) {
      if (!groups[item.color]) groups[item.color] = [];
      groups[item.color].push({ type: 'text', item: item });
    });
    data.tables.forEach(function (entry) {
      if (!groups[entry.color]) groups[entry.color] = [];
      groups[entry.color].push({ type: 'table', entry: entry });
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

      groups[color].forEach(function (entry) {
        var div = document.createElement('div');
        div.className = 'review-hl-item';

        if (entry.type === 'text') {
          var item = entry.item;
          if (item.level && /^h[1-6]$/.test(item.level)) {
            var heading = document.createElement(item.level);
            heading.className = 'review-hl-heading review-hl-heading-' + color;
            heading.textContent = item.text;
            div.appendChild(heading);
          } else {
            var mark = document.createElement('mark');
            mark.className = 'hl hl-' + color;
            mark.textContent = item.text;
            div.appendChild(mark);
          }
        } else {
          var tWrap = document.createElement('div');
          tWrap.className = 'review-table-wrap';
          tWrap.dataset.color = color;
          tWrap.innerHTML = entry.entry.html;
          div.appendChild(tWrap);
        }

        list.appendChild(div);
      });

      group.appendChild(list);
      card.appendChild(group);
    });

    // Per-page clear
    var annKey = ANN_PREFIX + path;
    var thlKey = THL_PREFIX + path;
    var pageClear = document.createElement('button');
    pageClear.className = 'review-page-clear';
    pageClear.textContent = 'Clear this page';
    pageClear.addEventListener('click', function () {
      localStorage.removeItem(annKey);
      localStorage.removeItem(thlKey);
      card.remove();
      var remaining = container.querySelectorAll('.review-card').length;
      if (!remaining) container.innerHTML = '<div class="review-empty"><div class="review-empty-icon">🖊</div><h2>All cleared</h2><p>Your highlights have been removed.</p></div>';
    });
    card.appendChild(pageClear);

    cardsContainer.appendChild(card);
  });

  container.appendChild(cardsContainer);

  // ── Edit mode ────────────────────────────────────────────────────
  var editControls = document.createElement('div');
  editControls.className = 'review-edit-controls';
  editControls.style.display = 'none';

  var saveEditBtn = document.createElement('button');
  saveEditBtn.className = 'review-edit-save';
  saveEditBtn.textContent = 'Save';

  var cancelEditBtn = document.createElement('button');
  cancelEditBtn.className = 'review-edit-cancel';
  cancelEditBtn.textContent = 'Cancel';

  var editHint = document.createElement('span');
  editHint.className = 'review-edit-hint';
  editHint.textContent = 'Click any text to edit · Use toolbar to format';

  editControls.appendChild(saveEditBtn);
  editControls.appendChild(cancelEditBtn);
  editControls.appendChild(editHint);

  // Insert controls just before cards
  container.insertBefore(editControls, cardsContainer);

  var preEditSnapshot = null;

  function enterEditMode() {
    preEditSnapshot = cardsContainer.innerHTML;
    cardsContainer.contentEditable = 'true';
    cardsContainer.classList.add('review-cards-editing');
    editBtn.style.display = 'none';
    editControls.style.display = 'flex';
    cardsContainer.focus();
  }

  function exitEditMode() {
    cardsContainer.contentEditable = 'false';
    cardsContainer.classList.remove('review-cards-editing');
    editBtn.style.display = '';
    editControls.style.display = 'none';
  }

  editBtn.addEventListener('click', enterEditMode);

  saveEditBtn.addEventListener('click', function () {
    localStorage.setItem(EDIT_KEY, cardsContainer.innerHTML);
    exitEditMode();
  });

  cancelEditBtn.addEventListener('click', function () {
    cardsContainer.innerHTML = preEditSnapshot;
    exitEditMode();
  });

  function renderSavedMode(html) {
    container.innerHTML = '';

    var savedHeader = document.createElement('div');
    savedHeader.className = 'review-header';

    var savedTitleRow = document.createElement('div');
    savedTitleRow.className = 'review-header-title-row';

    var savedH1 = document.createElement('h1');
    savedH1.className = 'review-title';
    savedH1.textContent = 'My Notes';
    savedTitleRow.appendChild(savedH1);

    var savedEditBtn = document.createElement('button');
    savedEditBtn.className = 'review-edit-btn';
    savedEditBtn.title = 'Edit notes';
    savedEditBtn.innerHTML = '&#9998;';
    savedTitleRow.appendChild(savedEditBtn);

    var savedPdfBtn = document.createElement('button');
    savedPdfBtn.className = 'review-pdf-btn';
    savedPdfBtn.innerHTML = '&#128438; Save as PDF';
    savedPdfBtn.addEventListener('click', function () { window.print(); });
    savedTitleRow.appendChild(savedPdfBtn);

    savedHeader.appendChild(savedTitleRow);

    var refreshBtn = document.createElement('button');
    refreshBtn.className = 'review-refresh-btn';
    refreshBtn.textContent = '↺ Refresh from highlights';
    refreshBtn.title = 'Reload fresh highlights, discarding your edits';
    refreshBtn.addEventListener('click', function () {
      if (!confirm('Discard your saved edits and reload from highlights?')) return;
      localStorage.removeItem(EDIT_KEY);
      location.reload();
    });
    savedHeader.appendChild(refreshBtn);

    container.appendChild(savedHeader);

    var savedCards = document.createElement('div');
    savedCards.id = 'review-cards';
    savedCards.innerHTML = html;
    container.appendChild(savedCards);

    var savedControls = document.createElement('div');
    savedControls.className = 'review-edit-controls';
    savedControls.style.display = 'none';

    var savedSaveBtn = document.createElement('button');
    savedSaveBtn.className = 'review-edit-save';
    savedSaveBtn.textContent = 'Save';

    var savedCancelBtn = document.createElement('button');
    savedCancelBtn.className = 'review-edit-cancel';
    savedCancelBtn.textContent = 'Cancel';

    var savedHint = document.createElement('span');
    savedHint.className = 'review-edit-hint';
    savedHint.textContent = 'Click any text to edit · Use toolbar to format';

    savedControls.appendChild(savedSaveBtn);
    savedControls.appendChild(savedCancelBtn);
    savedControls.appendChild(savedHint);
    container.insertBefore(savedControls, savedCards);

    var snap = null;

    function enterSavedEdit() {
      snap = savedCards.innerHTML;
      savedCards.contentEditable = 'true';
      savedCards.classList.add('review-cards-editing');
      savedEditBtn.style.display = 'none';
      savedControls.style.display = 'flex';
      savedCards.focus();
    }

    function exitSavedEdit() {
      savedCards.contentEditable = 'false';
      savedCards.classList.remove('review-cards-editing');
      savedEditBtn.style.display = '';
      savedControls.style.display = 'none';
    }

    savedEditBtn.addEventListener('click', enterSavedEdit);

    savedSaveBtn.addEventListener('click', function () {
      localStorage.setItem(EDIT_KEY, savedCards.innerHTML);
      exitSavedEdit();
    });

    savedCancelBtn.addEventListener('click', function () {
      savedCards.innerHTML = snap;
      exitSavedEdit();
    });
  }
})();
