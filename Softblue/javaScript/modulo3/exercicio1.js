// escreva um programa que faz a convers�o de um valor de R$ para um valor em $ e mostre o resultado.
// o valor a ser convertido � a cota��o que deve ser solicitado.

const prompt = require("prompt-sync")();

const real = Number(prompt("Valor em R$ "));
const cotacao = Number(prompt("Cotacao do Dolar: "));

const conversaoEmDolar = real / cotacao;

console.log("Valor em Dolar do: " + real + " eh: " + conversaoEmDolar);