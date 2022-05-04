// ******************************************
//  Campos em classes
//  ! indica que não vou iniciar no momento com valor
// ******************************************
class Usuario {
    name!: string
    age!: number
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
   name
   age

   constructor (name: string, age: number) {
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
    nome
    readonly rodas = 2

    constructor (nome: string) {
        this.nome = nome;
    }
}

const moto = new Moto("RDZ");
console.log(moto);


// ******************************************
//  Herança e Super
// ******************************************
class Entidade {
    id
    nome
    sexo

    constructor (id: number, nome: string, sexo: string) {
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
    }
}

class Cliente extends Entidade {
    cpf

    constructor (id: number, nome: string, sexo: string, cpf : string) {  // definir no construtor os campos do pai + filho 
        super(id, nome, sexo);  // enviar as propriedades para classe pai
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
    id
    name
    
    constructor (id: number, name: string) {
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
    model
    hp

    constructor(model: string, hp: number) {
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
    name
    surname

    constructor (name: string, surname: string) {
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
    name
    surname

    constructor (name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    set setNome(name: string) {
        if (name === "") {
            return
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


// ******************************************
//  Herança de interfaces
// ******************************************
interface showTitle {
    itemTitle(): string
}

class BlogPost implements showTitle {
    title

    constructor (title: string) {
        this.title = title;
    }

   itemTitle() {
       return `O título do post é: ${this.title}`;
   }
}

const myPost = new BlogPost("Hello Word");
console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
    title

    constructor (title: string) {
        this.title = title;
    }

    itemTitle() {
        return(`O título é: ${this.title}`);
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
    someMethos(): void {
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
    public x = 10;
}

class DInstance extends CInstance {}

const cInstance = new CInstance();
console.log(cInstance.x);

const dInstance = new DInstance();
console.log(dInstance.x);


// protected  consigo acessar por meio de método
class EInstance {
    protected xx = 10;

    protected showNameProtected(): string {
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
    private name = "Private";

    showName() {
        return this.name;
    }

    private privado() {
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
    static prop = "Teste Static";

    static staticMethod() {
        console.log("Metodo Estatico");
    }
}


console.log(StaticMembers.prop);
StaticMembers.staticMethod();


// ******************************************
//  Generic Class
// ******************************************
class Item<T, U> {
    first
    second

    constructor (first: T, second: U) {
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

    constructor(public name: string, private qty: number, private price: number) {
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
const myClass = class<T> {
    name 

    constructor (name: T) {
        this.name = name;
    }
}

const pessoa2 = new myClass("William");
console.log(pessoa2.name);


// ******************************************
//  Abstract class
//   serve como molde de outra classe
//   todos métodos devem ser implementados na
//     classe qu herdam
//   não pode instanciar objetos
// ******************************************
abstract class AbstractClass {
    abstract showName(): void;
}

class AbstractExemple extends AbstractClass {
    name
     
    constructor (name: string) {
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
    name!: string;
}

class Cat2 {
    name!: string;
}

const doguinho: Dog2 = new Cat2();
console.log(doguinho);
