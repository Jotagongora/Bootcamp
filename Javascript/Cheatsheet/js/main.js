function saludo () {
    alert("Hola desde saludo externo");
    console.log("Has hecho click");
}
document.getElementsByTagName("a").item(2).addEventListener("click", saludo);




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
let str = String("I'm a string");
let str2 = "I'm another string"; 
console.log(typeof str, typeof str2, typeof "");

// let str = "string" ES IGUAL A "string"

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof "5");

