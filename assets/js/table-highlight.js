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

    // Wrap table in a relative container so we can position the strip
    var wrapper = document.createElement('div');
    wrapper.className = 'thl-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);

    // Vertical color strip on the right
    var strip = document.createElement('div');
    strip.className = 'thl-strip';
    wrapper.appendChild(strip);

    // Small dot bar above the table
    var bar = document.createElement('div');
    bar.className = 'thl-bar';

    var label = document.createElement('span');
    label.className = 'thl-label';
    label.textContent = 'Highlight:';
    bar.appendChild(label);

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
        updateActive(bar, next);
      });
      bar.appendChild(dot);
    });

    // Clear dot
    var clearDot = document.createElement('button');
    clearDot.className = 'thl-dot thl-dot-clear';
    clearDot.title = 'clear';
    clearDot.textContent = '✕';
    clearDot.addEventListener('click', function () {
      delete saved[tableId];
      save(saved);
      applyColor(table, strip, null);
      updateActive(bar, null);
    });
    bar.appendChild(clearDot);

    wrapper.insertBefore(bar, table);

    // Restore saved
    var current = saved[tableId] || null;
    applyColor(table, strip, current);
    updateActive(bar, current);
  });

  function applyColor(table, strip, color) {
    COLORS.forEach(function (c) { table.classList.remove('thl-color-' + c); });
    strip.className = 'thl-strip';
    if (color) {
      table.classList.add('thl-color-' + color);
      strip.classList.add('thl-strip-' + color);
    }
  }

  function updateActive(bar, color) {
    Array.from(bar.querySelectorAll('.thl-dot')).forEach(function (d) {
      d.classList.toggle('thl-active', d.title === color);
    });
  }
})();
