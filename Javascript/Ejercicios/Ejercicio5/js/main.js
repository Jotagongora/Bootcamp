function Book(id, title, author, sales, price) {
    this.id = id,
    this.title = title,
    this.author = author,
    this.sales = sales,
    this.price = price
};

const books = [
    new Book(1, "The Name of The Wind", "Patrick Rothfuss", 840120, 18),
    new Book(2, "The Wise Man's Fear", "Patrick Rothfuss", 750320, 17),
    new Book(3, "Los Caminantes", "Carlos sisí", 520123, 12),
    new Book(4, "Way of Kings", "Brandon Sanderson", 630220, 17),
    new Book(5, "Elantris", "Brandon Sanderson", 720300, 14),
    new Book(6, "Words of Radiance", "Brandon Sanderson", 720320, 15),
    new Book(7, "Homeland", "R.A. Salvatore", 850300, 13),
    new Book(8, "Exile", "R.A. Salvatore", 630450, 12),
    new Book(9, "Sojourn", "R.A. Salvatore", 630450, 14),
    new Book(10, "The Host", "Stephanie Meyer", 420200, 12)
]


const tableBody = document.querySelector("#tableBody");
const searchInput = document.querySelector("#searchInput");
const orderButton = document.querySelector("#orderButton")
const tableFooter = document.querySelector("#tableFooter");

let booksDisplayed = Array.from(books);

updateTable();

function updateTable() {

tableBody.innerHTML = "";

booksDisplayed.forEach(book => {
    tableBody.innerHTML += `
    <tr>
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.sales}</td>
        <td>${book.price}</td>
    <tr>`;
    })

    const totalPrice = booksDisplayed.reduce((priceSum, book) => priceSum + book.price, 0)
    tableFooter.textContent = `Precio total : ${totalPrice}`;

};



searchInput.addEventListener("input", () => {
    booksDisplayed = books.filter(book =>
        book.title.toLowerCase().includes(searchInput.value.toLowerCase()));
        updateTable();
})


orderButton.addEventListener("click",(e) => {
    orderFuction();
    updateTable();
}) 

function orderFuction() {
    if (orderButton.classList.contains("growing")) {
    booksDisplayed.sort((book1, book2) => book2.price - book1.price);
    orderButton.classList.remove("growing");
    } else {
        booksDisplayed.sort((book1, book2) => book1.price - book2.price);
        orderButton.classList.add("growing");
    }
};



