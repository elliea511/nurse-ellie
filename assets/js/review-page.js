(function () {
  var container = document.getElementById('review-page-content');
  if (!container) return;

  var ANN_PREFIX  = 'ellie-annotations-';
  var THL_PREFIX  = 'ellie-table-hl-';
  var EDIT_KEY    = 'ellie-notes-edit-content';
  var COLOR_ORDER = ['yellow', 'pink', 'blue', 'green'];

  // Collect highlights grouped by page path
  var pageMap = {};

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

  // Check for saved edited content
  var savedEdit = localStorage.getItem(EDIT_KEY);
  if (savedEdit) {
    renderSavedMode(savedEdit);
    return;
  }

  if (!paths.length) {
    container.innerHTML =
      '<div class="review-empty">' +
      '<div class="review-empty-icon">🖊</div>' +
      '<h2>No highlights yet</h2>' +
      '<p>Go to any notes page, select text, and choose a highlight color.<br>Everything you highlight will appear here.</p>' +
      '</div>';
    return;
  }

  // ── Header ──────────────────────────────────────────────────────
  var header = document.createElement('div');
  header.className = 'review-header';

  var h1 = document.createElement('h1');
  h1.className = 'review-title';
  h1.textContent = 'My Notes';
  header.appendChild(h1);

  // Action row: pencil + PDF (below title)
  var actionRow = document.createElement('div');
  actionRow.className = 'review-action-row';

  var editBtn = document.createElement('button');
  editBtn.className = 'review-edit-btn';
  editBtn.title = 'Edit notes';
  editBtn.innerHTML = '&#9998; Edit';

  var pdfBtn = document.createElement('button');
  pdfBtn.className = 'review-pdf-btn';
  pdfBtn.title = 'Save as PDF';
  pdfBtn.innerHTML = '&#128438; Save as PDF';
  pdfBtn.addEventListener('click', function () { window.print(); });

  actionRow.appendChild(editBtn);
  actionRow.appendChild(pdfBtn);
  header.appendChild(actionRow);

  var subtitle = document.createElement('p');
  subtitle.className = 'review-subtitle';
  subtitle.textContent =
    totalHL + ' text highlight' + (totalHL === 1 ? '' : 's') +
    (totalTbl ? ' · ' + totalTbl + ' table' + (totalTbl === 1 ? '' : 's') : '') +
    ' across ' + paths.length + ' page' + (paths.length === 1 ? '' : 's');
  header.appendChild(subtitle);

  container.appendChild(header);

  // ── Formatting toolbar (hidden until edit mode) ──────────────────
  var fmtToolbar = document.createElement('div');
  fmtToolbar.className = 'review-fmt-toolbar';
  fmtToolbar.style.display = 'none';

  var fmtBtns = [
    { label: '<b>B</b>',  cmd: 'bold' },
    { label: '<i>I</i>',  cmd: 'italic' },
    { label: '<u>U</u>',  cmd: 'underline' },
    { label: 'A+',        cmd: 'fontSize', val: '5' },
    { label: 'A−',        cmd: 'fontSize', val: '2' },
    { label: '✕ Clear',  cmd: 'removeFormat' },
  ];
  fmtBtns.forEach(function (b) {
    var btn = document.createElement('button');
    btn.className = 'review-fmt-btn';
    btn.innerHTML = b.label;
    btn.addEventListener('mousedown', function (e) {
      e.preventDefault();
      document.execCommand(b.cmd, false, b.val || null);
    });
    fmtToolbar.appendChild(btn);
  });

  var saveEditBtn = document.createElement('button');
  saveEditBtn.className = 'review-edit-save';
  saveEditBtn.textContent = 'Save';

  var cancelEditBtn = document.createElement('button');
  cancelEditBtn.className = 'review-edit-cancel';
  cancelEditBtn.textContent = 'Cancel';

  var editHint = document.createElement('span');
  editHint.className = 'review-edit-hint';
  editHint.textContent = 'Select text to format';

  fmtToolbar.appendChild(saveEditBtn);
  fmtToolbar.appendChild(cancelEditBtn);
  fmtToolbar.appendChild(editHint);

  container.appendChild(fmtToolbar);

  // ── Cards ────────────────────────────────────────────────────────
  var cardsContainer = document.createElement('div');
  cardsContainer.id = 'review-cards';

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

    // Group by color, no text labels — just visual left-border tints
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

      var list = document.createElement('div');
      list.className = 'review-hl-list';

      groups[color].forEach(function (entry) {
        var div = document.createElement('div');
        div.className = 'review-hl-item';

        if (entry.type === 'text') {
          var item = entry.item;
          var wrapper = document.createElement('div');
          wrapper.className = 'review-hl-content review-hl-content-' + color;

          if (item.level && /^h[1-6]$/.test(item.level)) {
            var hEl = document.createElement(item.level);
            hEl.className = 'review-hl-heading';
            if (item.html) hEl.innerHTML = item.html;
            else hEl.textContent = item.text;
            wrapper.appendChild(hEl);
          } else {
            if (item.html) {
              wrapper.innerHTML = item.html;
            } else {
              var m = document.createElement('mark');
              m.className = 'hl hl-' + color;
              m.textContent = item.text;
              wrapper.appendChild(m);
            }
          }
          div.appendChild(wrapper);
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
      if (!container.querySelectorAll('.review-card').length) {
        container.innerHTML = '<div class="review-empty"><div class="review-empty-icon">🖊</div><h2>All cleared</h2><p>Your highlights have been removed.</p></div>';
      }
    });
    card.appendChild(pageClear);

    cardsContainer.appendChild(card);
  });

  container.appendChild(cardsContainer);

  // ── Clear all — at bottom ────────────────────────────────────────
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
  container.appendChild(clearBtn);

  // ── Edit mode ────────────────────────────────────────────────────
  var preEditSnapshot = null;

  function enterEditMode() {
    preEditSnapshot = cardsContainer.innerHTML;
    cardsContainer.contentEditable = 'true';
    cardsContainer.classList.add('review-cards-editing');
    editBtn.style.display = 'none';
    fmtToolbar.style.display = 'flex';
    cardsContainer.focus();
  }

  function exitEditMode() {
    cardsContainer.contentEditable = 'false';
    cardsContainer.classList.remove('review-cards-editing');
    editBtn.style.display = '';
    fmtToolbar.style.display = 'none';
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

  // ── Saved-edit mode ──────────────────────────────────────────────
  function renderSavedMode(html) {
    container.innerHTML = '';

    var hdr = document.createElement('div');
    hdr.className = 'review-header';

    var sh1 = document.createElement('h1');
    sh1.className = 'review-title';
    sh1.textContent = 'My Notes';
    hdr.appendChild(sh1);

    var sActionRow = document.createElement('div');
    sActionRow.className = 'review-action-row';

    var sEditBtn = document.createElement('button');
    sEditBtn.className = 'review-edit-btn';
    sEditBtn.innerHTML = '&#9998; Edit';

    var sPdfBtn = document.createElement('button');
    sPdfBtn.className = 'review-pdf-btn';
    sPdfBtn.innerHTML = '&#128438; Save as PDF';
    sPdfBtn.addEventListener('click', function () { window.print(); });

    var sRefreshBtn = document.createElement('button');
    sRefreshBtn.className = 'review-refresh-btn';
    sRefreshBtn.textContent = '↺ Refresh from highlights';
    sRefreshBtn.addEventListener('click', function () {
      if (!confirm('Discard your saved edits and reload from highlights?')) return;
      localStorage.removeItem(EDIT_KEY);
      location.reload();
    });

    sActionRow.appendChild(sEditBtn);
    sActionRow.appendChild(sPdfBtn);
    sActionRow.appendChild(sRefreshBtn);
    hdr.appendChild(sActionRow);
    container.appendChild(hdr);

    // Formatting toolbar
    var sFmtToolbar = document.createElement('div');
    sFmtToolbar.className = 'review-fmt-toolbar';
    sFmtToolbar.style.display = 'none';

    fmtBtns.forEach(function (b) {
      var btn = document.createElement('button');
      btn.className = 'review-fmt-btn';
      btn.innerHTML = b.label;
      btn.addEventListener('mousedown', function (e) {
        e.preventDefault();
        document.execCommand(b.cmd, false, b.val || null);
      });
      sFmtToolbar.appendChild(btn);
    });

    var sSaveBtn = document.createElement('button');
    sSaveBtn.className = 'review-edit-save';
    sSaveBtn.textContent = 'Save';

    var sCancelBtn = document.createElement('button');
    sCancelBtn.className = 'review-edit-cancel';
    sCancelBtn.textContent = 'Cancel';

    var sHint = document.createElement('span');
    sHint.className = 'review-edit-hint';
    sHint.textContent = 'Select text to format';

    sFmtToolbar.appendChild(sSaveBtn);
    sFmtToolbar.appendChild(sCancelBtn);
    sFmtToolbar.appendChild(sHint);
    container.appendChild(sFmtToolbar);

    var sCards = document.createElement('div');
    sCards.id = 'review-cards';
    sCards.innerHTML = html;
    container.appendChild(sCards);

    var sClearBtn = document.createElement('button');
    sClearBtn.className = 'review-clear-all';
    sClearBtn.textContent = 'Clear all highlights';
    sClearBtn.addEventListener('click', function () {
      if (!confirm('Remove all highlights and saved edits?')) return;
      for (var j = localStorage.length - 1; j >= 0; j--) {
        var k = localStorage.key(j);
        if (k && (k.startsWith(ANN_PREFIX) || k.startsWith(THL_PREFIX))) localStorage.removeItem(k);
      }
      localStorage.removeItem(EDIT_KEY);
      container.innerHTML = '<div class="review-empty"><div class="review-empty-icon">🖊</div><h2>All cleared</h2><p>Your highlights have been removed.</p></div>';
    });
    container.appendChild(sClearBtn);

    var snap = null;

    function enterSaved() {
      snap = sCards.innerHTML;
      sCards.contentEditable = 'true';
      sCards.classList.add('review-cards-editing');
      sEditBtn.style.display = 'none';
      sFmtToolbar.style.display = 'flex';
      sCards.focus();
    }
    function exitSaved() {
      sCards.contentEditable = 'false';
      sCards.classList.remove('review-cards-editing');
      sEditBtn.style.display = '';
      sFmtToolbar.style.display = 'none';
    }

    sEditBtn.addEventListener('click', enterSaved);
    sSaveBtn.addEventListener('click', function () {
      localStorage.setItem(EDIT_KEY, sCards.innerHTML);
      exitSaved();
    });
    sCancelBtn.addEventListener('click', function () {
      sCards.innerHTML = snap;
      exitSaved();
    });
  }
})();
