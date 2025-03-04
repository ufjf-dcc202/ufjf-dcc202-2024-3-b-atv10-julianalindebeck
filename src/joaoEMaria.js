// joaoEMaria.js
console.log("módulo joaoEMaria");

let maria = 2;
let joao = 1;

function getMaria() {
  return maria;
}

function getJoao() {
  return joao;
}

function setMaria(novoValor) {
  maria = novoValor;
}

function setJoao(novoValor) {
  joao = novoValor;
}

export { getMaria, getJoao, setMaria, setJoao };
