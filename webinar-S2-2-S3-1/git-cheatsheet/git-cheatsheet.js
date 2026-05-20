const tooltip = document.getElementById('tooltip');
const tipCmd  = document.getElementById('tip-cmd');
const tipText = document.getElementById('tip-text');

document.querySelectorAll('.step[data-tip]').forEach(el => {
  el.addEventListener('mouseenter', (e) => {
    tipCmd.textContent  = el.dataset.tip;
    tipText.textContent = el.dataset.desc;
    tooltip.className   = 'tooltip ' + el.dataset.color;
    position(e);
    tooltip.classList.add('visible');
  });
  el.addEventListener('mousemove', position);
  el.addEventListener('mouseleave', () => {
    tooltip.classList.remove('visible');
  });
});

function position(e) {
  const gap = 14;
  const tw  = tooltip.offsetWidth  || 270;
  const th  = tooltip.offsetHeight || 100;
  let x = e.clientX + gap;
  let y = e.clientY + gap;
  if (x + tw > window.innerWidth  - 8) x = e.clientX - tw - gap;
  if (y + th > window.innerHeight - 8) y = e.clientY - th - gap;
  tooltip.style.left = x + 'px';
  tooltip.style.top  = y + 'px';
}
