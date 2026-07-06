(function () {
  // Create overlay elements once
  var overlay = document.createElement('div');
  overlay.id = 'lb-overlay';
  overlay.style.cssText = [
    'display:none',
    'position:fixed',
    'inset:0',
    'z-index:9999',
    'background:rgba(0,0,0,0.88)',
    'cursor:zoom-out',
    'align-items:center',
    'justify-content:center',
    'padding:1.5rem',
  ].join(';');

  var img = document.createElement('img');
  img.id = 'lb-img';
  img.style.cssText = [
    'max-width:100%',
    'max-height:100vh',
    'border-radius:10px',
    'box-shadow:0 8px 48px rgba(0,0,0,0.6)',
    'object-fit:contain',
    'cursor:default',
  ].join(';');

  var close = document.createElement('button');
  close.innerHTML = '&times;';
  close.setAttribute('aria-label', 'Close');
  close.style.cssText = [
    'position:fixed',
    'top:1rem',
    'right:1.2rem',
    'font-size:2.2rem',
    'line-height:1',
    'background:none',
    'border:none',
    'color:#fff',
    'cursor:pointer',
    'z-index:10000',
    'padding:0.2rem 0.5rem',
  ].join(';');

  var download = document.createElement('a');
  download.innerHTML = '&#8681; Download';
  download.setAttribute('aria-label', 'Download image');
  download.style.cssText = [
    'position:fixed',
    'top:1rem',
    'left:1.2rem',
    'background:rgba(255,255,255,0.92)',
    'color:#222',
    'border:none',
    'border-radius:999px',
    'padding:0.4rem 1.1rem',
    'font-size:0.88rem',
    'font-weight:700',
    'font-family:inherit',
    'cursor:pointer',
    'z-index:10000',
    'text-decoration:none',
    'box-shadow:0 2px 8px rgba(0,0,0,0.25)',
  ].join(';');

  overlay.appendChild(img);
  overlay.appendChild(close);
  overlay.appendChild(download);
  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    // Derive a clean filename from the URL
    var filename = src.split('/').pop().split('?')[0] || 'image.png';
    download.href = src;
    download.download = decodeURIComponent(filename);
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeLb() {
    overlay.style.display = 'none';
    img.src = '';
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', function (e) {
    if (e.target !== img) closeLb();
  });
  close.addEventListener('click', closeLb);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLb();
  });

  // Wire up all content images (not UI/icon images)
  function wireImages() {
    var imgs = document.querySelectorAll('.main-content img, .home-fullpage img');
    imgs.forEach(function (el) {
      if (el.dataset.lbWired) return;
      if (el.dataset.noLb !== undefined || el.closest('[data-no-lb]')) return;
      el.dataset.lbWired = '1';
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', function () {
        open(el.src, el.alt);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireImages);
  } else {
    wireImages();
  }
})();
