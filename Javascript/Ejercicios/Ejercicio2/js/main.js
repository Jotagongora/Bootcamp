function User(name, firstLastName, secondLastName, email, age, city, productsCount) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = productsCount;
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


