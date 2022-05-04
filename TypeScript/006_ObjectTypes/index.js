"use strict";
function showProductDefails(product) {
    console.log(`O nome do produto é: ${product.name} e seu preço é: ${product.price}`);
    if (product.isAvailable) {
        console.log("Produto está disponível");
    }
    else {
        console.log("Produto NÃO disponível");
    }
}
const camisa = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDefails(camisa);
showProductDefails({ name: "calça", price: 150.00, isAvailable: false });
function showUserDetail(user) {
    let msg;
    msg = `O usuário tem o e-mail: ${user.email}`;
    if (user.role) {
        msg += ` com a role: ${user.role}`;
    }
    console.log(msg);
}
const user1 = {
    email: "william.campana",
};
const user2 = {
    email: "william051975",
    role: "1"
};
showUserDetail(user1);
showUserDetail(user2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(`Marca: ${fusca.brand}`);
let coords = {
    x: 10
};
let coords2 = {
    xx: 20
};
console.log(coords2.xx);
const william = {
    name: "William",
    age: 46
};
const goku = {
    name: "Goku",
    age: 10,
    superpowers: ["power1", "power2", "power2"]
};
console.log(william);
console.log(goku);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// ************************************
// Readonly array
// ************************************
let myArray = ["Maça", "Laranja", "Pera"];
//myArray[3] = "Mamão";   não deixa, da erro
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
//const myOtherArray: fiveNumbers = [1, 2, 3, 4, 5, 6, 7]   da erro, tem + elementos 
myNumberArray.forEach((i) => {
    console.log(i);
});
const xx = ["Fulano de Tal", 20];
console.log(xx[0] + "   " + xx[1]);
// ************************************
// Tuplas RealOnly
// ************************************
function showNumbers(numbers) {
    // numbers[0] = 10;  da erro, pois é readonly
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
