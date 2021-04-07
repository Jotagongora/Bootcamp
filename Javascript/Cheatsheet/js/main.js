function saludo () {
    alert("Hola desde saludo externo");
    console.log("Has hecho click");
}
// document.getElementsByTagName("a").item(2).addEventListener("click", saludo);




// -------------------- Depuracion / logging ----------------

// alert("Mensaje");
console.log("Mensaje");


// ------------------- Variables -----------------------

// var --> function scope
// let / const --> block scope

let i;

function saludar() {

    console.log("Inicial: ", i);

    for (i = 0; i < 3; i++) {
        console.log(i);
    }

    console.log("Final: ", i);
}

saludar();

console.clear();

// Inicialización

let day;
day = 5;

let monthName = "October";

let hour, minute, second;


let array = [15, 20, 25];

console.log(array[0], array[1], array[2]);

let [var1, var2, var3] = [15, 20, 25]; // Avanzada

console.log(var1, var2, var3);

// const --> block scope

const x = 1;
// x = 2;  // Error  

console.clear();

// ---------------------Tipos de Datos--------------
//---------------Datos primitivos-------------------
let str = String("I'm a string");
let str2 = "I'm another string"; // Recomendada
console.log(typeof str, typeof str2, typeof "");

// let str = "string" ES IGUAL A "string"

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof "5");


let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);

let selectedColor = null;// Limpiar una variable
console.log(selectedColor, typeof selectedColor);

// Objects

array = Array(1, 2, 3);
array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

// let coche = {
//     nPuertas: 5,        Spoiler crear objetos
//     color: "red",
//     turnOn() {
//         //funcionalidad
//     }
// }

console.log(typeof new Date("04-03-1987"));
console.log(typeof new Error("Mensaje de error"));

console.clear();
// --------------------- String ------------------------
str = "Hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro"));
console.log(str.lastIndexOf("u"));
console.log(str.substring(1, 3));

console.log("Hola mundo".concat(". Adiós mundo"));
console.log("Hola mundo" + ". Adiós mundo"); // Equivalente a concatenar

str = str + ". Adiós Mundo";
str += ". futuro Mundo";

console.clear();

console.log(str);
console.log(str.replace("futuro", "Mundo"));
console.log(str.replaceAll("futuro", "Mundo"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`El día de mi cumpleaños es ${day}.`); // String template
console.log("El día de mi cumpleaños es" , day, ".");

// Parsing / (Parseo en castellanizado)
let number = Number("asasas"); // NaN Not a Number. No genera error.
console.log(number, typeof number);

number = Number("1000");
console.log(number, typeof number);

number += "1000";
console.log(number, typeof number);

console.log("1" + 1, "1" - 1);
console.clear();
//------------ Objects ---------------------

let person = { // Curly brackets
    name: "Jhon",
    age: 30,
    blonde: false,
    walk: function () {
        console.log("Estoy andando")
    }, // Pre-ES6
    jump() {
        console.log("Hey estoy saltando");
    },
    presentarse() {
        console.log(`Mi nombre es ${this.name}, tengo ${this.age}, y mi pelo es ${this.blonde ? "Rubio" : "Moreno"}`);
    }
}


// Acceso por punto / Dot notation
console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);
person.name = "Jane";
console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);
// Acceso por corchetes / Brackets notation

let propertyName = "age";
console.log(person[propertyName]);

// Ampliación

person.children = ["Martha", "Peter"];
console.log(person);

person.jump();
person.walk();

//This
const person2 = {
    name: "Jhon",
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}

const person3 = {
    name: "Sarah",
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}

person2.talk()
person3.talk()

console.log(this);

//Object Constructor using functions

function Car(brand, color, weight, topSpeed) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.getDescription = function () {
        return `This ${this.color} ${this.brand} weights ${weight}` +
        `kilos and can reach up to ${this.topSpeed}kms/h`
    }
}

const car1 = new Car("Mercedes", "red", 2000, 200);
const car2 = new Car("Volvo", "white", 2500, 180);
const car3 = new Car("Volkswagen", "blue", 1500, 175);

console.log(car1, car2, car3);

console.log(car3.getDescription());

//-------------------- Arrays --------------------------

console.clear();

let selectedColors = ["red", "blue"]; // Array de strings
console.log(selectedColors,selectedColors.length, typeof selectedColors);
selectedColors[2] = "green";
console.log(selectedColors, selectedColors.length);

