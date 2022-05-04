// comparar o tipo do dado

//************************
// type guard
//************************
function sum(a: number|string, b: number|string) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    } else if (typeof a === "number" && typeof b == "number") {
        console.log(a + b);
    } else {
        console.log("impossível prever o tipo");
    }
}

sum("4", "5");
sum(2, 3)
sum("2", 3);


//************************
// checando se valor existe
//************************

function operations(arr: number[], operation?: string|undefined) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        } else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    } else {
        console.log("Definir uma operação");
    }
}

operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");


//************************
// instanceof  (se pertence a uma classe)
//************************

class User {
    name

    constructor(name: string) {
        this.name = name;
    }
}

class SuperUser extends User {

    constructor(name: string) {
        super(name);
    }
}

const jhon = new User("Jhon");
const paul = new SuperUser("Paul");

console.log(jhon);
console.log(paul);

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        console.log(`Ola ${user.name} deseja ver os dados do sistema?`);
    } else if (user instanceof User) {
        console.log(`Ola ${user.name}`);
    }
}

userGreeting(jhon);
userGreeting(paul);


//************************
// operador in
//************************

class Dog {
    name
    breed

    constructor (name: string, breed?: string) {
        this.name = name;

        if (breed) {
           this.breed = breed;
        }
    }
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");

function showDogDetail(dog: Dog) {
    if ("breed" in dog) {
        console.log(`O cachorro é da raça: ${dog.breed}`);
    } else {
        console.log("O cachorro é um SRD");
    }
}

showDogDetail(turca);
showDogDetail(bob);