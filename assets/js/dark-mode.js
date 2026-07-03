(function () {
  'use strict';

  var STORAGE_KEY = 'ne_dark_mode';

  function getPreference() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) return stored === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function apply(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    var btn = document.getElementById('dark-mode-toggle');
    if (btn) btn.textContent = dark ? '☀' : '☾';
    btn && btn.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // Apply immediately (before paint) to avoid flash
  apply(getPreference());

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.createElement('button');
    btn.id = 'dark-mode-toggle';
    btn.className = 'dark-mode-toggle';
    btn.textContent = getPreference() ? '☀' : '☾';
    btn.title = getPreference() ? 'Switch to light mode' : 'Switch to dark mode';
    btn.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      var next = !isDark;
      localStorage.setItem('ne_dark_mode', next ? 'dark' : 'light');
      apply(next);
    });
    document.body.appendChild(btn);
  });
})();
