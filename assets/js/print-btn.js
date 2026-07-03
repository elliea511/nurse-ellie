(function () {
  'use strict';

  var path = location.pathname;
  var skip = ['/', '/all-topics.html', '/review.html', '/index.html', '/mental-health.html',
              '/medical-emergencies.html', '/maternity.html', '/hematology-oncology.html'];
  if (skip.indexOf(path) !== -1) return;
  if (path.indexOf('-quiz') !== -1 || path.indexOf('practice-quiz') !== -1) return;
  if (path.endsWith('/')) return;

  document.addEventListener('DOMContentLoaded', function () {
    var h1 = document.querySelector('.main-content h1');
    if (!h1) return;
    var btn = document.createElement('button');
    btn.className = 'print-btn';
    btn.innerHTML = '🖨 Save as PDF / Print';
    btn.addEventListener('click', function () { window.print(); });
    h1.insertAdjacentElement('afterend', btn);
  });
})();
