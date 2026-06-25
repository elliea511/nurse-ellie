(function () {
  var MIN = 14, MAX = 22, STEP = 1, DEFAULT = 17;
  var KEY = 'ellie-font-size';

  function apply(size) {
    document.documentElement.style.fontSize = size + 'px';
    localStorage.setItem(KEY, size);
  }

  var saved = parseInt(localStorage.getItem(KEY), 10);
  if (saved >= MIN && saved <= MAX) apply(saved);

  document.getElementById('font-decrease').addEventListener('click', function () {
    var cur = parseInt(document.documentElement.style.fontSize || DEFAULT, 10);
    if (cur > MIN) apply(cur - STEP);
  });

  document.getElementById('font-increase').addEventListener('click', function () {
    var cur = parseInt(document.documentElement.style.fontSize || DEFAULT, 10);
    if (cur < MAX) apply(cur + STEP);
  });
})();
