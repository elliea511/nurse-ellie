(function () {
  var COLORS = ['yellow', 'pink', 'blue', 'green'];
  if (/\/review(\.html)?\/?$/.test(window.location.pathname)) return;
  var KEY = 'ellie-annotations-' + window.location.pathname;
  var content = document.querySelector('.main-content') || document.querySelector('.prototype-home main') || document.querySelector('main');
  if (!content) return;

  // ── Storage ──────────────────────────────────────────────────
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function save(a) { localStorage.setItem(KEY, JSON.stringify(a)); }

  // ── Toolbar ───────────────────────────────────────────────────
  var toolbar = document.createElement('div');
  toolbar.id = 'hl-toolbar';
  toolbar.innerHTML =
    '<span class="hl-toolbar-label">Save to My Notes</span>' +
    COLORS.map(function (c) {
      return '<button class="hl-swatch hl-' + c + '" data-color="' + c + '" title="Highlight ' + c + '" aria-label="Highlight ' + c + '"></button>';
    }).join('') +
    '<button class="hl-clear" title="Remove highlight" aria-label="Remove highlight">✕</button>';
  document.body.appendChild(toolbar);

  var savedRange = null;

  function showToolbar(x, y) {
    toolbar.style.left = Math.min(x, window.innerWidth - 180) + 'px';
    toolbar.style.top = (y + window.scrollY - 48) + 'px';
    toolbar.classList.add('visible');
  }
  function hideToolbar() { toolbar.classList.remove('visible'); savedRange = null; }

  function pageTitle() {
    var heading = content.querySelector('h1');
    return (heading ? heading.textContent : document.title).replace(/\s+\|.*$/, '').trim() || 'Study page';
  }

  function nearestSectionTitle(el) {
    if (!el) return '';
    var heading = el.closest('h1,h2,h3,h4,h5,h6');
    if (heading) return heading.textContent.trim();
    var current = el;
    while (current && current !== content) {
      var prev = current.previousElementSibling;
      while (prev) {
        if (/^H[1-6]$/.test(prev.tagName)) return prev.textContent.trim();
        var nested = prev.querySelector && prev.querySelector('h1,h2,h3,h4,h5,h6');
        if (nested) return nested.textContent.trim();
        prev = prev.previousElementSibling;
      }
      current = current.parentElement;
    }
    return '';
  }

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

  // ── Wrap each text node individually — never restructures DOM ──
  function wrapRange(range, color, text, uid) {
    // Snapshot all real (non-whitespace) text segments before any DOM changes
    var root = range.commonAncestorContainer;
    var allNodes = root.nodeType === 3 ? [root] : (function () {
      var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
      var a = [], n; while ((n = w.nextNode())) a.push(n); return a;
    }());

    var segments = [];
    allNodes.forEach(function (node) {
      if (!range.intersectsNode(node)) return;
      var start = (node === range.startContainer) ? range.startOffset : 0;
      var end   = (node === range.endContainer)   ? range.endOffset   : node.nodeValue.length;
      // Skip whitespace-only segments (newlines between block elements)
      var slice = node.nodeValue.slice(start, end);
      if (start >= end || !/\S/.test(slice)) return;
      segments.push({ node: node, start: start, end: end });
    });

    // Process last-to-first so earlier DOM changes don't shift later positions
    var firstMark = null;
    segments.slice().reverse().forEach(function (seg, ri) {
      var i = segments.length - 1 - ri; // original index
      var sub = document.createRange();
      sub.setStart(seg.node, seg.start);
      sub.setEnd(seg.node, seg.end);
      var mark = document.createElement('mark');
      mark.className = 'hl hl-' + color;
      mark.dataset.hlText = text;
      mark.dataset.hlColor = color;
      mark.dataset.hlUid = uid;
      if (i === 0) { mark.id = 'hl-' + uid; }
      sub.surroundContents(mark);
      if (i === 0) firstMark = mark;
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
      if (anchor.closest('.quiz-block, .flashcard-deck, #review-page-content, #hl-toolbar, .prototype-topbar, .site-header, nav, button, input, textarea, select')) { hideToolbar(); return; }
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

      var startEl = range.startContainer.nodeType === 3 ? range.startContainer.parentElement : range.startContainer;
      var headingEl = startEl.closest('h1,h2,h3,h4,h5,h6');
      var level = headingEl ? headingEl.tagName.toLowerCase() : null;
      var sectionTitle = nearestSectionTitle(startEl);

      // Capture HTML of selection (preserves bullets, bold, etc.)
      var frag = range.cloneContents();
      Array.from(frag.querySelectorAll('mark.hl')).forEach(function(m) {
        var p = m.parentNode;
        while (m.firstChild) p.insertBefore(m.firstChild, m);
        p.removeChild(m);
      });
      var tmp = document.createElement('div');
      tmp.appendChild(frag);
      // Bare <li> elements need their parent ul/ol wrapper restored
      if (!tmp.querySelector('ul,ol') && tmp.querySelector('li')) {
        var lp = range.commonAncestorContainer;
        while (lp && lp.nodeType !== 1) lp = lp.parentNode;
        lp = lp ? lp.closest('ul,ol') : null;
        if (lp) {
          var lw = document.createElement(lp.tagName);
          while (tmp.firstChild) lw.appendChild(tmp.firstChild);
          tmp.appendChild(lw);
        }
      }
      var selHtml = tmp.innerHTML;

      window.getSelection().removeAllRanges();
      wrapRange(range, color, text, uid);
      save(load().concat([{
        text: text,
        html: selHtml,
        color: color,
        uid: uid,
        contextBefore: contextBefore,
        level: level,
        pageTitle: pageTitle(),
        sectionTitle: sectionTitle,
        path: window.location.pathname,
        savedAt: new Date().toISOString()
      }]));
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
