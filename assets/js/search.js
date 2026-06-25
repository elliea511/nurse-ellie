(function () {
  var input = document.getElementById('site-search');
  var resultsBox = document.getElementById('search-results');
  if (!input || !resultsBox) return;

  var pages = null;
  var baseUrl = document.querySelector('meta[name="base-url"]')
    ? document.querySelector('meta[name="base-url"]').content
    : '';

  function fetchPages(cb) {
    if (pages) return cb(pages);
    fetch(baseUrl + '/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) { pages = data; cb(pages); })
      .catch(function () { pages = []; cb(pages); });
  }

  function snippet(content, query) {
    var idx = content.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return content.slice(0, 120) + '…';
    var start = Math.max(0, idx - 50);
    var end = Math.min(content.length, idx + query.length + 80);
    var s = (start > 0 ? '…' : '') + content.slice(start, end) + (end < content.length ? '…' : '');
    return s.replace(new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'),
      '<strong>$1</strong>');
  }

  function render(results, query) {
    if (!results.length) {
      resultsBox.innerHTML = '<div class="search-no-results">No results for "' + query + '"</div>';
      resultsBox.classList.add('open');
      return;
    }
    resultsBox.innerHTML = results.slice(0, 8).map(function (p) {
      return '<a class="search-result" href="' + p.url + '">' +
        '<span class="search-result-title">' + p.title + '</span>' +
        '<span class="search-result-snippet">' + snippet(p.content, query) + '</span>' +
        '</a>';
    }).join('');
    resultsBox.classList.add('open');
  }

  function close() {
    resultsBox.classList.remove('open');
    resultsBox.innerHTML = '';
  }

  input.addEventListener('input', function () {
    var q = input.value.trim();
    if (q.length < 2) return close();
    fetchPages(function (data) {
      var hits = data.filter(function (p) {
        return p.title.toLowerCase().includes(q.toLowerCase()) ||
          p.content.toLowerCase().includes(q.toLowerCase());
      });
      render(hits, q);
    });
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { close(); input.blur(); }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('#site-search') && !e.target.closest('#search-results')) close();
  });
})();
