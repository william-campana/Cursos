"use strict";
// tipos primitivos
// numéricos (não tem diferença entre int e float)
let x = 10;
let y = 20.5478;
console.log(x);
console.log(typeof x);
console.log(y);
console.log(typeof y);
console.log(y.toPrecision(4)); // esta arredondando para 20.55
// string (aspas simples ou duplas)
const firstName = "William";
const lastName = "Campana";
let fullName;
fullName = firstName + " " + lastName;
console.log(firstName.toUpperCase());
console.log(firstName.toLocaleUpperCase());
console.log(fullName);
console.log(typeof firstName);
// boolean
let isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);
// annotation
let ann = "Teste"; // estou definindo o tipo
// inferencia
let inf = "Teste"; // já defini o valor como string, logo, será sempre string
console.log(ann);
