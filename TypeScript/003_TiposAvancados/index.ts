// ******************************
// array
// ******************************
let listaNomes: string[] = ["William", "Pedro", "Carlos", "Adriano"];
let notasNomes: number[] = [98, 99, 75, 81];

console.log(typeof listaNomes);
console.log(listaNomes[2] + " " + notasNomes[2].toString());
console.log(listaNomes.length);

listaNomes.push("João");
notasNomes.push(50);

console.log(listaNomes[listaNomes.length-1] + " " + notasNomes[notasNomes.length-1].toString());

// outra forma de criar array. A mais utilizada é a de cima

let numbers: Array<number> = [100, 90, 80, 70]
console.log(numbers);
numbers.push(60);
console.log(numbers);
numbers.sort()
console.log(numbers);

// ******************************
// tipo any (recebe qualquer tipo de dados. Não é bom usar)
// ******************************
const arr1: any = [1, "TESTE", true, [], {nome: "William"}]
console.log(arr1);
console.log(typeof arr1);

// ******************************
// tipo de parâmetro de função
// ******************************
function minhaFuncao(nome: string): void {
    console.log(nome);
}

function calcular(n1: number, n2: number): number {
    return (n1 + n2);
}


minhaFuncao("William");
console.log(calcular(12, 12));

// ******************************
// função anônima
// ******************************
setTimeout(function() {
    const sallary: number = 1000;

    console.log(sallary)
}, 2000)


// ******************************
// Tipos de objetos
// ******************************
function passCoordinates(coord: {x: number, y:number}) {
    console.log("x coordinates:" + coord.x);
    console.log("y coordinates:" + coord.y);
}

const objCoord = {x: 300, y: 400}

passCoordinates(objCoord);
passCoordinates({x: 200, y:100});

const pessoaObj: {nome: string, sobrenome: string} = {nome: "William", sobrenome: "Campana"};

// ******************************
// propriedades opcionais/validação
// ******************************
function display(nome: string, sobrenome?: string): void {
    let nomeCompleto = nome;

    if (sobrenome) {
        nomeCompleto += " " + sobrenome
    }

    console.log(nomeCompleto);
}

display("William", "Campana");
display("William");

// não pode ser opcional o primeiro parametro. O primeiro sempre obrigatório, os demais pode ser
function advancedGreeting(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        return `Ola, ${firstName} ${lastName}, tudo bem?`;
    } else {
        return `Ola, ${firstName}, tudo bem?`;
    }
}

console.log(advancedGreeting("William", "Campana"));
console.log(advancedGreeting("William"));

// ******************************
// Union types
// ******************************
function showBalance(balance: string | number): void {
   console.log(`O saldo da conta é: " ${balance}`);
}

showBalance(200);
showBalance("3000");


function showUserRole(role: boolean | string) {
    if (typeof role == "boolean") {
        return "Usuário não Aprovado";
    }

    return `A função do usuário é ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("admin"));

// ******************************
// type alias
// ******************************
type typeID = string | number;

function showId(id: typeID): void {
    console.log(typeof id);
    console.log(id);
}

showId(10);
showId("200");


// ******************************
// interfaces
// ******************************
interface Point {
    x: number;
    y: number;
    z: number;
}

function showCorrd(obj: Point) {
    console.log(obj.x);
    console.log(obj.y);
    console.log(obj.z);
}

const coordObj: Point = {
    x: 100,
    y: 200,
    z: 300
}    

showCorrd(coordObj);

// modificando interface

interface Person {
    name: string;
}

interface Person {
    age: number;
}

const pessoa: Person = {name: "William", age: 46};

console.log(pessoa)


// ******************************
//  Liberal type  (valores como tipo)
// ******************************
let test: "Testando";

test = "Testando";   // só aceita valor Testando


function showDirection(direction: "left" | "center" | "right") {
    console.log(`A direção escolhida é: ${direction}`);
}

showDirection("center");
showDirection("left");



// ******************************
//  Non-null Assertion Operator
// ******************************
const p = document.getElementById("some-p");

console.log(p!.innerHTML);



// ******************************
//  BigInt
//    para funcionar tem que utilizar, no arquivo tsconfig.json, a versão es2020
// ******************************
let big: bigint;
big = 1000n;

console.log(typeof big);
console.log(10n + big);


// ******************************
//  Symbol (cria um valor unico)
//    para funcionar tem que utilizar, no arquivo tsconfig.json, a versão es2020
// ******************************
let symbolA: Symbol = Symbol("a");
let symbolB: Symbol = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);  // compara valor e tipo