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