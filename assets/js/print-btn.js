(function () {
  var btn = document.createElement('button');
  btn.id = 'print-btn';
  btn.setAttribute('aria-label', 'Print page');
  btn.innerHTML = '🖨';
  btn.title = 'Print notes';
  btn.addEventListener('click', function () { window.print(); });
  document.body.appendChild(btn);
})();
