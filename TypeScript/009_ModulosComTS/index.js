"use strict";
exports.__esModule = true;
// ******************************************
//  Importação de Arquivo
// ******************************************
var greet_js_1 = require("./greet.js"); // tem que ser o js e não o ts
(0, greet_js_1["default"])(); // função que está no arquivo greet.ts
// ******************************************
//  Importação de variavel
// ******************************************
var variable_js_1 = require("./variable.js");
console.log(variable_js_1.variavel);
// ******************************************
//  Multiplas importações
// ******************************************
var multiples_js_1 = require("./multiples.js");
console.log(multiples_js_1.a);
console.log(multiples_js_1.b);
(0, multiples_js_1.myFunction)();
// ******************************************
//  Alias para importação
// ******************************************
var changeName_1 = require("./changeName");
console.log(changeName_1.someName);
// ******************************************
//  Importanto tudo  (tem que usar alias)
// ******************************************
var myNumbers = require("./numbers");
console.log(myNumbers);
var nX = myNumbers.n2;
console.log(nX);
myNumbers.showNumbers();
var Usu = /** @class */ (function () {
    function Usu(name, age) {
        this.name = name;
        this.age = age;
    }
    return Usu;
}());
var joao = new Usu("João", 10);
console.log(joao);
