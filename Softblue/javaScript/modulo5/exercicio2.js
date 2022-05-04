const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite o Numero: "));
let resultado = "";

resultado = (numero % 2 == 0 ? "Numero Par": "Numero Impar");
console.log(resultado);