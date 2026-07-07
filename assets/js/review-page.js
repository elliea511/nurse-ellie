(function () {
  var root = document.getElementById('review-page-content');
  if (!root) return;

  var ANN_PREFIX = 'ellie-annotations-';
  var TABLE_PREFIX = 'ellie-table-hl-';
  var MANUAL_KEY = 'ellie-my-notes-manual-v1';
  var COLORS = ['yellow', 'pink', 'blue', 'green'];

  var state = {
    query: '',
    filter: 'all',
    notes: [],
    selected: null,
    editingManualId: null
  };

  function safeJson(value, fallback) {
    try { return JSON.parse(value) || fallback; } catch (e) { return fallback; }
  }

  function manualNotes() {
    return safeJson(localStorage.getItem(MANUAL_KEY), []);
  }

  function saveManualNotes(notes) {
    localStorage.setItem(MANUAL_KEY, JSON.stringify(notes));
  }

  function titleFromPath(path) {
    if (path === '/') return 'Home';
    var clean = path.replace(/\.html$/, '').replace(/\/$/, '');
    var parts = clean.split('/').filter(Boolean);
    return (parts[parts.length - 1] || 'Study Note')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  function pathLabel(path) {
    if (path === '/') return 'Home';
    return path.replace(/^\//, '').replace(/\.html$/, '').replace(/-/g, ' ');
  }

  function stripHtml(html) {
    var div = document.createElement('div');
    div.innerHTML = html || '';
    return div.textContent || div.innerText || '';
  }

  function shortText(text, length) {
    text = (text || '').replace(/\s+/g, ' ').trim();
    if (text.length <= length) return text;
    return text.slice(0, length - 1).trim() + '…';
  }

  function dateLabel(value) {
    if (!value) return 'Saved note';
    var d = new Date(value);
    if (isNaN(d.getTime())) return 'Saved note';
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function newestDate(items) {
    var dates = items.map(function (item) { return item.savedAt || item.createdAt || item.updatedAt || ''; })
      .filter(Boolean)
      .map(function (value) { return new Date(value).getTime(); })
      .filter(function (time) { return !isNaN(time); });
    if (!dates.length) return '';
    return new Date(Math.max.apply(Math, dates)).toISOString();
  }

  function collectHighlightNotes() {
    var byPath = {};

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (!key) continue;

      if (key.indexOf(ANN_PREFIX) === 0) {
        var path = key.slice(ANN_PREFIX.length);
        var items = safeJson(localStorage.getItem(key), []);
        if (!items.length) continue;
        if (!byPath[path]) byPath[path] = { path: path, highlights: [], tables: [] };
        byPath[path].highlights = items.map(function (item) {
          return {
            uid: item.uid || '',
            color: item.color || 'yellow',
            text: item.text || stripHtml(item.html),
            html: item.html || '',
            sectionTitle: item.sectionTitle || '',
            savedAt: item.savedAt || '',
            pageTitle: item.pageTitle || ''
          };
        });
      }

      if (key.indexOf(TABLE_PREFIX) === 0) {
        var tablePath = key.slice(TABLE_PREFIX.length);
        var tableData = safeJson(localStorage.getItem(key), {});
        var tables = [];
        Object.keys(tableData).forEach(function (id) {
          var entry = tableData[id];
          if (!entry) return;
        if (entry.html) tables.push({
          uid: id,
          color: entry.color || 'blue',
          html: entry.html,
          text: stripHtml(entry.html),
          savedAt: entry.savedAt || '',
          pageTitle: entry.pageTitle || ''
        });
        });
        if (!tables.length) continue;
        if (!byPath[tablePath]) byPath[tablePath] = { path: tablePath, highlights: [], tables: [] };
        byPath[tablePath].tables = tables;
      }
    }

    return Object.keys(byPath).map(function (path) {
      var page = byPath[path];
      var allItems = page.highlights.concat(page.tables);
      var first = page.highlights[0] || page.tables[0] || {};
      var title = first.pageTitle || titleFromPath(path);
      var snippet = first.sectionTitle || first.text || 'Saved study content';
      var colors = {};
      allItems.forEach(function (item) { colors[item.color || 'yellow'] = true; });

      return {
        id: 'source:' + path,
        type: 'source',
        title: title,
        category: pathLabel(path),
        path: path,
        date: newestDate(allItems),
        excerpt: shortText(snippet, 150),
        count: allItems.length,
        colors: Object.keys(colors),
        highlights: page.highlights,
        tables: page.tables,
        search: [title, pathLabel(path), snippet, allItems.map(function (i) { return i.text; }).join(' ')].join(' ').toLowerCase()
      };
    });
  }

  function collectManualNotes() {
    return manualNotes().map(function (note) {
      return {
        id: 'manual:' + note.id,
        type: 'manual',
        title: note.title || 'Untitled note',
        category: note.category || 'Personal note',
        date: note.updatedAt || note.createdAt || '',
        excerpt: shortText(note.body || '', 150),
        count: 1,
        colors: ['purple'],
        body: note.body || '',
        manualId: note.id,
        search: [note.title, note.category, note.body].join(' ').toLowerCase()
      };
    });
  }

  function loadNotes() {
    state.notes = collectManualNotes().concat(collectHighlightNotes()).sort(function (a, b) {
      return (new Date(b.date || 0).getTime()) - (new Date(a.date || 0).getTime());
    });
  }

  function totals() {
    var highlightCards = state.notes.filter(function (n) { return n.type === 'source'; });
    var manualCards = state.notes.filter(function (n) { return n.type === 'manual'; });
    var savedItems = state.notes.reduce(function (sum, note) { return sum + (note.count || 1); }, 0);
    return { cards: state.notes.length, savedItems: savedItems, sources: highlightCards.length, manual: manualCards.length };
  }

  function matches(note) {
    var queryOk = !state.query || note.search.indexOf(state.query) !== -1;
    var filterOk =
      state.filter === 'all' ||
      (state.filter === 'highlights' && note.type === 'source') ||
      (state.filter === 'manual' && note.type === 'manual') ||
      note.colors.indexOf(state.filter) !== -1;
    return queryOk && filterOk;
  }

  function iconFor(note) {
    if (note.type === 'manual') return 'N';
    if (note.colors.indexOf('pink') !== -1) return 'P';
    if (note.colors.indexOf('green') !== -1) return 'G';
    if (note.colors.indexOf('blue') !== -1) return 'B';
    return 'Y';
  }

  function escapeHtml(text) {
    return String(text || '').replace(/[&<>"']/g, function (ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
    });
  }

  function renderShell() {
    var t = totals();
    root.innerHTML =
      '<div class="mn-shell">' +
        '<aside class="mn-rail" aria-label="My Notes navigation">' +
          '<div class="mn-rail-brand"><strong>My Notes</strong><span>personal review space</span></div>' +
          '<nav class="mn-nav">' +
            navButton('all', 'All notes', t.cards) +
            navButton('highlights', 'Highlights', t.sources) +
            navButton('manual', 'Written notes', t.manual) +
            navButton('yellow', 'Need review', colorCount('yellow')) +
            navButton('pink', 'Priority', colorCount('pink')) +
            navButton('blue', 'Details', colorCount('blue')) +
            navButton('green', 'Understood', colorCount('green')) +
          '</nav>' +
          '<div class="mn-tip"><span>Study flow</span><p>Highlight the parts that slow you down. Come back here before quizzes or clinical.</p></div>' +
        '</aside>' +
        '<section class="mn-main">' +
          '<header class="mn-hero">' +
            '<div><p class="mn-eyebrow">Study notebook</p><h1>My Notes</h1><p>Your personal space to collect, organize, and review the content that needs another pass.</p></div>' +
            '<button class="mn-new-note" id="mn-new-note" type="button"><span>+</span> New Note</button>' +
          '</header>' +
          '<div class="mn-stats">' +
            statCard(t.savedItems, 'saved items') +
            statCard(t.sources, 'source pages') +
            statCard(t.manual, 'written notes') +
          '</div>' +
          '<div class="mn-tools">' +
            '<label class="mn-search"><span>Search</span><input id="mn-search" type="search" placeholder="Search your notes…"></label>' +
            '<div class="mn-tool-actions"><button id="mn-print" type="button">Save as PDF</button><button id="mn-clear-all" type="button">Clear highlights</button></div>' +
          '</div>' +
          '<div id="mn-card-grid" class="mn-card-grid"></div>' +
          '<div id="mn-empty" class="mn-empty" hidden><h2>No notes found</h2><p>Try a different search/filter, or highlight content from a study page.</p><a href="./all-topics.html">Browse study topics →</a></div>' +
        '</section>' +
      '</div>' +
      '<dialog class="mn-dialog" id="mn-detail-dialog"><div id="mn-detail"></div><button class="mn-dialog-close" data-close-detail type="button">Close</button></dialog>' +
      '<dialog class="mn-dialog mn-editor-dialog" id="mn-editor-dialog">' +
        '<form method="dialog" id="mn-editor-form" class="mn-editor">' +
          '<h2 id="mn-editor-title">New Note</h2>' +
          '<label>Title<input id="mn-note-title" required placeholder="Example: Lithium toxicity cues"></label>' +
          '<label>Category<input id="mn-note-category" placeholder="Example: Medications"></label>' +
          '<label>Note<textarea id="mn-note-body" rows="8" required placeholder="Type the study note you want to remember…"></textarea></label>' +
          '<div class="mn-editor-actions"><button type="button" data-close-editor>Cancel</button><button type="submit">Save note</button></div>' +
        '</form>' +
      '</dialog>';

    wireShell();
    renderCards();
  }

  function navButton(filter, label, count) {
    return '<button type="button" data-filter="' + filter + '" class="' + (state.filter === filter ? 'active' : '') + '"><span>' + label + '</span><b>' + count + '</b></button>';
  }

  function statCard(value, label) {
    return '<div><strong>' + value + '</strong><span>' + label + '</span></div>';
  }

  function colorCount(color) {
    return state.notes.filter(function (note) { return note.colors.indexOf(color) !== -1; }).length;
  }

  function wireShell() {
    root.querySelectorAll('[data-filter]').forEach(function (button) {
      button.addEventListener('click', function () {
        state.filter = button.dataset.filter;
        root.querySelectorAll('[data-filter]').forEach(function (btn) {
          btn.classList.toggle('active', btn.dataset.filter === state.filter);
        });
        renderCards();
      });
    });

    root.querySelector('#mn-search').addEventListener('input', function (event) {
      state.query = event.target.value.trim().toLowerCase();
      renderCards();
    });

    root.querySelector('#mn-print').addEventListener('click', function () { window.print(); });
    root.querySelector('#mn-clear-all').addEventListener('click', clearHighlights);
    root.querySelector('#mn-new-note').addEventListener('click', function () { openEditor(); });

    root.querySelector('[data-close-detail]').addEventListener('click', function () {
      root.querySelector('#mn-detail-dialog').close();
    });
    root.querySelector('[data-close-editor]').addEventListener('click', function () {
      root.querySelector('#mn-editor-dialog').close();
    });
    root.querySelector('#mn-editor-form').addEventListener('submit', saveManualNote);
  }

  function renderCards() {
    var grid = root.querySelector('#mn-card-grid');
    var empty = root.querySelector('#mn-empty');
    if (!grid || !empty) return;

    var visible = state.notes.filter(matches);
    grid.innerHTML = visible.map(cardMarkup).join('');
    empty.hidden = visible.length > 0;

    grid.querySelectorAll('[data-note-id]').forEach(function (card) {
      card.addEventListener('click', function () { openDetail(card.dataset.noteId); });
      card.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openDetail(card.dataset.noteId);
        }
      });
    });
  }

  function cardMarkup(note) {
    var tone = note.type === 'manual' ? 'purple' : (note.colors[0] || 'yellow');
    return '<article class="mn-note-card mn-tone-' + tone + '" data-note-id="' + escapeHtml(note.id) + '" tabindex="0">' +
      '<div class="mn-card-icon">' + iconFor(note) + '</div>' +
      '<div class="mn-card-body">' +
        '<div class="mn-card-top"><h2>' + escapeHtml(note.title) + '</h2><span>' + escapeHtml(dateLabel(note.date)) + '</span></div>' +
        '<p>' + escapeHtml(note.excerpt || 'Open this note to review saved content.') + '</p>' +
        '<div class="mn-card-footer"><span>' + escapeHtml(note.category) + '</span><b>' + note.count + ' item' + (note.count === 1 ? '' : 's') + '</b></div>' +
      '</div>' +
    '</article>';
  }

  function openDetail(id) {
    var note = state.notes.filter(function (n) { return n.id === id; })[0];
    if (!note) return;
    var detail = root.querySelector('#mn-detail');
    var dialog = root.querySelector('#mn-detail-dialog');

    if (note.type === 'manual') {
      detail.innerHTML =
        '<header class="mn-detail-head"><span>Written note</span><h2>' + escapeHtml(note.title) + '</h2><p>' + escapeHtml(note.category) + ' · ' + escapeHtml(dateLabel(note.date)) + '</p></header>' +
        '<div class="mn-detail-body mn-manual-body">' + escapeHtml(note.body).replace(/\n/g, '<br>') + '</div>' +
        '<div class="mn-detail-actions"><button type="button" data-edit-manual="' + escapeHtml(note.manualId) + '">Edit note</button><button type="button" data-delete-manual="' + escapeHtml(note.manualId) + '">Delete note</button></div>';
      detail.querySelector('[data-edit-manual]').addEventListener('click', function () { openEditor(note); });
      detail.querySelector('[data-delete-manual]').addEventListener('click', function () { deleteManual(note.manualId); });
    } else {
      var entries = note.highlights.map(function (item) { return detailHighlight(note, item); })
        .concat(note.tables.map(function (item) { return detailTable(item); })).join('');
      detail.innerHTML =
        '<header class="mn-detail-head"><span>Saved highlights</span><h2>' + escapeHtml(note.title) + '</h2><p>' + escapeHtml(note.category) + ' · ' + note.count + ' saved item' + (note.count === 1 ? '' : 's') + '</p></header>' +
        '<div class="mn-detail-body">' + entries + '</div>' +
        '<div class="mn-detail-actions"><a href="' + escapeHtml(note.path) + '">Open source page</a><button type="button" data-delete-source>Clear this source</button></div>';
      detail.querySelector('[data-delete-source]').addEventListener('click', function () { deleteSource(note.path); });
    }

    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', 'open');
  }

  function detailHighlight(note, item) {
    var href = note.path + (item.uid ? '?hljump=' + encodeURIComponent(item.uid) : '');
    return '<section class="mn-detail-item mn-tone-' + (item.color || 'yellow') + '">' +
      (item.sectionTitle ? '<small>' + escapeHtml(item.sectionTitle) + '</small>' : '') +
      '<div>' + (item.html || escapeHtml(item.text)) + '</div>' +
      '<a href="' + escapeHtml(href) + '">Open exact spot</a>' +
    '</section>';
  }

  function detailTable(item) {
    return '<section class="mn-detail-item mn-tone-' + (item.color || 'blue') + '">' +
      '<small>Saved table</small><div class="mn-table-wrap">' + item.html + '</div>' +
    '</section>';
  }

  function openEditor(note) {
    var dialog = root.querySelector('#mn-editor-dialog');
    state.editingManualId = note && note.manualId ? note.manualId : null;
    root.querySelector('#mn-editor-title').textContent = state.editingManualId ? 'Edit Note' : 'New Note';
    root.querySelector('#mn-note-title').value = note ? note.title : '';
    root.querySelector('#mn-note-category').value = note ? note.category : '';
    root.querySelector('#mn-note-body').value = note ? note.body : '';
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', 'open');
  }

  function saveManualNote(event) {
    event.preventDefault();
    var title = root.querySelector('#mn-note-title').value.trim();
    var category = root.querySelector('#mn-note-category').value.trim();
    var body = root.querySelector('#mn-note-body').value.trim();
    if (!title || !body) return;

    var notes = manualNotes();
    if (state.editingManualId) {
      notes = notes.map(function (note) {
        if (note.id !== state.editingManualId) return note;
        return {
          id: note.id,
          title: title,
          category: category || 'Personal note',
          body: body,
          createdAt: note.createdAt || new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
      });
    } else {
      notes.unshift({
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
        title: title,
        category: category || 'Personal note',
        body: body,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }
    saveManualNotes(notes);
    state.editingManualId = null;
    root.querySelector('#mn-editor-dialog').close();
    var detailDialog = root.querySelector('#mn-detail-dialog');
    if (detailDialog && detailDialog.open) detailDialog.close();
    loadNotes();
    renderShell();
  }

  function deleteManual(id) {
    if (!confirm('Delete this written note?')) return;
    saveManualNotes(manualNotes().filter(function (note) { return note.id !== id; }));
    root.querySelector('#mn-detail-dialog').close();
    loadNotes();
    renderShell();
  }

  function deleteSource(path) {
    if (!confirm('Remove saved highlights from this source page?')) return;
    localStorage.removeItem(ANN_PREFIX + path);
    localStorage.removeItem(TABLE_PREFIX + path);
    root.querySelector('#mn-detail-dialog').close();
    loadNotes();
    renderShell();
  }

  function clearHighlights() {
    if (!confirm('Clear all saved highlights? Written notes will stay.')) return;
    for (var i = localStorage.length - 1; i >= 0; i--) {
      var key = localStorage.key(i);
      if (key && (key.indexOf(ANN_PREFIX) === 0 || key.indexOf(TABLE_PREFIX) === 0)) localStorage.removeItem(key);
    }
    loadNotes();
    renderShell();
  }

  loadNotes();
  renderShell();
})();
