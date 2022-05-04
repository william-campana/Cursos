// ************************************
// Tipo de Objeto para função com interface
// ************************************
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDefails(product: Product) {
    console.log(`O nome do produto é: ${product.name} e seu preço é: ${product.price}`)

    if (product.isAvailable) {
        console.log("Produto está disponível");
    } else {
        console.log("Produto NÃO disponível");
    }
}

const camisa: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDefails(camisa);
showProductDefails({name: "calça", price: 150.00, isAvailable: false});


// ************************************
// Interface com propriedade opcional
// ************************************
interface Usuario {
    email: string
    role?: string
}

function showUserDetail(user: Usuario) {
    let msg: string;

    msg = `O usuário tem o e-mail: ${user.email}`;

    if (user.role) {
        msg += ` com a role: ${user.role}`;
    }

    console.log(msg);
}

const user1: Usuario = {
    email: "william.campana",
}

const user2: Usuario = {
    email: "william051975",
    role: "1"
}

showUserDetail(user1);
showUserDetail(user2);


// ************************************
// Propriedade readonly
// somente alterado na criação do dado
// forma de criar uma constant
// ************************************
interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(`Marca: ${fusca.brand}`);
///fusca.wheels = 5;   --> da erro


// ************************************
// Index Signature
// quando não sabemos o nome das chaves 
// mas sabemos os tipos
// ************************************
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

let coords2: CoordObject = {
    xx: 20
}

console.log(coords2.xx);

// ************************************
// Extending Types  (herança)
// ************************************
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const william: Human = {
    name: "William",
    age: 46
}

const goku: SuperHuman = {
    name: "Goku",
    age: 10,
    superpowers: ["power1", "power2", "power2"]
}

console.log(william);
console.log(goku);


// ************************************
// Intersection types (&)
// unir duas intefaces
// ************************************
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold);
console.log(arnold.caliber);


// ************************************
// Readonly array
// ************************************
let myArray: ReadonlyArray<String> = ["Maça", "Laranja", "Pera"];

//myArray[3] = "Mamão";   não deixa, da erro

console.log(myArray);

myArray.forEach((item) => {
    console.log("Fruta: " + item);
});

myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
})

console.log(myArray);


// ************************************
// Tuplas
// é um tipo de array, definimos quantidade e tipo de elementos
// ************************************
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
//const myOtherArray: fiveNumbers = [1, 2, 3, 4, 5, 6, 7]   da erro, tem + elementos 

myNumberArray.forEach((i) => {
    console.log(i);
})

type nameAndAge = [string, number];
const xx: nameAndAge = ["Fulano de Tal", 20];

console.log(xx[0] + "   " + xx[1]);


// ************************************
// Tuplas RealOnly
// ************************************
function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10;  da erro, pois é readonly

    console.log(numbers[0]);
    console.log(numbers[1]);
}

showNumbers([1, 2]);