const prompt = require("prompt-sync")();   // é uma biblioteca do node, tive que instalar:  npm install prompt-sync

const nome = prompt("Qual é seu Nome: ");

console.log("Ola, " + nome + " muito prazer");