// Obtém o elemento HTML com o ID 'count-el' para exibir o contador na página
let countEl = document.getElementById('count-el');

// Inicializa a variável 'count' com o valor 0, que será usada para armazenar o valor atual do contador
let count = 0;

// Função chamada ao clicar no botão 'INCREMENT'
function increment() {
  // Incrementa o valor de 'count' em 1
  count = count + 1;
  // Atualiza o texto do elemento 'count-el' com o novo valor de 'count'
  countEl.innerText = count;
}
// Chama a função 'increment' uma vez ao carregar o script (comentada para evitar execução automática)
// increment();

let saveEl = document.getElementById('save-el');

// Função chamada ao clicar no botão 'SAVE'

function save() {
  let save = count;
  // Adiciona o valor salvo após o texto fixo
  saveEl.innerText = saveEl.innerText + ` ${save} - `;
  // Exibe o valor atual de 'count' no console do navegador
  console.log(count);
}

// Chama a função 'save' uma vez ao carregar o script (comentada para evitar execução automática)
// save();

function reset() {
  count = 0;
  countEl.innerText = count;
}

function clearSaves() {
  saveEl.innerText = `Previous Saves: `;
  // Adiciona um console.log para depuração
  console.log('Clear button clicked');
}
