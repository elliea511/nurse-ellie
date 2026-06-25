(function () {
  var container = document.getElementById('review-page-content');
  if (!container) return;

  var ANN_PREFIX  = 'ellie-annotations-';
  var THL_PREFIX  = 'ellie-table-hl-';
  var NOTES_KEY   = 'ellie-hl-notes';
  var COLOR_ORDER = ['yellow', 'pink', 'blue', 'green'];
  var COLOR_LABELS = { yellow: 'Yellow', pink: 'Pink', blue: 'Blue', green: 'Green' };

  // ── Per-highlight note storage ────────────────────────────────
  function loadNotes() { try { return JSON.parse(localStorage.getItem(NOTES_KEY)) || {}; } catch(e) { return {}; } }
  function saveNote(id, text) {
    var notes = loadNotes();
    if (text.trim()) notes[id] = text.trim();
    else delete notes[id];
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }

  function makeNoteWidget(id) {
    var notes = loadNotes();
    var existing = notes[id] || '';

    var wrap = document.createElement('div');
    wrap.className = 'rn-wrap';

    var noteText = document.createElement('div');
    noteText.className = 'rn-text' + (existing ? '' : ' rn-empty');
    noteText.textContent = existing || '+ add note';

    var editor = document.createElement('div');
    editor.className = 'rn-editor';
    editor.style.display = 'none';

    var textarea = document.createElement('textarea');
    textarea.className = 'rn-textarea';
    textarea.value = existing;
    textarea.placeholder = 'Write a note…';
    textarea.rows = 3;

    var actions = document.createElement('div');
    actions.className = 'rn-actions';

    var saveBtn = document.createElement('button');
    saveBtn.className = 'rn-save';
    saveBtn.textContent = 'Save';

    var cancelBtn = document.createElement('button');
    cancelBtn.className = 'rn-cancel';
    cancelBtn.textContent = 'Cancel';

    actions.appendChild(saveBtn);
    actions.appendChild(cancelBtn);
    editor.appendChild(textarea);
    editor.appendChild(actions);
    wrap.appendChild(noteText);
    wrap.appendChild(editor);

    function openEditor() {
      noteText.style.display = 'none';
      editor.style.display = 'block';
      textarea.focus();
      textarea.select();
    }

    function closeEditor(save) {
      if (save) {
        var val = textarea.value;
        saveNote(id, val);
        noteText.textContent = val.trim() || '+ add note';
        noteText.classList.toggle('rn-empty', !val.trim());
      }
      editor.style.display = 'none';
      noteText.style.display = '';
    }

    noteText.addEventListener('click', openEditor);
    saveBtn.addEventListener('click', function () { closeEditor(true); });
    cancelBtn.addEventListener('click', function () {
      textarea.value = loadNotes()[id] || '';
      closeEditor(false);
    });

    return wrap;
  }

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

  // Header
  var header = document.createElement('div');
  header.className = 'review-header';

  if (!paths.length) {
    container.innerHTML =
      '<div class="review-empty">' +
      '<div class="review-empty-icon">🖊</div>' +
      '<h2>No highlights yet</h2>' +
      '<p>Go to any notes page, select text, and choose a highlight color.<br>Everything you highlight will appear here.</p>' +
      '</div>';
    return;
  }

  header.innerHTML =
    '<h1 class="review-title">My Notes</h1>' +
    '<p class="review-subtitle">' +
      totalHL + ' text highlight' + (totalHL === 1 ? '' : 's') +
      (totalTbl ? ' · ' + totalTbl + ' table' + (totalTbl === 1 ? '' : 's') : '') +
      ' across ' + paths.length + ' page' + (paths.length === 1 ? '' : 's') +
    '</p>';

  var clearBtn = document.createElement('button');
  clearBtn.className = 'review-clear-all';
  clearBtn.textContent = 'Clear all highlights';
  clearBtn.addEventListener('click', function () {
    if (!confirm('Remove all highlights across every page?')) return;
    for (var j = localStorage.length - 1; j >= 0; j--) {
      var k = localStorage.key(j);
      if (k && (k.startsWith(ANN_PREFIX) || k.startsWith(THL_PREFIX))) localStorage.removeItem(k);
    }
    container.innerHTML = '<div class="review-empty"><div class="review-empty-icon">🖊</div><h2>All cleared</h2><p>Your highlights have been removed.</p></div>';
  });
  header.appendChild(clearBtn);
  container.appendChild(header);

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

    // ── Text highlights grouped by color ──────────────────────────
    if (data.items.length) {
      var groups = {};
      data.items.forEach(function (item) {
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
          var mark = document.createElement('mark');
          mark.className = 'hl hl-' + color;
          mark.textContent = item.text;
          div.appendChild(mark);
          if (uid) div.appendChild(makeNoteWidget('hl-' + uid));
          list.appendChild(div);
        });
        group.appendChild(list);
        card.appendChild(group);
      });
    }

    // ── Table highlights ──────────────────────────────────────────
    data.tables.forEach(function (entry) {
      var tgroup = document.createElement('div');
      tgroup.className = 'review-color-group review-table-group';

      var tWrap = document.createElement('div');
      tWrap.className = 'review-table-wrap';
      tWrap.dataset.color = entry.color;
      tWrap.innerHTML = entry.html;
      tgroup.appendChild(tWrap);
      tgroup.appendChild(makeNoteWidget('tbl-' + path + '-' + entry.tableId));
      card.appendChild(tgroup);
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

    container.appendChild(card);
  });
})();
