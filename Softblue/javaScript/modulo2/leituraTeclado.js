const prompt = require("prompt-sync")();   // � uma biblioteca do node, tive que instalar:  npm install prompt-sync

const nome = prompt("Qual � seu Nome: ");

console.log("Ola, " + nome + " muito prazer");