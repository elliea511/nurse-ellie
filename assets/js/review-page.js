(function () {
  var container = document.getElementById('review-page-content');
  if (!container) return;

  var ANN_PREFIX  = 'ellie-annotations-';
  var THL_PREFIX  = 'ellie-table-hl-';
  var EDIT_KEY    = 'ellie-notes-edit-content';
  var COLOR_ORDER = ['yellow', 'pink', 'blue', 'green'];

  // ── Collect highlights ───────────────────────────────────────────
  var pageMap = {};
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (!key) continue;
    if (key.startsWith(ANN_PREFIX)) {
      var path = key.slice(ANN_PREFIX.length);
      var items; try { items = JSON.parse(localStorage.getItem(key)) || []; } catch (e) { continue; }
      if (!items.length) continue;
      if (!pageMap[path]) pageMap[path] = { items: [], tables: [] };
      pageMap[path].items = items;
    }
    if (key.startsWith(THL_PREFIX)) {
      var tpath = key.slice(THL_PREFIX.length);
      var thlData; try { thlData = JSON.parse(localStorage.getItem(key)) || {}; } catch (e) { continue; }
      var tables = [];
      Object.keys(thlData).forEach(function (tid) {
        var e = thlData[tid]; if (!e) return;
        var c = e.color || (typeof e === 'string' ? e : null);
        var h = e.html || null;
        if (c && h) tables.push({ tableId: tid, color: c, html: h });
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

  var savedEdit = localStorage.getItem(EDIT_KEY);
  if (savedEdit) { renderSavedMode(savedEdit); return; }

  if (!paths.length) {
    container.innerHTML =
      '<div class="review-empty"><div class="review-empty-icon">🖊</div>' +
      '<h2>No highlights yet</h2>' +
      '<p>Go to any notes page, select text, and choose a highlight color.<br>Everything you highlight will appear here.</p></div>';
    return;
  }

  // ── Header ──────────────────────────────────────────────────────
  var header = document.createElement('div');
  header.className = 'review-header';

  var h1 = document.createElement('h1');
  h1.className = 'review-title';
  h1.textContent = 'My Notes';
  header.appendChild(h1);

  var subtitle = document.createElement('p');
  subtitle.className = 'review-subtitle';
  subtitle.textContent =
    totalHL + ' text highlight' + (totalHL === 1 ? '' : 's') +
    (totalTbl ? ' · ' + totalTbl + ' table' + (totalTbl === 1 ? '' : 's') : '') +
    ' across ' + paths.length + ' page' + (paths.length === 1 ? '' : 's');
  header.appendChild(subtitle);
  container.appendChild(header);

  // ── Toolbar (view mode → edit mode) ─────────────────────────────
  var toolbar = document.createElement('div');
  toolbar.className = 'review-toolbar';
  container.appendChild(toolbar);

  // ── Cards ────────────────────────────────────────────────────────
  var cardsContainer = document.createElement('div');
  cardsContainer.id = 'review-cards';
  buildCards(cardsContainer);
  container.appendChild(cardsContainer);

  // ── Clear all — bottom ───────────────────────────────────────────
  var clearBtn = document.createElement('button');
  clearBtn.className = 'review-clear-all';
  clearBtn.textContent = 'Clear all highlights';
  clearBtn.addEventListener('click', function () {
    if (!confirm('Remove all highlights across every page?')) return;
    for (var j = localStorage.length - 1; j >= 0; j--) {
      var k = localStorage.key(j); if (k && (k.startsWith(ANN_PREFIX) || k.startsWith(THL_PREFIX))) localStorage.removeItem(k);
    }
    localStorage.removeItem(EDIT_KEY);
    container.innerHTML = '<div class="review-empty"><div class="review-empty-icon">🖊</div><h2>All cleared</h2><p>Your highlights have been removed.</p></div>';
  });
  container.appendChild(clearBtn);

  // ── Toolbar: view mode ───────────────────────────────────────────
  showViewBar();

  function showViewBar() {
    toolbar.innerHTML = '';
    toolbar.className = 'review-toolbar review-toolbar-view';

    var editBtn = document.createElement('button');
    editBtn.className = 'review-toolbar-edit-btn';
    editBtn.innerHTML = '&#9998; Edit notes';
    editBtn.addEventListener('click', enterEditMode);
    toolbar.appendChild(editBtn);

    var pdfBtn = document.createElement('button');
    pdfBtn.className = 'review-toolbar-pdf-btn';
    pdfBtn.innerHTML = '&#128438; Save as PDF';
    pdfBtn.addEventListener('click', function () { window.print(); });
    toolbar.appendChild(pdfBtn);
  }

  // ── Toolbar: edit mode ───────────────────────────────────────────
  var selCache = null;
  var isEditing = false;

  function saveCache() {
    var s = window.getSelection();
    if (s && s.rangeCount > 0 && cardsContainer.contains(s.anchorNode))
      selCache = s.getRangeAt(0).cloneRange();
  }

  function restoreAndExec(cmd, val) {
    if (selCache) {
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(selCache);
    }
    document.execCommand(cmd, false, val !== undefined ? val : null);
    saveCache();
    updateActiveStates();
  }

  var fmtBtnEls = [];

  function updateActiveStates() {
    fmtBtnEls.forEach(function (b) {
      if (!b.state) return;
      var active = false;
      try { active = document.queryCommandState(b.state); } catch (e) {}
      b.el.classList.toggle('review-fmt-active', active);
    });
  }

  function showEditBar(onSave, onCancel) {
    toolbar.innerHTML = '';
    toolbar.className = 'review-toolbar review-toolbar-edit';
    fmtBtnEls = [];

    // Mode label
    var lbl = document.createElement('span');
    lbl.className = 'review-fmt-label';
    lbl.textContent = '✎ Editing';
    toolbar.appendChild(lbl);

    sep(toolbar);

    // Bold / Italic / Underline
    [
      { label: 'B', cmd: 'bold',      state: 'bold',      cls: 'rfb-bold',   title: 'Bold (Ctrl+B)' },
      { label: 'I', cmd: 'italic',    state: 'italic',    cls: 'rfb-italic', title: 'Italic (Ctrl+I)' },
      { label: 'U', cmd: 'underline', state: 'underline', cls: 'rfb-ul',     title: 'Underline (Ctrl+U)' },
    ].forEach(function (b) {
      var btn = fmtBtn(b.label, b.title, b.cls);
      btn.addEventListener('mousedown', function (e) { e.preventDefault(); restoreAndExec(b.cmd); });
      toolbar.appendChild(btn);
      fmtBtnEls.push({ el: btn, state: b.state });
    });

    sep(toolbar);

    // Font size select
    var sizeWrap = document.createElement('div');
    sizeWrap.className = 'review-fmt-size-wrap';
    var sizeLabel = document.createElement('span');
    sizeLabel.className = 'review-fmt-size-label';
    sizeLabel.textContent = 'Size';
    var sizeSelect = document.createElement('select');
    sizeSelect.className = 'review-fmt-select';
    sizeSelect.title = 'Font size';
    [['', '—'], ['1', 'XS'], ['2', 'S'], ['3', 'M'], ['5', 'L'], ['6', 'XL'], ['7', 'XXL']].forEach(function (o) {
      var opt = document.createElement('option');
      opt.value = o[0]; opt.textContent = o[1];
      sizeSelect.appendChild(opt);
    });
    sizeSelect.addEventListener('mousedown', saveCache);
    sizeSelect.addEventListener('change', function () {
      if (this.value) restoreAndExec('fontSize', this.value);
      this.value = '';
    });
    sizeWrap.appendChild(sizeLabel);
    sizeWrap.appendChild(sizeSelect);
    toolbar.appendChild(sizeWrap);

    // Clear format
    var clearFmt = fmtBtn('✕ Clear', 'Clear formatting', 'rfb-clear');
    clearFmt.addEventListener('mousedown', function (e) { e.preventDefault(); restoreAndExec('removeFormat'); });
    toolbar.appendChild(clearFmt);

    sep(toolbar);

    // Save / Cancel
    var saveBtn = document.createElement('button');
    saveBtn.className = 'review-edit-save';
    saveBtn.textContent = 'Save';
    saveBtn.addEventListener('click', onSave);
    toolbar.appendChild(saveBtn);

    var cancelBtn = document.createElement('button');
    cancelBtn.className = 'review-edit-cancel';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', onCancel);
    toolbar.appendChild(cancelBtn);

    sep(toolbar);

    // PDF in toolbar
    var pdfBtn = document.createElement('button');
    pdfBtn.className = 'review-toolbar-pdf-btn';
    pdfBtn.innerHTML = '&#128438; PDF';
    pdfBtn.addEventListener('click', function () { window.print(); });
    toolbar.appendChild(pdfBtn);

    // Listen for selectionchange to update active states
    document.addEventListener('selectionchange', updateActiveStates);
  }

  function fmtBtn(label, title, extraCls) {
    var btn = document.createElement('button');
    btn.className = 'review-fmt-btn' + (extraCls ? ' ' + extraCls : '');
    btn.textContent = label;
    btn.title = title || '';
    return btn;
  }

  function sep(parent) {
    var s = document.createElement('span');
    s.className = 'review-fmt-sep';
    parent.appendChild(s);
  }

  // ── Edit mode enter/exit ─────────────────────────────────────────
  var preEditSnapshot = null;

  function enterEditMode() {
    isEditing = true;
    preEditSnapshot = cardsContainer.innerHTML;
    cardsContainer.contentEditable = 'true';
    cardsContainer.classList.add('review-cards-editing');
    cardsContainer.addEventListener('mouseup', saveCache);
    cardsContainer.addEventListener('keyup', saveCache);
    showEditBar(
      function () { // save
        localStorage.setItem(EDIT_KEY, cardsContainer.innerHTML);
        exitEditMode();
      },
      function () { // cancel
        cardsContainer.innerHTML = preEditSnapshot;
        exitEditMode();
      }
    );
    cardsContainer.focus();
  }

  function exitEditMode() {
    isEditing = false;
    cardsContainer.contentEditable = 'false';
    cardsContainer.classList.remove('review-cards-editing');
    cardsContainer.removeEventListener('mouseup', saveCache);
    cardsContainer.removeEventListener('keyup', saveCache);
    document.removeEventListener('selectionchange', updateActiveStates);
    selCache = null;
    showViewBar();
  }

  // ── Build cards ──────────────────────────────────────────────────
  function buildCards(cardsEl) {
    paths.forEach(function (path) {
      var data = pageMap[path];
      var card = document.createElement('div');
      card.className = 'review-card';

      var rawName = path.replace(/\.html$/, '').replace(/\/$/, '');
      var parts = rawName.split('/').filter(Boolean);
      var pageName = parts[parts.length - 1]
        .replace(/-/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); });

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
              if (item.html) hEl.innerHTML = item.html; else hEl.textContent = item.text;
              wrapper.appendChild(hEl);
            } else {
              if (item.html) wrapper.innerHTML = item.html;
              else { var m = document.createElement('mark'); m.className = 'hl hl-' + color; m.textContent = item.text; wrapper.appendChild(m); }
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

      var annKey = ANN_PREFIX + path;
      var thlKey = THL_PREFIX + path;
      var pageClear = document.createElement('button');
      pageClear.className = 'review-page-clear';
      pageClear.textContent = 'Clear this page';
      pageClear.addEventListener('click', function () {
        localStorage.removeItem(annKey);
        localStorage.removeItem(thlKey);
        card.remove();
        if (!container.querySelectorAll('.review-card').length)
          container.innerHTML = '<div class="review-empty"><div class="review-empty-icon">🖊</div><h2>All cleared</h2><p>Your highlights have been removed.</p></div>';
      });
      card.appendChild(pageClear);
      cardsEl.appendChild(card);
    });
  }

  // ── Saved-edit mode ──────────────────────────────────────────────
  function renderSavedMode(html) {
    container.innerHTML = '';

    var hdr = document.createElement('div');
    hdr.className = 'review-header';
    var sh1 = document.createElement('h1');
    sh1.className = 'review-title';
    sh1.textContent = 'My Notes';
    hdr.appendChild(sh1);
    container.appendChild(hdr);

    var sToolbar = document.createElement('div');
    sToolbar.className = 'review-toolbar';
    container.appendChild(sToolbar);

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

    var sSelCache = null;
    var sIsEditing = false;
    var sFmtBtnEls = [];

    function sSaveCache() {
      var s = window.getSelection();
      if (s && s.rangeCount > 0 && sCards.contains(s.anchorNode))
        sSelCache = s.getRangeAt(0).cloneRange();
    }
    function sRestoreAndExec(cmd, val) {
      if (sSelCache) { var s = window.getSelection(); s.removeAllRanges(); s.addRange(sSelCache); }
      document.execCommand(cmd, false, val !== undefined ? val : null);
      sSaveCache();
      sUpdateActive();
    }
    function sUpdateActive() {
      sFmtBtnEls.forEach(function (b) {
        if (!b.state) return;
        var active = false; try { active = document.queryCommandState(b.state); } catch (e) {}
        b.el.classList.toggle('review-fmt-active', active);
      });
    }

    function showSViewBar() {
      sToolbar.innerHTML = '';
      sToolbar.className = 'review-toolbar review-toolbar-view';
      var eb = document.createElement('button');
      eb.className = 'review-toolbar-edit-btn';
      eb.innerHTML = '&#9998; Edit notes';
      eb.addEventListener('click', enterSEdit);
      sToolbar.appendChild(eb);
      var pb = document.createElement('button');
      pb.className = 'review-toolbar-pdf-btn';
      pb.innerHTML = '&#128438; Save as PDF';
      pb.addEventListener('click', function () { window.print(); });
      sToolbar.appendChild(pb);
      var rb = document.createElement('button');
      rb.className = 'review-refresh-btn';
      rb.textContent = '↺ From highlights';
      rb.title = 'Discard edits and reload from highlights';
      rb.addEventListener('click', function () {
        if (!confirm('Discard your saved edits and reload from highlights?')) return;
        localStorage.removeItem(EDIT_KEY); location.reload();
      });
      sToolbar.appendChild(rb);
    }

    function showSEditBar() {
      sToolbar.innerHTML = '';
      sToolbar.className = 'review-toolbar review-toolbar-edit';
      sFmtBtnEls = [];

      var lbl = document.createElement('span'); lbl.className = 'review-fmt-label'; lbl.textContent = '✎ Editing'; sToolbar.appendChild(lbl);
      sSep(sToolbar);

      [{ label: 'B', cmd: 'bold', state: 'bold', cls: 'rfb-bold', title: 'Bold' },
       { label: 'I', cmd: 'italic', state: 'italic', cls: 'rfb-italic', title: 'Italic' },
       { label: 'U', cmd: 'underline', state: 'underline', cls: 'rfb-ul', title: 'Underline' }
      ].forEach(function (b) {
        var btn = sFmtBtn(b.label, b.title, b.cls);
        btn.addEventListener('mousedown', function (e) { e.preventDefault(); sRestoreAndExec(b.cmd); });
        sToolbar.appendChild(btn);
        sFmtBtnEls.push({ el: btn, state: b.state });
      });

      sSep(sToolbar);

      var sw = document.createElement('div'); sw.className = 'review-fmt-size-wrap';
      var sl2 = document.createElement('span'); sl2.className = 'review-fmt-size-label'; sl2.textContent = 'Size';
      var ss = document.createElement('select'); ss.className = 'review-fmt-select';
      [['', '—'], ['1', 'XS'], ['2', 'S'], ['3', 'M'], ['5', 'L'], ['6', 'XL'], ['7', 'XXL']].forEach(function (o) {
        var opt = document.createElement('option'); opt.value = o[0]; opt.textContent = o[1]; ss.appendChild(opt);
      });
      ss.addEventListener('mousedown', sSaveCache);
      ss.addEventListener('change', function () { if (this.value) sRestoreAndExec('fontSize', this.value); this.value = ''; });
      sw.appendChild(sl2); sw.appendChild(ss); sToolbar.appendChild(sw);

      var cf = sFmtBtn('✕ Clear', 'Clear formatting', 'rfb-clear');
      cf.addEventListener('mousedown', function (e) { e.preventDefault(); sRestoreAndExec('removeFormat'); });
      sToolbar.appendChild(cf);

      sSep(sToolbar);

      var saveB = document.createElement('button'); saveB.className = 'review-edit-save'; saveB.textContent = 'Save';
      saveB.addEventListener('click', function () { localStorage.setItem(EDIT_KEY, sCards.innerHTML); exitSEdit(); });
      sToolbar.appendChild(saveB);

      var cancelB = document.createElement('button'); cancelB.className = 'review-edit-cancel'; cancelB.textContent = 'Cancel';
      cancelB.addEventListener('click', function () { sCards.innerHTML = sSnap; exitSEdit(); });
      sToolbar.appendChild(cancelB);

      sSep(sToolbar);

      var pb2 = document.createElement('button'); pb2.className = 'review-toolbar-pdf-btn'; pb2.innerHTML = '&#128438; PDF';
      pb2.addEventListener('click', function () { window.print(); }); sToolbar.appendChild(pb2);

      document.addEventListener('selectionchange', sUpdateActive);
    }

    function sFmtBtn(label, title, cls) {
      var btn = document.createElement('button');
      btn.className = 'review-fmt-btn' + (cls ? ' ' + cls : '');
      btn.textContent = label; btn.title = title || ''; return btn;
    }
    function sSep(parent) { var s = document.createElement('span'); s.className = 'review-fmt-sep'; parent.appendChild(s); }

    var sSnap = null;
    function enterSEdit() {
      sSnap = sCards.innerHTML;
      sCards.contentEditable = 'true';
      sCards.classList.add('review-cards-editing');
      sCards.addEventListener('mouseup', sSaveCache);
      sCards.addEventListener('keyup', sSaveCache);
      showSEditBar();
      sCards.focus();
    }
    function exitSEdit() {
      sCards.contentEditable = 'false';
      sCards.classList.remove('review-cards-editing');
      sCards.removeEventListener('mouseup', sSaveCache);
      sCards.removeEventListener('keyup', sSaveCache);
      document.removeEventListener('selectionchange', sUpdateActive);
      sSelCache = null;
      showSViewBar();
    }

    showSViewBar();
  }
})();
