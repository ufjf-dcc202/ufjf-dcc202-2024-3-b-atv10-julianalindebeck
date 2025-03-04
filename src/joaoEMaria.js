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
  if (novoValor > 0) {
    maria = novoValor;
  } else {
    maria = 0;
  }
}

function setJoao(novoValor) {
  if (novoValor > 0) {
    joao = novoValor;
  } else {
    joao = 0;
  }
}

function deJoaoParaMaria() {
  maria = maria + joao;
  joao = 0;
}

function deMariaParaJoao() {
  joao = joao + maria;
  maria = 0;
}

export {
  getMaria,
  getJoao,
  setMaria,
  setJoao,
  deJoaoParaMaria,
  deMariaParaJoao,
};
