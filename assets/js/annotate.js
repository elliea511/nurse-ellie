(function () {
  var COLORS = ['yellow', 'pink', 'blue', 'green'];
  var KEY = 'ellie-annotations-' + window.location.pathname;

  // --- Toolbar ---
  var toolbar = document.createElement('div');
  toolbar.id = 'hl-toolbar';
  toolbar.innerHTML =
    COLORS.map(function (c) {
      return '<button class="hl-swatch hl-' + c + '" data-color="' + c + '" title="' + c + '"></button>';
    }).join('') +
    '<button class="hl-clear" title="Remove highlight">✕</button>';
  document.body.appendChild(toolbar);

  var savedSel = null;

  function showToolbar(x, y) {
    toolbar.style.left = Math.min(x, window.innerWidth - 180) + 'px';
    toolbar.style.top = (y + window.scrollY - 44) + 'px';
    toolbar.classList.add('visible');
  }

  function hideToolbar() {
    toolbar.classList.remove('visible');
    savedSel = null;
  }

  // --- Storage ---
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }

  function save(annotations) {
    localStorage.setItem(KEY, JSON.stringify(annotations));
  }

  // --- Apply highlights on load ---
  function applyAll() {
    var annotations = load();
    annotations.forEach(function (ann) {
      applyHighlight(ann.text, ann.color, ann.note, ann.index, false);
    });
  }

  function textNodes(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var nodes = [];
    var node;
    while ((node = walker.nextNode())) nodes.push(node);
    return nodes;
  }

  function applyHighlight(text, color, note, targetIndex, persist) {
    var content = document.querySelector('.main-content');
    if (!content) return;
    var nodes = textNodes(content);
    var count = 0;
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var idx = node.nodeValue.indexOf(text);
      if (idx === -1) continue;
      if (count < targetIndex) { count++; continue; }

      var mark = document.createElement('mark');
      mark.className = 'hl hl-' + color;
      mark.dataset.hlText = text;
      mark.dataset.hlColor = color;
      if (note) {
        mark.title = note;
        mark.dataset.hlNote = note;
      }

      var before = document.createTextNode(node.nodeValue.slice(0, idx));
      var after = document.createTextNode(node.nodeValue.slice(idx + text.length));
      mark.appendChild(document.createTextNode(text));

      var parent = node.parentNode;
      parent.insertBefore(before, node);
      parent.insertBefore(mark, node);
      parent.insertBefore(after, node);
      parent.removeChild(node);

      if (persist) {
        var annotations = load();
        annotations.push({ text: text, color: color, note: note || '', index: targetIndex });
        save(annotations);
      }
      return;
    }
  }

  function countOccurrencesBefore(text, range) {
    var content = document.querySelector('.main-content');
    if (!content) return 0;
    var full = content.textContent;
    var pos = 0;
    var count = 0;
    while (true) {
      var found = full.indexOf(text, pos);
      if (found === -1 || found >= range) break;
      count++;
      pos = found + 1;
    }
    return count;
  }

  // --- Selection handling ---
  document.addEventListener('mouseup', function (e) {
    if (e.target.closest('#hl-toolbar')) return;
    setTimeout(function () {
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed || sel.toString().trim().length < 2) {
        hideToolbar();
        return;
      }
      var text = sel.toString().trim();
      if (!document.querySelector('.main-content').contains(sel.anchorNode)) {
        hideToolbar();
        return;
      }
      savedSel = { text: text, range: sel.getRangeAt(0).cloneRange() };
      var rect = sel.getRangeAt(0).getBoundingClientRect();
      showToolbar(rect.left + rect.width / 2 - 70, rect.top);
    }, 10);
  });

  toolbar.addEventListener('mousedown', function (e) { e.preventDefault(); });

  toolbar.querySelectorAll('.hl-swatch').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!savedSel) return hideToolbar();
      var color = btn.dataset.color;
      var content = document.querySelector('.main-content');
      var charsBefore = 0;
      try {
        var preRange = document.createRange();
        preRange.setStart(content, 0);
        preRange.setEnd(savedSel.range.startContainer, savedSel.range.startOffset);
        charsBefore = preRange.toString().length;
      } catch (e) {}
      var idx = countOccurrencesBefore(savedSel.text, charsBefore);
      window.getSelection().removeAllRanges();
      applyHighlight(savedSel.text, color, '', idx, true);
      hideToolbar();
    });
  });

  toolbar.querySelector('.hl-clear').addEventListener('click', function () {
    if (!savedSel) return hideToolbar();
    var text = savedSel.text;
    document.querySelectorAll('mark.hl[data-hl-text]').forEach(function (mark) {
      if (mark.dataset.hlText === text) {
        var parent = mark.parentNode;
        while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
        parent.removeChild(mark);
        parent.normalize();
      }
    });
    var annotations = load().filter(function (a) { return a.text !== text; });
    save(annotations);
    hideToolbar();
  });

  document.addEventListener('mousedown', function (e) {
    if (!e.target.closest('#hl-toolbar')) hideToolbar();
  });

  // Click an existing highlight to remove it instantly
  document.querySelector('.main-content').addEventListener('click', function (e) {
    var mark = e.target.closest('mark.hl');
    if (!mark) return;
    var text = mark.dataset.hlText;
    document.querySelectorAll('mark.hl[data-hl-text]').forEach(function (m) {
      if (m.dataset.hlText === text) {
        var parent = m.parentNode;
        while (m.firstChild) parent.insertBefore(m.firstChild, m);
        parent.removeChild(m);
        parent.normalize();
      }
    });
    var annotations = load().filter(function (a) { return a.text !== text; });
    save(annotations);
  });

  applyAll();
})();
