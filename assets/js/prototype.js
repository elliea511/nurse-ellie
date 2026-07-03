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
  }

  var themeButton = document.getElementById('prototype-theme');
  if (themeButton) {
    themeButton.addEventListener('click', function () {
      document.body.classList.toggle('prototype-dark');
      themeButton.textContent = document.body.classList.contains('prototype-dark') ? '☀' : '☾';
    });
  }
})();
