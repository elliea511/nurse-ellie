(function () {
  var content = document.querySelector('.prototype-note-content');
  var toc = document.getElementById('prototype-toc-links');
  if (content && toc) {
    var headings = Array.prototype.slice.call(content.querySelectorAll('h2'));
    headings.slice(0, 10).forEach(function (heading) {
      if (!heading.id) heading.id = heading.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      var link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      toc.appendChild(link);
    });

    var firstHeading = headings[0];
    if (firstHeading) {
      var grid = document.createElement('div');
      grid.className = 'note-card-grid';
      firstHeading.parentNode.insertBefore(grid, firstHeading);

      headings.forEach(function (heading, index) {
        var card = document.createElement('section');
        card.className = 'note-section-card note-card-tone-' + ((index % 6) + 1);
        grid.appendChild(card);
        var next = heading.nextSibling;
        card.appendChild(heading);
        while (next && !(next.nodeType === 1 && next.tagName === 'H2')) {
          var moving = next;
          next = next.nextSibling;
          if (moving.nodeType === 1 && moving.tagName === 'HR') {
            moving.remove();
            continue;
          }
          card.appendChild(moving);
        }

        var table = card.querySelector('table');
        var columns = table ? table.querySelectorAll('thead th').length : 0;
        if (columns > 3 || card.textContent.length > 1450) card.classList.add('note-card-wide');
      });
    }
  }

  var themeButton = document.getElementById('prototype-theme');
  if (themeButton) {
    themeButton.addEventListener('click', function () {
      document.body.classList.toggle('prototype-dark');
      themeButton.textContent = document.body.classList.contains('prototype-dark') ? '☀' : '☾';
    });
  }
})();
