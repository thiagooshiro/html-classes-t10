// =============================================
// Utilitário: renderiza botões e gerencia estado ativo
// =============================================
function createButtons(containerId, items, onClick) {
    const container = document.getElementById(containerId);
    items.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = item.label;
        btn.addEventListener('click', () => {
            container.querySelectorAll('.btn').forEach(b => b.classList.remove('btn--active'));
            btn.classList.add('btn--active');
            onClick(item);
        });
        container.appendChild(btn);
    });
}

function showConcept(id, html) {
    const el = document.getElementById(id);
    el.innerHTML = html;
    el.classList.add('concept--visible');
}

// =============================================
// SEÇÃO 1 — flex-direction
// =============================================
const directionItems = [
    {
        label: 'row',
        value: 'row',
        concept: '<code>flex-direction: row</code> — padrão. Os filhos se organizam em fila horizontal, da esquerda pra direita.'
    },
    {
        label: 'row-reverse',
        value: 'row-reverse',
        concept: '<code>flex-direction: row-reverse</code> — fila horizontal invertida. O HTML não muda, só a direção visual.'
    },
    {
        label: 'column',
        value: 'column',
        concept: '<code>flex-direction: column</code> — os filhos empilham verticalmente. O eixo principal vira vertical.'
    },
    {
        label: 'column-reverse',
        value: 'column-reverse',
        concept: '<code>flex-direction: column-reverse</code> — empilhados de baixo pra cima. Útil em alguns layouts de chat.'
    },
];

createButtons('controls-direction', directionItems, (item) => {
    document.getElementById('arena-direction').style.flexDirection = item.value;
    showConcept('concept-direction', item.concept);
});

// =============================================
// SEÇÃO 2 — justify-content
// =============================================
const justifyItems = [
    { label: 'flex-start',    value: 'flex-start',    concept: '<code>justify-content: flex-start</code> — tudo acumulado no início do eixo principal. Comportamento padrão.' },
    { label: 'flex-end',      value: 'flex-end',      concept: '<code>justify-content: flex-end</code> — tudo acumulado no final. Os itens não mudam de ordem.' },
    { label: 'center',        value: 'center',        concept: '<code>justify-content: center</code> — centralizado no eixo principal. Clássico pra centralizar horizontalmente.' },
    { label: 'space-between', value: 'space-between', concept: '<code>justify-content: space-between</code> — espaço igual <em>entre</em> os itens. Primeiro e último encostam nas bordas.' },
    { label: 'space-around',  value: 'space-around',  concept: '<code>justify-content: space-around</code> — espaço ao redor de cada item. As bordas têm metade do espaço do meio.' },
    { label: 'space-evenly',  value: 'space-evenly',  concept: '<code>justify-content: space-evenly</code> — espaço idêntico em todos os gaps, incluindo bordas.' },
];

const arenaJustify = document.getElementById('arena-justify');
arenaJustify.style.alignItems = 'center';

createButtons('controls-justify', justifyItems, (item) => {
    arenaJustify.style.justifyContent = item.value;
    showConcept('concept-justify', item.concept);
});

// =============================================
// SEÇÃO 3 — order
// =============================================
const orderItems = [
    {
        label: 'ordem normal',
        action: () => {
            document.getElementById('order-box-1').style.order = '0';
            document.getElementById('order-box-2').style.order = '0';
            document.getElementById('order-box-3').style.order = '0';
        },
        concept: 'Sem <code>order</code>, os itens aparecem na ordem do HTML. O padrão de todos é <code>order: 0</code>.'
    },
    {
        label: 'jogar 1 pro final',
        action: () => {
            document.getElementById('order-box-1').style.order = '99';
            document.getElementById('order-box-2').style.order = '0';
            document.getElementById('order-box-3').style.order = '0';
        },
        concept: '<code>order: 99</code> na caixa 1 — ela vai pro final visualmente. O HTML continua igual. Abre o DevTools e confere.'
    },
    {
        label: 'inverter tudo',
        action: () => {
            document.getElementById('order-box-1').style.order = '3';
            document.getElementById('order-box-2').style.order = '2';
            document.getElementById('order-box-3').style.order = '1';
        },
        concept: 'Você pode reorganizar visualmente qualquer layout só com <code>order</code>, sem tocar no HTML. Muito útil pra responsividade.'
    },
];

