document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('.main-content');
  if (!content) return;
  var h2s = Array.from(content.querySelectorAll('h2'));
  if (h2s.length === 0) return;

  h2s.forEach(function (h2, index) {
    var colorClass = 'section-zone-' + ((index % 3) + 1);
    var wrapper = document.createElement('div');
    wrapper.className = 'section-zone ' + colorClass;
    h2.parentNode.insertBefore(wrapper, h2);
    wrapper.appendChild(h2);
    var next = wrapper.nextElementSibling;
    while (next && next.tagName !== 'H2') {
      var toMove = next;
      next = next.nextElementSibling;
      wrapper.appendChild(toMove);
    }
  });
});
