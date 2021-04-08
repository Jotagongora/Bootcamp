function User(name, firstLastName, secondLastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
    this.incrementProducts = function () {
        this.productsCount++;
    };
    this.emptyProducts = function () {
        this.productsCount = 0;
    };

}

const users = [
    new User("Fran", "Gómez", "Fernández", "fgomez@gmail.com", 45, "Málaga"),
    new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid"),
    new User("María", "Núñez", "Coronado", "mnunez@gmail.com", 18, "Albacete")
];

/* Selectors */

const select = document.getElementById("userSelect");
const list = document.getElementById("userInfo");
const incrementButton = document.getElementById("incrementButton");
const emptyButton = document.getElementById("emptyButton");

users.forEach(user => {
    const option = document.createElement("option");
    option.textContent = user.name;
    select.appendChild(option);
});

/* Rellenar lista con datos de un usuario cualquiera*/


function fillList(user) {

    list.innerHTML = "";

    for (const property in user) {
        const value = user[property];
        
        if (typeof value !== "function") {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `<b>${property}:</b> ${value}`;
        list.appendChild(li);
         // list.innerHTML += `<li class="list-group-item"><b>${property}:</b> ${value}<li/>`
        }
    }
};

function processProducts(e) {
    const selectedUser = users.find(user => user.name == select.value);

    e.target === incrementButton
    ? selectedUser.incrementProducts()
    : selectedUser.emptyProducts();

    fillList(selectedUser);
};


/* Añadir listenners */ 

select.addEventListener("change", () => {
    const selectedUser = users.find(user => user.name === select.value);
    fillList(selectedUser);
});

fillList(users[0]);

processProducts;

incrementButton.addEventListener("click", processProducts);

emptyButton.addEventListener("click", processProducts);



