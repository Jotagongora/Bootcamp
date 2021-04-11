function Book (ID, title, author, sales, price) {
    this.ID = ID;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
}


const books = [
    new Book("#", "Title", "Author", "Sales", "Price"),
    new Book("1", "The name of the wind", "Patrick Rothfuss", 840120, 18),
    new Book("2", "The wise man's fear", "Patrick Rothfuss", 750320, 17),
    new Book("3", "Los caminantes", "Carlos sisí", 520123, 12),
    new Book("4", "Way of kings", "Brandon Sanderson", 630220, 17),
    new Book("5", "Elantris", "Brandon Sanderson", 720300, 14),
    new Book("6", "Words of radiance", "Brandon Sanderson", 720320, 15),
    new Book("7", "Homeland", "R.A. Salvatore", 850300, 13),
    new Book("8", "Exile", "R.A. Salvatore", 630450, 12),
    new Book("9", "Sojourn", "R.A. Salvatore", 630450, 14),
    new Book("10", "The host", "Stephanie Meyer", 420200, 12)
];

const booksTable = document.getElementById("booksTable");
const tableBody = document.getElementById("tableBody");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const salesInput = document.querySelector("#salesInput");
const priceInput = document.querySelector("#priceInput");
const saveButton = document.querySelector("#saveButton");

function fillTable(books) {

    tableBody.innerHTML = "";

    for (i = 0; i <= books.length - 1; i++) {
        const tr = document.createElement("tr");
        tableBody.appendChild(tr);
        for (const property in books[i]) {
            if (i === 0) {
                const th = document.createElement("th");
                tableBody.classList.add("thead-dark");
                tr.appendChild(th);
                th.textContent = books[i][property];
                } else {
                const td = document.createElement("td");
                tr.appendChild(td);
                td.textContent = books[i][property];
                }
            }
        if (i === 0) {
            const removeLabel = document.createElement("th");
            tr.appendChild(removeLabel);
            removeLabel.textContent = "Remove";
            } else {
            tr.children[0].textContent = i;
            const removeButton = document.createElement("button");
            const td = document.createElement("td");
            tr.appendChild(td);
            td.appendChild(removeButton);
            removeButton.textContent = "Delete";
            removeButton.classList.add("btn-danger");
            removeButton.setAttribute("onclick", `removeRow(${i})`);
        }
    };

}    

fillTable(books);

function removeRow(index) {
    books.splice(index, 1);
    fillTable(books);
}



saveButton.addEventListener("click", () => {
    books.push(new Book(undefined, titleInput.value, authorInput.value, salesInput.value, priceInput.value));
    titleInput.value = "";
    authorInput.value = "";
    salesInput.value = "";
    priceInput.value = "";
    fillTable(books);
});



