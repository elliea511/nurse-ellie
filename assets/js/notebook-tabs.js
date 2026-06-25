(function () {
  var PASTELS = [
    '#f9c8d4', // pink
    '#d4c8f9', // lavender
    '#c8f0d8', // mint
    '#f9e4c0', // peach
    '#c8e4f9', // sky blue
    '#f9f4c0', // soft yellow
  ];

  var headings = Array.from(document.querySelectorAll('.main-content h2'));
  if (headings.length < 2) return;

  var nav = document.createElement('nav');
  nav.id = 'notebook-tabs';
  document.body.appendChild(nav);

  var tabs = headings.map(function (h, i) {
    var a = document.createElement('a');
    var text = (h.textContent || '').trim();
    // Strip any leading dashes Jekyll/markdown may leave
    text = text.replace(/^[-–—\s]+/, '').trim();
    var label = text.length > 20 ? text.slice(0, 18) + '…' : text;

    a.href = '#' + h.id;
    a.className = 'nb-tab';
    a.style.background = PASTELS[i % PASTELS.length];
    a.title = text; // full text on hover tooltip

    var span = document.createElement('span');
    span.textContent = label;
    a.appendChild(span);

    a.addEventListener('click', function (e) {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    nav.appendChild(a);
    return a;
  });

  // Highlight active tab based on which H2 is nearest the top
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var idx = headings.indexOf(entry.target);
        tabs.forEach(function (t, i) {
          t.classList.toggle('active', i === idx);
        });
      }
    });
  }, { rootMargin: '-5% 0px -70% 0px' });

  headings.forEach(function (h) { observer.observe(h); });
})();
