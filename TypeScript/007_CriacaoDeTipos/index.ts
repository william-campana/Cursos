// ******************************************
// Revisão de Generics
// o que eu passar vai aceitar, pois o argumento é generico
// melhor que usar any
// ******************************************
function showData<T>(arg : T): string {
    return `o Dados é: ${arg}`;
}

console.log(showData(5));
console.log(showData("William"));
console.log(showData(["William", "Campana"]));


// ******************************************
// Constraint em Generics
// ******************************************
function showProductName<T extends  {name: string}>(obj: T) {   // a constraint aqui é a name
    return `O nome do produto é: ${obj.name}`;
}

const myObj = {name: "Porta", cor: "Branca"};   // se tem a propriedade name está valendo, tem que ter a name, pois o extends indica que tem que ter essa propriedade
console.log(showProductName(myObj));   

const otherObj = {name: "Carro", engine: 1.0};
console.log(showProductName(otherObj));

// ******************************************
// Interfaces com Generics
// ******************************************
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Carro = MyObject<number, number, string>
type Caneta = MyObject<boolean, boolean, string>

const meuCarro: Carro = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"};
const minhaCaneta: Caneta = {name: "Fusca", wheels: false, engine: false, color: "Azul"};

console.log(meuCarro);
console.log(minhaCaneta);


// ******************************************
// Type Parameters
// ******************************************
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key} está presente no objeto e tem o valor de : ${obj[key]}`;
}

const server = { hd: "2TB", ram: "32GB"};

console.log(getSomeKey(server, "ram"));
console.log(getSomeKey(server, "hd"));


// ******************************************
// Keyof type operator
// ******************************************
type CharacterX = {name: string, age: number, hasDriveLicence: boolean};

type C = keyof CharacterX;

function showCharName(obj: CharacterX, name: C) : string {
    return `${obj[name]}`;
}

const myChar: CharacterX = {
    name: "William",
    age: 46,
    hasDriveLicence: true
}

console.log(showCharName(myChar, "name"));


// ******************************************
// TypeOf type Operator
// ******************************************
const userName: string = "William";
const userName2: typeof userName = "João";

type x = typeof userName;
const userName3: x = "Pedro";


// ******************************************
// Indexed Access types
// ******************************************
type Truck = {KM: number, kg: number, description: string}
type Km = Truck["KM"];   // o tipo é do campo KM de Truck


function showKM(km: Km) {
    console.log(`O veiculo tem: ${km} KM`)
}


const newTruck: Truck = {KM: 1000, kg: 2000, description: "truck teste"};
showKM(newTruck.KM);

const newCar = {km: 5000, kg: 500}
showKM(newCar.km);

// ******************************************
// Conditional types
// if ternário
// ******************************************
interface A {}
interface B extends A {}

interface Teste {
    showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 5;

type myTypeB = Teste extends {showNumber(): number} ? string : boolean;


// ******************************************
// Template literals type
// ******************************************
type testeA = "Text";

type CustonType = `some ${testeA}`;

const testing: CustonType = "some Text";

type a1 = "Testando";
type a2 = "Union";
type a3 = `${a1}` | `${a2}`;

//const testA3: a3 = "XX";    da erro - tem que ser valor de a1 ou a2
const testeA3: a3 = "Union";