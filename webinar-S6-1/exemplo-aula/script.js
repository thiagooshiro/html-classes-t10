// referências aos elementos de controle e aos containers das demos
const itemCountInput = document.getElementById('itemCount');
const itemCountValue = document.getElementById('itemCountValue');
const minWidthInput = document.getElementById('minWidth');
const minWidthValue = document.getElementById('minWidthValue');
const stageFlex = document.getElementById('stageFlex');
const stageGrid = document.getElementById('stageGrid');

// gera os cards numerados dentro de um container, recriando do zero
function renderCards(container, count) {
  container.innerHTML = '';
  for (let i = 1; i <= count; i++) {
    const card = document.createElement('div');
    card.className = 'card-item';
    card.textContent = 'Card ' + i;
    container.appendChild(card);
  }
}

// aplica a largura mínima atual via CSS custom property,
// usada tanto pelo grid-template-columns quanto pelo flex-basis
function applyMinWidth(px) {
  document.documentElement.style.setProperty('--min-col', px + 'px');
}

// recalcula tudo com base no estado atual dos dois sliders
function update() {
  const count = Number(itemCountInput.value);
  const minWidth = Number(minWidthInput.value);

  itemCountValue.textContent = count;
  minWidthValue.textContent = minWidth + 'px';

  applyMinWidth(minWidth);
  renderCards(stageFlex, count);
  renderCards(stageGrid, count);
}

itemCountInput.addEventListener('input', update);
minWidthInput.addEventListener('input', update);

// estado inicial ao carregar a página
update();