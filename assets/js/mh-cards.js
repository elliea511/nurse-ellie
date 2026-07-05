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
})();
