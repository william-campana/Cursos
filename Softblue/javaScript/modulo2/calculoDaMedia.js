const prompt = require("prompt-sync")();

const numero1 = Number(prompt("Digite o Primeiro Valor: "));
const numero2 = Number(prompt("Digite o Segundo Valor: "));
const numero3 = Number(prompt("Digite o Terceiro Valor: "));

const soma = numero1 + numero2 + numero3;
const media = soma / 3;

console.log("A media eh: " + media);