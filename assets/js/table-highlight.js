(function () {
  var content = document.querySelector('.main-content');
  if (!content) return;
  if (/\/review(\.html)?\/?$/.test(window.location.pathname)) return;

  var KEY = 'ellie-table-hl-' + window.location.pathname;
  var COLORS = ['yellow', 'pink', 'blue', 'green'];
  var CELL_BG = {
    yellow: 'rgba(255,230,80,0.42)',
    pink:   'rgba(255,150,185,0.38)',
    blue:   'rgba(110,185,255,0.38)',
    green:  'rgba(100,215,140,0.38)'
  };

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e) { return {}; } }
  function save(d) { localStorage.setItem(KEY, JSON.stringify(d)); }

  var saved = load();

  Array.from(content.querySelectorAll('table')).forEach(function (table, idx) {
    var tableId = 'tbl-' + idx;

    var wrapper = document.createElement('div');
    wrapper.className = 'thl-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);

    var strip = document.createElement('div');
    strip.className = 'thl-strip';
    strip.setAttribute('aria-label', 'Save this table to My Notes');

    COLORS.forEach(function (color) {
      var dot = document.createElement('button');
      dot.className = 'thl-dot thl-dot-' + color;
      dot.title = 'Save table as ' + color;
      dot.setAttribute('aria-label', 'Save table as ' + color);
      dot.addEventListener('click', function () {
        var entry = saved[tableId];
        var current = entry && entry.color ? entry.color : (typeof entry === 'string' ? entry : null);
        var next = current === color ? null : color;
        if (next) {
          applyColor(table, strip, next);
          // Snapshot clean table HTML (no mark elements) with colors already applied
          var clone = table.cloneNode(true);
          clone.querySelectorAll('mark.hl').forEach(function (m) {
            var p = m.parentNode;
            while (m.firstChild) p.insertBefore(m.firstChild, m);
            p.removeChild(m);
          });
          saved[tableId] = {
            color: next,
            html: clone.outerHTML,
            savedAt: new Date().toISOString(),
            pageTitle: pageTitle()
          };
        } else {
          applyColor(table, strip, null);
          delete saved[tableId];
        }
        save(saved);
      });
      strip.appendChild(dot);
    });

    var clearDot = document.createElement('button');
    clearDot.className = 'thl-dot thl-dot-clear';
    clearDot.title = 'Remove saved table';
    clearDot.setAttribute('aria-label', 'Remove saved table');
    clearDot.textContent = '✕';
    clearDot.addEventListener('click', function () {
      applyColor(table, strip, null);
      delete saved[tableId];
      save(saved);
    });
    strip.appendChild(clearDot);

    wrapper.appendChild(strip);

    // Restore — handle both old string format and new {color, html} format
    var entry = saved[tableId];
    var color = entry && entry.color ? entry.color : (typeof entry === 'string' ? entry : null);
    applyColor(table, strip, color);
  });

  function applyColor(table, strip, color) {
    Array.from(table.querySelectorAll('td, th')).forEach(function (cell) {
      if (color) {
        cell.style.setProperty('background-color', CELL_BG[color], 'important');
      } else {
        cell.style.removeProperty('background-color');
      }
    });
    strip.className = 'thl-strip' + (color ? ' thl-strip-' + color : '');
    Array.from(strip.querySelectorAll('.thl-dot')).forEach(function (d) {
      d.classList.toggle('thl-active', d.title === color);
    });
  }

  function pageTitle() {
    var heading = content.querySelector('h1');
    return (heading ? heading.textContent : document.title).replace(/\s+\|.*$/, '').trim() || 'Study page';
  }
})();
