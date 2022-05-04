// programa que recebe valor pelo teclado e multiplique por ele mesmo e imprima o resultado
// se o valor fornecido for maior que 10, ele deve se rajustado para 10 antes de multiplicar

const prompt = require("prompt-sync")();

let valor = Number(prompt("Digite o valor: "));
let resultado = 0;

if (valor > 10) {
    valor = 10;
}

resultado = Math.pow(valor, 2);

console.log("O valor eh: " + resultado);

