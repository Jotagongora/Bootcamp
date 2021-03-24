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

document.getElementsByClassName("parent")[0].style.backgroundColor = "#fff";
document.getElementsByClassName("parent")[1].style.backgroundColor = "#333";



