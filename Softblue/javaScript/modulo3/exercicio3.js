// calcular IMC

const prompt = require("prompt-sync")();

const altura = Number(prompt("Digite a altura: "));
const peso = Number(prompt("Digite o peso: "));

const imc = peso / (Math.pow(altura, 2));

if (imc > 40) {
    classificacao = "Obesidade Grave";
} else if (imc > 30) {
    classificacao = "Obesidade";    
} else if (imc > 25) {
    classificacao = "Sobrepeso";    
} else if (imc > 18) {
    classificacao = "Normal";    
} else {
    classificacao = "Abaixo do peso";    
}

console.log("Seu IMC eh: " + imc + " e voce esta na classificacao: " + classificacao);