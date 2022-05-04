// ******************************************
//  Campos em classes
//  ! indica que não vou iniciar no momento com valor
// ******************************************
class Usuario {
}
const usuario = new Usuario();
usuario.name = "William";
usuario.age = 46;
console.log(usuario);
// ******************************************
//  Constructor
//  possibilidade de inicializar um obj com valor
// ******************************************
class NovoUsuario {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const novoUsuario = new NovoUsuario("William", 46);
console.log(novoUsuario);
// ******************************************
//  Campos readonly
// ******************************************
class Moto {
    constructor(nome) {
        this.rodas = 2;
        this.nome = nome;
    }
}
const moto = new Moto("RDZ");
console.log(moto);
// ******************************************
//  Herança e Super
// ******************************************
class Entidade {
    constructor(id, nome, sexo) {
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
    }
}
class Cliente extends Entidade {
    constructor(id, nome, sexo, cpf) {
        super(id, nome, sexo); // enviar as propriedades para classe pai
        this.cpf = cpf;
    }
}
const cliente = new Cliente(1, "william", "M", "86923633915");
console.log(cliente);
console.log(cliente.nome);
console.log(cliente.cpf);
// ******************************************
//  Métodos
// ******************************************
class Fornecedor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    exibirNome() {
        console.log(this.name);
    }
}
const fornecedor = new Fornecedor(1, "Copel");
fornecedor.exibirNome();
// ******************************************
//  This
// ******************************************
class Caminhao {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetail() {
        console.log(`O caminhão do modelo ${this.model} e tem ${this.hp} cavalos de potência.`);
    }
}
const caminhao = new Caminhao("Volvo", 400);
caminhao.showDetail();
// ******************************************
//  Getters (ler)
// compilar: tsc index.ts --target ES2016
// ******************************************
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const person = new Person("William", "Campana");
console.log(person.name);
console.log(person.fullName);
// ******************************************
//  Setters (modificar)
//  compilar: tsc index.ts --target ES2016
// ******************************************
class Person2 {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    set setNome(name) {
        if (name === "") {
            return;
        }
        this.name = name;
    }
    get getNome() {
        return this.name;
    }
}
const person2 = new Person2("William", "Campana");
console.log(person2.getNome);
person2.setNome = "Carlos";
console.log(person2.getNome);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new BlogPost("Hello Word");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return (`O título é: ${this.title}`);
    }
}
const teste = new TestingInterface("Novo Titulo");
console.log(teste.itemTitle());
// ******************************************
//  override de métodos (substituir um método)
// ******************************************
class Base {
    someMethos() {
        console.log("Alguma coisa");
    }
}
class Novo extends Base {
    someMethos() {
        console.log("Testando outra coisa");
    }
}
const myObject = new Novo();
myObject.someMethos();
// ******************************************
//  Visibilidade
//   public   : default, acessa de qq lugar
//   private  : apenas na classe q declarou
//   protected: apenas na subclasse da classe 
// ******************************************
// public  consigo acessar de qualquer lugar
class CInstance {
    constructor() {
        this.x = 10;
    }
}
class DInstance extends CInstance {
}
const cInstance = new CInstance();
console.log(cInstance.x);
const dInstance = new DInstance();
console.log(dInstance.x);
// protected  consigo acessar por meio de método
class EInstance {
    constructor() {
        this.xx = 10;
    }
    showNameProtected() {
        return "William";
    }
}
class FInstance extends EInstance {
    showX() {
        console.log(`Valor de X: ${this.xx}`);
    }
    showName() {
        return this.showNameProtected();
    }
}
const fInstance = new FInstance();
fInstance.showX();
console.log(fInstance.showName());
// private - acessado somente na classe que definiu
class XInstance {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privado() {
        return "Metodo Privado";
    }
    showPrivado() {
        return this.privado();
    }
}
class ZInstance extends XInstance {
}
const zInstance = new ZInstance();
console.log(zInstance.showName());
console.log(zInstance.showPrivado());
// ******************************************
//  Static members
//   acesso sem criar objeto
// ******************************************
class StaticMembers {
    static staticMethod() {
        console.log("Metodo Estatico");
    }
}
StaticMembers.prop = "Teste Static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// ******************************************
//  Generic Class
// ******************************************
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O First é: ${this.first}`;
    }
}
const newItem = new Item("Caixa", "Surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const newItem2 = new Item(1, 2);
console.log(newItem2);
console.log(newItem2.showFirst);
console.log(typeof newItem2.first);
// ******************************************
//  Parameters properties
//   recurso para definir a privacidade, nome e 
//    tipo das propriedades no constructor
// ******************************************
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return this.qty;
    }
    get showPrice() {
        return this.price;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 219.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
// ******************************************
//  Class Expressions
//    recurso para criar classe anonima
//    pode ou não usar generics
// ******************************************
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa2 = new myClass("William");
console.log(pessoa2.name);
// ******************************************
//  Abstract class
//   serve como molde de outra classe
//   todos métodos devem ser implementados na
//     classe qu herdam
//   não pode instanciar objetos
// ******************************************
class AbstractClass {
}
class AbstractExemple extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const abstractExemple = new AbstractExemple("William 2");
abstractExemple.showName();
// ******************************************
//  Relação entre classes
//   criar objeto com base em outra classe
//   devem ser iguais
// ******************************************
class Dog2 {
}
class Cat2 {
}
const doguinho = new Cat2();
console.log(doguinho);
