(function () {
  var content = document.querySelector('.main-content');
  if (!content) return;

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

    COLORS.forEach(function (color) {
      var dot = document.createElement('button');
      dot.className = 'thl-dot thl-dot-' + color;
      dot.title = color;
      dot.addEventListener('click', function () {
        var current = saved[tableId];
        var next = current === color ? null : color;
        saved[tableId] = next;
        save(saved);
        applyColor(table, strip, next);
      });
      strip.appendChild(dot);
    });

    var clearDot = document.createElement('button');
    clearDot.className = 'thl-dot thl-dot-clear';
    clearDot.title = 'clear';
    clearDot.textContent = '✕';
    clearDot.addEventListener('click', function () {
      delete saved[tableId];
      save(saved);
      applyColor(table, strip, null);
    });
    strip.appendChild(clearDot);

    wrapper.appendChild(strip);
    applyColor(table, strip, saved[tableId] || null);
  });

  function applyColor(table, strip, color) {
    // Apply directly to each cell — bypasses all !important stylesheet rules
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
})();
