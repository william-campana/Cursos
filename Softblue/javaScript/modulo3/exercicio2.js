// calcular o novo salario
// salario e porcentagem devem ser fornecidos pelo usu�rio

const prompt = require("prompt-sync")();

const salario = Number(prompt("Informe o Salario: "));
const percAumento = Number(prompt("Informe o % Aumento: "));

const novoSalario = salario * (1 + (percAumento/100));

console.log("O novo Salario eh: " + novoSalario);