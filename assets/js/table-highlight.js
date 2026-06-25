(function () {
  var content = document.querySelector('.main-content');
  if (!content) return;

  var KEY = 'ellie-table-hl-' + window.location.pathname;
  var COLORS = ['yellow', 'pink', 'blue', 'green'];

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e) { return {}; } }
  function save(d) { localStorage.setItem(KEY, JSON.stringify(d)); }

  var saved = load();

  Array.from(content.querySelectorAll('table')).forEach(function (table, idx) {
    var tableId = 'tbl-' + idx;

    // Wrap table in a relative container
    var wrapper = document.createElement('div');
    wrapper.className = 'thl-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);

    // Strip on the right — dots live inside it
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

    // Clear button at the bottom of the strip
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

    // Restore saved
    applyColor(table, strip, saved[tableId] || null);
  });

  function applyColor(table, strip, color) {
    COLORS.forEach(function (c) { table.classList.remove('thl-color-' + c); });
    strip.className = 'thl-strip';
    Array.from(strip.querySelectorAll('.thl-dot')).forEach(function (d) {
      d.classList.toggle('thl-active', d.title === color);
    });
    if (color) {
      table.classList.add('thl-color-' + color);
      strip.classList.add('thl-strip-' + color);
    }
  }
})();
