// ******************************************
//  Importação de Arquivo
// ******************************************
import importGreet from "./greet.js";   // tem que ser o js e não o ts

importGreet();  // função que está no arquivo greet.ts



// ******************************************
//  Importação de variavel
// ******************************************
import {variavel} from "./variable.js"
console.log(variavel);


// ******************************************
//  Multiplas importações
// ******************************************
import {a, b, myFunction} from "./multiples.js";

console.log(a);
console.log(b);
myFunction();



// ******************************************
//  Alias para importação
// ******************************************
import {someName as name} from "./changeName";
console.log(name);



// ******************************************
//  Importanto tudo  (tem que usar alias)
// ******************************************
import * as myNumbers from "./numbers";
console.log(myNumbers);
const nX = myNumbers.n2;
console.log(nX);
myNumbers.showNumbers();


// ******************************************
//  Importando Tipos
// ******************************************
import {Human} from "./myType.js";

class Usu implements Human {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const joao = new Usu("João", 10);
console.log(joao);
