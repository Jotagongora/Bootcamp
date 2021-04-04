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

returnLastElement = function (x) {
   return x[x.length - 1];
}

console.log(returnLastElement(array1));
console.log(returnLastElement(array2));
console.log(returnLastElement(array3));

/* EJERCICIO 9 */

let countLegs = function (pollo, vaca, cerdo) {
    return pollo*2 + vaca*4 + cerdo*4;
}

console.log(countLegs(5, 2, 8));

/* EJERCICIO 10*/

let comparationFunction = function(a, b) {
    if (typeof a === typeof b) {
        return true;
    } else {
        return false;
    }
}

console.log(comparationFunction(false, true));

/* EJERCICIO 11 */

let string1 = "Juan Alberto es un crack en JS";

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
    array = x.split(".");
    object = {
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

console.log(strictEquality(5, "5"));
console.log(strictEquality(5, 5));

/* EJERCICIO 15 */

const lengthEquality = function(a, b) {
    if (a.length === b.length) {
        return true;
    } else {
        return false;
    }
}

console.log(lengthEquality("hola", "casa"));
console.log(lengthEquality("hola", "casas"));

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
    upVotes: 55,
    downVotes: 50
}

const getVoteCount = function(x) {
    return console.log(x.upVotes - x.downVotes);
}

getVoteCount(object2);

/* EJERCICIO 20 */ 

const getTypes = function(array) {
    let newArray = [];
    array.forEach(element => newArray.push(typeof element));
    return console.log(newArray);
}

getTypes(["I'm learning JS in a bootcamp", 7.5, {}, 0, undefined, [], "codespace"]);

/* EJERCICIO 21 */

const getParsedNumbers = function(array) {
    let newArray = [];
    array.forEach(element => newArray.push(parseFloat(element)));
return console.log(newArray);
}

getParsedNumbers(["1.5", "10", "0"]);

/* EJERCICIO 22 */

const numberSign = number => {if (number >= 0) {return "Postivo";} else {return "Negativo";}} 

console.log(numberSign(-10));

/* EJERCICIO 23 */

const arrayRemoveElement = function(array, index) {
    array.splice(index, 1);
}

let array4 = [2, 4, 5, 7];

arrayRemoveElement(array4, 2);

console.log(array4);

/* EJERCICIO 24 */

let array5 = [2, 5, 7, 9, 2, 3, 2, 6, 2];

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

const propertiesArray = function(x) {
    let newArray = Object.keys(x);
    return console.log(newArray);
}

propertiesArray(coche);

const valuesArray = function(x) {
    let newArray = Object.values(x);
    return console.log(newArray);
}

valuesArray(coche);

/* EJERCICIO 26 */

const stringReverse = function(string) {
    let newString = "";
    for (let i = string.length; i >= 0; i--) {
        newString = newString + string.charAt(i);
    }
    return newString;
}

console.log(stringReverse(".nóicamargorp ed sedrat sal ne éfac led érasuba oN"));

