"use strict";
// ******************************************
//  Decorators
// ******************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log("Iniciando decorator");
    return function (target, propertyKey, descriptor) {
        console.log("executando Decorator");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class minhaClasse {
    testing() {
        console.log("terminando execução do método");
    }
}
__decorate([
    myDecorator()
], minhaClasse.prototype, "testing", null);
const meuObjeto = new minhaClasse();
meuObjeto.testing();
// ******************************************
//  Multiplos Decorators
// ******************************************
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou A");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou B");
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou C");
    };
}
class MultipleDecorator {
    testing() {
        console.log("Terminando Execução");
    }
}
__decorate([
    c(),
    a(),
    b()
], MultipleDecorator.prototype, "testing", null);
const multiple = new MultipleDecorator();
multiple.testing();
// ******************************************
//  Decorators de Classe
// ******************************************
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name == "Usuario") {
        console.log("Criando Usuario");
    }
}
let Usuario = class Usuario {
    constructor(name) {
        this.name = name;
    }
};
Usuario = __decorate([
    classDec
], Usuario);
const william = new Usuario("William Campana");
console.log(william.name);
// ******************************************
//  Decorators de Método
// ******************************************
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da maquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const maquina = new Machine("Trator");
console.log(maquina.name);
// ******************************************
//  Accesspr decorator
// ******************************************
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
const meuMonstro = new Monster("Monstro1", 20);
console.log(meuMonstro);
// ******************************************
//  Property decorator
// ******************************************
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.Id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "Id", void 0);
const novoItem = new ID("1");
console.log(novoItem);
console.log(novoItem.Id);
// ******************************************
//  Class Decorator - exemplo Real
//  criação do campo: createdAt (na function abaixo) através do decorator
// ******************************************
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
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
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuario já postou.");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuario: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro Post", newPost.alreadyPosted);
newPost.post("Meu segundo Post", newPost.alreadyPosted);
newPost.post("Meu terceiro Post", newPost.alreadyPosted);
// ******************************************
//  Property Decorator - exemplo Real
// ******************************************
function max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue.length > limit) {
                console.log(`O valor deve ter no maximo: ${limit}`);
                return;
            }
            else {
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
class Admin {
    constructor(userName) {
        this.userName = userName;
    }
}
__decorate([
    max(10)
], Admin.prototype, "userName", void 0);
const novo = new Admin("Pedroadmin12345");
console.log(novo);
const novoAdmin2 = new Admin("Pedroa");
console.log(novoAdmin2);
