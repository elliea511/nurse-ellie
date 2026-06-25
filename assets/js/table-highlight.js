(function () {
  var content = document.querySelector('.main-content');
  if (!content) return;

  var KEY = 'ellie-table-hl-' + window.location.pathname;
  var COLORS = [
    { name: 'yellow', bg: 'rgba(255,225,60,0.18)',  border: 'rgba(220,180,0,0.5)' },
    { name: 'pink',   bg: 'rgba(255,140,175,0.18)', border: 'rgba(220,80,130,0.45)' },
    { name: 'blue',   bg: 'rgba(100,185,255,0.18)', border: 'rgba(60,140,220,0.45)' },
    { name: 'green',  bg: 'rgba(100,220,140,0.18)', border: 'rgba(40,160,80,0.45)' },
  ];

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e) { return {}; } }
  function save(d) { localStorage.setItem(KEY, JSON.stringify(d)); }

  function applyColor(table, colorName) {
    var c = COLORS.find(function(c) { return c.name === colorName; });
    if (c) {
      table.style.background    = c.bg;
      table.style.borderColor   = c.border;
      table.style.borderWidth   = '2px';
      table.style.borderStyle   = 'solid';
      table.style.borderRadius  = '6px';
    } else {
      table.style.background   = '';
      table.style.borderColor  = '';
      table.style.borderWidth  = '';
      table.style.borderStyle  = '';
      table.style.borderRadius = '';
    }
  }

  var saved = load();

  Array.from(content.querySelectorAll('table')).forEach(function (table, idx) {
    var tableId = 'tbl-' + idx;

    // Restore saved color
    if (saved[tableId]) applyColor(table, saved[tableId]);

    // Small button row above table
    var bar = document.createElement('div');
    bar.className = 'thl-bar';

    var label = document.createElement('span');
    label.className = 'thl-label';
    label.textContent = 'Highlight table:';
    bar.appendChild(label);

    COLORS.forEach(function (c) {
      var dot = document.createElement('button');
      dot.className = 'thl-dot thl-' + c.name;
      dot.title = c.name;
      dot.addEventListener('click', function () {
        var current = saved[tableId];
        var next = current === c.name ? null : c.name;
        saved[tableId] = next;
        save(saved);
        applyColor(table, next);
        updateActive(bar, next);
      });
      bar.appendChild(dot);
    });

    // Clear button
    var clearDot = document.createElement('button');
    clearDot.className = 'thl-dot thl-clear';
    clearDot.title = 'Clear';
    clearDot.textContent = '✕';
    clearDot.addEventListener('click', function () {
      delete saved[tableId];
      save(saved);
      applyColor(table, null);
      updateActive(bar, null);
    });
    bar.appendChild(clearDot);

    function updateActive(bar, colorName) {
      Array.from(bar.querySelectorAll('.thl-dot')).forEach(function (d) {
        d.classList.toggle('thl-active', d.title === colorName);
      });
    }

    updateActive(bar, saved[tableId] || null);
    table.parentNode.insertBefore(bar, table);
  });
})();
