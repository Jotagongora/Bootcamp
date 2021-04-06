/* EJERCICIO 1 */
let array1 = ["platano", "pera", "manzana", "limon", "naranja"];

/* EJERCICIO 2 */

let array2 = [];
array2.push(2, 4, 6);
console.log(`El array2 = ${array2} tiene una longitud de ${array2.length}`);
array2.shift();
console.log(`El array2 = ${array2} tiene una longitud de ${array2.length}`);
array2.unshift(8, 10);
console.log(`El array2 = ${array2} tiene una longitud de ${array2.length}`);

/* EJERCICIO 3 */

let myArgument1 = "";

let myBooleanfunction = function (x) {
  if (typeof x === "boolean") {
    return true;
    } else {
      return false;
    }
    
}

console.log(typeof myArgument1);
console.log(myBooleanfunction(myArgument1));

/* function isBoolean(value) {
    return typeof value === "boolean";
}

/* EJERCICIO 4 */ 

let myFunction1 = function (x) {
    return x.length;
}

console.log(myFunction1("hola"));

/* EJERCICIO 5 */

const secondsFunction = x => 60*x;

console.log(secondsFunction(2));

/* EJERCICIO 6 */ 

const parFunction = function(x) {
    if (x % 2 === 0) {
        return x;
    } else {
        return x + 1;
    }
}

console.log(parFunction(3));

/* EJERCICIO 7 */

const daysOfLife = age => 365*age;

console.log(daysOfLife(2));

/* EJERCICIO 8 */

let array3 = ["verde", "rojo", "amarillo", "azul"]

returnLastElement = array => array[array.length - 1];

console.log(returnLastElement(array1));
console.log(returnLastElement(array2));
console.log(returnLastElement(array3));

/* EJERCICIO 9 */

let countLegs = (pollo, vaca, cerdo) => pollo*2 + vaca*4 + cerdo*4;

console.log(countLegs(5, 2, 8));

/* EJERCICIO 10*/

const comparationFunction = function(a, b) {
    if (typeof a === typeof b) {
        return true;
    } else {
        return false;
    }
}

 const comparationFunction2 = (a, b) => (typeof a === typeof b) ? true : false;

console.log(comparationFunction(false, true));
console.log(comparationFunction2(false, true));

/* EJERCICIO 11 */

let string1 = "Juan Alberto es un crack en JS.";

const stringSeparation = function(x) {
    return x.split(" ");
}

console.log(stringSeparation(string1));

/* EJERCICIO 12 */

let adress1 = {
    provincia: "Andalucía",
    ciudad: "Málaga",
    municipio: "Benalmádena",
    codigo_postal: 29631,
    calle: "Falsa",
    numero: 123,
    planta: "primera",
    numero_puerta: "A" 
}

let adress2 = {
    provincia: "País Vasco",
    ciudad: "Bilbao",
    municipio: "Bilbao",
    codigo_postal: 38500,
    calle: "Más Falsa",
    numero: 123,
    planta: "segunda",
    numero_puerta: "B" 
}

/* EJERCICIO 13 */

const parseDomain = function (x) {
    const array = x.split(".");
    const object = {
        Domain: array[0],
        TLD: array[1]
    }
    return object;
}

console.log(parseDomain("codespace.com"));
console.log(parseDomain("google.es"));
console.log(parseDomain("animals.org"));

/* EJERCICIO 14 */

const strictEquality = function (a, b) {
    if (a == b && typeof a == typeof b) {
        return true;
    } else {
        return false;
    }
}

const strictEquality2 = (a, b) => (a == b) && (typeof a == typeof b);

console.log(strictEquality(5, "5"));
console.log(strictEquality(5, 5));

console.log(strictEquality2(5, "5"));
console.log(strictEquality2(5, 5));

/* EJERCICIO 15 */

const lengthEquality = function(a, b) {
    if (a.length === b.length) {
        return true;
    } else {
        return false;
    }
}

const lengthEquality2 = (a, b) => (a.length === b.length);

console.log(lengthEquality("hola", "casa"));
console.log(lengthEquality("hola", "casas"));

