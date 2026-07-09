(function () {
  'use strict';

  // Only run on Mental Health pages
  if (!document.body || document.body.getAttribute('data-section') !== 'mental-health') return;

  function allPanels() {
    return Array.prototype.slice.call(document.querySelectorAll('.mh-detail'));
  }

  function activeButtons() {
    return Array.prototype.slice.call(document.querySelectorAll('a.mh-btn.mh-active'));
  }

  function closeAll() {
    allPanels().forEach(function (p) { p.classList.remove('mh-open'); });
    activeButtons().forEach(function (b) { b.classList.remove('mh-active'); });
  }

  document.addEventListener('click', function (e) {
    // Close button inside a panel
    var closeEl = e.target.closest('.mh-detail-close');
    if (closeEl) {
      e.preventDefault();
      var panel = closeEl.closest('.mh-detail');
      if (panel) {
        panel.classList.remove('mh-open');
        var trigger = document.querySelector('a.mh-btn[href="#' + panel.id + '"]');
        if (trigger) trigger.classList.remove('mh-active');
      }
      return;
    }

    // Card button that points at a #panel
    var btn = e.target.closest('a.mh-btn[href^="#"]');
    if (!btn) return;

    var id = decodeURIComponent(btn.getAttribute('href').slice(1));
    var target = document.getElementById(id);
    if (!target || !target.classList.contains('mh-detail')) return; // normal anchor — leave alone

    e.preventDefault();
    var wasOpen = target.classList.contains('mh-open');
    closeAll(); // accordion: only one open at a time

    if (!wasOpen) {
      target.classList.add('mh-open');
      btn.classList.add('mh-active');
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  function setupMedicationBrowser() {
    var medPage = document.querySelector('.med-warning-strip');
    if (!medPage) return;

    document.body.classList.add('med-browser-ready');

    var nav = document.querySelector('.med-nav-pills');
    if (nav && !document.querySelector('.med-browser-tools')) {
      var tools = document.createElement('div');
      tools.className = 'med-browser-tools';
      tools.innerHTML =
        '<label class="med-browser-search"><span>Search medications</span><input id="med-browser-search" type="search" placeholder="Search medications, side effects, teaching…"></label>' +
        '<div class="med-browser-filters" aria-label="Medication page filters">' +
          '<button type="button" class="active" data-med-filter="all">All Classes</button>' +
          '<button type="button" data-med-filter="nclex">NCLEX High-Yield</button>' +
          '<button type="button" data-med-filter="side">Side Effects</button>' +
          '<button type="button" data-med-filter="teach">Patient Teaching</button>' +
        '</div>';
      nav.parentNode.insertBefore(tools, nav);
    }

    var sections = Array.prototype.slice.call(document.querySelectorAll('.med-class-section'));
    sections.forEach(function (section, index) {
      if (!section.dataset.medReady) {
        section.dataset.medReady = 'true';
        if (index !== 0) section.classList.add('med-section-collapsed');

        var header = section.querySelector('.med-class-header');
        if (header) {
          header.setAttribute('role', 'button');
          header.setAttribute('tabindex', '0');
          header.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');

          var toggle = document.createElement('button');
          toggle.className = 'med-section-toggle';
          toggle.type = 'button';
          toggle.setAttribute('aria-label', 'Toggle medication class');
          toggle.textContent = index === 0 ? '−' : '+';
          header.appendChild(toggle);

          function toggleSection() {
            var collapsed = section.classList.toggle('med-section-collapsed');
            header.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
            toggle.textContent = collapsed ? '+' : '−';
          }

          header.addEventListener('click', function (event) {
            if (event.target.closest('a')) return;
            toggleSection();
          });
          header.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              toggleSection();
            }
          });
        }
      }

      section.querySelectorAll('.drug-card').forEach(enhanceDrugCard);
    });

    document.querySelectorAll('.med-nav-pills a').forEach(function (link) {
      link.addEventListener('click', function () {
        var target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        target.classList.remove('med-section-collapsed');
        var header = target.querySelector('.med-class-header');
        var toggle = target.querySelector('.med-section-toggle');
        if (header) header.setAttribute('aria-expanded', 'true');
        if (toggle) toggle.textContent = '−';
      });
    });

    var search = document.getElementById('med-browser-search');
    var filter = 'all';

    function applyMedicationFilters() {
      var q = search ? search.value.trim().toLowerCase() : '';
      sections.forEach(function (section) {
        var visibleCards = 0;
        section.querySelectorAll('.drug-card').forEach(function (card) {
          var haystack = card.textContent.toLowerCase();
          var queryOk = !q || haystack.indexOf(q) !== -1;
          var filterOk =
            filter === 'all' ||
            (filter === 'nclex' && haystack.indexOf('nclex') !== -1) ||
            (filter === 'side' && /side effect|monitor|toxicity|syndrome|sedation|risk|overdose|withdrawal/i.test(haystack)) ||
            (filter === 'teach' && /teach|teaching|patient|avoid|report|take/i.test(haystack));
          var show = queryOk && filterOk;
          card.hidden = !show;
          if (show) visibleCards++;
        });
        section.classList.toggle('med-no-card-matches', visibleCards === 0 && (!!q || filter !== 'all'));
      });
    }

    if (search && !search.dataset.medReady) {
      search.dataset.medReady = 'true';
      search.addEventListener('input', applyMedicationFilters);
    }

    document.querySelectorAll('[data-med-filter]').forEach(function (button) {
      if (button.dataset.medReady) return;
      button.dataset.medReady = 'true';
      button.addEventListener('click', function () {
        filter = button.dataset.medFilter;
        document.querySelectorAll('[data-med-filter]').forEach(function (btn) {
          btn.classList.toggle('active', btn === button);
        });
        applyMedicationFilters();
      });
    });
  }

  function enhanceDrugCard(card) {
    if (card.dataset.medEnhanced) return;
    card.dataset.medEnhanced = 'true';

    var p = Array.prototype.slice.call(card.children).filter(function (child) {
      return child.tagName === 'P' && /Used for:|Monitor:|Teach:/i.test(child.textContent);
    })[0];
    if (!p) return;

    var html = p.innerHTML;
    var parts = html.split(/<br\s*\/?>/i).map(function (part) { return part.trim(); }).filter(Boolean);
    if (!parts.length) return;

    var grid = document.createElement('div');
    grid.className = 'med-fact-grid';

    parts.forEach(function (part) {
      var text = part.replace(/<[^>]+>/g, '').trim();
      var label = 'Key point';
      var icon = '✦';
      if (/^Used for:/i.test(text)) { label = 'Used for'; icon = '♥'; }
      if (/^Monitor:/i.test(text)) { label = 'Monitor'; icon = '◉'; }
      if (/^Teach:/i.test(text)) { label = 'Teach'; icon = '◆'; }
      var body = part.replace(/^\s*<strong>[^<]+<\/strong>\s*/i, '').replace(/^(Used for:|Monitor:|Teach:)\s*/i, '');
      var item = document.createElement('div');
      item.className = 'med-fact';
      item.innerHTML = '<span>' + icon + '</span><div><strong>' + label + '</strong><p>' + body + '</p></div>';
      grid.appendChild(item);
    });

    p.replaceWith(grid);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMedicationBrowser);
  } else {
    setupMedicationBrowser();
  }
})();
