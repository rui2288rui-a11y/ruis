(function () {
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  var c = document.querySelector('.cursor');
  if (!c || !window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  var x = 0, yy = 0, tx = 0, ty = 0;
  window.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; c.classList.add('on'); });
  document.addEventListener('mouseleave', function () { c.classList.remove('on'); });
  document.querySelectorAll('a,.row').forEach(function (el) {
    el.addEventListener('mouseenter', function () { c.classList.add('big'); });
    el.addEventListener('mouseleave', function () { c.classList.remove('big'); });
  });
  (function loop() {
    x += (tx - x) * 0.18; yy += (ty - yy) * 0.18;
    c.style.transform = 'translate(' + x + 'px,' + yy + 'px)';
    requestAnimationFrame(loop);
  })();
})();