console.log(lengthEquality2("hola", "casa"));
console.log(lengthEquality2("hola", "casas"));

/* EJERCICIO 16 */

const emptyString = function(x) {
    if (x === "") {
        return "Vacío";
    } else {
        return "Tiene contenido";
    }
}

console.log(emptyString(""));

/* EJERCICIO 17 */

let contador = 0;

while (contador <= (array1.length - 1)) {

    console.log(array1[contador]);
    contador++;
    
}



for (let i = 0; i <= array1.length - 1; i++) {
    console.log(array1[i]);
}

for (let element of array1) {
    console.log(element);
}

array1.forEach(element => console.log(element));

/* EJERCICIO 18 */

const repeatString = function(a, b) {
    return a.repeat(b) ;
}

console.log(repeatString("No haré memes del profesor. ", 3));

/* EJERCICIO 19 */ 

let object2 = {
    upVotes: 35,
    downVotes: 15
}

const getVoteCount = function(obj) {
    return obj.upVotes - obj.downVotes;
}

console.log(getVoteCount(object2));

/* EJERCICIO 20 */ 

const getTypes = function(array) {
    const newArray = [];
    array.forEach(element => newArray.push(typeof element));
    return newArray;
}

console.log(getTypes(["I'm learning JS in a bootcamp", 7.5, {}, 0, undefined, [], "codespace"]));

/* EJERCICIO 21 */

const getParsedNumbers = function(array) {
    let newArray = [];
    array.forEach(element => newArray.push(parseFloat(element)));
return newArray;
}

console.log(getParsedNumbers(["1.5", "10", "0"]));

/* EJERCICIO 22 */

const numberSign = number => number >= 0 ? "Postivo" : "Negativo"; 

console.log(numberSign(-10));

/* EJERCICIO 23 */

const arrayRemoveElement = function(array, index) {
    array.splice(index, 1);
}

let array4 = [2, 4, 5, 7];

arrayRemoveElement(array4, 2);

console.log(array4);

/* EJERCICIO 24 */

let array5 = [2, 2, 5, 7, 9, 2, 3, 2, 6, 2];

const filterNumbers = function(array, value) {
    while (array.indexOf(value) !== -1) {
        let index = array.indexOf(value);
        arrayRemoveElement(array, index);
    }
}

filterNumbers(array5, 2);

console.log(array5);

/* EJERCICIO 25 */

let coche = {
    Marca: "BMW",
    Color: "Blanco",
    nPuertas: 5,
    Matríucla: "LMP-5780"
}

const propertiesArray = function(object) {
    return Object.keys(object);
}

console.log(propertiesArray(coche));

const valuesArray = function(object) {
    return Object.values(object);
}

console.log(valuesArray(coche));

/* EJERCICIO 26 */

const stringReverse = function(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

const stringReverse2 = (string) => (string.split("").reverse().join(""));


console.log(stringReverse2(".nóicamargorp ed sedrat sal ne éfac led érasuba oN"))
console.log(stringReverse(".nóicamargorp ed sedrat sal ne éfac led érasuba oN"));


/* EJERCICIO 27 */ 


const compareStrings = (a, b) => (a.toLowerCase() === b.toLowerCase()) ? true : false;

console.log(compareStrings("Darth CODER", "darth coder"));

/* EJERCICIO 28 */ 

const capitalize = function(string) {
    const words = string.split(" ");
    for (i = 0; i <= words.length - 1; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);   
    }
    const finalString = words.join(" ");
    return finalString;
}

// const capitalize2 = function (string) {
//     const words = string.split(" ");
//     words.forEach(element => element[0].toUpperCase() + element.slice(1));
//     const finalString = words.join(" ");
//     return finalString;
// }


console.log(capitalize("comprobaré los errores de la consola antes de pedir ayuda."));
// console.log(capitalize2("comprobaré los errores de la consola antes de pedir ayuda."));

/* EJERCICIO 29 */

const booleanOpposite = boolean => !boolean;

console.log(booleanOpposite(true));