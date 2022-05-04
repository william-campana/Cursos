// ******************************************
//  Decorators
// ******************************************

function myDecorator() {
    console.log("Iniciando decorator");
    
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("executando Decorator");

        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    }
}

class minhaClasse {
    @myDecorator()
    testing() {
        console.log("terminando execução do método");
    }
}

const meuObjeto = new minhaClasse();
meuObjeto.testing();


// ******************************************
//  Multiplos Decorators
// ******************************************
function a() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou A");
    }
}

function b() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou B");
    }
}

function c() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou C");
    }
}


class MultipleDecorator {
    @c()
    @a()
    @b()
    testing() {
        console.log("Terminando Execução");
    }
}


const multiple = new MultipleDecorator();
multiple.testing();



// ******************************************
//  Decorators de Classe
// ******************************************

function classDec(constructor: Function) {
    console.log(constructor);

    if (constructor.name == "Usuario") {
        console.log("Criando Usuario");
    }
}

@classDec
class Usuario {
    name

    constructor (name: string) {
        this.name = name;
    }
}

const william = new Usuario("William Campana");

console.log(william.name);



// ******************************************
//  Decorators de Método
// ******************************************

function enumerable(value: boolean) {
    return function(target:any, propertKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}

class Machine {
    name
    
    constructor (name: string) {
        this.name = name;
    }

    @enumerable(false)
    showName() {
        console.log(this);
        return `O nome da maquina é: ${this.name}`
    }
}


const maquina = new Machine("Trator");
console.log(maquina.name);



// ******************************************
//  Accesspr decorator
// ******************************************

class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }

    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}

const meuMonstro = new Monster("Monstro1", 20);
console.log(meuMonstro);


// ******************************************
//  Property decorator
// ******************************************

function formatNumber() {
    return function(target: Object, propertKey: string) {
        let value: string;

        const getter = function() {
            return value;
        }

        const setter = function(newVal : string) {
            value = newVal.padStart(5, "0");
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    };
}

class ID {
    @formatNumber()
    Id

    constructor(id: string) {
        this.Id = id;
    }
}

const novoItem = new ID("1");
console.log(novoItem);

console.log(novoItem.Id);


// ******************************************
//  Class Decorator - exemplo Real
//  criação do campo: createdAt (na function abaixo) através do decorator
// ******************************************

function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id
    createdAt?: Date;   // aqui foi add na classe somente para poder pegar através da instancia da classe

    constructor(id: number) {
        this.id = id;
    }
}

@createdDate
class Pen {
    id

    constructor(id: number) {
        this.id = id;
    }
}

const newBook = new Book(12);
const newPen = new Pen(55);

console.log(newBook.id);
console.log(newPen.id);


console.log(newBook);
console.log(newPen);

console.log(newBook.createdAt);


// ******************************************
//  Method Decorator - exemplo Real
// ******************************************

function checkIfUserPosted() {
    return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function(...args: any[]) {
            if(args[1] === true) {
                console.log("Usuario já postou.");
                return null;
            } else {
                return childFunction.apply(this, args);
            }
        }

        return descriptor;
    }
}


class Post {
    alreadyPosted = false;

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true;
        console.log(`Post do usuario: ${content}`);
    }
}

const newPost = new Post();

newPost.post("Meu primeiro Post", newPost.alreadyPosted);

newPost.post("Meu segundo Post", newPost.alreadyPosted);

newPost.post("Meu terceiro Post", newPost.alreadyPosted);


// ******************************************
//  Property Decorator - exemplo Real
// ******************************************

function max(limit: number) {
    return function(target: Object, propertyKey: string) {
        let value: string;

        const getter = function() {
            return value;
        }

        const setter = function(newValue: string) {
            if (newValue.length > limit) {
                console.log(`O valor deve ter no maximo: ${limit}`);
                return;
            } else {
                value = newValue;
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    }
}

class Admin {
    @max(10)
    userName

    constructor(userName: string) {
        this.userName = userName;
    }
}


const novo = new Admin("Pedroadmin12345");
console.log(novo)

const novoAdmin2 = new Admin("Pedroa");
console.log(novoAdmin2)