// escreva um programa que faz a conversão de um valor de R$ para um valor em $ e mostre o resultado.
// o valor a ser convertido é a cotação que deve ser solicitado.

const prompt = require("prompt-sync")();

const real = Number(prompt("Valor em R$ "));
const cotacao = Number(prompt("Cotacao do Dolar: "));

const conversaoEmDolar = real / cotacao;

console.log("Valor em Dolar do: " + real + " eh: " + conversaoEmDolar);