(function () {
  var KEY = 'ellie-streak-dates';

  function today() {
    return new Date().toISOString().slice(0, 10);
  }

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }

  function save(dates) {
    localStorage.setItem(KEY, JSON.stringify(dates));
  }

  function calcStreak(dates) {
    if (!dates.length) return 0;
    var sorted = dates.slice().sort().reverse();
    var streak = 1;
    for (var i = 0; i < sorted.length - 1; i++) {
      var a = new Date(sorted[i]);
      var b = new Date(sorted[i + 1]);
      var diff = (a - b) / 86400000;
      if (diff === 1) streak++;
      else break;
    }
    // If most recent date isn't today or yesterday, streak is broken
    var latest = new Date(sorted[0]);
    var now = new Date(today());
    var gap = (now - latest) / 86400000;
    if (gap > 1) return 0;
    return streak;
  }

  // Record today
  var dates = load();
  var t = today();
  if (!dates.includes(t)) {
    dates.push(t);
    save(dates);
  }

  var streak = calcStreak(dates);

  // Inject into sidebar above nav
  var sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  var widget = document.createElement('div');
  widget.className = 'streak-widget';

  var emoji = streak === 1 ? '🤍' : streak >= 7 ? '🔥🔥' : '🔥';
  var msg = streak === 1
    ? emoji + ' 1-day streak — keep going!'
    : emoji + ' ' + streak + '-day streak!';

  widget.innerHTML = '<span class="streak-text">' + msg + '</span>';

  // Insert after search box if present, else at top
  var search = sidebar.querySelector('.sidebar-search');
  if (search) {
    search.insertAdjacentElement('afterend', widget);
  } else {
    sidebar.prepend(widget);
  }
})();
