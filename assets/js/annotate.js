(function () {
  var COLORS = ['yellow', 'pink', 'blue', 'green'];
  var KEY = 'ellie-annotations-' + window.location.pathname;
  var content = document.querySelector('.main-content');
  if (!content) return;

  // ── Storage ──────────────────────────────────────────────────
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function save(a) { localStorage.setItem(KEY, JSON.stringify(a)); }

  // ── Toolbar ───────────────────────────────────────────────────
  var toolbar = document.createElement('div');
  toolbar.id = 'hl-toolbar';
  toolbar.innerHTML =
    COLORS.map(function (c) {
      return '<button class="hl-swatch hl-' + c + '" data-color="' + c + '" title="' + c + '"></button>';
    }).join('') +
    '<button class="hl-clear" title="Remove highlight">✕</button>';
  document.body.appendChild(toolbar);

  var savedRange = null;

  function showToolbar(x, y) {
    toolbar.style.left = Math.min(x, window.innerWidth - 180) + 'px';
    toolbar.style.top = (y + window.scrollY - 48) + 'px';
    toolbar.classList.add('visible');
  }
  function hideToolbar() { toolbar.classList.remove('visible'); savedRange = null; }

  // ── DOM / offset utilities ────────────────────────────────────
  function textNodes(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var nodes = [], node;
    while ((node = walker.nextNode())) nodes.push(node);
    return nodes;
  }

  function getCharOffset(root, targetNode, nodeOffset) {
    var nodes = textNodes(root), cumulative = 0;
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i] === targetNode) return cumulative + nodeOffset;
      cumulative += nodes[i].nodeValue.length;
    }
    return 0;
  }

  function rangeFromOffset(root, startChar, length) {
    var nodes = textNodes(root);
    var cumulative = 0, range = document.createRange();
    var startSet = false, endChar = startChar + length;
    for (var i = 0; i < nodes.length; i++) {
      var len = nodes[i].nodeValue.length;
      if (!startSet && cumulative + len > startChar) {
        range.setStart(nodes[i], startChar - cumulative);
        startSet = true;
      }
      if (startSet && cumulative + len >= endChar) {
        range.setEnd(nodes[i], endChar - cumulative);
        return range;
      }
      cumulative += len;
    }
    return null;
  }

  // ── Collect text nodes that overlap a range ───────────────────
  function textNodesInRange(range) {
    var root = range.commonAncestorContainer;
    if (root.nodeType === 3) return [root];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var nodes = [], node;
    while ((node = walker.nextNode())) {
      if (range.intersectsNode(node)) nodes.push(node);
    }
    return nodes;
  }

  // ── Wrap each text node individually — never restructures DOM ──
  function wrapRange(range, color, text, uid) {
    var nodes = textNodesInRange(range);
    var firstMark = null;
    nodes.forEach(function (node, i) {
      var start = (node === range.startContainer) ? range.startOffset : 0;
      var end   = (node === range.endContainer)   ? range.endOffset   : node.nodeValue.length;
      if (start >= end) return;
      var sub = document.createRange();
      sub.setStart(node, start);
      sub.setEnd(node, end);
      var mark = document.createElement('mark');
      mark.className = 'hl hl-' + color;
      mark.dataset.hlText = text;
      mark.dataset.hlColor = color;
      mark.dataset.hlUid = uid;
      if (i === 0) { mark.id = 'hl-' + uid; firstMark = mark; }
      sub.surroundContents(mark);
    });
    return firstMark;
  }

  // ── Restore one annotation from storage ───────────────────────
  function applyAnnotation(ann) {
    var full = content.textContent;
    var startChar = -1;

    if (ann.contextBefore) {
      var pos = full.indexOf(ann.contextBefore + ann.text);
      if (pos !== -1) startChar = pos + ann.contextBefore.length;
    }
    if (startChar === -1) startChar = full.indexOf(ann.text);
    if (startChar === -1) return;

    var range = rangeFromOffset(content, startChar, ann.text.length);
    if (!range) return;

    // Bail if this range is already inside a mark (already restored)
    var startParent = range.startContainer.parentElement;
    if (startParent && startParent.closest('mark.hl')) return;

    wrapRange(range, ann.color, ann.text, ann.uid || (ann.color + '-' + startChar));
  }

  function applyAll() {
    load().forEach(function (ann) { applyAnnotation(ann); });
  }

  // ── Remove a highlight by uid ─────────────────────────────────
  function removeByUid(uid) {
    document.querySelectorAll('mark.hl[data-hl-uid="' + uid + '"]').forEach(function (m) {
      var parent = m.parentNode;
      while (m.firstChild) parent.insertBefore(m.firstChild, m);
      parent.removeChild(m);
      parent.normalize();
    });
    save(load().filter(function (a) { return (a.uid || '') !== uid; }));
  }

  // ── Selection events ──────────────────────────────────────────
  document.addEventListener('mouseup', function (e) {
    if (e.target.closest('#hl-toolbar')) return;
    setTimeout(function () {
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed || sel.toString().trim().length < 2) { hideToolbar(); return; }
      var text = sel.toString().trim();
      if (!content.contains(sel.anchorNode)) { hideToolbar(); return; }
      // Block highlighting inside quiz/flashcard UI
      var anchor = sel.anchorNode.nodeType === 3 ? sel.anchorNode.parentElement : sel.anchorNode;
      if (anchor.closest('.quiz-block, .flashcard-deck')) { hideToolbar(); return; }
      // Inside tables: only allow if selection stays within one cell
      var anchorCell = anchor.closest('td, th');
      var focusEl = sel.focusNode.nodeType === 3 ? sel.focusNode.parentElement : sel.focusNode;
      var focusCell = focusEl.closest('td, th');
      if (anchorCell && focusCell !== anchorCell) { hideToolbar(); return; }
      savedRange = { text: text, range: sel.getRangeAt(0).cloneRange() };
      var rect = sel.getRangeAt(0).getBoundingClientRect();
      showToolbar(rect.left + rect.width / 2 - 70, rect.top);
    }, 10);
  });

  toolbar.addEventListener('mousedown', function (e) { e.preventDefault(); });

  toolbar.querySelectorAll('.hl-swatch').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!savedRange) return hideToolbar();
      var color = btn.dataset.color;
      var range = savedRange.range;
      var text = savedRange.text;

      var startChar = getCharOffset(content, range.startContainer, range.startOffset);
      var contextStart = Math.max(0, startChar - 30);
      var contextBefore = content.textContent.slice(contextStart, startChar);
      var uid = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

      window.getSelection().removeAllRanges();
      wrapRange(range, color, text, uid);
      save(load().concat([{ text: text, color: color, uid: uid, contextBefore: contextBefore }]));
      hideToolbar();
    });
  });

  toolbar.querySelector('.hl-clear').addEventListener('click', function () {
    if (!savedRange) return hideToolbar();
    var node = savedRange.range.startContainer;
    var mark = (node.nodeType === 3 ? node.parentElement : node).closest('mark.hl');
    if (mark && mark.dataset.hlUid) removeByUid(mark.dataset.hlUid);
    hideToolbar();
  });

  document.addEventListener('mousedown', function (e) {
    if (!e.target.closest('#hl-toolbar')) hideToolbar();
  });

  // Click a highlight to remove it
  content.addEventListener('click', function (e) {
    var mark = e.target.closest('mark.hl');
    if (!mark || !mark.dataset.hlUid) return;
    removeByUid(mark.dataset.hlUid);
  });

  // Jump to a specific highlight from ?hljump=uid in URL
  var jumpUid = new URLSearchParams(window.location.search).get('hljump');

  applyAll();

  if (jumpUid) {
    var target = document.getElementById('hl-' + jumpUid);
    if (target) {
      setTimeout(function () {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('hl-jump-pulse');
        setTimeout(function () { target.classList.remove('hl-jump-pulse'); }, 2000);
      }, 300);
    }
  }
})();
