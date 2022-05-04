"use strict";
// ******************************************
// Revisão de Generics
// o que eu passar vai aceitar, pois o argumento é generico
// melhor que usar any
// ******************************************
function showData(arg) {
    return `o Dados é: ${arg}`;
}
console.log(showData(5));
console.log(showData("William"));
console.log(showData(["William", "Campana"]));
// ******************************************
// Constraint em Generics
// ******************************************
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" }; // se tem a propriedade name está valendo, tem que ter a name, pois o extends indica que tem que ter essa propriedade
console.log(showProductName(myObj));
const otherObj = { name: "Carro", engine: 1.0 };
console.log(showProductName(otherObj));
const meuCarro = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const minhaCaneta = { name: "Fusca", wheels: false, engine: false, color: "Azul" };
console.log(meuCarro);
console.log(minhaCaneta);
// ******************************************
// Type Parameters
// ******************************************
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de : ${obj[key]}`;
}
const server = { hd: "2TB", ram: "32GB" };
console.log(getSomeKey(server, "ram"));
console.log(getSomeKey(server, "hd"));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "William",
    age: 46,
    hasDriveLicence: true
};
console.log(showCharName(myChar, "name"));
// ******************************************
// TypeOf type Operator
// ******************************************
const userName = "William";
const userName2 = "João";
const userName3 = "Pedro";
function showKM(km) {
    console.log(`O veiculo tem: ${km} KM`);
}
const newTruck = { KM: 1000, kg: 2000, description: "truck teste" };
showKM(newTruck.KM);
const newCar = { km: 5000, kg: 500 };
showKM(newCar.km);
const someVar = 5;
const testing = "some Text";
//const testA3: a3 = "XX";    da erro - tem que ser valor de a1 ou a2
const testeA3 = "Union";