selectedColors.push("violet", "brown"); // Añade elementos 
console.log(selectedColors, selectedColors.length);

let removedItem = selectedColors.pop(); // Quita el último elemento
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("white", "black");
console.log(selectedColors, selectedColors.length);

selectedColors.shift();
console.log(selectedColors, selectedColors.length);

selectedColors.sort();
console.log(selectedColors, selectedColors.length);

console.log(selectedColors.indexOf("red"));

console.log(selectedColors.slice(1, 3));
console.log(selectedColors);

console.log(selectedColors.splice(1, 3));
console.log(selectedColors);

console.clear();
/*Crear un objeto niño, que tenga las propiedades nombre, altura, genero*/
// y amigos,. Amigos estará inicialmente vaciío y los añadiremos
// posteriormente 3 elementos con los nombres. Después, añadiremos
// uno extra al incio.

const boy = {
    nombre: "Jhon",
    altura: 1.35,
    genero: "masculino",
    amigos: [],
    loseFriend() {
        this.amigos.pop();
    }
}

console.log(boy);

boy.amigos.push("Pedro", "María", "Ana");

console.log(boy);

boy.amigos.unshift("Juan");

console.log(boy);

boy.loseFriend();

console.log(boy);

console.clear();
//---------------- Condicionales -----------------------
const randomNumber = 9;
const guessNumber = "5"; 
if (randomNumber === guessNumber)  {
    console.log("Has acertado el número");
} else if (randomNumber > guessNumber) {
console.log("El número secreto es mayor");
} else {
    console.log("El número secreto es menor");
} 

// Ternary operator/ Operador ternario //

let variable = 12 < 10 ? "es menor" : "el primero es mayor";
console.log(variable);

person.presentarse();


// Switch -------------

let option = 1;

switch (option) {
    case 1:
        //Bloque de código para valor 1
        console.log("Option vale", option);
        break;
    case 2:
        //Bloque de código para valor 2
        console.log("Option vale 2");
        break;
    case 3:
        //Bloque de código para valor 3
        console.log("Option vale 3");
        break;
    default:
        // De otro modo 
        console.log("otra opción");
        break; // Hay que ponerlo siempre
}

//--------------- Functions/Funciones -----------------
console.clear();

function suma(num1, num2) {
    return num1 + num2;
}

console.log(suma(2, 2));

function greet(name, lastName) {
    console.log(`Hola, ${name} ${lastName}, ¿Que tal?`);
}

greet();
greet("Marcos", "Aurelio");


function square(num1) {
    return num1 * num1; // Return rompe y para la funcion, lo que haya detras no se lee
}

console.log(square(2));

// Anónimas 
let numbersArray = [5, 51, 1, 2, 15];
console.log(numbersArray);
numbersArray.sort(); // Me lo ordena según ASCII
console.log(numbersArray);


function orderNumbers (a, b) {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;                // Es lo mismo que poner a - b
    } else {
        return 1;
    }
}


numbersArray.sort(function (a, b) {return a - b});
console.log(numbersArray);

// numbersArray.sort(orderNumbers);
// console.log(numbersArray);

// Anónima de flecha / Arrow functions

const perimeterOfSquare = (side) => 4*side;

console.log(perimeterOfSquare(5));

console.log(typeof function () {});
console.log(typeof (() => {}));

console.log(numbersArray.sort((a, b) => a - b));


// -------------------- Loops --------------------
// For
for (let i = 0; i <= 10; i++) {
    console.log(`Indice: ${i}`);
}

emptyArray = [];

for (let i = 0; i <= 10; i++) {
    emptyArray.push(i);
}

console.log(`Array rellena`, emptyArray);


// While

// while (true) { while infinito



// ForEach

numbersArray.forEach((value, index) => console.log(`Indice ${index}: ${value}`));


let otherArray = [];

numbersArray.forEach(item => otherArray.push(item));

console.log(`Array copiada`, otherArray);

// For of

for (let item of numbersArray) {
    console.log(item);
}

//Continue

for (let i = 0; i < 5; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log("using continue", i );
}

//Break

let j = 0;
let k;

mainLoop: while (true) {
    console.log("Outer loop", 1);
    j++;
    k = 1;
    while(true) {
        console.log("Inner loop", k);
        k++;
        if (k === 5 && j === 5) {
            break mainLoop;
        } else if (k===5) {
            break;
        }
    }
}


