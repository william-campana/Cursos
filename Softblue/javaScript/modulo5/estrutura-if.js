const temp = 5;

if (temp > 2) {
    console.log("Eh maior");
}

console.log("Fim");

console.log("-".repeat(100));

// sempre que um numero � maior que zero, na convers�o para boolean ele da true
// sempre que uma string for vazia, null, undefinied, NaN ent�o � false, caso tenha valor ent�o � true
let x = 10;
if (x) {
    console.log("Bloco Executado");
}

console.log("Fim 2");


console.log("-".repeat(100));

const age = 15;
let canDrink;

if (age >= 18) {
    canDrink = true;
} else {
    canDrink = false;
}

console.log("Posso beber? " + canDrink);

