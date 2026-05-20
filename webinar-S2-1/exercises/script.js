// Seleciona o botão e todas as caixas da arena
const toggleBtn = document.querySelector('button');
const boxes = document.querySelectorAll('.box');

let hidden = false;

toggleBtn.addEventListener('click', () => {
  hidden = !hidden;

  boxes.forEach(box => {
    box.classList.toggle('box--hidden', hidden);
  });

  toggleBtn.textContent = hidden ? 'Aparecer caixas' : 'Desaparecer caixas';
});