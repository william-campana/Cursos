"use strict";
let v1 = 0;
let v2 = 0;
function somar(nValue1, nValue2) {
    return (nValue1 + nValue2);
}
v1 = parseInt(prompt("Digite o primeiro valor: ", "0"));
v2 = parseInt(prompt("Digite o segundo valor: ", "0"));
v1 = isNaN(v1) ? 0 : v1;
v2 = isNaN(v2) ? 0 : v2;
console.log(`A soma de ${v1} e ${v2} é: ${somar(v1, v2)}`);
