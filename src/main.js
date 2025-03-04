// main.js
console.log("módulo main");

import { getMaria, getJoao, deJoaoParaMaria } from "./joaoEMaria";

console.log("Maria tem", getMaria(), "maçã(s)!");
console.log("João tem", getJoao(), "maçã(s)!");

deJoaoParaMaria();

console.log("Maria tem", getMaria(), "maçã(s)!");
console.log("João tem", getJoao(), "maçã(s)!");
