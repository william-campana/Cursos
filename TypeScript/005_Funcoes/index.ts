// ************************************
// função VOID (não retorna nada)
// ************************************
function funcaoSemRetorno(): void {
    console.log("Função sem Retorno");
    return
}

funcaoSemRetorno()


// ************************************
// função Callback como argumento
// Callback: executada após processamento de outra
// ************************************
function greeting(name: string): string {
    return `Ola ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("Preparando função");

    const greet = f(userName);

    console.log(greet);
}

preGreeting(greeting, "William");
preGreeting(greeting, "João");


// ************************************
// Generic 
// aceita um array de qq tipo
// ************************************
function firstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["1a", "2a", "3a"]));
//console.log(firstElement("1a"));   --> da erro, pois esta aguardando uma lista


function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "William"}, {age: 30, job: "Programmer"});

console.log(newObject);


// ************************************
// Constraints nas Generics 
// ************************************
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if (+a > +b) {
        biggest = a;
    } else {
        biggest = b;
    }

    return (biggest);
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber("5.", ".3"));


// ************************************
// Especificar tipo de argumento
// ************************************
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["5", "6"]));



// ************************************
// Parâmetro opcional  (?)
// ************************************
function paramOpcional(name: string, value?: string) {
    let msg: string = name;

    if (value) {
        msg = value + " " + name
    }

    return `Ola ${msg}`
}


console.log(paramOpcional("William", "EU"));

console.log(paramOpcional("William"));



// ************************************
// Parâmetro default  (=)
// ************************************
function somaDefault(n: number, m = 10): number {
    return n + m;
}

console.log(somaDefault(5));
console.log(somaDefault(5, 6));



// ************************************
// unknown
// semelhante ao any, porem não deixa algo ser executado se não houver validação do tipo
// ************************************
function doSomething(x: unknown) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    } else if (typeof x == "number") {
        console.log(x);
    }
}

doSomething(1);
doSomething([34, 43, 22, 54]);


// ************************************
// never
// semelhante ao void 
// ************************************
function showErrorMessage(msg: string): never {
    throw new Error(msg);
}

//showErrorMessage("mensagem de erro");  // com isso ele não deixa executar nada p baixo


// ************************************
// Rest operator
// ************************************
function sumAll(...n: number[]) {
    return n.reduce((number, sum) => number + sum);
}

console.log(sumAll(1, 2, 3, 4, 5, 6));
console.log(sumAll(1, 2));


// ************************************
// Destructuring em parametro (tipando os parametros)
// notação { }
// ************************************
function showProductDetails({name, price}: {name: string, price: number}): string {
    return `O nome do produto é ${name} e custa ${price}`;
}

const shirt = {name: "camisa", price: 100};

console.log(showProductDetails(shirt));
console.log(showProductDetails({name: "meia", price: 20}));
//console.log(showProductDetails({name: "Joao", age: 20}));  --> isso da erro