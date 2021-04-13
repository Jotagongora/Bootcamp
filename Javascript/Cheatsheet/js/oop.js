console.clear();

// Antes de ES6

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old`);
    }
}


let myCar = new Car("Ford", "Mustang", 1990);
let myCar2 = new Car("Mercedes", "07", 2015);


myCar.getAge();

console.log(myCar, myCar2);

Car.getHP = function () { // No actualiza las instancias
    console.log("This car has 300 horsepower");
}

// myCar.getHP = function () { // Solo modifica la instancia myCar
//     console.log("This car has 300 horsepower");
// }

Car.prototype.getHP = function () { 
    console.log("This car has 400 horsepower");
}

myCar.getHP();
myCar2.getHP();

function SUV(brand, model, year, width, height) {
    Car.call(this, brand, model, year);
    this.width = width;
    this.height = height;
}

SUV.prototype = Object(Car.prototype);

let mySUV = new SUV("Audi", "03", 2017, 2000, 2000);

console.log(mySUV);

mySUV.getAge();
mySUV.getHP();

console.clear();
//------------------------- ES6 ----------------

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    
    getSummary() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`)
    }

    getType() {
        console.log("I'm a normal book");
    }
}

const book1 = new Book("Metharmophosis", "Fran Kafka", 1915);

console.log(book1);
book1.getType();
book1.getSummary();

// Subclasses (Herencia)

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author,year);
        this.month = month;
    }
    getType() {
        super.getType();
        console.log("and a magazine");
    }
}

// Instanciamos una revista
const mag1 = new Magazine("Super Pop", "Algún loco", 2015, "Febrary");

mag1.getSummary();
mag1.getType();

console.log(mag1);

// Otro ejemplo de polimorfismo

class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`This ${this.type} named ${this.name} goes ${this.sound}`);
    }
}

class Feline extends Animal {
    constructor(type, name) {
    super(type, name, "miau");
    }
}

class Cat extends Feline {
    constructor(name) {
        super("cat", name);
    }
}

class Dog extends Animal {
    constructor(name) {
        super("dog", name, "woof");
    }
}

const cat1 = new Cat("Conbotas");
const dylan = new Dog("Dylan");
const danko = new Dog("Danko");

cat1.makeSound();
dylan.makeSound();
danko.makeSound();

console.log(danko);