document.getElementById('arena-order').style.alignItems = 'center';

createButtons('controls-order', orderItems, (item) => {
    item.action();
    showConcept('concept-order', item.concept);
});

// =============================================
// SEÇÃO 4 — modifiers BEM
// =============================================
const modifierItems = [
    {
        label: '🔘 toggle esconder caixa 2',
        action: () => {
            document.getElementById('mod-box-2').classList.toggle('box--hidden');
        },
        concept: '🔘 <strong>Toggle</strong> = cada clique liga/desliga. <code>classList.toggle(\'box--hidden\')</code> — a caixa não some do HTML, só fica invisível via CSS.'
    },
    {
        label: '🔘 toggle esconder caixa 3',
        action: () => {
            document.getElementById('mod-box-3').classList.toggle('box--hidden');
        },
        concept: '🔘 Modifier pode ser aplicado em <strong>qualquer elemento</strong>. Aqui o mesmo <code>box--hidden</code> funciona na caixa 3 também.'
    },
    {
        label: '🔘 toggle destacar caixa 1',
        action: () => {
            document.getElementById('mod-box-1').classList.toggle('box--highlighted');
        },
        concept: '🔘 O modifier <code>--highlighted</code> aplica cor, sombra e escala de uma vez. Uma classe, vários efeitos. Clique de novo pra desfazer.'
    },
    {
        label: '🔄 resetar tudo',
        action: () => {
            ['mod-box-1', 'mod-box-2', 'mod-box-3'].forEach(id => {
                const el = document.getElementById(id);
                el.classList.remove('box--hidden', 'box--highlighted', 'box--order-last');
            });
        },
        concept: 'Remover uma classe é tão simples quanto adicioná-la. <code>classList.remove()</code> desfaz tudo — sem recarregar a página.'
    },
];

createButtons('controls-modifier', modifierItems, (item) => {
    item.action();
    showConcept('concept-modifier', item.concept);
});

// =============================================
// SEÇÃO 5A — flex-grow (espaço SOBRANDO)
// =============================================
const growRange = document.getElementById('grow-range');
const growVal = document.getElementById('grow-val');
const growBox = document.getElementById('grow-box');
const growLabel = document.getElementById('grow-label');

growBox.style.flexGrow = '0';
growBox.style.flexShrink = '1';

function updateGrowLabel() {
    const val = growBox.style.flexGrow;
    growLabel.textContent = `grow: ${val}`;
}

growRange.addEventListener('input', () => {
    const v = parseFloat(growRange.value);
    growVal.textContent = v;
    growBox.style.flexGrow = v;
    updateGrowLabel();
});

// =============================================
// SEÇÃO 5B — flex-shrink (espaço FALTANDO)
// =============================================
const shrinkRange = document.getElementById('shrink-range');
const shrinkVal = document.getElementById('shrink-val');
const shrinkBox = document.getElementById('shrink-box');
const shrinkLabel = document.getElementById('shrink-label');

shrinkBox.style.flexGrow = '0';
shrinkBox.style.flexShrink = '1';

function updateShrinkLabel() {
    const val = shrinkBox.style.flexShrink;
    shrinkLabel.textContent = `shrink: ${val}`;
}

shrinkRange.addEventListener('input', () => {
    const v = parseFloat(shrinkRange.value);
    shrinkVal.textContent = v;
    shrinkBox.style.flexShrink = v;
    updateShrinkLabel();
});

// Inicialização das labels
updateGrowLabel();
updateShrinkLabel();