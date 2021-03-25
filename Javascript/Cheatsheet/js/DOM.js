//-------------Dom Object Model -------------------

//Basics

console.log(document);
console.log(document.domain);
console.log(document.URL);
document.title += " (DOM)"; 
console.log(document.title);

// Selectors

const family = document.getElementsByTagName("div");
console.log(family);

Array.from(family).forEach(item => console.log(item));

for (let familyNumber of family) {
    console.log(familyNumber);
}

// By Id

const grandParent = document.getElementById("grandparent");
console.log(grandParent);

// By class

const parents = document.getElementsByClassName("parent");
const parent1 = parents[0];
const parent2 = document.getElementsByClassName("parent")[1];
console.log(parent1, parent2);

const children = document.getElementsByClassName("child");
console.log(children);

console.log(children[2]);

// Query Selector

let element = document.querySelector(".grandparent div");
console.log(element);

// document.getElementsByClassName("parent")[0].style.backgroundColor = "#fff";
// document.getElementsByClassName("parent")[1].style.backgroundColor = "#333";

document.querySelector("*").style.backgroundColor = "#ddd";

// children[0].parentNode.style.backgroundColor = "#156";

// const changeBackground = (item, color) => item.style.backgroundColor = color;

// for (let item of children) {
//     changeBackground(item, "darkcyan");
// }


// changeBackground(parent2.children[1], "blue");
// changeBackground(children[0].parentNode.parentNode, "red");


// changeBackground(parent1.children[1].previousElementSibling, "red")

// changeBackground(parent2.lastElementChild, "white")


// CUIDADO CON USAR PROPIEDADS NO EXPLICADAS




// children[0].innerHTML = "Child 1 v2";
console.log(children[0].innerHTML);
console.log(children[0].textContent);

console.clear();

console.log("Classlist: ", parent1.classList);

parent1.classList.remove("bg-dark");

console.log("Classlist: ", parent1.classList);

parent1.classList.add("bg-red");

parent1.classList.toggle("bg-red");

parent1.classList.toggle("bg-red");

//Toggle alterna la clase, si no está la incluye, y si está la elimina.


parent1.setAttribute("name", "nombre parent 1");

console.clear();
// Create / Remove elements

let myDiv = document.createElement("div");

myDiv.id = "new Div";
myDiv.classList.add("child");
myDiv.textContent = "Child 2.5";


parent1.appendChild(myDiv);

let myDiv2 = myDiv.cloneNode(true);

parent2.appendChild(myDiv2);

myDiv2.textContent = "Child 5";

myDiv.remove();

let myDiv3 = myDiv.cloneNode();
parent2.before(myDiv3);
parent2.after(myDiv.cloneNode());

// Crear una funcion que me devuelva un nodo nuevo y que reciba
// etiqueta e id


let newFunction = function (label, ID, clases) {
    let newDiv = document.createElement(label);
    newDiv.id = ID;
    newDiv.classList.add(clases);
    return newDiv;
}


let x = newFunction("div", "id#1", "child");

parent1.appendChild(x);





