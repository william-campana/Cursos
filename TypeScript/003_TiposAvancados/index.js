"use strict";
// ******************************
// array
// ******************************
let listaNomes = ["William", "Pedro", "Carlos", "Adriano"];
let notasNomes = [98, 99, 75, 81];
console.log(typeof listaNomes);
console.log(listaNomes[2] + " " + notasNomes[2].toString());
console.log(listaNomes.length);
listaNomes.push("João");
notasNomes.push(50);
console.log(listaNomes[listaNomes.length - 1] + " " + notasNomes[notasNomes.length - 1].toString());
// outra forma de criar array. A mais utilizada é a de cima
let numbers = [100, 90, 80, 70];
console.log(numbers);
numbers.push(60);
console.log(numbers);
numbers.sort();
console.log(numbers);
// ******************************
// tipo any (recebe qualquer tipo de dados. Não é bom usar)
// ******************************
const arr1 = [1, "TESTE", true, [], { nome: "William" }];
console.log(arr1);
console.log(typeof arr1);
// ******************************
// tipo de parâmetro de função
// ******************************
function minhaFuncao(nome) {
    console.log(nome);
}
function calcular(n1, n2) {
    return (n1 + n2);
}
minhaFuncao("William");
console.log(calcular(12, 12));
// ******************************
// função anônima
// ******************************
setTimeout(function () {
    const sallary = 1000;
    console.log(sallary);
}, 2000);
// ******************************
// Tipos de objetos
// ******************************
function passCoordinates(coord) {
    console.log("x coordinates:" + coord.x);
    console.log("y coordinates:" + coord.y);
}
const objCoord = { x: 300, y: 400 };
passCoordinates(objCoord);
passCoordinates({ x: 200, y: 100 });
const pessoaObj = { nome: "William", sobrenome: "Campana" };
// ******************************
// propriedades opcionais/validação
// ******************************
function display(nome, sobrenome) {
    let nomeCompleto = nome;
    if (sobrenome) {
        nomeCompleto += " " + sobrenome;
    }
    console.log(nomeCompleto);
}
display("William", "Campana");
display("William");
// não pode ser opcional o primeiro parametro. O primeiro sempre obrigatório, os demais pode ser
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Ola, ${firstName} ${lastName}, tudo bem?`;
    }
    else {
        return `Ola, ${firstName}, tudo bem?`;
    }
}
console.log(advancedGreeting("William", "Campana"));
console.log(advancedGreeting("William"));
// ******************************
// Union types
// ******************************
function showBalance(balance) {
    console.log(`O saldo da conta é: " ${balance}`);
}
showBalance(200);
showBalance("3000");
function showUserRole(role) {
    if (typeof role == "boolean") {
        return "Usuário não Aprovado";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("admin"));
function showId(id) {
    console.log(typeof id);
    console.log(id);
}
showId(10);
showId("200");
function showCorrd(obj) {
    console.log(obj.x);
    console.log(obj.y);
    console.log(obj.z);
}
const coordObj = {
    x: 100,
    y: 200,
    z: 300
};
showCorrd(coordObj);
const pessoa = { name: "William", age: 46 };
console.log(pessoa);
// ******************************
//  Liberal type  (valores como tipo)
// ******************************
let test;
test = "Testando"; // só aceita valor Testando
function showDirection(direction) {
    console.log(`A direção escolhida é: ${direction}`);
}
showDirection("center");
showDirection("left");
// ******************************
//  Non-null Assertion Operator
// ******************************
const p = document.getElementById("some-p");
console.log(p.innerHTML);
// ******************************
//  BigInt
//    para funcionar tem que utilizar, no arquivo tsconfig.json, a versão es2020
// ******************************
let big;
big = 1000n;
console.log(typeof big);
console.log(10n + big);
// ******************************
//  Symbol (cria um valor unico)
//    para funcionar tem que utilizar, no arquivo tsconfig.json, a versão es2020
// ******************************
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB); // compara valor e tipo
