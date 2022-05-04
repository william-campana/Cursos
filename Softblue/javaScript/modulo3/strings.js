var s1 = "abcdefghij";

console.log(s1);

// caracter escape

var s2 = "abc\ndef";  // \n = quebra de linha
console.log(s2);

var s3= "abc\tdef";  // \t = tabulação
console.log(s3);


var s4= "abc\"d\"ef";  // \" insere aspas duplas dentro da string
console.log(s4);


// array/string começa com zero
const s5 = "JavaScript";
console.log(s5[2]);  // v

// slice(indice inclusivo, indice exclusivo). Retorna pedaço da string
const s6 = s5.slice(4, 10);
const s7 = s5.slice(4, 9);
console.log(s6); // script
console.log(s7);  // scrip

const s8 = s5.substring(4, 9);
console.log(s8);  // scrip

const s9 = s5.substring(4, 15);
console.log(s9);



// upperCase, lowerCase
console.log(s5.toUpperCase());
console.log(s5.toLowerCase());
console.log(s5);

// tamanho da string
console.log(s5.length);  // length é uma propriedade e não uma função

// retorna a posição de um elemento na string
console.log(s5.indexOf("S"));  // retorna 4
console.log(s5.indexOf("ip")); // retorna 7
console.log(s5.indexOf("W"));  // retorna -1
console.log(s5.lastIndexOf("a")); // retorna 3 (retorna a ultima ocorrencia localizada)
console.log(s5.indexOf("a", 3));  // retorna 3 (a partir de qual posição começa a busca)
console.log("-".repeat(10));