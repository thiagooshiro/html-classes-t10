// ========== RELATIVE ==========
const relButtons = document.querySelectorAll('#relative .btn[data-rel]');
const relTarget = document.getElementById('rel-target');
const relCodeSpan = document.querySelector('.rel-code');
const relExplain = document.querySelector('.rel-explain');

function updateRelative(top, left) {
  relTarget.style.position = 'relative';
  relTarget.style.top = top + 'px';
  relTarget.style.left = left + 'px';
  relCodeSpan.textContent = `top: ${top}px; left: ${left}px;`;

  const msgMap = {
    '0,0':   'B está no lugar normal. O espaço dele está reservado — A e C sabem que ele está ali.',
    '20,0':  'B desceu 20px a partir de onde estaria. O espaço original permaneceu reservado.',
    '0,30':  'B foi 30px para a direita. O espaço original continua entre A e C.',
    '20,30': 'B desceu e foi para a direita. O espaço original ainda está reservado no fluxo.'
  };
  relExplain.innerHTML = msgMap[`${top},${left}`] || '';
}

relButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    relButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const [top, left] = btn.getAttribute('data-rel').split(',').map(Number);
    updateRelative(top, left);
  });
});

// ========== ABSOLUTE (correto) ==========
const absBtns = document.querySelectorAll('#absolute .btn[data-abs]');
const absCard = document.getElementById('abs-card');
const absBadge = document.getElementById('abs-badge');
const absExplain = document.querySelector('.abs-explain');
const absCodePai = document.querySelector('.abs-code-pai');

function setAbsoluteMode(mode) {
  absBtns.forEach(btn => btn.classList.remove('active'));
  const activeBtn = mode === 'static' ? absBtns[0] : absBtns[1];
  activeBtn.classList.add('active');

  if (mode === 'static') {
    absCard.classList.remove('rel');
    absCard.style.position = 'static';
    absCodePai.textContent = 'position: static;';
    absCodePai.style.color = 'var(--c3)';
    absExplain.style.borderColor = 'var(--c3)';
    absExplain.innerHTML = `O <strong>.card</strong> está com <code>position: static</code>. ` +
      `O badge olha para o pai, vê <code>static</code>, então sobe até a página (viewport) e fica no canto superior direito da tela.`;
  } else {
    absCard.classList.add('rel');
    absCard.style.position = 'relative';
    absCodePai.textContent = 'position: relative;';
    absCodePai.style.color = 'var(--c2)';
    absExplain.style.borderColor = 'var(--c2)';
    absExplain.innerHTML = `Agora o <strong>.card</strong> tem <code>position: relative</code>. ` +
      `O badge olha para o pai, vê que não é <code>static</code>, e se ancora nele. ` +
      `O <code>top: 10px; right: 10px;</code> é contado a partir do card.`;
  }
}

absBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.getAttribute('data-abs');
    setAbsoluteMode(mode);
  });
});

// Inicializa absolute no modo static
setAbsoluteMode('static');

// ========== FIXED (real) ==========
const fixedBox = document.getElementById('fixedBox');
const toggleFixedBtn = document.getElementById('toggleFixedBtn');

toggleFixedBtn.addEventListener('click', () => {
  fixedBox.classList.toggle('hidden');
});

// ========== STICKY ==========
// Já está no CSS com .sticky-enabled, sem necessidade de JS.
// Apenas garantimos que o exemplo inicial está correto.